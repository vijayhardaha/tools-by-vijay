/**
 * Bottom section of the footer containing copyright information
 *
 * @returns {React.JSX.Element} The rendered footer bottom section.
 */
const FooterBottom: React.FC = (): React.JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="">
      <p className="text-foreground text-sm">
        © {currentYear} Tools by Vijay. All rights reserved by{" "}
        <a
          href="https://x.com/vijayhardaha"
          rel="noopener noreferrer"
          target="_blank"
          className="font-semibold hover:underline"
        >
          Vijay Hardaha
        </a>
        .
      </p>
    </div>
  );
};

export default FooterBottom;
