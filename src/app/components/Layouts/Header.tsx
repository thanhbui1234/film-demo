import Link from "next/link";
import { useState } from "react";
import { FaFilm } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "Projects", href: "/projects", active: false },
  { name: "Services", href: "/services", active: false },
  { name: "About", href: "/about", active: false },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggleMobileMenu();
    }
  };

  return (
    <header className="w-full flex justify-center fixed top-0 left-0 z-50">
      <nav
        className="w-full max-w-3xl flex items-center justify-between mt-4 px-4 py-2 bg-[rgba(13,13,13,0.2)] backdrop-blur-[9px] rounded-[44px] opacity-100 shadow-lg"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          tabIndex={0}
          aria-label="Go to homepage"
        >
          <FaFilm className="text-2xl" aria-hidden="true" />
          <span className="tracking-widest">FLEX FILMS</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`relative px-1 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  link.active
                    ? "text-orange-400"
                    : "text-white hover:text-orange-300"
                }`}
                tabIndex={0}
                aria-label={link.name}
              >
                {link.name}
                {link.active && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-orange-400 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Let's Talk Button */}
        <Link
          href="#contact"
          className="hidden md:block bg-white text-black font-semibold px-6 py-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors hover:bg-orange-100"
          tabIndex={0}
          aria-label="Let's Talk"
        >
          Let's Talk
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggleMobileMenu}
          onKeyDown={handleKeyDown}
          className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg transition-transform duration-200 hover:scale-110 active:scale-95"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          tabIndex={0}
        >
          <div
            className={`transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isMobileMenuOpen ? (
              <IoClose className="w-6 h-6" aria-hidden="true" />
            ) : (
              <IoMenu className="w-6 h-6" aria-hidden="true" />
            )}
          </div>
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen
              ? "opacity-100 max-h-[500px]"
              : "opacity-0 max-h-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="border-b border-gray-100 last:border-b-0"
              >
                <Link
                  href={link.href}
                  className={`block px-6 py-4 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    link.active
                      ? "text-orange-400 bg-orange-50"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                  onClick={handleToggleMobileMenu}
                  tabIndex={0}
                  aria-label={link.name}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="p-4">
              <Link
                href="#contact"
                className="block w-full bg-orange-500 text-white font-semibold px-6 py-3 rounded-full text-center shadow focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors hover:bg-orange-600"
                onClick={handleToggleMobileMenu}
                tabIndex={0}
                aria-label="Let's Talk"
              >
                Let's Talk
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
