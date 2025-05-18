import { FaFacebookF, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import { generateMeta, IMetadata } from "@/utils/seoUtils";

/**
 * SEO metadata for the Contact page.
 * @type {IMetadata}
 */
export const metadata: IMetadata = generateMeta({
  title: "Contact Vijay Hardaha",
  description:
    "Get in touch with Vijay, a skilled freelance web developer specializing in WordPress, WooCommerce, and Next.js. Explore his open-source projects on GitHub and hire him for your next web development project. Based in India, working globally.",
  slug: "contact",
});

/**
 * Contact page component
 * Displays social links and ways to connect, collaborate, or hire Vijay.
 *
 * @component
 * @returns {React.JSX.Element} The rendered Contact page.
 */
const Contact: React.FC = (): React.JSX.Element => {
  return (
    <PageLayout>
      <PageHeader
        title="Contact"
        description="Reach out to Vijay for freelance web development, open source collaboration, or general inquiries."
      />
      <PageContent>
        <div className="space-y-6 text-base leading-relaxed text-gray-800">
          <p>
            Hello! I’m Vijay, a professional <strong>freelance web developer</strong> based in India
            with extensive experience in building websites and applications using technologies like{" "}
            <strong>WordPress</strong>, <strong>WooCommerce</strong>, and <strong>Next.js</strong>.
            I collaborate remotely with clients from around the world to deliver clean, efficient,
            and scalable web solutions.
          </p>

          <p>
            If you find the tools on this site useful, I’d love to hear your feedback or suggestions
            for new features. Whether you’re a developer, content creator, student, or business
            owner, your input helps me improve and expand the platform to better serve your needs.
          </p>

          <p>
            This entire website is open-source and publicly available on GitHub. If you’re curious
            about how it’s built, want to contribute code, report bugs, or suggest enhancements,
            feel free to explore the repository below. Open-source collaboration is at the heart of
            what I do, and I welcome developers of all skill levels to get involved.
          </p>

          <p>
            <a
              href="https://github.com/vijayhardaha/tools-by-vijay"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/vijayhardaha/tools-by-vijay
            </a>
          </p>

          <p>
            Beyond building these tools, I’m available for freelance work, specializing in WordPress
            website development, WooCommerce online stores, and modern React-based web applications
            using Next.js. I’m passionate about writing clean, maintainable code and creating
            seamless user experiences.
          </p>

          <p>
            If you have a project in mind or want to discuss potential collaborations, you can reach
            me through PeoplePerHour - a trusted freelance platform where I’ve successfully
            completed numerous client projects.
          </p>

          <p>
            <a
              href="https://pph.me/vijayhardaha"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              pph.me/vijayhardaha
            </a>
          </p>

          <p>
            I’m also active on various social media platforms where I share updates, tips, and
            engage with the community. Feel free to follow or message me on any of these channels:
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://x.com/vijayhardaha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vijay Hardaha on Twitter"
              className="flex items-center gap-2 rounded-lg bg-[#0f1419] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 hover:ring-2 hover:ring-[#0f1419]/30"
            >
              <FaXTwitter size={18} />
              Twitter / X
            </a>
            <a
              href="https://facebook.com/vegan.vijay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vijay Hardaha on Facebook"
              className="flex items-center gap-2 rounded-lg bg-[#145dbf] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 hover:ring-2 hover:ring-[#145dbf]/30"
            >
              <FaFacebookF size={18} />
              Facebook
            </a>
            <a
              href="https://instagram.com/vegan.vijay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vijay Hardaha on Instagram"
              className="flex items-center gap-2 rounded-lg bg-[#ff0069] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 hover:ring-2 hover:ring-[#ff0069]/30"
            >
              <FaInstagram size={18} />
              Instagram
            </a>
            <a
              href="https://github.com/vijayhardaha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vijay Hardaha on GitHub"
              className="flex items-center gap-2 rounded-lg bg-[#24292e] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 hover:ring-2 hover:ring-[#24292e]/30"
            >
              <FaGithub size={18} />
              GitHub
            </a>
            <a
              href="https://pph.me/vijayhardaha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vijay Hardaha on PeoplePerHour"
              className="flex items-center gap-2 rounded-lg bg-[#ff7300] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 hover:ring-2 hover:ring-[#ff7300]/30"
            >
              <TbWorldWww size={20} />
              PeoplePerHour
            </a>
          </div>

          <p>
            Thank you for visiting my site. I hope these tools help streamline your workflow and
            make your web projects easier. Whether you want to contribute to the codebase, hire me
            for a project, or just say hello, I’m always excited to connect with new people.
          </p>

          <p>
            For any questions or inquiries not covered here, you can also send me a direct message
            on any of the social platforms above, or email me through the contact form (if
            available). I aim to respond promptly and provide the support you need.
          </p>
        </div>
      </PageContent>
    </PageLayout>
  );
};

export default Contact;
