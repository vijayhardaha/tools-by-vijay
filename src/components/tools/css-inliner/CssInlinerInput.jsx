"use client";

import PropTypes from "prop-types";

import { Alert } from "@/components/ui/alert"; // Import Alert component
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
 * @param {Function} props.onSubmit - Function to inline CSS
 * @param {Function} props.onClear - Function to clear inputs
 * @param {boolean} props.isLoading - Indicates if the API call is in progress
 * @param {string} props.error - Error message to display
 * @returns {JSX.Element} The CssInlinerInput component
 */
const CssInlinerInput = ({
  htmlInput,
  setHtmlInput,
  cssInput,
  setCssInput,
  onSubmit,
  onClear,
  isLoading,
  error,
}) => {
  /**
   * Handles form submission to inline CSS.
   *
   * @param {Object} e - Event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Input HTML and CSS</CardTitle>
        <CardDescription>
          Provide your HTML and CSS below to inline the styles into the HTML.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="html-input">HTML Input</Label>
            <Textarea
              placeholder="Enter HTML here..."
              rows={5}
              value={htmlInput}
              onChange={(e) => setHtmlInput(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="css-input">CSS Input</Label>
            <Textarea
              placeholder="Enter CSS here..."
              rows={5}
              value={cssInput}
              onChange={(e) => setCssInput(e.target.value)}
            />
          </div>
          <div className="mt-2 flex gap-2">
            <Button type="submit" variant="default" disabled={!htmlInput || !cssInput || isLoading}>
              {isLoading ? "Processing..." : "Inline CSS"}
            </Button>

            <Button type="button" variant="outline" onClick={onClear} disabled={isLoading}>
              Clear
            </Button>
          </div>

          {error && <Alert variant="danger" title="Error" text={error} />}
        </form>
      </CardContent>
    </Card>
  );
};

CssInlinerInput.propTypes = {
  htmlInput: PropTypes.string.isRequired,
  setHtmlInput: PropTypes.func.isRequired,
  cssInput: PropTypes.string.isRequired,
  setCssInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default CssInlinerInput;
