import React from "react";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";
import { Input } from "@/components/ui/input";

/**
 * Interface for the PasswordGeneratorOutput component props.
 */
interface IPasswordGeneratorOutputProps {
  password: string;
}

/**
 * Displays the generated password with a copy functionality.
 * Shows the generated password in a readonly input field and allows the user to copy it
 * to the clipboard with visual feedback when copied.
 *
 * @param {IPasswordGeneratorOutputProps} props - Component props.
 * @returns {React.JSX.Element} The rendered card with password display and copy functionality.
 */
const PasswordGeneratorOutput: React.FC<IPasswordGeneratorOutputProps> = ({
  password,
}: IPasswordGeneratorOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Password</CardTitle>
        <CardDescription>Your secure password</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Input type="text" value={password} readOnly data-output />
          <CopyButton text={password} />
        </div>
      </CardContent>
    </Card>
  );
};

export default PasswordGeneratorOutput;
