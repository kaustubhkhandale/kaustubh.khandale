import React, { useState } from 'react';
import { Target, HelpCircle, Layout, Database, TrendingUp } from 'lucide-react';
import { DIAGNOSTIC_PROBLEMS } from '../data';

export const DiagnosticSection: React.FC = () => {
  const [activeProblemId, setActiveProblemId] = useState<number>(1);
  const problem =
    DIAGNOSTIC_PROBLEMS.find((p) => p.id === activeProblemId) || DIAGNOSTIC_PROBLEMS[0];

  return (
    <section
      id="diagnostic"
      className="py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5" /> 08 // Strategy Simulator
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mt-2 font-sans">
            “Give Me A Problem” <br />
            <span className="font-serif italic text-zinc-500">Diagnostic Breakdown</span>
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-sm font-light leading-relaxed">
          Select a real enterprise challenge to see how my hybrid brain diagnoses and solves it.
        </p>
      </div>

      {/* Problem selector tabs */}
      <div id="diagnostic-problem-tabs" className="flex flex-wrap gap-2.5 sm:gap-3 mb-10 text-xs font-mono">
        {DIAGNOSTIC_PROBLEMS.map((p) => {
          const isActive = p.id === activeProblemId;
          return (
            <button
              key={p.id}
              onClick={() => setActiveProblemId(p.id)}
              className={`px-4 py-2.5 rounded-full border transition-all cursor-pointer ${
                isActive
                  ? 'border-cyan-accent bg-cyan-subtle text-cyan-accent font-semibold shadow-[0_0_12px_rgba(0,242,254,0.18)]'
                  : 'border-white/10 bg-surface text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {p.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Diagnostic Detail Matrix Grid */}
      <div
        id="diagnostic-display-card"
        className="editorial-card rounded-3xl p-6 sm:p-10 lg:p-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 mb-8 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-2 font-semibold">
              01 // The Core Problem
            </span>
            <h4 className="text-lg font-semibold text-white mb-2 font-sans flex items-center gap-1.5">
              <Target className="w-4 h-4 text-cyan-accent" />
              {problem.problemTitle}
            </h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              {problem.problemDesc}
            </p>
          </div>

          <div>
            <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-2 font-semibold">
              02 // Key Questions Asked
            </span>
            <h4 className="text-lg font-semibold text-white mb-2 font-sans flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-indigo-400" />
              {problem.questionTitle}
            </h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              {problem.questionDesc}
            </p>
          </div>

          <div>
            <span className="text-[11px] font-mono text-cyan-accent uppercase block mb-2 font-semibold">
              03 // UX Intervention
            </span>
            <h4 className="text-lg font-semibold text-white mb-2 font-sans flex items-center gap-1.5">
              <Layout className="w-4 h-4 text-cyan-accent" />
              {problem.uxTitle}
            </h4>
            <p className="text-xs text-zinc-300 font-light leading-relaxed">
              {problem.uxDesc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-2 font-semibold">
              04 // Tech Architecture
            </span>
            <h4 className="text-base font-semibold text-white mb-2 font-sans flex items-center gap-1.5">
              <Database className="w-4 h-4 text-cyan-accent" />
              {problem.techTitle}
            </h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              {problem.techDesc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-white/10 shadow-inner">
            <span className="text-[11px] font-mono text-emerald-400 uppercase block mb-1 font-semibold flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              05 // Measurable Outcome
            </span>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono mb-2">
              {problem.outcomeVal}
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              {problem.outcomeDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
