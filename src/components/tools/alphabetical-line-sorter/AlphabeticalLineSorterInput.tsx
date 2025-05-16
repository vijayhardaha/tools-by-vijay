import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioBox } from "@/components/ui/radiobox";
import { Textarea } from "@/components/ui/textarea";

interface IAlphabeticalLineSorterInputProps {
  input: string;
  setInput: (value: string) => void;
  reverseSort: boolean;
  setReverseSort: (value: boolean) => void;
  removeDuplicates: boolean;
  setRemoveDuplicates: (value: boolean) => void;
  sortType: string;
  setSortType: (value: string) => void;
  onSubmit: () => void;
  onReset: () => void;
  onClear: () => void;
}

/**
 * Input component for the Alphabetical Line Sorter tool.
 * Provides a form for text input, sorting type, reverse sorting option, and duplicate removal.
 *
 * @component
 * @param {IAlphabeticalLineSorterInputProps} props - Component props
 * @returns {React.JSX.Element} The rendered input form
 */
const AlphabeticalLineSorterInput: React.FC<IAlphabeticalLineSorterInputProps> = ({
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
}: IAlphabeticalLineSorterInputProps): React.JSX.Element => {
  /**
   * Handles form submission to sort lines alphabetically
   * @param {*} e - Event object
   */
  const handleSubmit = (e: React.FormEvent) => {
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
            rows={10}
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

export default AlphabeticalLineSorterInput;
