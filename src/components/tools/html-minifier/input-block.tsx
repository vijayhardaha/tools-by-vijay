'use client';

import type { JSX, SubmitEvent } from 'react';

import type { HtmlMinifierOptions } from '@/components/tools/html-minifier';
import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the HTML Minifier input component props.
 *
 * @type {InputBlockProps}
 * @property {string} input - The HTML input string
 * @property {(value: string) => void} setInput - Callback to update the input string
 * @property {HtmlMinifierOptions} options - The current minification options
 * @property {(key: keyof HtmlMinifierOptions, value: boolean) => void} updateOption - Callback to update a specific option
 * @property {() => void} onSubmit - Callback to trigger minification
 * @property {() => void} onClear - Callback to clear the input and output
 * @property {() => void} onReset - Callback to reset all options to defaults
 * @property {boolean} isLoading - Whether a minification request is in progress
 * @property {string} error - The current error message, if any
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  options: HtmlMinifierOptions;
  updateOption: (key: keyof HtmlMinifierOptions, value: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
  isLoading: boolean;
  error: string;
}

/**
 * A React functional component for an HTML Minifier input form.
 * Allows users to input HTML, configure minification options, and trigger actions like minify, clear, or reset.
 *
 *  @param {InputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered HTML Minifier input component.
 */
export default function InputBlock({
  input = '',
  setInput,
  options,
  updateOption,
  onSubmit,
  onClear,
  onReset,
  isLoading,
  error,
}: InputBlockProps): JSX.Element {
  /**
   * Handles the form submission event.
   * Prevents the default form submission behavior and triggers the onSubmit callback.
   *
   * @param {SubmitEvent} e - The form submission event.
   */
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>HTML Input</CardTitle>
        <CardDescription>Paste your HTML code and customize minification options</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            id="html-input"
            placeholder="Paste HTML code here..."
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-base font-bold">Content Options</h3>

              <div className="flex flex-col gap-2">
                <Checkbox
                  id="remove-comments"
                  checked={options.removeComments}
                  onCheckedChange={(checked) => updateOption('removeComments', checked)}
                >
                  Remove comments
                </Checkbox>

                <Checkbox
                  id="collapse-whitespace"
                  checked={options.collapseWhitespace}
                  onCheckedChange={(checked) => updateOption('collapseWhitespace', checked)}
                >
                  Collapse whitespace
                </Checkbox>

                <Checkbox
                  id="conservative-collapse"
                  checked={options.conservativeCollapse}
                  onCheckedChange={(checked) => updateOption('conservativeCollapse', checked)}
                >
                  Conservative whitespace collapse
                </Checkbox>

                <Checkbox
                  id="minify-css"
                  checked={options.minifyCSS}
                  onCheckedChange={(checked) => updateOption('minifyCSS', checked)}
                >
                  Minify CSS
                </Checkbox>

                <Checkbox
                  id="minify-js"
                  checked={options.minifyJS}
                  onCheckedChange={(checked) => updateOption('minifyJS', checked)}
                >
                  Minify JavaScript
                </Checkbox>

                <Checkbox
                  id="minify-urls"
                  checked={options.minifyURLs}
                  onCheckedChange={(checked) => updateOption('minifyURLs', checked)}
                >
                  Minify URLs
                </Checkbox>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold">Element Options</h3>

              <div className="flex flex-col gap-2">
                <Checkbox
                  id="remove-empty-elements"
                  checked={options.removeEmptyElements}
                  onCheckedChange={(checked) => updateOption('removeEmptyElements', checked)}
                >
                  Remove empty elements
                </Checkbox>

                <Checkbox
                  id="remove-empty-attributes"
                  checked={options.removeEmptyAttributes}
                  onCheckedChange={(checked) => updateOption('removeEmptyAttributes', checked)}
                >
                  Remove empty attributes
                </Checkbox>

                <Checkbox
                  id="collapse-boolean-attributes"
                  checked={options.collapseBooleanAttributes}
                  onCheckedChange={(checked) => updateOption('collapseBooleanAttributes', checked)}
                >
                  Collapse boolean attributes
                </Checkbox>

                <Checkbox
                  id="remove-attribute-quotes"
                  checked={options.removeAttributeQuotes}
                  onCheckedChange={(checked) => updateOption('removeAttributeQuotes', checked)}
                >
                  Remove attribute quotes
                </Checkbox>

                <Checkbox
                  id="remove-redundant-attributes"
                  checked={options.removeRedundantAttributes}
                  onCheckedChange={(checked) => updateOption('removeRedundantAttributes', checked)}
                >
                  Remove redundant attributes
                </Checkbox>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold">Advanced Options</h3>

              <div className="flex flex-col gap-2">
                <Checkbox
                  id="remove-script-type-attributes"
                  checked={options.removeScriptTypeAttributes}
                  onCheckedChange={(checked) => updateOption('removeScriptTypeAttributes', checked)}
                >
                  Remove script type attributes
                </Checkbox>

                <Checkbox
                  id="remove-style-link-type-attributes"
                  checked={options.removeStyleLinkTypeAttributes}
                  onCheckedChange={(checked) => updateOption('removeStyleLinkTypeAttributes', checked)}
                >
                  Remove style/link type attributes
                </Checkbox>

                <Checkbox
                  id="sort-attributes"
                  checked={options.sortAttributes}
                  onCheckedChange={(checked) => updateOption('sortAttributes', checked)}
                >
                  Sort attributes
                </Checkbox>

                <Checkbox
                  id="sort-class-name"
                  checked={options.sortClassName}
                  onCheckedChange={(checked) => updateOption('sortClassName', checked)}
                >
                  Sort class names
                </Checkbox>

                <Checkbox
                  id="decode-entities"
                  checked={options.decodeEntities}
                  onCheckedChange={(checked) => updateOption('decodeEntities', checked)}
                >
                  Decode entities
                </Checkbox>

                <Checkbox
                  id="use-short-doctype"
                  checked={options.useShortDoctype}
                  onCheckedChange={(checked) => updateOption('useShortDoctype', checked)}
                >
                  Use short doctype
                </Checkbox>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input || isLoading}>
              {isLoading ? 'Minifying...' : 'Minify'}
            </Button>

            <Button type="button" variant="outline" onClick={onClear} disabled={isLoading}>
              Clear
            </Button>

            <Button type="reset" variant="destructive" onClick={onReset} disabled={isLoading}>
              Reset
            </Button>
          </div>

          {error && <Alert variant="danger" title="Error" text={error} />}
        </form>
      </CardContent>
    </Card>
  );
}
