import TextStoryMakerContent from "@/components/text-story-maker/TextStoryMakerTool";

/**
 * TextStoryMaker page component renders the main layout for the text story maker tool.
 *
 * @component
 * @returns {JSX.Element} The rendered TextStoryMaker page.
 */
const TextStoryMaker = () => {
  return (
    <div className="mx-auto max-w-[540px] px-4">
      <TextStoryMakerContent />
    </div>
  );
};

export default TextStoryMaker;
