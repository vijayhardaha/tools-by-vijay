import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the FAQ page.
 *
 * Answers are plain text (no markup or links) because they are used to build
 * the Schema.org FAQPage structured data. The visible accordion in
 * `faq-content.tsx` may render richer JSX answers — keep the wording here in
 * sync with that content.
 *
 * @type {ToolFaqItem[]}
 */
export const FAQS: ToolFaqItem[] = [
  {
    heading: 'Are all tools on this platform completely free?',
    headingId: 'are-all-tools-completely-free',
    answer:
      'Yes, every tool on Tools by Vijay is completely free to use with no hidden charges, subscriptions, or usage limits. There are no premium tiers or paid features — all functionality is available to everyone at no cost.',
  },
  {
    heading: 'Do I need to create an account to use the tools?',
    headingId: 'do-i-need-an-account',
    answer:
      'No registration or account is required. All tools are accessible instantly without signing up, logging in, or providing any personal information. Simply open the tool you need and start using it right away.',
  },
  {
    heading: 'Is my data safe and private?',
    headingId: 'is-my-data-safe-and-private',
    answer:
      'Your privacy is a top priority. Tools that run entirely in your browser process everything locally, so your data never leaves your device. For tools that require server-side processing, data is sent securely over HTTPS, processed temporarily, and never stored or logged.',
  },
  {
    heading: 'Do you store or track any of my data?',
    headingId: 'do-you-store-or-track-my-data',
    answer:
      'No. We do not store, log, or share any data you enter into the tools. There are no cookies, trackers, or analytics scripts that capture your inputs. The only analytics used on this site is Vercel Analytics, which collects anonymous page view data for performance monitoring.',
  },
  {
    heading: 'Which tools work offline and which require an internet connection?',
    headingId: 'which-tools-work-offline',
    answer:
      'Most tools — such as the slug generator, character counter, text case changer, password checker, QR code generator, and JSON sorter — run entirely in your browser and continue to work even with a spotty connection. Tools that rely on server-side libraries require an active internet connection for processing.',
  },
  {
    heading: 'Can I use these tools on my phone or tablet?',
    headingId: 'can-i-use-on-phone-or-tablet',
    answer:
      'Absolutely. The entire platform is built with a mobile-first responsive design, so all tools work seamlessly on smartphones, tablets, and desktops. The interface adapts to your screen size for a comfortable experience on any device.',
  },
  {
    heading: 'How accurate and reliable are the tools?',
    headingId: 'how-accurate-and-reliable',
    answer:
      'The tools are built on top of well-established, industry-standard open-source libraries that are widely used in production environments. Code minification uses the same engines as popular build tools and code formatting uses Prettier, so the output is consistent with these trusted tools.',
  },
  {
    heading: 'How often are new tools added?',
    headingId: 'how-often-are-new-tools-added',
    answer:
      'New tools are added regularly based on personal development needs and community suggestions. The platform is actively maintained, and the collection continues to grow. If you have an idea for a useful tool, feel free to suggest it.',
  },
  {
    heading: 'Can I suggest a new tool or feature?',
    headingId: 'can-i-suggest-a-new-tool',
    answer:
      'Yes, absolutely! We welcome feedback and ideas. You can reach out on Twitter or use the Contact page to share your suggestions. Every idea is reviewed, prioritizing tools that benefit the widest audience.',
  },
  {
    heading: 'Why was this platform built?',
    headingId: 'why-was-this-platform-built',
    answer:
      'Tools by Vijay was created to provide fast, ad-free, and privacy-respecting online utilities for developers, writers, and digital creators. Many existing tool sites are cluttered with ads, slow to load, and intrusive with tracking. This platform aims to be the opposite — clean, fast, and trustworthy.',
  },
  {
    heading: 'Are there any rate limits or usage caps?',
    headingId: 'are-there-any-rate-limits',
    answer:
      'No. There are no rate limits, daily caps, or throttling on any of the tools. You can use them as often as you like without any restrictions. If the platform experiences extraordinary traffic, performance optimizations may be applied, but intentional usage limits will never be introduced.',
  },
  {
    heading: 'Which browsers and devices are supported?',
    headingId: 'which-browsers-are-supported',
    answer:
      'The platform supports all modern browsers — including Chrome, Firefox, Safari, and Edge — on their latest two major versions. Internet Explorer is not supported. For the best experience, we recommend keeping your browser updated to the latest version.',
  },
  {
    heading: 'Can I embed any of these tools on my own website?',
    headingId: 'can-i-embed-these-tools',
    answer:
      'Currently, the tools are designed to be used directly on this platform and are not available as embeddable widgets. However, many of the underlying open-source libraries used here can be integrated into your own projects, and their source code is freely available.',
  },
];
