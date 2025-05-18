import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import { generateMeta, IMetadata } from "@/utils/seoUtils";

/**
 * SEO metadata for the About page.
 * @type {IMetadata}
 */
export const metadata: IMetadata = generateMeta({
  title: "About Me",
  description:
    "Discover Vijay, a passionate web developer and vegan, who built this fast, privacy-focused tool platform. Learn about the motivation, technology stack, and commitment to user experience.",
  slug: "about",
});

/**
 * About page component.
 * Provides detailed info about Vijay, the developer behind the platform.
 *
 * @component
 * @returns {React.JSX.Element} The rendered About page.
 */
const About: React.FC = (): React.JSX.Element => {
  return (
    <PageLayout>
      <PageHeader
        title="About Me"
        description="Meet Vijay, a web developer and vegan creating fast, privacy-first online tools for developers and content creators."
      />
      <PageContent>
        <div className="space-y-6 text-base leading-relaxed text-gray-800">
          <p>
            Hello! I’m Vijay, a dedicated <strong>web developer</strong> and passionate{" "}
            <strong>vegan</strong> from India. I’ve always been fascinated by clean, efficient, and
            user-friendly web tools that make everyday tasks simpler for developers, content
            writers, and digital creators.
          </p>

          <p>
            Over the years, I found myself frequently using small but essential utilities - like
            generating URL slugs, checking password strength, minifying code, or converting text
            formats. However, many existing online tools felt cluttered with ads, slow to respond,
            or invasive of user privacy.
          </p>

          <p>
            That’s why I decided to build my own platform: <strong>Tools by Vijay</strong>. It
            started as a personal project, a lightweight, ad-free, and privacy-focused collection of
            utilities designed for speed and simplicity.
          </p>

          <p>
            The platform is built with modern technologies such as <strong>Next.js</strong> and{" "}
            <strong>Tailwind CSS</strong>, ensuring fast load times, responsive design, and
            accessibility across devices. I prioritize a clean interface free from trackers, popups,
            or unnecessary distractions, so users can focus solely on their work.
          </p>

          <p>
            My goal is to serve a broad audience - whether you’re a developer, writer, student, or
            anyone looking for reliable and efficient online tools. I keep expanding the collection
            based on my own needs and community suggestions, constantly improving performance and
            adding new features.
          </p>

          <p>
            In addition to building tools, I am committed to creating a respectful and trustworthy
            digital experience that values <strong>user privacy</strong> and{" "}
            <strong>security</strong>. This platform will always remain free to use without
            compromising your data.
          </p>

          <p>
            I welcome feedback, ideas, and collaboration. If you have a suggestion for a new tool or
            just want to connect, please don’t hesitate to reach out to me on{" "}
            <a
              href="https://x.com/vijayhardaha"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vijay Hardaha on Twitter"
            >
              Twitter
            </a>
            . Thank you for visiting and trusting Tools by Vijay for your daily online tasks!
          </p>
        </div>
      </PageContent>
    </PageLayout>
  );
};

export default About;
