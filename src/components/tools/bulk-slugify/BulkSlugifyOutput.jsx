import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copy-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * Component that displays the generated slugs and provides copy functionality
 *
 * This component renders the output of the slugify process, allowing users to
 * copy individual slugs or all slugs at once. It shows visual feedback when
 * content is copied to the clipboard.
 *
 * @param {Object} props - Component props
 * @param {string} props.output - The generated slug output as a newline-separated string
 * @returns {JSX.Element} Output display with copy functionality
 */
const BulkSlugifyOutput = ({ output }) => {
  // Split the output into individual lines and filter out empty lines
  const lines = output.split("\n").filter((line) => line.trim() !== "");

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Output</CardTitle>
            <CardDescription>Cleaned and formatted slugs</CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton text={output} copyText="Copy All" copiedText="Copied All!" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Textarea value={output} className="min-he-52" readOnly data-output />

          <div className="flex flex-col gap-2">
            {lines.map((line, index) => (
              <div key={index} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <Input type="text" value={line} readOnly data-output />
                <CopyButton text={line} />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

BulkSlugifyOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default BulkSlugifyOutput;
