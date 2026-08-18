'use client';
import type { JSX, ReactNode } from 'react';
import { useState } from 'react';

import { PiPlusBold } from 'react-icons/pi';

import { FAQS } from '@/app/faq/faqs';
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
          <div className="border-t border-gray-100 px-6 pt-4 pb-5 leading-relaxed text-gray-600">{answer}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * FAQ page content component.
 * Renders the page header and accordion list of questions and answers.
 *
 * @returns {JSX.Element} The rendered FAQ content.
 */
export function FaqContent(): JSX.Element {
  return (
    <div className="space-y-3">
      {FAQS.map((faq) => (
        <FaqItem key={faq.headingId} question={faq.heading} answer={faq.answer} />
      ))}
    </div>
  );
}
