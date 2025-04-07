import FooterBottom from "@/components/footer/FooterBottom";
import FooterTop from "@/components/footer/FooterTop";

/**
 * Footer component that provides a consistent footer structure
 * with top section for navigation and bottom section for copyright.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <footer className="bg-alt-50 py-10">
      <div className="mx-auto max-w-5xl px-4">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
