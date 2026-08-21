/**
 * A handler created by {@link createExampleHandler} — accepts the raw example
 * data object and merges its fields into tool state.
 */
export type ExampleHandler = (values: Record<string, unknown>) => void;

/**
 * Setter for a single example field (a state setter or option updater). The
 * `never` parameter makes any `(value: T) => void` function assignable.
 */
export type ExampleFieldSetter = (value: never) => void | undefined;

/**
 * Build the `onExample` callback for a tool from a map of field names to
 * setters, replacing the `if ('x' in values) setX(values.x)` boilerplate that
 * was hand-written in every tool component.
 *
 * At runtime only the fields present in the example's data object are applied,
 * matching the previous per-field guards. The example data itself is typed as
 * `Record<string, unknown>` (see ToolExampleBlock), so setters receive
 * untyped values exactly as before.
 *
 * @param {Record<string, ExampleFieldSetter>} setters - Field name to setter map.
 *
 * @returns {ExampleHandler} A handler suitable for the example block's `onExample` prop.
 *
 * @example
 * const handleExample = createExampleHandler({ input: setInput, size: setSize });
 * // { input: 'hi', size: 256 } → setInput('hi'); setSize(256)
 */
export function createExampleHandler(setters: Record<string, ExampleFieldSetter>): ExampleHandler {
  return (values) => {
    for (const key of Object.keys(values)) {
      const setter = setters[key] as ((value: unknown) => void) | undefined;

      if (setter) {
        setter(values[key]);
      }
    }
  };
}
