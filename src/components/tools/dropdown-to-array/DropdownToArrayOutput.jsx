import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copy-button";
import { Textarea } from "@/components/ui/textarea";

/**
 * Displays the converted array output with copy functionality.
 * Shows the converted array in a readonly textarea and allows the user to copy it
 * to the clipboard with visual feedback when copied.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.output - The converted array output to display
 * @param {string} props.error - Error message to display, if any
 * @returns {JSX.Element} The rendered card with output display and copy functionality
 */
const DropdownToArrayOutput = ({ output }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Converted Output</CardTitle>
            <CardDescription>Copy the generated array for use in your code</CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton text={output} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea value={output} rows={5} readOnly data-output />
      </CardContent>
    </Card>
  );
};

DropdownToArrayOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default DropdownToArrayOutput;
