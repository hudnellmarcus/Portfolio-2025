import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              © {new Date().getFullYear()} Marcus Hudnell. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {/* Github */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-300"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-300"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-300"
            >
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
