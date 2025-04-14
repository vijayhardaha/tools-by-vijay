import TextStoryMakerContent from "@/components/text-story-maker/TextStoryMakerTool";
import { generateMetadata as genMeta } from "@/utils/seoUtils";

export const metadata = genMeta({
  title: "Text Story Maker",
  description:
    "Text Story Maker is a powerful tool to create engaging and customized text stories with ease. Crafted by Vijay Hardaha, it lets you personalize fonts, colors, and backgrounds to make your stories truly stand out.",
  slug: "text-story-maker",
});

/**
 * TextStoryMaker page component renders the main layout for the text story maker tool.
 *
 * @component
 * @returns {JSX.Element} The rendered TextStoryMaker page.
 */
const TextStoryMaker = () => {
  return (
    <div className="mx-auto max-w-[540px]">
      <TextStoryMakerContent />
    </div>
  );
};

export default TextStoryMaker;
