import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Output component for the Duplicate Line Removal tool.
 * Displays the processed text in a readonly textarea with a copy button.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.output - The processed text to display
 * @returns {JSX.Element} The rendered output display
 */
const DuplicateLineRemovalOutput = ({ output }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Output</CardTitle>
            <CardDescription>
              The text after removing duplicate lines and applying sorting options.
            </CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton text={output} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea value={output} rows={10} readOnly data-output />
      </CardContent>
    </Card>
  );
};

DuplicateLineRemovalOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default DuplicateLineRemovalOutput;
