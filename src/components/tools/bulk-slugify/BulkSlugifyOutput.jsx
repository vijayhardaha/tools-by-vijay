"use client";

import { useState } from "react";

import { CopyIcon, CheckIcon } from "lucide-react";
import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const BulkSlugifyOutput = ({ output }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const copyToClipboard = async (text, index = null) => {
    await navigator.clipboard.writeText(text);
    if (index === null) {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 1000);
    } else {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1000);
    }
  };

  const lines = output.split("\n").filter((line) => line.trim() !== "");
  const unfilteredLinesLength = output.split("\n").length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>OUTPUT</CardTitle>
        <CardDescription>Cleaned and formatted slugs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Textarea
            value={output}
            readOnly
            disabled={!output}
            rows={unfilteredLinesLength || 1}
            className="resize-none outline-none focus-visible:ring-0 focus-visible:outline-none"
          />
          <Button
            variant="primary"
            disabled={!output}
            onClick={() => copyToClipboard(output)}
            className={cn("min-w-40", {
              "bg-green-600 text-white hover:bg-green-600 hover:text-white":
                copiedAll,
            })}
          >
            {copiedAll ? (
              <CheckIcon className="mr-1 h-4 w-4" />
            ) : (
              <CopyIcon className="mr-1 h-4 w-4" />
            )}
            {copiedAll ? "Copied All!" : "Copy All"}
          </Button>
          <div className="flex flex-col gap-2">
            {lines.map((line, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={line}
                  readOnly
                  disabled={!line}
                  className="flex-1 outline-none focus-visible:ring-0 focus-visible:outline-none"
                />
                <Button
                  variant="primary"
                  disabled={!line}
                  onClick={() => copyToClipboard(line, index)}
                  className={cn("min-w-40", {
                    "bg-green-600 text-white hover:bg-green-600 hover:text-white":
                      copiedIndex === index,
                  })}
                >
                  {copiedIndex === index ? (
                    <CheckIcon className="mr-1 h-4 w-4" />
                  ) : (
                    <CopyIcon className="mr-1 h-4 w-4" />
                  )}
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

BulkSlugifyOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default BulkSlugifyOutput;
