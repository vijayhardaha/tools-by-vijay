import { NextResponse } from "next/server";

import { minify } from "html-minifier-terser";

/**
 * API route handler for HTML minification
 *
 * @param {Request} request - The incoming request object
 * @returns {Promise<Response>} JSON response with minified HTML or error
 */
export async function POST(request) {
  try {
    const { html, options } = await request.json();

    if (!html || typeof html !== "string") {
      return NextResponse.json(
        { error: "Invalid HTML input" },
        { status: 400 }
      );
    }

    // Minify the HTML with the provided options
    const minifiedHtml = await minify(html, {
      ...options,
      caseSensitive: false,
      keepClosingSlash: false,
      processConditionalComments: true,
      quoteCharacter: '"',
    });

    return NextResponse.json({ minifiedHtml });
  } catch (error) {
    console.error("HTML minification error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to minify HTML" },
      { status: 500 }
    );
  }
}
