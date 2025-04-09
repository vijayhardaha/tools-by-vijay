"use client";

import { useState } from "react";

import { CopyIcon, CheckIcon } from "lucide-react";
import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const PasswordGeneratorOutput = ({ password }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>GENERATED PASSWORD</CardTitle>
        <p className="text-muted-foreground text-sm">Your secure password</p>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input
            value={password}
            readOnly
            disabled={!password}
            type="text"
            className="font-mono outline-none focus-visible:ring-0 focus-visible:outline-none"
          />
          <Button
            variant="primary"
            disabled={!password}
            onClick={copyToClipboard}
            className={cn("min-w-40", {
              "bg-green-600 text-white hover:bg-green-600 hover:text-white":
                copied,
            })}
          >
            {copied ? (
              <CheckIcon className="mr-1 h-4 w-4" />
            ) : (
              <CopyIcon className="mr-1 h-4 w-4" />
            )}
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

PasswordGeneratorOutput.propTypes = {
  password: PropTypes.string.isRequired,
};

export default PasswordGeneratorOutput;
