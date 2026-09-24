import React, { useEffect } from 'react';
import { X, Layers, Cpu, Code2 } from 'lucide-react';
import { CaseStudy } from '../types';

interface BlueprintModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const BlueprintModal: React.FC<BlueprintModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (caseStudy) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  const { blueprint } = caseStudy;

  return (
    <div
      id="blueprint-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-obsidian/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-blueprint-title"
    >
      <div
        id="blueprint-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="editorial-card rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative border border-white/15 shadow-2xl"
      >
        <button
          id="modal-close-icon-btn"
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-zinc-400 hover:text-white hover:border-cyan-accent hover:bg-white/5 transition-all cursor-pointer"
          aria-label="Close blueprint modal"
        >
          <X className="w-4 h-4" />
        </button>

        <span
          id="modal-blueprint-tag"
          className="text-xs font-mono text-cyan-accent block mb-2 font-medium tracking-wide flex items-center gap-1.5"
        >
          <Layers className="w-3.5 h-3.5" /> {blueprint.tag}
        </span>

        <h3
          id="modal-blueprint-title"
          className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-6 font-sans pr-10"
        >
          {blueprint.title}
        </h3>

        <div className="space-y-6 text-zinc-300 text-sm font-light leading-relaxed">
          <div className="p-5 rounded-2xl bg-surface/70 border border-white/5">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
              <Cpu className="w-3.5 h-3.5 text-cyan-accent" /> Challenge & Context
            </h4>
            <p className="text-zinc-300 leading-relaxed font-light">{blueprint.challenge}</p>
          </div>

          <div className="p-5 rounded-2xl bg-surface/70 border border-white/5">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
              <Layers className="w-3.5 h-3.5 text-emerald-400" /> Architectural Solution
            </h4>
            <p className="text-zinc-300 leading-relaxed font-light">{blueprint.solution}</p>
          </div>

          <div className="p-5 rounded-2xl bg-surface/70 border border-white/5">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" /> Production Tech Stack
            </h4>
            <p className="font-mono text-xs text-cyan-accent bg-obsidian/60 p-3 rounded-xl border border-white/5">
              {blueprint.stack}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-500">
            CONFIDENTIAL ARCHITECTURAL SPECIFICATION
          </span>
          <button
            id="modal-close-action-btn"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white text-obsidian text-xs font-semibold hover:bg-cyan-accent transition-colors cursor-pointer shadow-sm"
          >
            Close Blueprint
          </button>
        </div>
      </div>
    </div>
  );
};
