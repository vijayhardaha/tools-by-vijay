import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the slugified output and provides copy functionality.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.output - The slugified text to display
 * @returns {JSX.Element} The SlugifyOutput component
 */
const SlugifyOutput = ({ output }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Output</CardTitle>
        <CardDescription>Cleaned and formatted slug</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Input type="text" value={output} readOnly data-output />
          <CopyButton text={output} />
        </div>
      </CardContent>
    </Card>
  );
};

SlugifyOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default SlugifyOutput;
