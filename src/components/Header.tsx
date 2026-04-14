"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

interface HeaderProps {
  orientation?: "landscape" | "portrait";
  onOrientationChange?: (o: "landscape" | "portrait") => void;
}

const Header = ({ orientation, onOrientationChange }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo size={48} className="hidden sm:block" />
          <Logo size={26} variant="mark-only" className="sm:hidden" />
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          {/* Orientation toggle — desktop only, home page only */}
          {onOrientationChange && (
            <div className="hidden sm:flex items-center gap-3">
              {/* Landscape icon: wide rectangle */}
              <button
                type="button"
                title="Landscape"
                onClick={() => onOrientationChange("landscape")}
                className={`transition-colors ${
                  orientation === "landscape" ? "text-white" : "text-white/25 hover:text-white/60"
                }`}
              >
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                  <rect x="0.5" y="0.5" width="19" height="13" stroke="currentColor" />
                </svg>
              </button>
              {/* Portrait icon: tall rectangle */}
              <button
                type="button"
                title="Portrait"
                onClick={() => onOrientationChange("portrait")}
                className={`transition-colors ${
                  orientation === "portrait" ? "text-white" : "text-white/25 hover:text-white/60"
                }`}
              >
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
                  <rect x="0.5" y="0.5" width="13" height="19" stroke="currentColor" />
                </svg>
              </button>
            </div>
          )}

          <nav>
            <ul className="flex gap-4 sm:gap-8 text-[10px] sm:text-sm tracking-wider uppercase text-gray-400">
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
