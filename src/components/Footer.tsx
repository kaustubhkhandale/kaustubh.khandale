import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      id="site-footer"
      className="py-12 border-t border-white/5 text-center text-xs font-mono text-zinc-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>DESIGNED & ARCHITECTED BY ALEX VANCE</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-accent transition-colors flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-accent transition-colors flex items-center gap-1"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="https://figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-accent transition-colors flex items-center gap-1"
          >
            <span>Figma Community</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
        <div>
          <span className="text-emerald-400">STATUS: 100% PRODUCTION READY</span>
        </div>
      </div>
    </footer>
  );
};
