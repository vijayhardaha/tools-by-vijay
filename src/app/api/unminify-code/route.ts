import { NextResponse } from "next/server";
import parserBabel from "prettier/plugins/babel";
import parserJson from "prettier/plugins/estree";
import parserHtml from "prettier/plugins/html";
import parserCss from "prettier/plugins/postcss";
import prettier from "prettier/standalone";

// Define the expected input structure
type UnminifyCodeRequest = {
  code: string;
  codeType: "html" | "json" | "css" | "babel";
};

/**
 * API route handler for unminifying code.
 *
 * @param {Request} request - The incoming request object.
 * @returns {Promise<Response>} JSON response with unminified code or error.
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const { code, codeType }: UnminifyCodeRequest = await request.json();

    if (!code || !codeType) {
      return NextResponse.json({ error: "Code and codeType are required" }, { status: 400 });
    }

    let parser: string = "babel";
    let plugins: any[] = [parserBabel];

    // Determine the parser and plugins based on the code type
    switch (codeType) {
      case "html":
        parser = "html";
        plugins = [parserHtml];
        break;
      case "json":
        parser = "json";
        plugins = [parserJson, parserBabel];
        break;
      case "css":
        parser = "css";
        plugins = [parserCss];
        break;
      default:
        parser = "babel";
        plugins = [parserBabel, parserJson];
        break;
    }

    // Format the code using Prettier
    const unminifiedCode = await prettier.format(code, { parser, plugins });
    return NextResponse.json({ unminifiedCode });
  } catch (error) {
    console.error("Unminification error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to unminify code" },
      { status: 500 }
    );
  }
}
