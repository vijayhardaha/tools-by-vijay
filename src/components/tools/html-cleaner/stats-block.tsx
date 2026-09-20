import type { JSX } from 'react';

import type { TransformStats } from '@vijayhardaha/html-cleaner';

/**
 * Interface for the StatsBlock component props.
 *
 * @type {StatsBlockProps}
 * @property {TransformStats} stats - The per-run counters returned by `cleanHtml()`
 */
interface StatsBlockProps {
  stats: TransformStats;
}

/**
 * Ordered label for every counter in {@link TransformStats}, so the summary
 * reads the same way every run regardless of which counters are non-zero.
 */
const STAT_LABELS: { key: keyof TransformStats; label: string }[] = [
  { key: 'removedComments', label: 'comments removed' },
  { key: 'removedAttributes', label: 'attributes removed' },
  { key: 'removedStyles', label: 'styles removed' },
  { key: 'removedClasses', label: 'classes removed' },
  { key: 'removedIds', label: 'ids removed' },
  { key: 'removedEmptyNodes', label: 'empty elements removed' },
  { key: 'removedImages', label: 'images removed' },
  { key: 'unwrappedLinks', label: 'links unwrapped' },
  { key: 'unwrappedSpans', label: 'spans unwrapped' },
  { key: 'convertedBold', label: 'bold elements converted' },
  { key: 'convertedItalic', label: 'italic elements converted' },
  { key: 'removedTableElements', label: 'table elements removed' },
  { key: 'convertedTableElements', label: 'table elements converted' },
  { key: 'normalizedNbspNodes', label: 'NBSP nodes normalized' },
];

/**
 * Displays what a cleaning run changed as a compact, human-readable summary.
 * Counters that stayed at zero are omitted; an all-zero run reports that the
 * markup was already clean.
 *
 * @param {StatsBlockProps} props - The component props
 *
 * @returns {JSX.Element} The rendered change summary.
 */
export function StatsBlock({ stats }: StatsBlockProps): JSX.Element {
  const changes = STAT_LABELS.filter(({ key }) => stats[key] > 0);

  if (!changes.length) {
    return <p className="text-muted-foreground text-sm">No changes — the markup was already clean.</p>;
  }

  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm" data-stats>
      {changes.map(({ key, label }) => (
        <li key={key} className="flex items-center gap-1.5">
          <span className="bg-muted rounded px-1.5 py-0.5 font-mono text-xs font-medium text-pink-500">
            {stats[key]}
          </span>
          <span className="text-muted-foreground">{label}</span>
        </li>
      ))}
    </ul>
  );
}
