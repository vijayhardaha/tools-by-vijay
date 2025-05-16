import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copyButton";

/**
 * Represents a single URL shortening result
 */
interface IUrlShortenerResult {
  originalUrl: string;
  shortenedUrl: string;
  isValid: boolean;
}

/**
 * Props for the UrlShortenerOutput component
 */
interface IUrlShortenerOutputProps {
  results: IUrlShortenerResult[];
}

/**
 * Component to display the results of the URL shortening process
 *
 * This component renders a list of shortened URLs along with their original URLs,
 * validity status, and options to copy individual or all valid shortened URLs.
 *
 * @param {IUrlShortenerOutputProps} props - Props for the component
 * @returns {React.JSX.Element} The rendered component
 */
const UrlShortenerOutput: React.FC<IUrlShortenerOutputProps> = ({
  results,
}: IUrlShortenerOutputProps): React.JSX.Element => {
  /**
   * Creates a text string containing all valid shortened URLs
   *
   * @returns {string} All valid shortened URLs joined by newlines
   */
  const getAllShortenedUrls = (): string => {
    return results
      .filter((result) => result.isValid)
      .map((result) => result.shortenedUrl)
      .join("\n");
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Shortened URLs</CardTitle>
            <CardDescription>Results from URL shortening process</CardDescription>
          </div>
          {results.length > 0 && (
            <div className="inline-flex">
              <CopyButton
                text={getAllShortenedUrls()}
                copyText="Copy All Valid URLs"
                copiedText="Copied All!"
              />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {results.map((result, index) => (
            <div key={index} className="border-border rounded-lg border p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={result.isValid ? "success" : "danger"}
                        className="font-medium"
                      >
                        {result.isValid ? "Valid" : "Invalid URL"}
                      </Badge>
                      <span className="text-muted-foreground max-w-60 truncate font-mono text-sm">
                        {result.originalUrl}
                      </span>
                    </div>
                  </div>

                  {result.isValid ? (
                    <Alert
                      variant="default"
                      icon={null}
                      className="h-10 py-2 font-mono"
                      text={
                        <a
                          href={result.shortenedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {result.shortenedUrl}
                        </a>
                      }
                    />
                  ) : (
                    <Alert
                      variant="danger"
                      text="Could not shorten this URL. Please check that it's valid and includes the protocol (http:// or https://)."
                    />
                  )}
                </div>
                {result.isValid && (
                  <div>
                    <CopyButton text={result.shortenedUrl} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UrlShortenerOutput;
