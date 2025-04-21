import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copy-button";
import { Input } from "@/components/ui/input";

/**
 * Displays the generated password with a copy functionality.
 * Shows the generated password in a readonly input field and allows the user to copy it
 * to the clipboard with visual feedback when copied.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.password - The generated password to display
 * @returns {JSX.Element} The rendered card with password display and copy functionality
 */
const PasswordGeneratorOutput = ({ password }) => {
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

PasswordGeneratorOutput.propTypes = {
  password: PropTypes.string.isRequired,
};

export default PasswordGeneratorOutput;
