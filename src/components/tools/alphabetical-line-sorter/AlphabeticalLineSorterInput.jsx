"use client";

import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioBox } from "@/components/ui/radiobox";
import { Textarea } from "@/components/ui/textarea";

/**
 * Input component for the Alphabetical Line Sorter tool.
 * Provides a form for text input, sorting type, reverse sorting option, and duplicate removal.
 *
 * @component
 * @param {Object} props - Component props
 * @returns {JSX.Element} The rendered input form
 */
const AlphabeticalLineSorterInput = ({
  input,
  setInput,
  reverseSort,
  setReverseSort,
  removeDuplicates,
  setRemoveDuplicates,
  sortType,
  setSortType,
  onSubmit,
  onReset,
  onClear,
}) => {
  /**
   * Handles form submission to sort lines alphabetically
   * @param {*} e - Event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Alphabetical Line Sorter Input</CardTitle>
        <CardDescription>
          Enter your text and configure options to sort lines alphabetically.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            id="text-input"
            placeholder="Enter text to sort alphabetically..."
            rows={8}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-wrap gap-4">
            <RadioBox
              id="sort-standard"
              name="sortType"
              checked={sortType === "standard"}
              onCheckedChange={() => setSortType("standard")}
            >
              Standard Alphabetical Order
            </RadioBox>
            <RadioBox
              id="sort-ascii"
              name="sortType"
              checked={sortType === "ascii"}
              onCheckedChange={() => setSortType("ascii")}
            >
              ASCII Sorting
            </RadioBox>
          </div>

          <div className="flex flex-wrap gap-4">
            <Checkbox id="reverse-sort" checked={reverseSort} onCheckedChange={setReverseSort}>
              Reverse Sorting (Z-A)
            </Checkbox>

            <Checkbox
              id="remove-duplicates"
              checked={removeDuplicates}
              onCheckedChange={setRemoveDuplicates}
            >
              Remove Duplicate Lines
            </Checkbox>
          </div>

          <div className="flex flex-wrap gap-2">
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

AlphabeticalLineSorterInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  reverseSort: PropTypes.bool.isRequired,
  setReverseSort: PropTypes.func.isRequired,
  removeDuplicates: PropTypes.bool.isRequired,
  setRemoveDuplicates: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default AlphabeticalLineSorterInput;
