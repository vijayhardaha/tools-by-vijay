import { FaqContent } from '@/app/faq/_components/faq-content';
import { getInfoPageMetadata, WithInfoPage } from '@/components/page/WithInfoPage';

/**
 * SEO metadata for the FAQ page.
 *
 */
export const metadata = getInfoPageMetadata('faq');

/**
 * FAQ page component.
 * Server component that renders the client-side FAQ accordion content.
 *
 * @returns {JSX.Element} The rendered FAQ page.
 */
export default WithInfoPage({ slug: 'faq', children: <FaqContent /> });
