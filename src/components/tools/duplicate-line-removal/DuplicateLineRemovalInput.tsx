"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioBox } from "@/components/ui/radiobox";
import { Textarea } from "@/components/ui/textarea";

interface DuplicateLineRemovalInputProps {
  input: string;
  setInput: (value: string) => void;
  sortType: string;
  setSortType: (value: string) => void;
  reverseSort: boolean;
  setReverseSort: (value: boolean) => void;
  onSubmit: () => void;
  onReset: () => void;
  onClear: () => void;
}

/**
 * Input component for the Duplicate Line Removal tool.
 * Provides a form for text input, sorting options, and reverse sorting.
 *
 * @component
 * @param {DuplicateLineRemovalInputProps} props - Component props
 * @returns {JSX.Element} The rendered input form
 */
const DuplicateLineRemovalInput: React.FC<DuplicateLineRemovalInputProps> = ({
  input,
  setInput,
  sortType,
  setSortType,
  reverseSort,
  setReverseSort,
  onSubmit,
  onReset,
  onClear,
}: DuplicateLineRemovalInputProps): React.JSX.Element => {
  /**
   * Handles form submission by preventing default behavior and triggering conversion.
   * @param {React.FormEvent} e - Form event object.
   */
  const handleSubmit = (e: React.FormEvent) => {
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            id="text-input"
            placeholder="Enter text with duplicate lines..."
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-wrap gap-4">
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

          <div className="flex flex-wrap">
            <Checkbox id="reverse-sort" checked={reverseSort} onCheckedChange={setReverseSort}>
              Reverse Sorting (Z-A or 9-0)
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

export default DuplicateLineRemovalInput;
