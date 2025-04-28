import { minify } from "html-minifier-terser";
import { NextResponse } from "next/server";

/**
 * API route handler for HTML minification.
 *
 * @param {Request} request - The incoming request object.
 * @returns {Promise<Response>} JSON response with minified HTML or an error message.
 */
export async function POST(request: Request): Promise<Response> {
  try {
    // Define the expected input structure
    type MinifyHtmlRequest = {
      html: string;
      options?: Record<string, unknown>;
    };

    const { html, options }: MinifyHtmlRequest = await request.json();

    if (!html || typeof html !== "string") {
      return NextResponse.json({ error: "Invalid HTML input" }, { status: 400 });
    }

    // Minify the HTML with the provided options
    const minifiedHtml: string = await minify(html, {
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
      { error: error instanceof Error ? error.message : "Failed to minify HTML" },
      { status: 500 }
    );
  }
}
