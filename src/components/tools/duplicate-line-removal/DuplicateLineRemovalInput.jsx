"use client";

import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioBox } from "@/components/ui/radiobox";
import { Textarea } from "@/components/ui/textarea";

/**
 * Input component for the Duplicate Line Removal tool.
 * Provides a form for text input, sorting options, and reverse sorting.
 *
 * @component
 * @param {Object} props - Component props
 * @returns {JSX.Element} The rendered input form
 */
const DuplicateLineRemovalInput = ({
  input,
  setInput,
  sortType,
  setSortType,
  reverseSort,
  setReverseSort,
  onSubmit,
  onReset,
  onClear,
}) => {
  /**
   * Handles form submission by preventing default behavior and triggering conversion
   * @param {FormEvent} e - Form event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Duplicate Line Removal Input</CardTitle>
        <CardDescription>
          Enter your text and configure options to remove duplicate lines and sort them.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Textarea
              id="text-input"
              placeholder="Enter text with duplicate lines..."
              rows={8}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-base font-bold">Type of Sorting</Label>
            <div className="flex gap-4">
              <RadioBox
                id="sort-none"
                name="sortType"
                checked={sortType === "none"}
                onCheckedChange={() => setSortType("none")}
              >
                Don’t Sort Results
              </RadioBox>
              <RadioBox
                id="sort-alphabetical"
                name="sortType"
                checked={sortType === "alphabetical"}
                onCheckedChange={() => setSortType("alphabetical")}
              >
                Alphabetical Sort
              </RadioBox>
              <RadioBox
                id="sort-ascii"
                name="sortType"
                checked={sortType === "ascii"}
                onCheckedChange={() => setSortType("ascii")}
              >
                ASCII Sort
              </RadioBox>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="reverse-sort" checked={reverseSort} onCheckedChange={setReverseSort}>
              Reverse Sorting (Z-A or 9-0)
            </Checkbox>
          </div>

          <div className="flex gap-2">
            <Button type="submit" variant="default">
              Process
            </Button>

            <Button type="button" variant="outline" onClick={onClear}>
              Clear
            </Button>

            <Button type="button" variant="destructive" onClick={onReset}>
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

DuplicateLineRemovalInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
  reverseSort: PropTypes.bool.isRequired,
  setReverseSort: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default DuplicateLineRemovalInput;
