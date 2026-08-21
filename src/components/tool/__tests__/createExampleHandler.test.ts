import { describe, expect, it, vi } from 'vitest';

import { createExampleHandler } from '@/components/tool/createExampleHandler';

describe('createExampleHandler', () => {
  it('applies only the fields present in the example data', () => {
    const setInput = vi.fn();
    const setSize = vi.fn();

    const handleExample = createExampleHandler({ input: setInput, size: setSize });

    handleExample({ input: 'hello' });

    expect(setInput).toHaveBeenCalledWith('hello');
    expect(setSize).not.toHaveBeenCalled();
  });

  it('ignores fields without a registered setter', () => {
    const setInput = vi.fn();

    const handleExample = createExampleHandler({ input: setInput });

    expect(() => handleExample({ unknown: 'value', input: 'x' })).not.toThrow();
    expect(setInput).toHaveBeenCalledWith('x');
  });

  it('applies every field when a full example is loaded', () => {
    const setInput = vi.fn();
    const setLevel = vi.fn();

    const handleExample = createExampleHandler({ input: setInput, level: (value) => setLevel(value as string) });

    handleExample({ input: 'https://example.com', level: 'H' });

    expect(setInput).toHaveBeenCalledWith('https://example.com');
    expect(setLevel).toHaveBeenCalledWith('H');
  });
});
