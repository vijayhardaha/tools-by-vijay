/// <reference path="./putout.d.ts" />

import { minify } from '@putout/minify';
import { NextResponse } from 'next/server';

import { API_LIMITS, parseJsonBody, withApiGuard, withTimeout } from '@/utils/api';

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
 * API route handler for JavaScript minification, wrapped in the shared guard
 * (rate limiting, timeout → 422, safe error responses).
 */
export const POST = withApiGuard(
  {
    scope: 'minify-js',
    syntaxHint: 'Syntax error in your JavaScript input — please fix it and try again.',
    fallbackMessage: 'Failed to minify JavaScript. Please try again later.',
    logLabel: 'JavaScript minification error',
  },
  async (request: Request): Promise<Response> => {
    const body = await parseJsonBody<MinifyJsRequest>(request);
    if (!body) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const { js, options = {} } = body;

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
  }
);

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
