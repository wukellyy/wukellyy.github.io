import { NAV_LINKS } from "../constants";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="w-full sticky top-0 z-10 bg-milk">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-10 sm:px-12 py-4">
        {/* Logo */}
        <a href="/">
          <span className="font-monofett text-5xl hover:text-orange-500 cursor-pointer">
            KW
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <li
              key={link}
              className="hover:scale-105 transition ease-in-out duration-300"
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-orange-500 hover:border-b-2 hover:border-orange-500 transition ease-in-out duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl cursor-pointer z-50 hover:scale-105 transition-transform ease-in-out duration-200"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <HiOutlineX className="text-milk" />
          ) : (
            <HiOutlineMenu />
          )}
        </button>

        {/* Mobile Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMobileMenu}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden w-[60%] sm:w-[40%] h-screen fixed top-0 right-0 bg-gray-blue px-12 py-4 transform transition-transform ease-in-out duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-6 mt-16 text-milk">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-orange-500 transition ease-in-out duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
