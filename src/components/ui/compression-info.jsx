import PropTypes from "prop-types";

/**
 * Utility function to wrap text in a <code> tag.
 *
 * @param {string} text - The text to wrap.
 * @returns {JSX.Element} The text wrapped in a <code> tag.
 */
const wrapInCode = (text) => (
  <code className="bg-muted rounded px-1 py-0.5 text-xs font-medium text-pink-500">{text}</code>
);

/**
 * Displays compression information based on input and output data.
 *
 * @param {Object} props - The component props.
 * @param {string | Blob | null} props.input - The original input data.
 * @param {string | Blob | null} props.output - The compressed output data.
 * @returns {JSX.Element} A JSX element describing the size and compression statistics.
 */
export const CompressionInfo = ({ input, output }) => {
  if (!output) return wrapInCode("Output is empty");

  const formatSize = (size) => {
    if (size >= 1024 * 1024) {
      return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    } else if (size >= 1024) {
      return `${(size / 1024).toFixed(2)} KB`;
    }

    return `${size} bytes`;
  };

  const outputSize = new Blob([output]).size;
  if (outputSize === 0) return <>Compressed size: {wrapInCode("0 bytes")}</>;

  const compressedSize = formatSize(outputSize);
  let stats = null;

  if (input) {
    const inputSize = new Blob([input]).size;

    if (inputSize > 0) {
      const originalSize = formatSize(inputSize);
      const saved = inputSize - outputSize;
      const percent = ((saved / inputSize) * 100).toFixed(2);

      stats = (
        <>
          Original size: {wrapInCode(originalSize)} • Compressed size: {wrapInCode(compressedSize)}{" "}
          • Saving: {wrapInCode(formatSize(saved))} • Compression: {wrapInCode(`${percent}%`)}
        </>
      );
    }
  }

  return stats || <>Compressed size: {wrapInCode(compressedSize)}</>;
};

CompressionInfo.propTypes = {
  input: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired,
};
