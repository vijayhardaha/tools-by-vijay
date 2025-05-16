import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import { generateMeta, IMetadata } from "@/utils/seoUtils";

/**
 * SEO metadata for the About page.
 * @type {Metadata}
 */
export const metadata: IMetadata = generateMeta({
  title: "About Me",
  description:
    "Learn more about Vijay, the developer behind this platform. Discover the motivation behind these tools and how they’re built for speed, simplicity, and everyday use.",
  slug: "about",
});

const About: React.FC = (): React.JSX.Element => {
  return (
    <PageLayout>
      <PageHeader title="About Me" description="Why I built this platform and what drives it" />
      <PageContent>
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            Hello! I’m Vijay. I work as a web developer and I’m also a vegan. Over time, I noticed
            that I often use some small tools online — things like generating slugs for URLs,
            checking password strength, or minifying code. But most websites that offer these tools
            are full of ads, slow to load, or track user data.
          </p>

          <p>
            I prefer tools that are fast, clean, and respectful of privacy. That’s why I started
            building my own set of tools — for personal use at first. I named the collection{" "}
            <strong>Tools by Vijay</strong>. It’s a place where I can keep everything I use often,
            all in one place.
          </p>

          <p>
            Over time, I realized that other people like me — developers, content writers, students,
            or anyone working online — might find these tools useful too. So I decided to make this
            site public and open to everyone.
          </p>

          <p>
            I built this site using modern tech like Next.js and Tailwind CSS, with a focus on
            speed, accessibility, and simplicity. There are no trackers, no popups, and no
            distractions — just useful tools that work.
          </p>

          <p>
            I plan to keep adding more tools as I need them or get suggestions from others. If you
            have an idea for a tool, or want to say hello, I’d love to hear from you.
          </p>

          <p>
            You can reach out to me on{" "}
            <a
              href="https://x.com/vijayhardaha"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            . Thanks for visiting!
          </p>
        </div>
      </PageContent>
    </PageLayout>
  );
};

export default About;
