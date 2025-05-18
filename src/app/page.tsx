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
          <h2 className="text-foreground mb-2 text-2xl font-bold">
            Why Use Online Developer Tools?
          </h2>
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
            <p>
              These tools can be accessible from any device with a web browser, making them perfect
              for. on-the-go developers or those who prefer not to install software. Whether you’re
              at your desk, on a laptop, or using a mobile device, you can quickly access the tools
              you need without any hassle.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-2xl font-bold">What You’ll Find on This Site</h2>
          <div className="space-y-4">
            <p>
              This website offers a growing collection of categorized developer utilities designed
              to simplify everyday tasks. Whether you're cleaning up content, transforming data
              formats, or optimizing code, our tools are built for speed and ease of use. Popular
              options include <strong className="font-bold italic">JSON Sorter</strong>,{" "}
              <strong className="font-bold italic">Base64 Encoder/Decoder</strong>,{" "}
              <strong className="font-bold italic">Dropdown to Array Converter</strong>, and{" "}
              <strong className="font-bold italic">Alphabetical Line Sorter</strong>. We also
              provide productivity-focused tools like{" "}
              <strong className="font-bold italic">Duplicate Line Remover</strong>,{" "}
              <strong className="font-bold italic">CSS Inliner</strong>, and{" "}
              <strong className="font-bold italic">Code Minifiers</strong>. Each tool is crafted to
              solve real developer pain points with zero distractions.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="font-bold">Text & Content Utilities</strong> – Sort lines
                alphabetically, remove duplicates, convert dropdown options to arrays, and clean up
                plain text.
              </li>
              <li>
                <strong className="font-bold">Data Formatting Tools</strong> – Format and validate
                JSON, prettify XML, and transform raw data into readable structure instantly.
              </li>
              <li>
                <strong className="font-bold">Encoding & Conversion Tools</strong> – Encode/decode
                Base64, HTML entities, or URLs, with support for quick bidirectional conversion.
              </li>
              <li>
                <strong className="font-bold">Frontend Helpers</strong> – Minify or beautify
                HTML/CSS/JS, inline CSS for email templates, and generate optimized code for web
                use.
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
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-bold">Frontend Developers</span> – Quickly minify or beautify
                HTML, CSS, and JavaScript, generate responsive meta tags, or preview text formats to
                speed up interface development.
              </li>
              <li>
                <span className="font-bold">Backend Developers</span> – Test input/output formats,
                validate JSON, generate secure passwords, and create URL-safe slugs in seconds.
              </li>
              <li>
                <span className="font-bold">Tech Writers & Bloggers</span> – Convert headlines to
                SEO-friendly slugs, format readable markdown or HTML snippets, and check how content
                renders across formats.
              </li>
              <li>
                <span className="font-bold">Students & Learners</span> – Use simple tools to
                practice coding basics, format or debug snippets, and build clean content without
                installing anything.
              </li>
              <li>
                <span className="font-bold">Non-Tech Users</span> – Perform quick everyday tasks
                like text case conversion, password strength checking, or URL formatting without
                needing technical skills.
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
              No sign-up, no downloads, no hassle. All tools run instantly in your browser — with
              zero tracking, and zero clutter. Everything is designed to be fast, lightweight, and
              privacy-focused. You get full functionality without ever creating an account or
              sharing any data.
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
