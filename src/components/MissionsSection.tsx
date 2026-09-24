import React from 'react';
import { ArrowRight, Activity, Zap, FileText } from 'lucide-react';
import { CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';

interface MissionsSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const MissionsSection: React.FC<MissionsSectionProps> = ({ onSelectCaseStudy }) => {
  const heroCase = CASE_STUDIES[0];
  const gridCases = CASE_STUDIES.slice(1);

  return (
    <section
      id="missions"
      className="py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" /> 04 // Campaign Archives
          </span>
          <h2 className="text-4xl sm:text-6xl font-light text-white tracking-tight mt-2 font-sans">
            Missions Completed & <br />
            <span className="font-serif italic font-normal text-zinc-400">Production Case Studies</span>
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-sm font-light leading-relaxed">
          Deep dives into complex digital products. Measured by real business outcomes and architectural clarity.
        </p>
      </div>

      {/* Case Study 1: Healthcare Multi-Portal (Hero Feature) */}
      <article
        id="case-study-hero-healthcare"
        className="editorial-card rounded-3xl p-6 sm:p-10 lg:p-14 mb-14 relative overflow-hidden group"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6 text-xs font-mono flex-wrap">
              <span className="cyan-badge px-3 py-1 rounded-full font-medium">
                {heroCase.missionNumber}
              </span>
              <span className="text-zinc-500">{heroCase.category}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6 font-sans">
              {heroCase.title}
            </h3>

            <p className="text-zinc-300 text-base leading-relaxed font-light mb-8 max-w-2xl">
              {heroCase.summary}
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400 mb-10">
              {heroCase.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-surface border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <button
              id="btn-inspect-healthcare-blueprint"
              onClick={() => onSelectCaseStudy(heroCase)}
              className="inline-flex items-center gap-3 text-sm font-medium text-cyan-accent hover:text-white transition-colors cursor-pointer group/btn"
            >
              <span>Inspect Architectural Blueprint</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Impact Metrics Callout Tile */}
          <div className="lg:col-span-5 bg-surface/80 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative">
            <div className="text-[11px] font-mono text-zinc-500 mb-6 flex justify-between items-center">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-accent" /> KEY TELEMETRY
              </span>
              <span className="text-emerald-400 font-medium">LIVE IN PRODUCTION</span>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <span className="text-3xl sm:text-4xl font-light text-white tracking-tight block mb-1 font-sans">
                  {heroCase.metrics.primaryValue}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  {heroCase.metrics.primaryLabel}
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-light text-cyan-accent tracking-tight block mb-1 font-sans">
                  {heroCase.metrics.secondaryValue}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  {heroCase.metrics.secondaryLabel}
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></div>
              <p className="text-xs text-zinc-400 font-light">
                {heroCase.highlightNote}
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* 2-Column Bento Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {gridCases.map((cs) => (
          <article
            key={cs.id}
            id={`case-card-${cs.id}`}
            className="editorial-card rounded-3xl p-6 sm:p-10 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6 text-xs font-mono">
                <span className="cyan-badge px-3 py-1 rounded-full font-medium">
                  {cs.missionNumber}
                </span>
                <span className="text-zinc-500">{cs.category}</span>
              </div>

              <h3 className="text-2xl font-semibold text-white tracking-tight mb-4 group-hover:text-cyan-accent transition-colors font-sans">
                {cs.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed font-light mb-8">
                {cs.summary}
              </p>

              <div className="bg-surface/50 border border-white/5 rounded-xl p-5 mb-8">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs font-mono text-zinc-500">
                    {cs.metrics.primaryLabel.toUpperCase()}
                  </span>
                  <span className="text-lg font-light text-emerald-400 font-mono">
                    {cs.metrics.primaryValue}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono text-zinc-500">
                    {cs.metrics.secondaryLabel.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-zinc-300">
                    {cs.metrics.secondaryValue}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-zinc-500">
                {cs.tags.slice(0, 3).join(' / ')}
              </span>
              <button
                onClick={() => onSelectCaseStudy(cs)}
                className="text-xs font-medium text-cyan-accent hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Blueprint →</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
