import Image from "next/image";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

/**
 * Props for the BarcodeGeneratorOutput component.
 */
interface IBarcodeGeneratorOutputProps {
  output: string;
}

/**
 * BarcodeGeneratorOutput is a React functional component that displays the
 * generated barcode along with a download link.
 *
 * @param {IBarcodeGeneratorOutputProps} props - The props for the component.
 * @param {string} props.output - The URL of the generated barcode image.
 * @returns {React.JSX.Element} The rendered barcode output component.
 */
const BarcodeGeneratorOutput: React.FC<IBarcodeGeneratorOutputProps> = ({
  output,
}: IBarcodeGeneratorOutputProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Barcode</CardTitle>
        <CardDescription>Scan or download your barcode</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Image
            src={output}
            alt="Generated Barcode"
            className="w-auto max-w-xs"
            width={250}
            height={100}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BarcodeGeneratorOutput;
