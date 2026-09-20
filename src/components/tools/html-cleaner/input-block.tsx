'use client';

import type { JSX, SubmitEvent } from 'react';

import type { CleanerOptions } from '@vijayhardaha/html-cleaner';

import { ToolInputHeader } from '@/components/tool/ToolInputHeader';
import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { HelpTip } from '@/components/ui/helptip';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import { PRESET_SELECT_OPTIONS, presetDescription } from './presets';
import type { PresetSelection } from './presets';

/**
 * Interface for the HTML Cleaner input component props.
 *
 * @type {InputBlockProps}
 * @property {string} input - The HTML input string
 * @property {(value: string) => void} setInput - Callback to update the input string
 * @property {CleanerOptions} options - The current cleanup options
 * @property {<K extends keyof CleanerOptions>(key: K, value: CleanerOptions[K]) => void} updateOption - Callback to update a single option
 * @property {PresetSelection} preset - The currently selected preset (or `custom`)
 * @property {(preset: PresetSelection) => void} onPresetChange - Callback when the preset selector changes
 * @property {string} keepAttributesText - Raw comma-separated "keep attributes" field
 * @property {(value: string) => void} setKeepAttributesText - Callback to update the keep-attributes field
 * @property {string} removeAttributeNamesText - Raw comma-separated "remove attributes" field
 * @property {(value: string) => void} setRemoveAttributeNamesText - Callback to update the remove-attributes field
 * @property {() => void} onSubmit - Callback to trigger cleaning
 * @property {() => void} onClear - Callback to clear the input and output
 * @property {() => void} onReset - Callback to reset all options to defaults
 * @property {boolean} isLoading - Whether a cleaning request is in progress
 * @property {string} error - The current error message, if any
 * @property {string} warning - A non-blocking warning about the current input
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  options: CleanerOptions;
  updateOption: <K extends keyof CleanerOptions>(key: K, value: CleanerOptions[K]) => void;
  preset: PresetSelection;
  onPresetChange: (preset: PresetSelection) => void;
  keepAttributesText: string;
  setKeepAttributesText: (value: string) => void;
  removeAttributeNamesText: string;
  setRemoveAttributeNamesText: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
  isLoading: boolean;
  error: string;
  warning: string;
}

/**
 * A React functional component for the HTML Cleaner input form.
 * Lets users paste HTML, pick a preset, fine-tune every cleanup option, and
 * trigger clean/clear/reset actions.
 *
 * @param {InputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered HTML Cleaner input component.
 */
export function InputBlock({
  input = '',
  setInput,
  options,
  updateOption,
  preset,
  onPresetChange,
  keepAttributesText,
  setKeepAttributesText,
  removeAttributeNamesText,
  setRemoveAttributeNamesText,
  onSubmit,
  onClear,
  onReset,
  isLoading,
  error,
  warning,
}: InputBlockProps): JSX.Element {
  /**
   * Handles the form submission event, preventing a full page reload.
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
        <ToolInputHeader
          title="HTML Input"
          desc="Paste messy HTML and choose how much cleanup to apply"
          onClear={onClear}
          onReset={onReset}
        />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <Textarea
            id="html-input"
            placeholder="Paste HTML from Google Docs, Word, a CMS, or a scraper..."
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {warning && <Alert variant="warning" title="Large input" text={warning} />}

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="cleaner-preset">Preset</Label>
              <HelpTip text="Presets are named bundles of options. Selecting one fills in the option controls below, which you can still override individually." />
            </div>
            <div className="flex flex-col gap-1.5">
              <Select
                id="cleaner-preset"
                size="sm"
                value={preset}
                onValueChange={(value) => onPresetChange(value as PresetSelection)}
                options={PRESET_SELECT_OPTIONS}
              />
              <p className="text-muted-foreground text-xs">{presetDescription(preset)}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            <div className="space-y-4">
              <h3 className="text-base font-bold">Presentation</h3>

              <div className="flex flex-col gap-2">
                <Checkbox
                  id="remove-styles"
                  checked={options.removeStyles}
                  onCheckedChange={(checked) => updateOption('removeStyles', checked)}
                >
                  Remove style attributes
                </Checkbox>

                <Checkbox
                  id="remove-classes"
                  checked={options.removeClasses}
                  onCheckedChange={(checked) => updateOption('removeClasses', checked)}
                >
                  Remove class attributes
                </Checkbox>

                <Checkbox
                  id="remove-ids"
                  checked={options.removeIds}
                  onCheckedChange={(checked) => updateOption('removeIds', checked)}
                >
                  Remove id attributes
                </Checkbox>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remove-attributes"
                    checked={options.removeAttributes}
                    onCheckedChange={(checked) => updateOption('removeAttributes', checked)}
                  >
                    Remove all attributes
                  </Checkbox>
                  <HelpTip text="Removes every attribute except the names listed in 'Keep attributes'. This already covers styles, classes, and ids." />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="keep-attributes">Keep attributes</Label>
                <Input
                  id="keep-attributes"
                  placeholder="href, src, title"
                  value={keepAttributesText}
                  disabled={!options.removeAttributes}
                  onChange={(e) => setKeepAttributesText(e.target.value)}
                />
                <p className="text-muted-foreground text-xs">
                  Comma-separated. Only applies while &ldquo;Remove all attributes&rdquo; is on.
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="remove-attribute-names">Remove specific attributes</Label>
                <Input
                  id="remove-attribute-names"
                  placeholder="data-*, onclick"
                  value={removeAttributeNamesText}
                  onChange={(e) => setRemoveAttributeNamesText(e.target.value)}
                />
                <p className="text-muted-foreground text-xs">Comma-separated. Wildcards like data-* are supported.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold">Content</h3>

              <div className="flex flex-col gap-2">
                <Checkbox
                  id="remove-comments"
                  checked={options.removeComments}
                  onCheckedChange={(checked) => updateOption('removeComments', checked)}
                >
                  Remove comments
                </Checkbox>

                <Checkbox
                  id="collapse-nbsp"
                  checked={options.collapseNbsp}
                  onCheckedChange={(checked) => updateOption('collapseNbsp', checked)}
                >
                  Collapse non-breaking spaces
                </Checkbox>

                <Checkbox
                  id="remove-empty-nbsp"
                  checked={options.removeEmptyNbsp}
                  onCheckedChange={(checked) => updateOption('removeEmptyNbsp', checked)}
                >
                  Remove NBSP-only elements
                </Checkbox>

                <Checkbox
                  id="convert-bold"
                  checked={options.convertBold}
                  onCheckedChange={(checked) => updateOption('convertBold', checked)}
                >
                  Convert &lt;b&gt; to &lt;strong&gt;
                </Checkbox>

                <Checkbox
                  id="convert-italic"
                  checked={options.convertItalic}
                  onCheckedChange={(checked) => updateOption('convertItalic', checked)}
                >
                  Convert &lt;i&gt; to &lt;em&gt;
                </Checkbox>

                <Checkbox
                  id="remove-empty"
                  checked={options.removeEmpty}
                  onCheckedChange={(checked) => updateOption('removeEmpty', checked)}
                >
                  Remove empty elements
                </Checkbox>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold">Structure</h3>

              <div className="flex flex-col gap-2">
                <Checkbox
                  id="remove-spans"
                  checked={options.removeSpans}
                  onCheckedChange={(checked) => updateOption('removeSpans', checked)}
                >
                  Unwrap &lt;span&gt; elements
                </Checkbox>

                <Checkbox
                  id="remove-links"
                  checked={options.removeLinks}
                  onCheckedChange={(checked) => updateOption('removeLinks', checked)}
                >
                  Unwrap &lt;a&gt; elements
                </Checkbox>

                <Checkbox
                  id="remove-images"
                  checked={options.removeImages}
                  onCheckedChange={(checked) => updateOption('removeImages', checked)}
                >
                  Remove &lt;img&gt; elements
                </Checkbox>

                <Checkbox
                  id="remove-tables"
                  checked={options.removeTables}
                  onCheckedChange={(checked) => updateOption('removeTables', checked)}
                >
                  Remove table structure
                </Checkbox>

                <Checkbox
                  id="tables-to-div"
                  className={options.removeTables ? 'opacity-50' : ''}
                  disabled={options.removeTables}
                  checked={options.tablesToDiv}
                  onCheckedChange={(checked) => updateOption('tablesToDiv', checked)}
                >
                  Convert tables to divs
                </Checkbox>

                <Checkbox
                  id="strip-tags"
                  checked={options.stripTags}
                  onCheckedChange={(checked) => updateOption('stripTags', checked)}
                >
                  Strip all tags
                </Checkbox>

                <Checkbox
                  id="preserve-breaks"
                  className={options.stripTags ? '' : 'opacity-50'}
                  checked={options.preserveBreaksWhenStripping}
                  onCheckedChange={(checked) => updateOption('preserveBreaksWhenStripping', checked)}
                >
                  Preserve line breaks when stripping
                </Checkbox>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold">Formatting</h3>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Checkbox
                id="format-output"
                checked={options.format}
                onCheckedChange={(checked) => updateOption('format', checked)}
              >
                Format output
              </Checkbox>

              <div className="flex items-center gap-2">
                <Label htmlFor="cleaner-indent">Indent</Label>
                <Select
                  id="cleaner-indent"
                  size="sm"
                  value={String(options.indent)}
                  onValueChange={(value) => updateOption('indent', value === 'tab' ? 'tab' : Number(value))}
                  options={[
                    { value: '2', label: '2 spaces' },
                    { value: '4', label: '4 spaces' },
                    { value: '8', label: '8 spaces' },
                    { value: 'tab', label: 'Tab' },
                  ]}
                />
              </div>

              <div className="flex items-center gap-2">
                <Label htmlFor="cleaner-newline">Line ending</Label>
                <Select
                  id="cleaner-newline"
                  size="sm"
                  value={options.newline}
                  onValueChange={(value) => updateOption('newline', value === 'crlf' ? 'crlf' : 'lf')}
                  options={[
                    { value: 'lf', label: 'LF' },
                    { value: 'crlf', label: 'CRLF' },
                  ]}
                />
              </div>

              <Checkbox
                id="final-newline"
                checked={options.finalNewline}
                onCheckedChange={(checked) => updateOption('finalNewline', checked)}
              >
                Final newline
              </Checkbox>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input || isLoading}>
              {isLoading ? 'Cleaning...' : 'Clean HTML'}
            </Button>
          </div>

          {error && <Alert variant="danger" title="Error" text={error} />}
        </form>
      </CardContent>
    </Card>
  );
}
