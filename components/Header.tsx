import { useState } from "react";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-dark2 text-primary p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Tools by Vijay</div>
      <HiMenu
        className="text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="fixed inset-0 bg-dark3 p-4">
          <div className="text-xl font-bold mb-4">Tools by Vijay</div>
          <nav>
            <ul className="space-y-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="mt-4 flex space-x-4">
            <a href="#">FB</a>
            <a href="#">TW</a>
            <a href="#">IG</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
