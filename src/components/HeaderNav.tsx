import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeaderNavProps {
  activeSection: string;
}

export const HeaderNav: React.FC<HeaderNavProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/#hero', label: '01 Start' },
    { href: '/#profile', label: '02 Profile' },
    { href: '/#skills', label: '03 Arsenal' },
    { href: '/#missions', label: '04 Missions' },
    { href: '/#pipeline', label: '05 Cognition' },
    { href: '/#superpower', label: '06 Transmit' },
    { href: '/#journey', label: '07 Levels' },
    { href: '/#diagnostic', label: '08 Solver' },
    { href: '/#contact', label: '09 Contact' },
  ];

  return (
    <header
      id="site-navigation-header"
      className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav
        id="site-navigation-pill"
        className="pointer-events-auto editorial-glass rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 sm:gap-6 shadow-2xl transition-all duration-300 hover:border-white/20 max-w-6xl w-full sm:w-auto"
      >
        <Link
          id="nav-brand-logo"
          href="/#hero"
          className="flex items-center gap-2.5 group shrink-0"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-accent animate-pulse shadow-[0_0_10px_#00f2fe]"></span>
          <span className="text-xs font-semibold tracking-wider text-white uppercase group-hover:text-cyan-accent transition-colors font-sans">
            Kaustubh Khandale
          </span>
          <span className="text-[10px] text-zinc-500 font-mono hidden xs:inline">
            LVL.10
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div
          id="nav-desktop-links"
          className="hidden xl:flex items-center gap-4 text-xs text-zinc-400 font-medium tracking-wide"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-cyan-accent transition-colors py-1 px-1.5 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            id="nav-hire-btn"
            href="/#contact"
            className="text-xs font-medium text-obsidian bg-white hover:bg-cyan-accent transition-colors px-3.5 py-1.5 rounded-full font-sans tracking-tight shrink-0 flex items-center gap-1 shadow-sm font-semibold"
          >
            <span>Hire Architect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile hamburger button */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-drawer"
          className="pointer-events-auto fixed top-20 inset-x-4 editorial-card rounded-2xl p-5 border border-white/15 shadow-2xl xl:hidden z-50 flex flex-col gap-2 backdrop-blur-xl bg-obsidian/95"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-cyan-accent">
              <Sparkles className="w-3.5 h-3.5" /> HUD NAVIGATION
            </span>
            <span>LEVEL 08</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono text-zinc-300 hover:text-cyan-accent hover:bg-white/5 p-2 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
