"use client";

import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import CopyButton from "@/components/ui/copy-button";
import { Textarea } from "@/components/ui/textarea";

/**
 * Component that displays the inlined HTML output.
 *
 * @param {Object} props - Component props
 * @param {string} props.output - The inlined HTML output
 * @returns {JSX.Element} The CssInlinerOutput component
 */
const CssInlinerOutput = ({ output }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Output</CardTitle>
        <CardDescription>The resulting HTML with inlined CSS will appear below.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Textarea value={output} readOnly />
          <CopyButton
            copied={false}
            disabled={!output}
            onClick={() => navigator.clipboard.writeText(output)}
          />
        </div>
      </CardContent>
    </Card>
  );
};

CssInlinerOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default CssInlinerOutput;
