import Logo from "../header/parts/Logo";

/**
 * Footer about section component that displays the website logo and description
 *
 * @returns {JSX.Element} The rendered footer about section.
 */
const FooterAbout = () => {
  return (
    <div className="footer-about space-y-2">
      <div>
        <Logo className="mb-3 h-12" />
      </div>

      <p className="text-foreground text-sm">
        A collection of free online tools built to make developer’s lives
        easier. From code optimization to text transformation, find the tools
        you need for your projects.
      </p>
    </div>
  );
};

export default FooterAbout;
