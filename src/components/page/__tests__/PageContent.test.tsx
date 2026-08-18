import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PageContent } from '@/components/page/PageContent';

describe('PageContent', () => {
  it('renders children inside the content container', () => {
    render(
      <PageContent>
        <p>Page body</p>
      </PageContent>
    );
    expect(screen.getByText('Page body')).toBeInTheDocument();
  });

  it('wraps content in a centered container', () => {
    const { container } = render(<PageContent>X</PageContent>);
    expect(container.firstChild).toHaveClass('mx-auto', 'max-w-7xl');
  });
});
