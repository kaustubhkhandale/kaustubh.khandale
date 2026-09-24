import React from 'react';
import { Award, Zap, GitBranch, Gauge, Network } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const trophies = [
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: '8+ Years in Production',
      desc: 'UI/UX and frontend delivery for enterprise web applications, portals, and product interfaces.',
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-accent" />,
      title: 'Google Project Management',
      desc: 'Foundations of Project Management certification, issued by Google in 2025.',
    },
    {
      icon: <GitBranch className="w-6 h-6 text-indigo-400" />,
      title: 'AWS Cloud Infrastructure',
      desc: 'Cloud Infrastructure certification issued by Brainovision Solutions India Pvt. Ltd. in 2023.',
    },
    {
      icon: <Gauge className="w-6 h-6 text-emerald-400" />,
      title: 'HackerRank CSS',
      desc: 'CSS certification issued by HackerRank in 2021.',
    },
  ];

  const technologies = [
    'Figma',
    'React.js',
    'Next.js 15',
    'TypeScript',
    'Tailwind CSS',
    'GraphQL',
    'WordPress',
    'Prompting/AI',
  ];

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" /> 09 // Unlocked Achievements
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mt-2 font-sans">
            Verified Milestones & Trophies
          </h2>
        </div>
      </div>

      {/* Trophies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {trophies.map((t) => (
          <div
            key={t.title}
            className="editorial-card rounded-2xl p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="p-3 rounded-xl bg-surface inline-block mb-4 border border-white/5 group-hover:border-cyan-accent/30 transition-colors">
                {t.icon}
              </div>
              <h4 className="text-base font-semibold text-white mb-2 font-sans group-hover:text-cyan-accent transition-colors">
                {t.title}
              </h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {t.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Ecosystem Bar */}
      <div className="editorial-card rounded-2xl p-6 sm:p-8">
        <div className="text-xs font-mono text-zinc-500 mb-6 flex flex-col sm:flex-row justify-between gap-2">
          <span className="flex items-center gap-1.5">
            <Network className="w-3.5 h-3.5 text-cyan-accent" />
            INTERCONNECTED TECHNOLOGY ECOSYSTEM
          </span>
          <span className="text-cyan-accent">CONTINUALLY EVOLVING PIPELINE</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="p-3 rounded-xl bg-surface border border-white/5 text-xs font-mono text-zinc-300 hover:border-cyan-accent/40 hover:text-white transition-all cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
