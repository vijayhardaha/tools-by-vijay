import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CompressionInfo } from "@/components/ui/compressionInfo";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Component that displays the minified HTML output and provides copy functionality
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.output - The minified HTML to display
 * @param {string} props.input - The original HTML code
 * @returns {JSX.Element} The HtmlMinifierOutput component
 */
const HtmlMinifierOutput = ({ output, input }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Minified Output</CardTitle>
            <CardDescription>
              <CompressionInfo input={input} output={output} />
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

HtmlMinifierOutput.propTypes = {
  output: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
};

export default HtmlMinifierOutput;
