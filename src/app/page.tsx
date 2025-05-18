import ToolCard from "@/components/home/ToolCard";
import PageLayout from "@/components/page/PageLayout";
import { ITool, ICategory } from "@/types";
import { getCategoryBySlug } from "@/utils/categoryUtils";
import { getToolsByCategories } from "@/utils/toolUtils";

/**
 * Home component that renders tool cards organized by categories.
 *
 * Each category section displays a title, description, and a grid of tools
 * that belong to that category.
 *
 * @component
 * @returns {React.JSX.Element} The rendered Home component with categorized tools.
 */
const Home: React.FC = (): React.JSX.Element => {
  const toolsByCategory: Record<string, ITool[]> = getToolsByCategories();

  return (
    <PageLayout>
      {/* Intro SEO Content */}
      <h1 className="text-foreground mb-2 text-3xl font-bold">
        Free Online Developer Tools to Speed Up Your Workflow
      </h1>

      <p className="text-muted-foreground mb-12">
        Explore a curated collection of powerful and easy-to-use web tools designed for developers
        and tech enthusiasts. From code formatting and data conversion to productivity boosters, our
        tools help you work smarter and faster - all in your browser.
      </p>

      {/* Categorized Tools */}
      {Object.entries(toolsByCategory).map(([categorySlug, categoryTools]: [string, ITool[]]) => {
        const category: ICategory | null = getCategoryBySlug(categorySlug);
        if (!category) return null;

        return (
          <section key={categorySlug} className="mb-10">
            <div className="mb-6">
              <h2 className="text-foreground mb-1 text-2xl font-bold">{category.label}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {categoryTools.map((tool: ITool) => (
                <ToolCard key={tool.slug} slug={tool.slug} />
              ))}
            </div>
          </section>
        );
      })}

      <div className="text-muted-foreground mb-12 space-y-12">
        <section>
          <h2 className="text-foreground mb-2 text-2xl font-bold">Why Use These Everyday Tools?</h2>
          <div className="space-y-4">
            <p>
              These tools are built to simplify the small but essential tasks developers and
              creators face daily — from generating clean slugs to checking password strength or
              formatting code snippets. They save time, reduce friction, and help you stay focused
              on your actual work.
            </p>
            <p>
              Unlike bloated platforms filled with ads and distractions, these tools are fast,
              minimal, and privacy-respecting. No tracking, no clutter — just useful functionality
              that works right in your browser, anytime you need it.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-2xl font-bold">What You’ll Find on This Site</h2>
          <div className="space-y-4">
            <p>
              This website features categorized utilities crafted to serve different aspects of
              development. From basic utilities like <span className="italic">JSON formatter</span>,{" "}
              <span className="italic">Base64 encoder/decoder</span>,{" "}
              <span className="italic">UUID generator</span>, and{" "}
              <span className="italic">regex tester</span> to productivity-focused tools like{" "}
              <span className="italic">lorem ipsum generator</span>,{" "}
              <span className="italic">timestamp converter</span>, and{" "}
              <span className="italic">code minifiers</span> - we’re continually adding new features
              based on what developers actually need.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-bold">Data Formatting Tools</span> – Clean up messy data,
                format JSON, XML, and SQL instantly.
              </li>
              <li>
                <span className="font-bold">Encoders & Decoders</span> – Easily encode/decode URLs,
                HTML entities, Base64, etc.
              </li>
              <li>
                <span className="font-bold">Code Utilities</span> – Minify JavaScript/CSS, beautify
                HTML, convert code between formats.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-2xl font-bold">
            Built for Developers, by a Developer
          </h2>
          <div className="space-y-4">
            <p>
              As a developer myself, I understand the real-world problems that slow us down - the
              constant context-switching between coding and external tools, the friction of bloated
              apps, and the simple need for quick results. That’s why I created{" "}
              <span className="font-bold">Tools by Vijay Hardaha</span> - to bring together the most
              essential utilities in one distraction-free, no-login-needed platform.
            </p>
            <p>
              Every tool here is designed with speed, clarity, and usability in mind. No ads. No
              tracking. Just the tools you need, when you need them.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-2xl font-bold">Who Can Benefit?</h2>
          <div className="space-y-4">
            <p>
              These tools are not just for professional developers. They’re also incredibly useful
              for:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-bold">Frontend Engineers</span> – Format, minify, and test
                your HTML/CSS/JS code quickly.
              </li>
              <li>
                <span className="font-bold">Backend Developers</span> – Encode data, manipulate
                timestamps, test webhooks.
              </li>
              <li>
                <span className="font-bold">Tech Writers & Bloggers</span> – Generate placeholder
                text or convert Markdown.
              </li>
              <li>
                <span className="font-bold">Students & Learners</span> – Use interactive tools to
                better understand technical concepts.
              </li>
              <li>
                <span className="font-bold">Non-Tech Users</span> – Perform small daily tasks like
                decoding text or converting dates.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-2xl font-bold">
            Fast, Lightweight & Privacy-Friendly
          </h2>
          <div className="space-y-4">
            <p>
              You don’t need to create an account or install a single file. All tools work instantly
              in the browser, ensuring lightning-fast access and zero dependency bloat. We also
              respect your privacy - no login, no data collection, and no tracking scripts.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-2xl font-bold">Continuous Improvement</h2>
          <div className="space-y-4">
            <p>
              The developer ecosystem evolves rapidly - and so will this platform. I regularly add
              new tools, fix bugs, and optimize performance based on feedback from users like you.
              If there’s a specific tool you think should exist here, feel free to suggest it. This
              platform is built with the community in mind.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-2xl font-bold">Join the Mission</h2>
          <div className="space-y-4">
            <p>
              My goal is to empower developers and creators by removing friction from their
              workflow. If you find these tools helpful, please consider sharing the site, starring
              the GitHub repo (if applicable), or contributing ideas. The more visibility the site
              gets, the more useful tools I can keep building - for everyone.
            </p>
            <p>
              Thank you for visiting <span className="font-bold">Tools by Vijay Hardaha</span>.
              Bookmark the site, explore the categories below, and supercharge your productivity
              today.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Home;
