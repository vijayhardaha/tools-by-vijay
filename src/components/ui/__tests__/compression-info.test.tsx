import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { CompressionInfo } from '@/components/ui/compression-info';

describe('CompressionInfo', () => {
  it('shows an empty-output message when output is null', () => {
    render(<CompressionInfo input="abc" output={null} />);
    expect(screen.getByText('Output is empty')).toBeInTheDocument();
  });

  it('shows an empty-output message when output is an empty string', () => {
    render(<CompressionInfo input="abc" output="" />);
    expect(screen.getByText('Output is empty')).toBeInTheDocument();
  });

  it('shows compressed size in bytes for small outputs', () => {
    render(<CompressionInfo input={null} output="hello" />);
    expect(screen.getByText(/Compressed size:/)).toBeInTheDocument();
    expect(screen.getByText('5 bytes')).toBeInTheDocument();
  });

  it('shows compressed size in KB for outputs over 1KB', () => {
    render(<CompressionInfo input={null} output={'x'.repeat(1500)} />);
    expect(screen.getByText('1.46 KB')).toBeInTheDocument();
  });

  it('shows compressed size in MB for outputs over 1MB', () => {
    render(<CompressionInfo input={null} output={'x'.repeat(2 * 1024 * 1024)} />);
    expect(screen.getByText('2.00 MB')).toBeInTheDocument();
  });

  it('shows full stats when both input and output are provided', () => {
    const input = 'a'.repeat(1000);
    const output = 'a'.repeat(250);
    render(<CompressionInfo input={input} output={output} />);

    expect(screen.getByText(/Original size:/)).toBeInTheDocument();
    expect(screen.getByText('1000 bytes')).toBeInTheDocument();
    expect(screen.getByText('250 bytes')).toBeInTheDocument();
    expect(screen.getByText('750 bytes')).toBeInTheDocument();
    expect(screen.getByText('75.00%')).toBeInTheDocument();
  });

  it('only shows compressed size when input is empty', () => {
    render(<CompressionInfo input="" output="data" />);
    expect(screen.getByText(/Compressed size:/)).toBeInTheDocument();
    expect(screen.queryByText(/Original size:/)).not.toBeInTheDocument();
  });
});
