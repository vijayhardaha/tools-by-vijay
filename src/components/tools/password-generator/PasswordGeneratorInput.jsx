"use client";

import PropTypes from "prop-types";
import { FiInfo } from "react-icons/fi";

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
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PasswordGeneratorInput = ({
  length,
  setLength,
  useUppercase,
  setUseUppercase,
  useLowercase,
  setUseLowercase,
  useNumbers,
  setUseNumbers,
  useSymbols,
  setUseSymbols,
  excludeSimilar,
  setExcludeSimilar,
  onGenerate,
  onReset,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Password Options</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Customize your password settings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password-length">Password Length: {length}</Label>
              <span className="text-muted-foreground text-sm">
                {length} characters
              </span>
            </div>
            <Slider
              id="password-length"
              min={4}
              max={64}
              step={1}
              value={[length]}
              onValueChange={(value) => setLength(value[0])}
            />
          </div>

          <div className="space-y-4">
            <p className="font-medium">Character Types</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="useUppercase"
                  checked={useUppercase}
                  onCheckedChange={setUseUppercase}
                />
                <Label htmlFor="useUppercase">Include Uppercase (A-Z)</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="useLowercase"
                  checked={useLowercase}
                  onCheckedChange={setUseLowercase}
                />
                <Label htmlFor="useLowercase">Include Lowercase (a-z)</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="useNumbers"
                  checked={useNumbers}
                  onCheckedChange={setUseNumbers}
                />
                <Label htmlFor="useNumbers">Include Numbers (0-9)</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="useSymbols"
                  checked={useSymbols}
                  onCheckedChange={setUseSymbols}
                />
                <Label htmlFor="useSymbols">Include Symbols (!@#$...)</Label>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="excludeSimilar"
              checked={excludeSimilar}
              onCheckedChange={setExcludeSimilar}
            />
            <Label htmlFor="excludeSimilar" className="flex items-center">
              Exclude similar characters (i, l, 1, L, o, 0, O)
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <FiInfo className="text-muted-foreground ml-1.5 h-4 w-4 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>
                      This option removes characters that look alike (such as
                      the letter ‘O’ and number ‘0’). Use this to create
                      passwords that are less confusing to read and type,
                      especially when sharing passwords verbally or in print.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
          </div>

          <div className="flex justify-start gap-2">
            <Button type="submit" variant="default" size="lg">
              Generate Password
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="lg"
              onClick={onReset}
            >
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

PasswordGeneratorInput.propTypes = {
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
  useUppercase: PropTypes.bool.isRequired,
  setUseUppercase: PropTypes.func.isRequired,
  useLowercase: PropTypes.bool.isRequired,
  setUseLowercase: PropTypes.func.isRequired,
  useNumbers: PropTypes.bool.isRequired,
  setUseNumbers: PropTypes.func.isRequired,
  useSymbols: PropTypes.bool.isRequired,
  setUseSymbols: PropTypes.func.isRequired,
  excludeSimilar: PropTypes.bool.isRequired,
  setExcludeSimilar: PropTypes.func.isRequired,
  onGenerate: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default PasswordGeneratorInput;
