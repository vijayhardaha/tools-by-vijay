import { NextResponse } from 'next/server';
import type { Plugin } from 'prettier';
import parserBabel from 'prettier/plugins/babel';
import parserJson from 'prettier/plugins/estree';
import parserHtml from 'prettier/plugins/html';
import parserCss from 'prettier/plugins/postcss';
import prettier from 'prettier/standalone';

import { API_LIMITS, parseJsonBody, withApiGuard } from '@/utils/api';

export const runtime = 'edge';

/**
 * Code types accepted by this route, mapped 1:1 to prettier parsers/plugins.
 */
const CODE_TYPES = ['html', 'json', 'css', 'babel'] as const;

/**
 * Interface for the unminify code request.
 *
 * @type {UnminifyCodeRequest}
 * @property {string} code - The code to unminify
 * @property {'html' | 'json' | 'css' | 'babel'} codeType - The type of code to format
 */
interface UnminifyCodeRequest {
  code: string;
  codeType: 'html' | 'json' | 'css' | 'babel';
}

/**
 * API route handler for unminifying code, wrapped in the shared guard
 * (rate limiting, timeout → 422, safe error responses).
 */
export const POST = withApiGuard(
  {
    scope: 'unminify-code',
    syntaxHint: 'Syntax error in your code — please fix it and try again.',
    fallbackMessage: 'Failed to format code. Please try again later.',
    logLabel: 'Unminification error',
  },
  async (request: Request): Promise<Response> => {
    const body = await parseJsonBody<UnminifyCodeRequest>(request);
    if (!body) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const { code, codeType } = body;

    // Reject wrong-shaped fields before anything else: a truthy non-string
    // code used to skip the size guard entirely, and an unknown codeType
    // silently fell through to the babel parser.
    if (typeof code !== 'string' || code.length === 0) {
      return NextResponse.json({ error: 'Code is required and must be a non-empty string' }, { status: 400 });
    }

    if (!CODE_TYPES.includes(codeType)) {
      return NextResponse.json({ error: 'Invalid codeType. Must be one of: html, json, css, babel' }, { status: 400 });
    }

    // Reject oversized payloads before any heavy processing
    if (code.length > API_LIMITS.TEXT_MAX_LENGTH) {
      return NextResponse.json(
        { error: `Code input too large. Maximum ${API_LIMITS.TEXT_MAX_LENGTH} characters.` },
        { status: 413 }
      );
    }

    let parser: string = 'babel';
    let plugins: Plugin[] = [parserBabel];

    // Determine the parser and plugins based on the code type
    switch (codeType) {
      case 'html':
        parser = 'html';
        plugins = [parserHtml];
        break;
      case 'json':
        parser = 'json';
        plugins = [parserJson, parserBabel];
        break;
      case 'css':
        parser = 'css';
        plugins = [parserCss];
        break;
      case 'babel':
        parser = 'babel';
        plugins = [parserBabel, parserJson];
        break;
    }

    // Format the code using Prettier
    const unminifiedCode = await prettier.format(code, { parser, plugins });
    return NextResponse.json({ unminifiedCode });
  }
);
