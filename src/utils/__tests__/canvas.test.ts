import { afterEach, describe, expect, it, vi } from 'vitest';

import { downloadCanvasPng } from '@/utils/canvas';

describe('downloadCanvasPng', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('downloads the canvas as a PNG with the given filename', () => {
    const click = vi.fn();
    const anchor = { href: '', download: '', click } as unknown as HTMLAnchorElement;

    const createElementSpy = vi.spyOn(document, 'createElement').mockReturnValue(anchor);
    const toDataURL = vi.fn(() => 'data:image/png;base64,abc');

    downloadCanvasPng({ toDataURL } as unknown as HTMLCanvasElement, 'qrcode.png');

    expect(toDataURL).toHaveBeenCalledWith('image/png');
    expect(anchor.href).toBe('data:image/png;base64,abc');
    expect(anchor.download).toBe('qrcode.png');
    expect(click).toHaveBeenCalledOnce();
    createElementSpy.mockRestore();
  });
});
