"use client";

import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/**
 * Component for HTML minifier input and options
 *
 * @param {Object} props - Component props
 * @param {string} props.input - The HTML input to be minified
 * @param {Function} props.setInput - Function to update input state
 * @param {Object} props.options - Minification options
 * @param {Function} props.updateOption - Function to update a specific option
 * @param {Function} props.onMinify - Function called when minify button is clicked
 * @param {Function} props.onClear - Function to clear the input
 * @param {Function} props.onReset - Function to reset all options to defaults
 * @param {boolean} props.isLoading - Indicates whether the minification process is ongoing
 * @returns {JSX.Element} The HtmlMinifierInput component
 */
const HtmlMinifierInput = ({
  input = "",
  setInput,
  options,
  updateOption,
  onMinify,
  onClear,
  onReset,
  isLoading, // Added isLoading prop
}) => {
  /**
   * Handles form submission and triggers HTML minification
   *
   * @param {FormEvent} e - The form event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onMinify();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>HTML Input</CardTitle>
        <CardDescription>
          Paste your HTML code and customize minification options
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            placeholder="Paste HTML code here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-28 font-mono text-xs"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-base font-bold">Content Options</h3>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="removeComments"
                  checked={options.removeComments}
                  onCheckedChange={(checked) =>
                    updateOption("removeComments", checked)
                  }
                />
                <Label htmlFor="removeComments">Remove comments</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="collapseWhitespace"
                  checked={options.collapseWhitespace}
                  onCheckedChange={(checked) =>
                    updateOption("collapseWhitespace", checked)
                  }
                />
                <Label htmlFor="collapseWhitespace">Collapse whitespace</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="conservativeCollapse"
                  checked={options.conservativeCollapse}
                  onCheckedChange={(checked) =>
                    updateOption("conservativeCollapse", checked)
                  }
                />
                <Label htmlFor="conservativeCollapse">
                  Conservative whitespace collapse
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="minifyCSS"
                  checked={options.minifyCSS}
                  onCheckedChange={(checked) =>
                    updateOption("minifyCSS", checked)
                  }
                />
                <Label htmlFor="minifyCSS">Minify CSS</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="minifyJS"
                  checked={options.minifyJS}
                  onCheckedChange={(checked) =>
                    updateOption("minifyJS", checked)
                  }
                />
                <Label htmlFor="minifyJS">Minify JavaScript</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="minifyURLs"
                  checked={options.minifyURLs}
                  onCheckedChange={(checked) =>
                    updateOption("minifyURLs", checked)
                  }
                />
                <Label htmlFor="minifyURLs">Minify URLs</Label>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold">Element Options</h3>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="removeEmptyElements"
                  checked={options.removeEmptyElements}
                  onCheckedChange={(checked) =>
                    updateOption("removeEmptyElements", checked)
                  }
                />
                <Label htmlFor="removeEmptyElements">
                  Remove empty elements
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="removeEmptyAttributes"
                  checked={options.removeEmptyAttributes}
                  onCheckedChange={(checked) =>
                    updateOption("removeEmptyAttributes", checked)
                  }
                />
                <Label htmlFor="removeEmptyAttributes">
                  Remove empty attributes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="collapseBooleanAttributes"
                  checked={options.collapseBooleanAttributes}
                  onCheckedChange={(checked) =>
                    updateOption("collapseBooleanAttributes", checked)
                  }
                />
                <Label htmlFor="collapseBooleanAttributes">
                  Collapse boolean attributes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="removeAttributeQuotes"
                  checked={options.removeAttributeQuotes}
                  onCheckedChange={(checked) =>
                    updateOption("removeAttributeQuotes", checked)
                  }
                />
                <Label htmlFor="removeAttributeQuotes">
                  Remove attribute quotes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="removeRedundantAttributes"
                  checked={options.removeRedundantAttributes}
                  onCheckedChange={(checked) =>
                    updateOption("removeRedundantAttributes", checked)
                  }
                />
                <Label htmlFor="removeRedundantAttributes">
                  Remove redundant attributes
                </Label>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold">Advanced Options</h3>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="removeScriptTypeAttributes"
                  checked={options.removeScriptTypeAttributes}
                  onCheckedChange={(checked) =>
                    updateOption("removeScriptTypeAttributes", checked)
                  }
                />
                <Label htmlFor="removeScriptTypeAttributes">
                  Remove script type attributes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="removeStyleLinkTypeAttributes"
                  checked={options.removeStyleLinkTypeAttributes}
                  onCheckedChange={(checked) =>
                    updateOption("removeStyleLinkTypeAttributes", checked)
                  }
                />
                <Label htmlFor="removeStyleLinkTypeAttributes">
                  Remove style/link type attributes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sortAttributes"
                  checked={options.sortAttributes}
                  onCheckedChange={(checked) =>
                    updateOption("sortAttributes", checked)
                  }
                />
                <Label htmlFor="sortAttributes">Sort attributes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sortClassName"
                  checked={options.sortClassName}
                  onCheckedChange={(checked) =>
                    updateOption("sortClassName", checked)
                  }
                />
                <Label htmlFor="sortClassName">Sort class names</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="decodeEntities"
                  checked={options.decodeEntities}
                  onCheckedChange={(checked) =>
                    updateOption("decodeEntities", checked)
                  }
                />
                <Label htmlFor="decodeEntities">Decode entities</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="useShortDoctype"
                  checked={options.useShortDoctype}
                  onCheckedChange={(checked) =>
                    updateOption("useShortDoctype", checked)
                  }
                />
                <Label htmlFor="useShortDoctype">Use short doctype</Label>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              type="submit"
              variant="default"
              disabled={!input || isLoading} // Disable button when loading
            >
              {isLoading ? "Minifying..." : "Minify"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClear}
              disabled={isLoading} // Disable button when loading
            >
              Clear
            </Button>
            <Button
              type="reset"
              variant="destructive"
              onClick={onReset}
              disabled={isLoading} // Disable button when loading
            >
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

HtmlMinifierInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
  onMinify: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired, // Added isLoading prop type
};

export default HtmlMinifierInput;
