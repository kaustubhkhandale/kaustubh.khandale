import React, { useState } from 'react';
import { Brain, CheckCircle, Terminal } from 'lucide-react';
import { COGNITIVE_STAGES } from '../data';

export const CognitivePipelineSection: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const stage = COGNITIVE_STAGES.find((s) => s.id === activeStageId) || COGNITIVE_STAGES[0];

  return (
    <section
      id="pipeline"
      className="py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent flex items-center gap-1.5">
            <Brain className="w-3.5 h-3.5" /> 05 // Cognitive Pipeline
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mt-2 font-sans">
            How My Brain Works <br />
            <span className="font-serif italic text-zinc-500">8-Stage Simulator</span>
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-sm font-light leading-relaxed">
          A methodical mental engine eliminating guesswork before writing a single line of React or pushing a Figma component.
        </p>
      </div>

      {/* Interactive 8-Stage Pipeline Card */}
      <div
        id="cognitive-pipeline-card"
        className="editorial-card rounded-3xl p-6 sm:p-10 lg:p-12"
      >
        {/* Tab navigation */}
        <div
          id="pipeline-stepper-tabs"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/10 scrollbar-none"
        >
          {COGNITIVE_STAGES.map((s) => {
            const isActive = s.id === activeStageId;
            return (
              <button
                key={s.id}
                id={`pipeline-tab-${s.id}`}
                onClick={() => setActiveStageId(s.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'border border-cyan-accent bg-cyan-subtle text-cyan-accent font-semibold shadow-[0_0_12px_rgba(0,242,254,0.18)]'
                    : 'border border-white/10 bg-surface text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Stage Dynamic Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span
              id="stage-badge"
              className="text-xs font-mono text-cyan-accent mb-2 block font-medium tracking-wide"
            >
              {stage.badge}
            </span>
            <h3
              id="stage-title"
              className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4 font-sans"
            >
              {stage.title}
            </h3>
            <p
              id="stage-description"
              className="text-zinc-300 text-sm leading-relaxed font-light mb-6"
            >
              {stage.description}
            </p>

            <div className="p-4 rounded-xl bg-surface/70 border border-white/5 font-mono text-xs text-zinc-400">
              <span className="text-zinc-500 block mb-1">ARTIFACT GENERATED:</span>
              <span id="stage-artifact" className="text-cyan-accent font-medium">
                {stage.artifact}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface rounded-2xl p-6 border border-white/10 flex flex-col justify-center min-h-[220px]">
            <span className="text-[10px] font-mono text-zinc-500 mb-3 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-cyan-accent" /> SIMULATOR FEED // STAGE #{stage.id}
              </span>
              <span className="text-emerald-400">ACTIVE</span>
            </span>

            <div
              id="stage-visual-container"
              className="flex flex-col items-center justify-center text-center p-6 border border-dashed border-white/10 rounded-xl bg-obsidian/40"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 flex items-center justify-center text-cyan-accent mb-3 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
                <CheckCircle className="w-5 h-5 text-cyan-accent" />
              </div>
              <h5
                id="stage-sim-title"
                className="text-xs font-semibold text-white mb-1 font-sans"
              >
                {stage.simTitle}
              </h5>
              <p
                id="stage-sim-desc"
                className="text-[11px] text-zinc-400 font-light"
              >
                {stage.simDesc}
              </p>
            </div>

            <div className="mt-4 flex justify-between text-[10px] font-mono text-zinc-500">
              <span>PARALLEL INTEGRATION: ZERO DISCONNECT</span>
              <span className="text-emerald-400 font-medium">STATUS: NOMINAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
