import type { JSX } from 'react';

import type { Metadata } from 'next';

import { PageContent } from '@/components/page/PageContent';
import { PageHeader } from '@/components/page/PageHeader';
import { PageLayout } from '@/components/page/PageLayout';
import { buildMetadata } from '@/utils/meta';

/**
 * SEO metadata for the Privacy Policy page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'Learn how Tools by Vijay collects, uses, and protects your data. We prioritize your privacy with minimal tracking and no storage of tool inputs.',
  path: '/privacy-policy',
});

/**
 * Privacy Policy page component.
 * Provides detailed information about data collection, usage, and user rights.
 *
 * @returns {JSX.Element} The rendered Privacy Policy page.
 */
export default function PrivacyPolicy(): JSX.Element {
  return (
    <PageLayout>
      <PageHeader
        pageName="Privacy Policy"
        title="Privacy Policy"
        description="How we collect, use, and protect your information when you use our free online tools."
      />
      <PageContent>
        <div className="space-y-6 text-base leading-relaxed text-gray-800">
          <p>
            <strong>Last updated:</strong> June 16, 2026
          </p>

          <p>
            At <strong>Tools by Vijay</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), your privacy is a
            top priority. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website at{' '}
            <a
              href="https://toolsbyvijay.vercel.app"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              toolsbyvijay.vercel.app
            </a>{' '}
            and use any of our tools and services.
          </p>

          <p>
            By using our website, you agree to the collection and use of information in accordance with this policy. If
            you do not agree with any part of this policy, please discontinue use of our services.
          </p>

          <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>

          <h3 className="text-lg font-semibold text-gray-900">Automatically Collected Data</h3>

          <p>
            When you visit our website, certain non-personally identifiable information is automatically collected
            through third-party analytics services:
          </p>

          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Google Analytics</strong> — We use Google Analytics (Measurement ID: G-FM8D1WPKM7) to collect
              anonymized data about page views, session duration, browser type, device type, and general geographic
              location (country/city level). This data is collected via cookies and similar tracking technologies. Your
              IP address is anonymized before processing. Google Analytics helps us understand how visitors use the site
              so we can improve performance and user experience.
            </li>
            <li>
              <strong>Vercel Analytics</strong> — We use Vercel Analytics, a privacy-first analytics service provided by
              Vercel Inc. (our hosting provider). Vercel Analytics collects anonymized page view data for performance
              monitoring. It does not use cookies and does not collect personally identifiable information.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900">Tool Input Data</h3>

          <p>
            <strong>We do not collect, store, or log any data you enter into our tools.</strong> Here is how your data
            is handled depending on the tool type:
          </p>

          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Client-side tools</strong> (Slug Generator, Character Counter, Password Checker, Text Case
              Changer, QR Code Generator, JSON Sorter, and most text utilities) — All processing happens entirely in
              your browser using JavaScript. Your data never leaves your device and is not transmitted to any server.
            </li>
            <li>
              <strong>Server-side tools</strong> (HTML/CSS/JS Minifiers, CSS Inliner, URL Shortener, Code Beautifier) —
              Your input is sent securely over HTTPS to our server for processing using server-side libraries. Once the
              result is returned, the input data is immediately discarded from server memory. No data is stored, cached,
              or logged on our servers or any third-party service.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>

          <p>Our website uses minimal cookies and tracking technologies, strictly for analytics purposes:</p>

          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Google Analytics cookies</strong> — These cookies (including _ga, _gid, _gat) are used to
              distinguish users and throttle request rates. They are classified as first-party cookies and expire within
              1&ndash;24 months depending on the specific cookie. You can opt out of Google Analytics by installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="font-medium text-pink-500 underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-Out Browser Add-on
              </a>
              .
            </li>
            <li>
              <strong>Vercel Analytics</strong> — Does not use cookies and operates without storing any persistent
              identifiers.
            </li>
          </ul>

          <p>
            We do <strong>not</strong> use cookies for advertising, personalization, social media tracking, or any
            purpose beyond basic analytics. You can control cookie preferences through your browser settings.
          </p>

          <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>

          <p>The limited information we collect is used solely for the following purposes:</p>

          <ul className="list-disc space-y-1 pl-6">
            <li>To analyze website traffic and usage patterns for performance improvement</li>
            <li>To detect and fix technical issues</li>
            <li>To understand which tools and features are most popular</li>
            <li>To maintain the security and stability of our platform</li>
          </ul>

          <p>
            We do <strong>not</strong> sell, rent, or share your personal information with third parties for marketing
            or advertising purposes.
          </p>

          <h2 className="text-xl font-bold text-gray-900">Third-Party Services</h2>

          <p>Our website uses the following third-party services:</p>

          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Vercel Inc.</strong> — Our hosting provider. Vercel may collect standard server logs (IP address,
              request timestamps, browser user agent) as part of their hosting infrastructure. Their privacy policy can
              be found at{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                className="font-medium text-pink-500 underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </li>
            <li>
              <strong>Google Analytics</strong> — Provides anonymized traffic analytics. Google&apos;s privacy policy is
              available at{' '}
              <a
                href="https://policies.google.com/privacy"
                className="font-medium text-pink-500 underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
              .
            </li>
          </ul>

          <p>
            For tools that process data server-side, we use well-established open-source libraries including{' '}
            <strong>html-minifier-terser</strong>, <strong>clean-css</strong>, <strong>@putout/minify</strong>,
            <strong>juice</strong>, <strong>Prettier</strong>, and <strong>tinyurl</strong>. These libraries run on our
            own server infrastructure — your data is not sent to any third-party API or service for processing.
          </p>

          <h2 className="text-xl font-bold text-gray-900">Data Security</h2>

          <p>We implement appropriate technical and organizational measures to protect your information:</p>

          <ul className="list-disc space-y-1 pl-6">
            <li>
              All data transmission between your browser and our servers uses <strong>HTTPS encryption</strong>.
            </li>
            <li>
              Tool input data processed on our servers is <strong>immediately discarded</strong> after processing.
            </li>
            <li>
              We do <strong>not</strong> maintain databases, logs, or archives of any tool inputs.
            </li>
            <li>Our API routes include origin validation and body size limits to prevent abuse.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">Your Rights</h2>

          <p>Depending on your jurisdiction, you may have the following rights regarding your data:</p>

          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Right to opt out</strong> — You can opt out of Google Analytics using the browser add-on mentioned
              above. You can also disable JavaScript in your browser, though this may affect tool functionality.
            </li>
            <li>
              <strong>Right to information</strong> — This Privacy Policy provides full transparency about what data is
              collected and how it is used.
            </li>
            <li>
              <strong>Right to non-participation</strong> — Since we do not collect personal accounts or store tool
              inputs, there is no personal data profile associated with you that requires access, correction, or
              deletion.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">Children&apos;s Privacy</h2>

          <p>
            Our services are not directed to individuals under the age of 13. We do not knowingly collect personal
            information from children. If you believe a child has provided us with personal data, please contact us so
            we can investigate and remove it.
          </p>

          <h2 className="text-xl font-bold text-gray-900">Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
            &quot;Last updated&quot; date. We encourage you to review this policy periodically for any changes.
            Continued use of the website after changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>

          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please
            reach out:
          </p>

          <ul className="list-disc space-y-1 pl-6">
            <li>
              Twitter / X:{' '}
              <a
                href="https://x.com/vijayhardaha"
                className="font-medium text-pink-500 underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @vijayhardaha
              </a>
            </li>
            <li>
              GitHub:{' '}
              <a
                href="https://github.com/vijayhardaha"
                className="font-medium text-pink-500 underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/vijayhardaha
              </a>
            </li>
            <li>
              Contact page:{' '}
              <a href="/contact" className="font-medium text-pink-500 underline hover:no-underline">
                toolsbyvijay.vercel.app/contact
              </a>
            </li>
          </ul>

          <p>
            This website is maintained by <strong>Vijay Hardaha</strong>, a web developer based in India.
          </p>
        </div>
      </PageContent>
    </PageLayout>
  );
}
