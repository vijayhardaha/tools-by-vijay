import { describe, expect, it } from 'vitest';

import { cn } from '@/utils/classnames';

describe('cn() — class name combiner', () => {
  it('joins plain string class names with a single space', () => {
    expect(cn('px-4', 'py-2', 'text-sm')).toBe('px-4 py-2 text-sm');
  });

  it('ignores falsy values (false, null, undefined, 0, empty string)', () => {
    expect(cn('px-4', false, null, undefined, 0, '')).toBe('px-4');
  });

  it('handles conditional objects — keeps truthy keys, drops falsy keys', () => {
    expect(cn('base', { hidden: true, visible: false })).toBe('base hidden');
  });

  it('handles nested arrays', () => {
    expect(cn(['a', ['b', 'c']])).toBe('a b c');
  });

  it('merges conflicting Tailwind classes keeping the last one (twMerge)', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('does not merge unrelated classes from different groups', () => {
    expect(cn('p-2', 'm-2')).toBe('p-2 m-2');
  });

  it('accepts no arguments and returns an empty string', () => {
    expect(cn()).toBe('');
  });
});
