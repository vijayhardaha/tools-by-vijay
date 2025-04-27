import { JSX } from "react";

import { FaFacebookF, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

import PageContent from "@/components/page/PageContent";
import PageHeader from "@/components/page/PageHeader";
import PageLayout from "@/components/page/PageLayout";
import { generateMetadata as genMeta, Metadata } from "@/utils/seoUtils";

/**
 * SEO metadata for the Slugify page
 * @type {Object}
 */
export const metadata: Metadata = genMeta({
  title: "Contact",
  description:
    "Get in touch with Vijay, explore the open-source code on GitHub, or hire him for freelance WordPress, WooCommerce, or Next.js projects. Based in India, working globally.",
  slug: "contact",
});

/**
 * Contact page component
 * Displays social links and ways to connect or contribute
 * @returns {JSX.Element} The rendered Contact page.
 */
const Contact: React.FC = (): JSX.Element => {
  return (
    <PageLayout>
      <PageHeader
        title="Contact"
        description="Connect with me, check out the code, or hire me for work"
      />
      <PageContent>
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            I’m based in India and work remotely with clients around the world. If you find any of
            the tools on this site useful, feel free to connect, give feedback, or share ideas for
            improvement.
          </p>

          <p>
            The entire code for this website is open-source and available on GitHub. If you’re
            interested in learning how it works, want to contribute, or spot a bug, you can check
            out the repo here:
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
            I also work as a freelance developer — mostly with WordPress and WooCommerce.
            Occasionally, I build small apps using Next.js. If you’re looking to hire, you can reach
            me on PeoplePerHour:
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

          <p>Feel free to follow or message me on any of these platforms:</p>

          <div className="flex flex-wrap gap-2">
            <a
              href="https://x.com/vijayhardaha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg bg-[#0f1419] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 hover:ring-2 hover:ring-[#0f1419]/30"
            >
              <FaXTwitter />
              Twitter / X
            </a>
            <a
              href="https://facebook.com/vegan.vijay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg bg-[#145dbf] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 hover:ring-2 hover:ring-[#145dbf]/30"
            >
              <FaFacebookF />
              Facebook
            </a>
            <a
              href="https://instagram.com/vegan.vijay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg bg-[#ff0069] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 hover:ring-2 hover:ring-[#ff0069]/30"
            >
              <FaInstagram />
              Instagram
            </a>
            <a
              href="https://github.com/vijayhardaha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg bg-[#24292e] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 hover:ring-2 hover:ring-[#24292e]/30"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href="https://pph.me/vijayhardaha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg bg-[#ff7300] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 hover:ring-2 hover:ring-[#ff7300]/30"
            >
              <TbWorldWww />
              PeoplePerHour
            </a>
          </div>

          <p>Thanks for stopping by. I hope these tools make your workflow a bit easier.</p>
        </div>
      </PageContent>
    </PageLayout>
  );
};

export default Contact;
