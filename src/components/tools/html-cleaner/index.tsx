'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import type { CleanerOptions, TransformStats } from '@vijayhardaha/html-cleaner';
import { cleanHtml } from '@vijayhardaha/html-cleaner';

import { createExampleHandler } from '@/components/tool/createExampleHandler';
import { ToolExampleBlock } from '@/components/tool/ToolExampleBlock';

import { EXAMPLES } from './examples';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';
import {
  DEFAULT_CLEANER_OPTIONS,
  CUSTOM_PRESET,
  normalizeCleanerOptions,
  parseAttributeList,
  resolvePreset,
} from './presets';
import type { CleanerPreset, PresetSelection } from './presets';

/**
 * Maximum HTML input length (characters) the tool will process. The cleaner
 * runs synchronously on the main thread, so very large documents are rejected
 * up front with a clear message instead of freezing the page.
 */
const MAX_HTML_INPUT_LENGTH = 1_000_000;

/**
 * Input length (characters) above which a non-blocking performance warning is
 * shown, since main-thread cleaning may take a noticeable moment.
 */
const LARGE_HTML_WARNING_LENGTH = 500_000;

/**
 * Message shown when cleaning fails. Raw library error text can be cryptic, so
 * a single actionable message is surfaced while the real error is logged.
 */
const CLEANING_ERROR_MESSAGE = 'Could not clean this HTML. Please check the markup and try again.';

/**
 * Main component for the HTML Cleaner tool.
 *
 * Runs `@vijayhardaha/html-cleaner` entirely in the browser — no server round
 * trip and no upload — and manages the input, options, preset, and result state.
 *
 * @returns {JSX.Element} The HTML Cleaner tool interface
 */
export function HtmlCleaner(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [stats, setStats] = useState<TransformStats | null>(null);
  const [hasResult, setHasResult] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<CleanerOptions>(DEFAULT_CLEANER_OPTIONS);
  const [preset, setPreset] = useState<PresetSelection>('safe');
  const [keepAttributesText, setKeepAttributesText] = useState<string>('');
  const [removeAttributeNamesText, setRemoveAttributeNamesText] = useState<string>('');
  const [error, setError] = useState<string>('');

  /**
   * Cleans the pasted HTML on the client using the selected options.
   *
   * Guards against empty and oversized input, defers the synchronous work so
   * the loading state can paint, and converts any thrown library error into a
   * safe, actionable message.
   *
   * @async
   * @function
   */
  const handleSubmit = async (): Promise<void> => {
    if (!input.trim()) return;

    if (input.length > MAX_HTML_INPUT_LENGTH) {
      setError(`HTML input is too large. Maximum ${MAX_HTML_INPUT_LENGTH.toLocaleString()} characters.`);
      setOutput('');
      setStats(null);
      setHasResult(false);
      return;
    }

    setIsLoading(true);
    setError('');

    // Yield to the browser so the "Cleaning..." button state paints before the
    // synchronous cleaning work blocks the main thread.
    await new Promise((resolve) => setTimeout(resolve, 0));

    try {
      const cleanedOptions = normalizeCleanerOptions({
        ...options,
        keepAttributes: parseAttributeList(keepAttributesText),
        removeAttributeNames: parseAttributeList(removeAttributeNamesText),
      });

      const result = cleanHtml(input, cleanedOptions);

      setOutput(result.html);
      setStats(result.stats);
      setHasResult(true);
    } catch (cleaningError) {
      console.error('HTML cleaning error:', cleaningError);
      setError(CLEANING_ERROR_MESSAGE);
      setOutput('');
      setStats(null);
      setHasResult(false);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clears the input, output, and error state.
   *
   * @function
   */
  const handleClear = (): void => {
    setInput('');
    setOutput('');
    setStats(null);
    setHasResult(false);
    setError('');
  };

  /**
   * Clears everything and restores the default options and preset.
   *
   * @function
   */
  const handleReset = (): void => {
    handleClear();
    setOptions(DEFAULT_CLEANER_OPTIONS);
    setPreset('safe');
    setKeepAttributesText('');
    setRemoveAttributeNamesText('');
  };

  /**
   * Applies a preset, writing its resolved option values into component state.
   * Picking `custom` leaves the current options untouched.
   *
   * @param {PresetSelection} selection - The preset to apply.
   *
   * @function
   */
  const applyPreset = (selection: PresetSelection): void => {
    setError('');

    if (selection === CUSTOM_PRESET) {
      setPreset(CUSTOM_PRESET);
      return;
    }

    setOptions(resolvePreset(selection as CleanerPreset));
    setPreset(selection);
  };

  /**
   * Updates a specific option in the options state. Manual edits switch the
   * preset selector to `custom`, and the two table options are kept mutually
   * exclusive (removal wins in the underlying package).
   *
   * @template K
   *
   * @param {K} key - The option key to update
   * @param {CleanerOptions[K]} value - The new value for the option
   *
   * @function
   */
  const updateOption = <K extends keyof CleanerOptions>(key: K, value: CleanerOptions[K]): void => {
    setOptions((prevOptions) => {
      const nextOptions: CleanerOptions = { ...prevOptions, [key]: value };

      if (key === 'removeTables' && (value as boolean)) {
        nextOptions.tablesToDiv = false;
      }

      if (key === 'tablesToDiv' && (value as boolean)) {
        nextOptions.removeTables = false;
      }

      return nextOptions;
    });
    setPreset(CUSTOM_PRESET);
    setError('');
  };

  const handleExample = createExampleHandler({ input: setInput, preset: applyPreset });

  const warning =
    input.length > LARGE_HTML_WARNING_LENGTH
      ? 'This document is large and may take a moment to clean. Large inputs can briefly slow the page down.'
      : '';

  return (
    <>
      <div className="space-y-6">
        <ToolExampleBlock examples={EXAMPLES} onExample={handleExample} />

        <InputBlock
          input={input}
          setInput={setInput}
          options={options}
          updateOption={updateOption}
          preset={preset}
          onPresetChange={applyPreset}
          keepAttributesText={keepAttributesText}
          setKeepAttributesText={setKeepAttributesText}
          removeAttributeNamesText={removeAttributeNamesText}
          setRemoveAttributeNamesText={setRemoveAttributeNamesText}
          onSubmit={handleSubmit}
          onClear={handleClear}
          onReset={handleReset}
          isLoading={isLoading}
          error={error}
          warning={warning}
        />

        {hasResult && <OutputBlock output={output} input={input} stats={stats} />}
      </div>

      <InfoBlock />
    </>
  );
}
