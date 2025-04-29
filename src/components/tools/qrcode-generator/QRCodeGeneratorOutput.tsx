import Image from "next/image";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

interface QRCodeGeneratorOutputProps {
  /**
   * The URL of the generated QR code image.
   */
  output: string;
}

/**
 * QRCodeGeneratorOutput is a React functional component that displays the
 * generated QR code along with a download link.
 *
 * @param {QRCodeGeneratorOutputProps} props - The props for the component.
 * @param {string} props.output - The URL of the generated QR code image.
 * @returns {React.JSX.Element} The rendered QR code output component.
 */
const QRCodeGeneratorOutput: React.FC<QRCodeGeneratorOutputProps> = ({
  output,
}): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated QR Code</CardTitle>
        <CardDescription>Scan or download your QR code</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Image
            src={output}
            alt="Generated QR Code"
            className="w-auto max-w-xs"
            width={250}
            height={250}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default QRCodeGeneratorOutput;
