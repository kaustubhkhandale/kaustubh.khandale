import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { HERO_PHASES } from '../data';

export const HeroSection: React.FC = () => {
  const [activePhaseId, setActivePhaseId] = useState<number>(1);
  const activePhase = HERO_PHASES.find((p) => p.id === activePhaseId) || HERO_PHASES[0];

  return (
    <section
      id="hero"
      className="min-h-screen pt-36 pb-28 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-center"
    >
      {/* Status pill */}
      <div
        id="hero-status-pill"
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-8 text-xs font-mono text-zinc-400 backdrop-blur-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
        <span>Available for Select High-Impact Missions</span>
      </div>

      {/* Main editorial display headline */}
      <h1
        id="hero-main-title"
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white max-w-5xl leading-[1.08] mb-8"
      >
        I design experiences. <br />
        <span className="font-serif italic font-normal text-zinc-300">Then I help bring them</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-accent font-medium">
          to life.
        </span>
      </h1>

      {/* Specialized roles pills */}
      <div
        id="hero-roles-pills"
        className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 max-w-3xl mb-10 text-xs font-medium text-zinc-400"
      >
        <span className="px-3.5 py-1.5 rounded-full border border-cyan-accent/40 bg-cyan-subtle text-cyan-accent shadow-[0_0_15px_rgba(0,242,254,0.1)]">
          Product Designer
        </span>
        <span className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:block"></span>
        <span className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
          Frontend Architect
        </span>
        <span className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:block"></span>
        <span className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
          Design System Builder
        </span>
        <span className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:block"></span>
        <span className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
          Zero-Handoff Engineer
        </span>
      </div>

      {/* Narrative summary */}
      <p
        id="hero-narrative-summary"
        className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-12 sm:mb-14"
      >
        Lead UI/UX designer and frontend developer with{' '}
        <strong className="text-white font-medium">8+ years of production experience</strong>{' '}
        delivering enterprise web applications, portals, and responsive React and Next.js interfaces.
      </p>

      {/* 8-Phase Glowing Node Track */}
      <div
        id="hero-interactive-pipeline"
        className="w-full max-w-5xl bg-surface/50 border border-white/10 rounded-2xl p-5 sm:p-8 backdrop-blur-md mb-12 text-left"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/5 mb-6 text-xs text-zinc-500 font-mono gap-2">
          <span className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-cyan-accent" />
            END-TO-END EXECUTION PIPELINE
          </span>
          <span className="text-cyan-accent flex items-center gap-1.5">
            <Terminal className="w-3 h-3" /> CLICK ANY NODE TO INSPECT
          </span>
        </div>

        {/* Node Track Visualizer */}
        <div
          id="hero-pipeline-nodes"
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 relative"
        >
          {HERO_PHASES.map((phase) => {
            const isActive = phase.id === activePhaseId;
            return (
              <button
                key={phase.id}
                id={`hero-phase-btn-${phase.id}`}
                onClick={() => setActivePhaseId(phase.id)}
                className={`group flex flex-col items-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  isActive
                    ? 'border-cyan-accent bg-cyan-subtle shadow-[0_0_15px_rgba(0,242,254,0.18)]'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <span
                  className={`text-[10px] font-mono mb-1 ${
                    isActive ? 'text-cyan-accent font-semibold' : 'text-zinc-500'
                  }`}
                >
                  PHASE 0{phase.id}
                </span>
                <span
                  className={`text-xs font-medium truncate w-full ${
                    isActive ? 'text-white font-semibold' : 'text-zinc-300 group-hover:text-white'
                  }`}
                >
                  {phase.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Phase Content Viewer */}
        <div
          id="hero-pipeline-detail"
          className="mt-6 pt-5 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                id="hero-phase-badge"
                className="text-[11px] font-mono font-medium text-cyan-accent tracking-wider uppercase px-2 py-0.5 rounded bg-cyan-subtle border border-cyan-accent/20"
              >
                {activePhase.badge}
              </span>
              <h4
                id="hero-phase-title"
                className="text-sm font-semibold text-white tracking-wide"
              >
                {activePhase.title}
              </h4>
            </div>
            <p
              id="hero-phase-desc"
              className="text-xs sm:text-sm text-zinc-400 font-light max-w-3xl leading-relaxed mt-2"
            >
              {activePhase.description}
            </p>
          </div>
          <div className="text-[11px] font-mono text-zinc-400 shrink-0 border border-white/10 px-3 py-1.5 rounded-lg bg-surface flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Handoff Drift:</span>
            <span className="text-emerald-400 font-semibold">Guaranteed</span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div id="hero-action-buttons" className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Link
          id="hero-cta-case-studies"
          href="/#missions"
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-obsidian font-semibold text-sm hover:bg-cyan-accent transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
        >
          <span>Explore Case Studies</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          id="hero-cta-player-dossier"
          href="/#profile"
          className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/15 text-white font-medium text-sm hover:border-cyan-accent/50 hover:bg-white/[0.04] transition-all duration-300"
        >
          View Player Dossier & HUD
        </Link>
      </div>
    </section>
  );
};
