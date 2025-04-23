import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${isScrolled ? "bg-white/60 backdrop-blur-sm" : "bg-primary-900/96"}`}
    >
      <div className="container flex items-right py-4 w-full items-right">
        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        <div className="flex-grow"></div>
        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex space-x-10 transition-colors
            ${isScrolled ? "text-primary-800" : "text-white"}
            }`}
        >
          <a href="#about" className="font-medium hover:text-primary-600">
            About
          </a>
          <a href="#projects" className="font-medium hover:text-primary-600">
            Projects
          </a>
          <a href="#skills" className="font-medium hover:text-primary-600">
            Skills
          </a>
          <a href="#contact" className="font-medium hover:text-primary-600">
            Contact
          </a>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-1 bg-white">
              <a
                href="#about"
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "hover:text-primary-600"
                    : "hover:text-primary-200"
                }`}
              >
                About
              </a>
              <a
                href="#projects"
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "hover:text-primary-600"
                    : "hover:text-primary-200"
                }`}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "hover:text-primary-600"
                    : "hover:text-primary-200"
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
