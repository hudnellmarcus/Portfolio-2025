import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex justify-between items-center py-4">
        <a href="#" className="text-xl font-bold text-primary-600">
          Marcus Hudnell
        </a>
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
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
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
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
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
