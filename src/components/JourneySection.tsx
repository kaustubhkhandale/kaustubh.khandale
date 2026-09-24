import React from 'react';
import { Milestone, Flag } from 'lucide-react';
import { TIMELINE_LEVELS } from '../data';

export const JourneySection: React.FC = () => {
  return (
    <section
      id="journey"
      className="py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent flex items-center gap-1.5">
            <Milestone className="w-3.5 h-3.5" /> 07 // Progression Log
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mt-2 font-sans">
            Experience Journey As Levels <br />
            <span className="font-serif italic text-zinc-500">(8+ Years in Production)</span>
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-sm font-light leading-relaxed">
          Each level represents mastered frameworks, resolved business risks, and scaled design systems.
        </p>
      </div>

      {/* Timeline Levels */}
      <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12 sm:space-y-16 ml-3 sm:ml-4">
        {TIMELINE_LEVELS.map((level) => {
          return (
            <div key={level.id} className="relative group">
              {/* Timeline Node Point */}
              {level.isCurrent ? (
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-cyan-accent ring-4 ring-cyan-accent/20 shadow-[0_0_10px_#00f2fe]"></div>
              ) : (
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-surface-light border-2 border-white/20 group-hover:border-cyan-accent transition-colors"></div>
              )}

              <div
                className={`editorial-card rounded-2xl p-6 sm:p-8 transition-all ${
                  level.isCurrent
                    ? 'border-cyan-accent/30 hover:border-cyan-accent/50 shadow-[0_0_20px_rgba(0,242,254,0.06)]'
                    : 'hover:border-white/20'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  {level.isCurrent ? (
                    <span className="cyan-badge text-[10px] font-mono px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1">
                      <Flag className="w-3 h-3" /> {level.levelBadge}
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-zinc-400">
                      {level.levelBadge}
                    </span>
                  )}
                  <span className="text-xs font-mono text-zinc-500">{level.period}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-3 font-sans">
                  {level.title}
                </h3>

                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {level.description}
                </p>

                {level.tags && (
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                    {level.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-surface border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
