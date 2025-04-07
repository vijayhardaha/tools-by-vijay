/**
 * Bottom section of the footer containing copyright information
 *
 * @returns {JSX.Element} The rendered footer bottom section.
 */
const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t pt-4">
      <p className="text-foreground text-center text-sm">
        © {currentYear} Tools by Vijay. All rights reserved by{" "}
        <a
          href="https://x.com/vijayhardaha"
          rel="noopener noreferrer"
          target="_blank"
          className="text-primary-400 font-bold underline"
        >
          Vijay Hardaha
        </a>
        .
      </p>
    </div>
  );
};

export default FooterBottom;
