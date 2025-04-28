import { minify } from "@putout/minify";
import { NextResponse } from "next/server";

// Define the expected input structure
type MinifyJsRequest = {
  js: string;
  options?: {
    mangle?: boolean;
    removeConsole?: boolean;
    removeDebugger?: boolean;
    removeComments?: boolean;
  };
};

/**
 * API route handler for JavaScript minification
 *
 * @param {Request} request - The incoming request object
 * @returns {Promise<Response>} JSON response with minified JS or error
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const { js, options = {} }: MinifyJsRequest = await request.json();

    if (!js || typeof js !== "string") {
      return NextResponse.json({ error: "Invalid JavaScript input" }, { status: 400 });
    }

    // Minify the JavaScript using Putout Minify
    const minifiedJs: string = minifyWithPutout(js, options);

    // Check for successful minification
    if (!minifiedJs) {
      throw new Error("Failed to minify JavaScript");
    }

    return NextResponse.json({ minifiedJs });
  } catch (error) {
    console.error("JavaScript minification error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to minify JavaScript" },
      { status: 500 }
    );
  }
}

/**
 * Minifies JavaScript using Putout Minify
 *
 * @param {string} js - Original JavaScript code
 * @param {Object} options - Minification options
 * @returns {string} Minified JavaScript code
 */
function minifyWithPutout(js: string, options: MinifyJsRequest["options"]): string {
  try {
    const putoutOptions = {
      mangle: options?.mangle !== false,
      removeConsole: options?.removeConsole === true,
      removeDebugger: options?.removeDebugger === true,
      removeComments: options?.removeComments !== false,
    };

    return minify(js, putoutOptions);
  } catch (error) {
    throw new Error(`Putout Minify error: ${error.message}`);
  }
}
