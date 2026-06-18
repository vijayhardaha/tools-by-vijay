import type { JSX, ReactNode } from 'react';

import { webPageSchema } from '@vijayhardaha/schema-builder';
import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { PageLayout } from '@/components/page/PageLayout';
import { ToolCard } from '@/components/tool/tool-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import {
  PiArrowRight,
  PiBowlSteamThin,
  PiCodeBold,
  PiFacebookLogoBold,
  PiGithubLogo,
  PiGlobe,
  PiLinkedinLogoBold,
  PiMagicWand,
  PiMonitor,
  PiNotePencilBold,
  PiRocket,
  PiShieldCheckBold,
  PiSparkle,
  PiStudent,
  PiUser,
  PiWhatsappLogoBold,
  PiXLogo,
} from '@/constants/icons';
import tools from '@/constants/tools';
import type { Tool } from '@/constants/tools';
import { cn } from '@/utils/classnames';
import { buildMetadata } from '@/utils/meta';
import { globalSchema } from '@/utils/schema';
import { siteUrl, getSeoByPath } from '@/utils/seo';

const rootUrl = siteUrl();
const { seoTitle, seoDescription, path: seoPath } = getSeoByPath('')!;

const schemaData = [
  ...globalSchema(),
  webPageSchema({ rootUrl, path: seoPath }, { name: seoTitle, description: seoDescription }),
];

/**
 * SEO metadata for the home page.
 */
export const metadata: Metadata = buildMetadata({ title: seoTitle, description: seoDescription, postfix: false });

// ── Badges ────────────────────────────────────────────────

const BADGES = ['Lightning Fast', 'Privacy First', '100% Free', 'No Sign-up', 'Always Improving'];

// ── Popular tools constant ────────────────────────────────────────────────

const POPULAR_TOOL_SLUGS: string[] = [
  'css-inliner',
  'dropdown-to-array',
  'json-sorter',
  'text-to-array',
  'unminify',
  'url-shortener',
  'alphabetical-line-sorter',
  'bulk-slugify',
  'duplicate-line-removal',
  'slugify',
];

// ── Social share helpers ──────────────────────────────────────────────────

interface ShareLink {
  label: string;
  icon: ReactNode;
  href: string;
  brandColor: string;
}

const SHARE_TEXT =
  'Explore free online developer tools — fast, lightweight & privacy-friendly. Boost your productivity today!';

const getShareLinks = (url: string): ShareLink[] => [
  {
    label: 'Facebook',
    icon: <PiFacebookLogoBold className="size-5" />,
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    brandColor: '#1877F2',
  },
  {
    label: 'WhatsApp',
    icon: <PiWhatsappLogoBold className="size-5" />,
    href: `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + ' ' + url)}`,
    brandColor: '#25D366',
  },
  {
    label: 'Twitter',
    icon: <PiXLogo className="size-5" />,
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(url)}`,
    brandColor: '#1DA1F2',
  },
  {
    label: 'LinkedIn',
    icon: <PiLinkedinLogoBold className="size-5" />,
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    brandColor: '#0A66C2',
  },
  {
    label: 'Bluesky',
    icon: <PiGlobe className="size-5" />,
    href: `https://bsky.app/intent/compose?text=${encodeURIComponent(SHARE_TEXT + ' ' + url)}`,
    brandColor: '#1185FE',
  },
];

// ── Benefit card data ─────────────────────────────────────────────────────

interface BenefitItem {
  title: string;
  icon: ReactNode;
  description: string;
}

const BENEFITS: BenefitItem[] = [
  {
    title: 'Frontend Developers',
    icon: <PiMonitor className="size-6" />,
    description:
      'Quickly minify or beautify HTML, CSS, and JavaScript, generate responsive meta tags, or preview text formats to speed up interface development.',
  },
  {
    title: 'Backend Developers',
    icon: <PiCodeBold className="size-6" />,
    description:
      'Test input/output formats, validate JSON, generate secure passwords, and create URL-safe slugs in seconds.',
  },
  {
    title: 'Tech Writers & Bloggers',
    icon: <PiNotePencilBold className="size-6" />,
    description:
      'Convert headlines to SEO-friendly slugs, format readable markdown or HTML snippets, and check how content renders across formats.',
  },
  {
    title: 'Students & Learners',
    icon: <PiStudent className="size-6" />,
    description:
      'Use simple tools to practice coding basics, format or debug snippets, and build clean content without installing anything.',
  },
  {
    title: 'Non-Tech Users',
    icon: <PiUser className="size-6" />,
    description:
      'Perform quick everyday tasks like text case conversion, password strength checking, or URL formatting without needing technical skills.',
  },
  {
    title: 'Designers & Creatives',
    icon: <PiMagicWand className="size-6" />,
    description:
      'Generate QR codes, barcodes, and unique usernames — plus clean up text formatting and create SEO-friendly slugs for your projects.',
  },
];

// ── Feature cards for "What You'll Find" ──────────────────────────────────

interface FeatureCard {
  title: string;
  description: string;
  beamColors: [string, string, string];
}

const FEATURES: FeatureCard[] = [
  {
    title: 'Text & Content Utilities',
    description:
      'Sort lines alphabetically, remove duplicates, convert dropdown options to arrays, and clean up plain text with ease.',
    beamColors: ['#8b5cf6', '#a855f7', '#ec4899'],
  },
  {
    title: 'Data Formatting Tools',
    description: 'Format and validate JSON, prettify XML, and transform raw data into readable structure instantly.',
    beamColors: ['#06b6d4', '#3b82f6', '#6366f1'],
  },
  {
    title: 'Encoding & Conversion Tools',
    description: 'Encode/decode Base64, HTML entities, or URLs, with support for quick bidirectional conversion.',
    beamColors: ['#10b981', '#14b8a6', '#06b6d4'],
  },
  {
    title: 'Frontend Helpers',
    description:
      'Minify or beautify HTML/CSS/JS, inline CSS for email templates, and generate optimized code for web use.',
    beamColors: ['#f97316', '#f59e0b', '#eab308'],
  },
];

// ── Category cards ───────────────────────────────────────────────────────

interface CategoryCardData {
  slug: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const categoryCards: CategoryCardData[] = [
  {
    slug: 'creative-generators',
    title: 'Creative Generators',
    description: 'QR codes, barcodes, random names and usernames for projects and branding.',
    icon: <PiSparkle className="size-7" />,
  },
  {
    slug: 'developer-suite',
    title: 'Developer Suite',
    description: 'Code minifiers, formatters, converters, and optimization tools for web devs.',
    icon: <PiCodeBold className="size-7" />,
  },
  {
    slug: 'security-privacy',
    title: 'Security & Privacy',
    description: 'Strong password generators and strength checkers to protect your accounts.',
    icon: <PiShieldCheckBold className="size-7" />,
  },
  {
    slug: 'web-url',
    title: 'Web & URL',
    description: 'URL shorteners, encoders, and Base64 converters for seamless web management.',
    icon: <PiGlobe className="size-7" />,
  },
  {
    slug: 'writing-editing',
    title: 'Writing & Editing',
    description: 'Text cleaning, formatting, slug generation, and character counting tools.',
    icon: <PiNotePencilBold className="size-7" />,
  },
];

// ── Section wrapper component ─────────────────────────────────────────────

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

function Section({ children, className, containerClassName, fullWidth = false }: SectionProps): JSX.Element {
  return (
    <section className={cn('py-16 md:py-20', className)}>
      {fullWidth ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}

function SectionHeading({
  subheading,
  heading,
  description,
}: {
  subheading?: string;
  heading: string;
  description?: string;
}): JSX.Element {
  return (
    <div className="mb-12 text-center">
      {subheading && (
        <p className="text-muted-foreground/80 mb-2 text-sm font-light tracking-widest uppercase">{subheading}</p>
      )}
      <h2 className="text-foreground mb-3 text-3xl font-bold md:text-4xl">{heading}</h2>
      {description && <p className="text-muted-foreground mx-auto max-w-2xl">{description}</p>}
    </div>
  );
}

/**
 * Home component — a fully redesigned landing page.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home(): JSX.Element {
  const popularTools: Tool[] = POPULAR_TOOL_SLUGS.map((slug) => tools.find((t) => t.slug === slug)).filter(
    Boolean
  ) as Tool[];

  return (
    <>
      <JsonLd data={schemaData} />

      <PageLayout>
        {/* ═══════════ HERO SECTION ═══════════ */}
        <section
          className="relative -mt-8 overflow-hidden pt-8"
          style={{
            backgroundImage: 'url(/banners/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Container className="relative z-10">
            <div className="flex flex-col items-center py-20 text-center md:py-28">
              {/* Gradient title */}
              <h1 className="mb-6 inline-block bg-linear-to-r from-pink-600 via-amber-500 to-red-600 bg-clip-text text-3xl leading-tight font-extrabold text-transparent md:text-5xl lg:text-6xl">
                Free Online Developer Tools
                <br />
                <span className="text-foreground">to Speed Up Your Workflow</span>
              </h1>

              <p className="text-muted-foreground mb-10 max-w-2xl text-base md:text-lg">
                Explore a curated collection of powerful and easy-to-use web tools designed for developers and tech
                enthusiasts. From code formatting to productivity boosters — all in your browser.
              </p>

              {/* Tag chips */}
              <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
                {BADGES.map((badge) => (
                  <Badge
                    key={badge}
                    variant="default"
                    className="text-muted-foreground rounded-3xl bg-white/10 px-4 py-1.5 text-sm ring-0 backdrop-blur-sm"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/tools">
                  <Button variant="primary" size="lg" className="gap-3">
                    Browse All Tools
                    <PiArrowRight className="size-5" />
                  </Button>
                </Link>
                <Link href="/tools/developer-suite">
                  <Button variant="outline" size="lg" className="border-white">
                    Developer Suite
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* ═══════════ BROWSE BY CATEGORY ═══════════ */}
        <section className="bg-muted py-16 md:py-20">
          <Container>
            <SectionHeading
              subheading="Browse by Category"
              heading="Find the Right Tool"
              description="Explore our tools organized by category. Each category is packed with utilities designed to solve specific development challenges — pick the one that matches your task."
            />

            <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {categoryCards.map((cat) => {
                const toolCount = tools.filter((t) => t.category === cat.slug).length;

                return (
                  <Link
                    key={cat.slug}
                    href={`/tools/${cat.slug}`}
                    className="bg-card border-border rounded-2xl border p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="bg-accent text-accent-foreground mb-4 inline-flex size-14 items-center justify-center rounded-2xl">
                      {cat.icon}
                    </div>
                    <h3 className="text-foreground mb-1 text-lg font-bold">{cat.title}</h3>
                    <p className="text-muted-foreground mb-3 text-sm">{cat.description}</p>
                    <span className="text-primary text-sm font-semibold">
                      {toolCount} {toolCount === 1 ? 'tool' : 'tools'} →
                    </span>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ═════════ FAST, LIGHTWEIGHT + CONTINUOUS IMPROVEMENT ═════════ */}
        <Section className="bg-white">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {/* Card 1: Fast, Lightweight & Privacy-Friendly */}
            <div className="rounded-2xl bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 md:p-10">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <PiRocket className="size-6" />
              </div>
              <h3 className="text-foreground mb-3 text-xl font-bold">Fast, Lightweight & Privacy-Friendly</h3>
              <p className="text-muted-foreground leading-relaxed">
                No sign-up, no downloads, no hassle. All tools run instantly in your browser — with zero tracking and
                zero clutter. Everything is designed to be fast, lightweight, and privacy-focused. You get full
                functionality without ever creating an account or sharing any data.
              </p>
            </div>

            {/* Card 2: Continuous Improvement */}
            <div className="rounded-2xl bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 p-8 md:p-10">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <PiMonitor className="size-6" />
              </div>
              <h3 className="text-foreground mb-3 text-xl font-bold">Continuous Improvement</h3>
              <p className="text-muted-foreground leading-relaxed">
                The developer ecosystem evolves rapidly — and so will this platform. I regularly add new tools, fix
                bugs, and optimize performance based on feedback from users like you. If there&apos;s a specific tool
                you think should exist here, feel free to suggest it. This platform is built with the community in mind.
              </p>
            </div>
          </div>
        </Section>

        {/* ═══════════ POPULAR TOOLS ═══════════ */}
        <Section>
          <SectionHeading
            subheading="Popular Tools"
            heading="Work with Development Tools"
            description="Jump straight into our most-used utilities. These tools have helped thousands of developers streamline their workflows."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            {popularTools.map((tool) => (
              <ToolCard key={tool.slug} slug={tool.slug} />
            ))}
          </div>
        </Section>

        {/* ═══════════ WHO CAN BENEFIT? ═══════════ */}
        <section className="bg-muted py-16 md:py-20">
          <Container>
            <SectionHeading
              subheading="Who Can Benefit"
              heading="Built for Everyone"
              description="These tools are not just for professional developers. They're also incredibly useful for a wide range of users."
            />

            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {BENEFITS.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-card border-border rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="bg-accent text-accent-foreground mb-4 inline-flex size-14 items-center justify-center rounded-xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-foreground mb-2 text-lg font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ═══════ BUILT FOR DEVELOPERS, BY A DEVELOPER ═══════ */}
        <section className="bg-neutral-900 py-16 text-white md:py-20">
          <Container>
            <div className="flex flex-col-reverse items-center gap-8 md:flex-row">
              <div className="flex-1 text-center md:text-left">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Built for Developers, by a Developer</h2>
                <div className="space-y-4 text-neutral-300">
                  <p>
                    As a developer myself, I understand the real-world problems that slow us down — the constant
                    context-switching between coding and external tools, the friction of bloated apps, and the simple
                    need for quick results. That&apos;s why I created{' '}
                    <span className="font-bold text-white">Tools by Vijay Hardaha</span> — to bring together the most
                    essential utilities in one distraction-free, no-login-needed platform.
                  </p>
                  <p>
                    Every tool here is designed with speed, clarity, and usability in mind. No ads. No tracking. Just
                    the tools you need, when you need them.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center justify-center">
                <PiBowlSteamThin className="size-48 text-amber-400 md:size-58" />
              </div>
            </div>
          </Container>
        </section>

        {/* ═══════════ WHAT YOU'LL FIND ON THIS SITE ═══════════ */}
        <section className="bg-neutral-100 py-16 md:py-20">
          <Container>
            <SectionHeading
              subheading="Explore the Collection"
              heading="What You'll Find on This Site"
              description="A growing collection of categorized developer utilities designed to simplify everyday tasks."
            />

            <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
              {FEATURES.map((feature, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Border beam — rotating conic gradient */}
                  <div
                    className="beam-border absolute inset-0 rounded-2xl"
                    style={
                      {
                        '--beam-1': feature.beamColors[0],
                        '--beam-2': feature.beamColors[1],
                        '--beam-3': feature.beamColors[2],
                      } as React.CSSProperties
                    }
                  />
                  {/* Inner content — masks beam to a visible border */}
                  <div className="bg-card relative m-0.5 rounded-2xl p-6 md:p-8">
                    <h3 className="text-foreground mb-2 text-lg font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ═══════════ WHY USE ONLINE DEVELOPER TOOLS? ═══════════ */}
        <Section>
          <h2 className="text-foreground mb-4 text-center text-2xl font-bold md:text-3xl">
            Why Use Online Developer Tools?
          </h2>
          <div className="text-muted-foreground mx-auto max-w-3xl space-y-4 text-center">
            <p>
              These tools are built to simplify the small but essential tasks developers and creators face daily — from
              generating clean slugs to checking password strength or formatting code snippets. They save time, reduce
              friction, and help you stay focused on your actual work.
            </p>
            <p>
              Unlike bloated platforms filled with ads and distractions, these tools are fast, minimal, and
              privacy-respecting. No tracking, no clutter — just useful functionality that works right in your browser,
              anytime you need it.
            </p>
            <p>
              These tools can be accessible from any device with a web browser, making them perfect for on-the-go
              developers or those who prefer not to install software. Whether you&apos;re at your desk, on a laptop, or
              using a mobile device, you can quickly access the tools you need without any hassle.
            </p>
          </div>
        </Section>

        {/* ═══════════ CTA: QUESTIONS & SUGGESTIONS ═══════════ */}
        <section
          className="relative flex items-center overflow-hidden bg-neutral-900 py-20 md:py-26"
          style={{
            backgroundImage: 'url(/banners/cta-feedback-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay for readability */}
          <div className="pointer-events-none absolute inset-0 bg-neutral-900/70" />

          <Container className="relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">Any Questions or Suggestions?</h2>

              <p className="mb-8 leading-relaxed text-neutral-300">
                We value your feedback! Please feel free to reach out to us with any questions or suggestions you may
                have.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://x.com/vijayhardaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <PiXLogo className="size-5" />
                  Follow on X / Twitter
                </a>
                <a
                  href="https://github.com/vijayhardaha/tools-by-vijay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <PiGithubLogo className="size-5" />
                  Star on GitHub
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* ═══════════ JOIN THE MISSION ═══════════ */}
        <section className="py-16 md:py-20">
          <Container>
            <div className="rounded-3xl bg-neutral-900 px-8 py-12 text-white md:px-16 md:py-16">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Join the Mission</h2>
                <p className="mb-6 leading-relaxed text-neutral-300">
                  My goal is to empower developers and creators by removing friction from their workflow. If you find
                  these tools helpful, please consider sharing the site, starring the GitHub repo, or contributing
                  ideas. The more visibility the site gets, the more useful tools I can keep building — for everyone.
                </p>

                <div className="mb-8 space-y-1">
                  <p className="text-neutral-400">
                    Thank you for visiting <span className="font-bold text-white">Tools by Vijay Hardaha</span>.
                  </p>
                  <p className="text-neutral-400">Bookmark the site and supercharge your productivity today.</p>
                </div>

                {/* Social share buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {getShareLinks(rootUrl).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--brand)"
                      style={{ '--brand': link.brandColor } as React.CSSProperties}
                      aria-label={`Share on ${link.label}`}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </PageLayout>
    </>
  );
}
