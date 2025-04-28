declare module "@putout/minify" {
  export interface MinifyOptions {
    mangle?: boolean;
    removeConsole?: boolean;
    removeDebugger?: boolean;
    removeComments?: boolean;
  }

  export function minify(code: string, options: MinifyOptions): string;
}
