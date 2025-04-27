import juice from "juice";
import { NextResponse } from "next/server";
import prettier from "prettier";

/**
 * API route handler for inlining CSS into HTML.
 *
 * @param {Request} request - The incoming request object.
 * @returns {Promise<Response>} JSON response with inlined and formatted HTML or an error message.
 */
export async function POST(request) {
  try {
    const { html, css } = await request.json();

    if (!html || !css) {
      return NextResponse.json({ error: "HTML and CSS inputs are required" }, { status: 400 });
    }

    // Inline CSS into HTML
    const inlinedHtml = juice.inlineContent(html, css);

    // Format the inlined HTML using Prettier
    let formattedHtml = await prettier.format(inlinedHtml, { parser: "html", singleQuote: true });

    if (!formattedHtml.trim()) {
      formattedHtml = inlinedHtml; // Fallback to the original inlined HTML if formatting fails
    }

    return NextResponse.json({ formattedHtml });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
