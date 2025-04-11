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
    <footer className="bg-amber-200 bg-[radial-gradient(var(--color-amber-500)_0.75px,var(--color-amber-200)_0.75px)] bg-[length:10px_10px] pt-10 pb-4">
      <div className="mx-auto max-w-5xl px-4">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
