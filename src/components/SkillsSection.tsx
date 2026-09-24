import React, { useState } from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { SKILL_ITEMS } from '../data';

type SkillFilterCategory = 'all' | 'design' | 'frontend' | 'cms' | 'ai';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillFilterCategory>('all');

  const filteredSkills =
    activeCategory === 'all'
      ? SKILL_ITEMS
      : SKILL_ITEMS.filter((item) => item.category === activeCategory);

  const filters: { label: string; value: SkillFilterCategory }[] = [
    { label: 'All Nodes', value: 'all' },
    { label: 'Design & UX', value: 'design' },
    { label: 'Frontend Engineering', value: 'frontend' },
    { label: 'CMS & Architecture', value: 'cms' },
    { label: 'AI Workflows', value: 'ai' },
  ];

  return (
    <section
      id="skills"
      className="py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" /> 03 // Knowledge Matrix
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mt-2 font-sans">
            Skill Universe & Node Network
          </h2>
        </div>

        {/* Filter Pills */}
        <div id="skill-filters" className="flex flex-wrap gap-2 text-xs font-mono">
          {filters.map((f) => {
            const isActive = activeCategory === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActiveCategory(f.value)}
                className={`px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  isActive
                    ? 'border-cyan-accent bg-cyan-subtle text-cyan-accent shadow-[0_0_12px_rgba(0,242,254,0.15)] font-semibold'
                    : 'border-white/10 bg-surface text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Cards Grid */}
      <div
        id="skills-grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            id={`skill-card-${skill.id}`}
            className="editorial-card p-6 rounded-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono text-zinc-500">
                  {skill.categoryLabel}
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-accent group-hover:shadow-[0_0_8px_#00f2fe] transition-all"></span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-accent transition-colors font-sans">
                {skill.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-light mb-6">
                {skill.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-400">
              {skill.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-white/5 border border-white/5 group-hover:border-cyan-accent/20 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between text-xs font-mono text-zinc-500 pt-4 border-t border-white/5">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-accent" />
          Showing {filteredSkills.length} calibrated nodes in current partition
        </span>
        <span className="text-zinc-400">Zero legacy dependencies</span>
      </div>
    </section>
  );
};
