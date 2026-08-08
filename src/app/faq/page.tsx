import { FaqContent } from '@/app/faq/_components/faq-content';
import { getInfoPageMetadata, withInfoPage } from '@/components/page/withInfoPage';

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
export default withInfoPage({ slug: 'faq', children: <FaqContent /> });
