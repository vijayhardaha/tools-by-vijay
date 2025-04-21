import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CompressionInfo } from "@/components/ui/compression-info";
import { CopyButton } from "@/components/ui/copyButton";
import { Textarea } from "@/components/ui/textarea";

/**
 * Component that displays the minified JavaScript output and provides copy functionality
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.output - The minified JavaScript to display
 * @param {string} props.input - The original JavaScript code
 * @returns {JSX.Element} The JsMinifierOutput component
 */
const JsMinifierOutput = ({ output, input }) => {
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
        <div className="flex flex-col gap-2">
          <Textarea value={output} rows={5} readOnly data-output />
        </div>
      </CardContent>
    </Card>
  );
};

JsMinifierOutput.propTypes = {
  output: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
};

export default JsMinifierOutput;
