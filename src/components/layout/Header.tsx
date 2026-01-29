import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState, MouseEvent } from "react";
import ReactGA from "react-ga4";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);

    if (targetId) {
      ReactGA.event({
        category: "Navigation",
        action: "Navigate to Section",
        label: targetId,
      });

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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

  const handleMobileNavClick = (e: MouseEvent<HTMLAnchorElement>) => {
    handleAnchorClick(e);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-primary-900/90 backdrop-blur-sm"}`}
    >
      <div className="container flex items-center justify-between py-4 px-4 md:px-6">
        {/* Mobile menu button */}
        <button
          className={`md:hidden focus:outline-none p-2 rounded-lg transition-colors ${
            isScrolled ? "text-primary-800 hover:bg-primary-100" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
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
            ${isScrolled ? "text-primary-800" : "text-white"}`}
        >
          <a
            href="#about-section"
            onClick={handleAnchorClick}
            className="font-medium hover:text-primary-500 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={handleAnchorClick}
            className="font-medium hover:text-primary-500 transition-colors"
          >
            Projects
          </a>
          <a
            href="/resume.pdf"
            download="Marcus_Hudnell_Resume.pdf"
            className="font-medium hover:text-primary-500 transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={handleAnchorClick}
            className="font-medium hover:text-primary-500 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className={`flex flex-col px-4 pb-6 pt-2 space-y-1 ${
          isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-primary-900/95 backdrop-blur-sm"
        }`}>
          <a
            href="#about-section"
            onClick={handleMobileNavClick}
            className={`py-3 px-4 rounded-lg font-medium transition-colors ${
              isScrolled
                ? "text-primary-800 hover:bg-primary-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={handleMobileNavClick}
            className={`py-3 px-4 rounded-lg font-medium transition-colors ${
              isScrolled
                ? "text-primary-800 hover:bg-primary-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            Projects
          </a>
          <a
            href="/resume.pdf"
            download="Marcus_Hudnell_Resume.pdf"
            className={`py-3 px-4 rounded-lg font-medium transition-colors ${
              isScrolled
                ? "text-primary-800 hover:bg-primary-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={handleMobileNavClick}
            className={`py-3 px-4 rounded-lg font-medium transition-colors ${
              isScrolled
                ? "text-primary-800 hover:bg-primary-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
