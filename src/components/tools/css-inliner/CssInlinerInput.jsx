"use client";

import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/**
 * Component for inputting HTML and CSS for inlining.
 *
 * @param {Object} props - Component props
 * @param {string} props.htmlInput - The HTML input
 * @param {Function} props.setHtmlInput - Function to update HTML input
 * @param {string} props.cssInput - The CSS input
 * @param {Function} props.setCssInput - Function to update CSS input
 * @param {Function} props.onInlineCss - Function to inline CSS
 * @param {Function} props.onClear - Function to clear inputs
 * @returns {JSX.Element} The CssInlinerInput component
 */
const CssInlinerInput = ({
  htmlInput,
  setHtmlInput,
  cssInput,
  setCssInput,
  onInlineCss,
  onClear,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Input HTML and CSS</CardTitle>
        <CardDescription>
          Provide your HTML and CSS below to inline the styles into the HTML.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="html-input">HTML Input</Label>
            <Textarea
              placeholder="Enter HTML here..."
              value={htmlInput}
              onChange={(e) => setHtmlInput(e.target.value)}
              className="min-h-28"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="css-input">CSS Input</Label>
            <Textarea
              placeholder="Enter CSS here..."
              value={cssInput}
              onChange={(e) => setCssInput(e.target.value)}
              className="min-h-28"
            />
          </div>
          <div className="mt-2 flex gap-2">
            <Button
              type="button"
              variant="default"
              onClick={onInlineCss}
              disabled={!htmlInput || !cssInput}
            >
              Inline CSS
            </Button>
            <Button type="button" variant="outline" onClick={onClear}>
              Clear
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

CssInlinerInput.propTypes = {
  htmlInput: PropTypes.string.isRequired,
  setHtmlInput: PropTypes.func.isRequired,
  cssInput: PropTypes.string.isRequired,
  setCssInput: PropTypes.func.isRequired,
  onInlineCss: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default CssInlinerInput;
