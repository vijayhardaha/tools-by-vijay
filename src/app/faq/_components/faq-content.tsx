'use client';
import type { JSX, ReactNode } from 'react';
import { useState } from 'react';

import { PiPlusBold } from 'react-icons/pi';

import { cn } from '@/utils/classnames';

/**
 * Props for the FaqItem component.
 *
 * @property {string} question - The FAQ question text
 * @property {ReactNode} answer - The FAQ answer content (text or JSX)
 * @property {boolean} [defaultOpen] - Whether the item is open by default
 */
interface FaqItemProps {
  question: string;
  answer: ReactNode;
  defaultOpen?: boolean;
}

/**
 * FaqItem component renders a single accordion item.
 *
 * @param {FaqItemProps} props - The component props.
 *
 * @returns {JSX.Element} The rendered accordion item.
 */
function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-xs transition-shadow duration-200 hover:shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 rounded-xl px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-gray-900">{question}</span>
        <PiPlusBold
          className={cn(
            'size-5 shrink-0 text-gray-400 transition-transform duration-300 ease-in-out',
            isOpen && 'rotate-45'
          )}
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-gray-100 px-6 pt-4 pb-5 text-sm leading-relaxed text-gray-600">{answer}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * FAQ accordion data: common questions about the platform and tools.
 */
const faqs: FaqItemProps[] = [
  {
    question: 'Are all tools on this platform completely free?',
    answer:
      'Yes, every tool on Tools by Vijay is completely free to use with no hidden charges, subscriptions, or usage limits. There are no premium tiers or paid features — all functionality is available to everyone at no cost.',
  },
  {
    question: 'Do I need to create an account to use the tools?',
    answer:
      'No registration or account is required. All tools are accessible instantly without signing up, logging in, or providing any personal information. Simply open the tool you need and start using it right away.',
  },
  {
    question: 'Is my data safe and private?',
    answer: (
      <>
        Your privacy is a top priority. Tools that run entirely in your browser — such as the slug generator, password
        strength checker, and text converters — process everything locally, so your data never leaves your device. For
        tools that require server-side processing (code minifiers, CSS inliner, URL shortener), data is sent securely
        over HTTPS, processed temporarily, and never stored or logged. You can read more on the{' '}
        <a href="/about" className="font-medium text-pink-500 underline hover:no-underline">
          About
        </a>{' '}
        page.
      </>
    ),
  },
  {
    question: 'Do you store or track any of my data?',
    answer:
      'No. We do not store, log, or share any data you enter into the tools. There are no cookies, trackers, or analytics scripts that capture your inputs. The only analytics used on this site is Vercel Analytics, which collects anonymous page view data for performance monitoring — it never sees the content you process in the tools.',
  },
  {
    question: 'Which tools work offline and which require an internet connection?',
    answer:
      'Most tools — such as the slug generator, character counter, text case changer, password checker, QR code generator, and JSON sorter — run entirely in your browser and continue to work even with a spotty connection. Tools that rely on server-side libraries (HTML/CSS/JS minifiers, CSS inliner, URL shortener, and code beautifier) require an active internet connection for processing.',
  },
  {
    question: 'Can I use these tools on my phone or tablet?',
    answer:
      'Absolutely. The entire platform is built with a mobile-first responsive design, so all tools work seamlessly on smartphones, tablets, and desktops. The interface adapts to your screen size for a comfortable experience on any device.',
  },
  {
    question: 'How accurate and reliable are the tools?',
    answer:
      'The tools are built on top of well-established, industry-standard open-source libraries that are widely used in production environments. For example, code minification uses the same engines as popular build tools (html-minifier-terser, clean-css, @putout/minify), and code formatting uses Prettier. You can rely on the output being consistent with these trusted tools.',
  },
  {
    question: 'How often are new tools added?',
    answer:
      'New tools are added regularly based on personal development needs and community suggestions. The platform is actively maintained, and the collection continues to grow. If you have an idea for a useful tool, feel free to suggest it.',
  },
  {
    question: 'Can I suggest a new tool or feature?',
    answer: (
      <>
        Yes, absolutely! I welcome feedback and ideas. You can reach out on{' '}
        <a
          href="https://x.com/vijayhardaha"
          className="font-medium text-pink-500 underline hover:no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{' '}
        or use the{' '}
        <a href="/contact" className="font-medium text-pink-500 underline hover:no-underline">
          Contact
        </a>{' '}
        page to share your suggestions. I review every idea and prioritize tools that benefit the widest audience.
      </>
    ),
  },
  {
    question: 'Why was this platform built?',
    answer:
      'Tools by Vijay was created to provide fast, ad-free, and privacy-respecting online utilities for developers, writers, and digital creators. Many existing tool sites are cluttered with ads, slow to load, and intrusive with tracking. This platform aims to be the opposite — clean, fast, and trustworthy.',
  },
  {
    question: 'Are there any rate limits or usage caps?',
    answer:
      'No. There are no rate limits, daily caps, or throttling on any of the tools. You can use them as often as you like without any restrictions. If the platform experiences extraordinary traffic, performance optimizations may be applied, but intentional usage limits will never be introduced.',
  },
  {
    question: 'Which browsers and devices are supported?',
    answer:
      'The platform supports all modern browsers — including Chrome, Firefox, Safari, and Edge — on their latest two major versions. Internet Explorer is not supported. For the best experience, we recommend keeping your browser updated to the latest version.',
  },
  {
    question: 'Can I embed any of these tools on my own website?',
    answer:
      'Currently, the tools are designed to be used directly on this platform and are not available as embeddable widgets. However, many of the underlying open-source libraries used here (slugify, clean-css, Prettier, etc.) can be integrated into your own projects. The source code for the libraries is freely available.',
  },
];

/**
 * FAQ page content component.
 * Renders the page header and accordion list of questions and answers.
 *
 * @returns {JSX.Element} The rendered FAQ content.
 */
export function FaqContent(): JSX.Element {
  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
