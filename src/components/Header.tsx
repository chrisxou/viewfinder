"use client";

import Link from "next/link";
import VeilLogo from "@/components/VeilLogo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <VeilLogo size={48} className="hidden sm:block" />
          <VeilLogo size={36} className="sm:hidden" />
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          <nav>
            <ul className="flex gap-3 md:gap-8 text-[10px] md:text-sm tracking-wider uppercase text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
