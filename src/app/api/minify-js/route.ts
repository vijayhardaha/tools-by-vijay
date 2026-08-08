/// <reference path="./putout.d.ts" />

import { minify } from '@putout/minify';
import { NextResponse } from 'next/server';

import { API_LIMITS, withTimeout, rateLimit } from '@/utils/api';

/**
 * Interface for the JavaScript minification request.
 *
 * @type {MinifyJsRequest}
 * @property {string} js - The JavaScript code to minify
 * @property {object} [options] - Optional minification options
 * @property {boolean} [options.mangle] - Whether to mangle variable names
 * @property {boolean} [options.removeConsole] - Whether to remove console statements
 * @property {boolean} [options.removeDebugger] - Whether to remove debugger statements
 * @property {boolean} [options.removeComments] - Whether to remove comments
 */
interface MinifyJsRequest {
  js: string;
  options?: { mangle?: boolean; removeConsole?: boolean; removeDebugger?: boolean; removeComments?: boolean };
}

/**
 * API route handler for JavaScript minification
 *
 * @param {Request} request - The incoming request object
 *
 * @returns {Promise<Response>} JSON response with minified JS or error
 *
 * @throws {Error} When minification fails or input is invalid
 */
export async function POST(request: Request): Promise<Response> {
  try {
    // Rate limit by client IP to protect against abuse
    const clientIp = request.headers.get('x-forwarded-for') || 'unknown';
    if (!rateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }

    const { js, options = {} }: MinifyJsRequest = await request.json();

    if (!js || typeof js !== 'string') {
      return NextResponse.json({ error: 'Invalid JavaScript input' }, { status: 400 });
    }

    // Reject oversized payloads before any heavy processing
    if (js.length > API_LIMITS.JS_MAX_LENGTH) {
      return NextResponse.json(
        { error: `JavaScript input too large. Maximum ${API_LIMITS.JS_MAX_LENGTH} characters.` },
        { status: 413 }
      );
    }

    // Minify the JavaScript using Putout Minify, bounded by a processing timeout
    const minifiedJs: string = await withTimeout(
      Promise.resolve().then(() => minifyWithPutout(js, options)),
      API_LIMITS.PROCESSING_TIMEOUT_MS
    );

    // Check for successful minification
    if (!minifiedJs) {
      throw new Error('Failed to minify JavaScript');
    }

    const originalSize = js.length;
    const minifiedSize = minifiedJs.length;

    return NextResponse.json({
      minifiedJs,
      originalSize,
      minifiedSize,
      reduction:
        minifiedSize >= originalSize ? '0%' : `${(((originalSize - minifiedSize) / originalSize) * 100).toFixed(2)}%`,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : '';

    if (message.toLowerCase().includes('timeout')) {
      return NextResponse.json({ error: 'Processing timeout — input too complex' }, { status: 408 });
    }

    console.error('JavaScript minification error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to minify JavaScript' },
      { status: 500 }
    );
  }
}

/**
 * Minifies JavaScript using Putout Minify
 *
 * @param {string} js - Original JavaScript code
 * @param {object} options - Minification options
 *
 * @returns {string} Minified JavaScript code
 *
 * @throws {Error} When Putout minification fails
 */
function minifyWithPutout(js: string, options: MinifyJsRequest['options']): string {
  try {
    const putoutOptions = {
      mangle: options?.mangle !== false,
      removeConsole: options?.removeConsole === true,
      removeDebugger: options?.removeDebugger === true,
      removeComments: options?.removeComments !== false,
    };

    return minify(js, putoutOptions);
  } catch (error) {
    throw new Error(`Putout Minify error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
