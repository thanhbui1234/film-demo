import Link from "next/link";
import { FaFilm } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "Projects", href: "/projects", active: false },
  { name: "Services", href: "/services", active: false },
  { name: "About", href: "/about", active: false },
];

const Header = () => {
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

        {/* Nav Links */}
        <ul className="flex gap-8 items-center">
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

        {/* Let's Talk Button */}
        <Link
          href="#contact"
          className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors hover:bg-orange-100"
          tabIndex={0}
          aria-label="Let's Talk"
        >
          Let's Talk
        </Link>
      </nav>
    </header>
  );
};

export default Header;
