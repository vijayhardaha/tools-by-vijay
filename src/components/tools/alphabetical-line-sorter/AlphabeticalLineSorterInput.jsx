"use client";

import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
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
  textInput,
  setTextInput,
  reverseSort,
  setReverseSort,
  removeDuplicates,
  setRemoveDuplicates,
  sortType,
  setSortType,
  onProcess,
  onReset,
  onClear,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onProcess();
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Textarea
              id="text-input"
              placeholder="Enter text to sort alphabetically..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              className="min-h-52 font-mono text-sm"
            />
          </div>

          <div>
            <Label className="text-base font-bold">Sorting Type</Label>
            <div className="mt-2 flex gap-4">
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
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="reverse-sort" checked={reverseSort} onCheckedChange={setReverseSort} />
            <Label htmlFor="reverse-sort">Reverse Sorting (Z-A)</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remove-duplicates"
              checked={removeDuplicates}
              onCheckedChange={setRemoveDuplicates}
            />
            <Label htmlFor="remove-duplicates">Remove Duplicate Lines</Label>
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

AlphabeticalLineSorterInput.propTypes = {
  textInput: PropTypes.string.isRequired,
  setTextInput: PropTypes.func.isRequired,
  reverseSort: PropTypes.bool.isRequired,
  setReverseSort: PropTypes.func.isRequired,
  removeDuplicates: PropTypes.bool.isRequired,
  setRemoveDuplicates: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
  onProcess: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default AlphabeticalLineSorterInput;
