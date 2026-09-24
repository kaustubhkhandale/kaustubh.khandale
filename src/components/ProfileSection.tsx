import React, { useState } from 'react';
import { Cpu, CheckCircle2, Shield, Activity } from 'lucide-react';

interface RadarPoint {
  label: string;
  score: number; // percentage
  x: number;
  y: number;
}

export const ProfileSection: React.FC = () => {
  const [activeStat, setActiveStat] = useState<string | null>(null);

  // SVG Radar metrics
  const radarPoints: RadarPoint[] = [
    { label: 'USABILITY', score: 98, x: 100, y: 28 },
    { label: 'SYSTEMS', score: 95, x: 172, y: 82 },
    { label: 'FRONTEND', score: 92, x: 142, y: 162 },
    { label: 'ARCH', score: 94, x: 58, y: 162 },
    { label: 'SPEED', score: 96, x: 26, y: 84 },
  ];

  const proficiencyTiers = [
    {
      title: 'UX Strategy & IA Architecture',
      tier: 'CORE STRENGTH',
      tierColor: 'text-cyan-accent',
      barColor: 'bg-cyan-accent',
      percent: 96,
      badge: '100% Alignment',
      description: 'Heuristic evaluations, complex multi-user mapping, multi-tenant workflows.',
    },
    {
      title: 'UI Design & Micro-Interactions',
      tier: 'CORE STRENGTH',
      tierColor: 'text-cyan-accent',
      barColor: 'bg-cyan-accent',
      percent: 98,
      badge: 'Figma Mastery',
      description: 'Design fidelity, spatial logic, accessible contrast, telemetry haptics.',
    },
    {
      title: 'Figma & Design Systems',
      tier: 'CORE STRENGTH',
      tierColor: 'text-cyan-accent',
      barColor: 'bg-cyan-accent',
      percent: 95,
      badge: 'Tokens & Primitives',
      description: 'Variables, token pipelines, cross-repository auto-layout libraries.',
    },
    {
      title: 'React.js & Next.js Ecosystem',
      tier: 'ADVANCED',
      tierColor: 'text-indigo-400',
      barColor: 'bg-indigo-400',
      percent: 92,
      badge: 'App Router & SSR',
      description: 'Server Components, SSR/ISR, React hooks state machines, App Router.',
    },
    {
      title: 'TypeScript & Modern JavaScript',
      tier: 'ADVANCED',
      tierColor: 'text-indigo-400',
      barColor: 'bg-indigo-400',
      percent: 90,
      badge: 'Strict Typing',
      description: 'Strong typing, generic interfaces, clean asynchronous flows.',
    },
    {
      title: 'Enterprise Headless WP & GraphQL APIs',
      tier: 'CORE STRENGTH',
      tierColor: 'text-cyan-accent',
      barColor: 'bg-cyan-accent',
      percent: 94,
      badge: 'Decoupled',
      description: 'Decoupled content backends, custom schemas, webhook cache purging.',
    },
  ];

  return (
    <section
      id="profile"
      className="py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" /> 02 // Architectural Dossier
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mt-2 font-sans">
            Player Profile <span className="text-zinc-500 font-serif italic">Level 08</span>
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
          Hybrid product designer and software engineer. Operating at the intersection of human psychology,
          interface aesthetics, and production code.
        </p>
      </div>

      {/* Profile Grid Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Identity & Radar Polygon */}
        <div
          id="profile-dossier-card"
          className="lg:col-span-5 editorial-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-surface-light border border-white/15 flex items-center justify-center font-serif text-2xl text-cyan-accent shadow-inner">
                  AV
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Alex Vance</h3>
                  <p className="text-xs text-zinc-400 font-mono">Lead Product Designer & Architect</p>
                </div>
              </div>
              <span className="cyan-badge text-[11px] font-mono px-3 py-1 rounded-full font-semibold">
                LEVEL 08
              </span>
            </div>

            {/* Meta Attributes */}
            <div className="grid grid-cols-2 gap-3 mb-8 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-surface/60 border border-white/5">
                <span className="text-zinc-500 font-mono block mb-1 text-[10px]">ARCHETYPE</span>
                <span className="text-zinc-200 font-medium">Full-Cycle Product Architect</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface/60 border border-white/5">
                <span className="text-zinc-500 font-mono block mb-1 text-[10px]">SPECIAL ABILITY</span>
                <span className="text-cyan-accent font-medium">Zero Handoff Loss</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface/60 border border-white/5">
                <span className="text-zinc-500 font-mono block mb-1 text-[10px]">CURRENT FOCUS</span>
                <span className="text-zinc-200 font-medium">Enterprise Systems & AI UI</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface/60 border border-white/5">
                <span className="text-zinc-500 font-mono block mb-1 text-[10px]">PRIMARY REALM</span>
                <span className="text-zinc-200 font-medium">Web Platforms & Headless</span>
              </div>
            </div>

            {/* Interactive 5-Point Radar Graph (SVG) */}
            <div className="pt-2 text-center">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-2">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-accent" /> CAPABILITY PENTAGON
                </span>
                <span className="text-cyan-accent">
                  {activeStat ? `${activeStat}: 90%+` : 'BALANCED HYBRID'}
                </span>
              </div>
              <div className="relative w-full max-w-[280px] mx-auto py-3">
                <svg
                  className="w-full h-auto drop-shadow-[0_0_20px_rgba(0,242,254,0.18)]"
                  viewBox="0 0 200 200"
                >
                  {/* Radar Polygons Grid */}
                  <polygon
                    fill="none"
                    points="100,20 180,78 150,170 50,170 20,78"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                  />
                  <polygon
                    fill="none"
                    points="100,45 155,85 135,150 65,150 45,85"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                  />
                  {/* Axes */}
                  <line
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="20"
                  />
                  <line
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    x1="100"
                    y1="100"
                    x2="180"
                    y2="78"
                  />
                  <line
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    x1="100"
                    y1="100"
                    x2="150"
                    y2="170"
                  />
                  <line
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    x1="100"
                    y1="100"
                    x2="50"
                    y2="170"
                  />
                  <line
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    x1="100"
                    y1="100"
                    x2="20"
                    y2="78"
                  />

                  {/* Radar Fill Shape */}
                  <polygon
                    className="transition-all duration-500 hover:fill-cyan-500/30 cursor-pointer"
                    fill="rgba(0, 242, 254, 0.16)"
                    points="100,28 172,82 142,162 58,162 26,84"
                    stroke="#00f2fe"
                    strokeWidth="1.75"
                  />

                  {/* Interactive Stat Dots */}
                  {radarPoints.map((pt) => (
                    <g
                      key={pt.label}
                      onMouseEnter={() => setActiveStat(pt.label)}
                      onMouseLeave={() => setActiveStat(null)}
                      className="cursor-pointer"
                    >
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={activeStat === pt.label ? 5 : 3.5}
                        fill="#00f2fe"
                        className="transition-all"
                      />
                    </g>
                  ))}

                  {/* Labels */}
                  <text
                    fill={activeStat === 'USABILITY' ? '#00f2fe' : '#94a3b8'}
                    fontFamily="monospace"
                    fontSize="8"
                    textAnchor="middle"
                    x="100"
                    y="14"
                  >
                    USABILITY
                  </text>
                  <text
                    fill={activeStat === 'SYSTEMS' ? '#00f2fe' : '#94a3b8'}
                    fontFamily="monospace"
                    fontSize="8"
                    textAnchor="start"
                    x="186"
                    y="80"
                  >
                    SYSTEMS
                  </text>
                  <text
                    fill={activeStat === 'FRONTEND' ? '#00f2fe' : '#94a3b8'}
                    fontFamily="monospace"
                    fontSize="8"
                    textAnchor="middle"
                    x="156"
                    y="184"
                  >
                    FRONTEND
                  </text>
                  <text
                    fill={activeStat === 'ARCH' ? '#00f2fe' : '#94a3b8'}
                    fontFamily="monospace"
                    fontSize="8"
                    textAnchor="middle"
                    x="44"
                    y="184"
                  >
                    ARCH
                  </text>
                  <text
                    fill={activeStat === 'SPEED' ? '#00f2fe' : '#94a3b8'}
                    fontFamily="monospace"
                    fontSize="8"
                    textAnchor="end"
                    x="12"
                    y="80"
                  >
                    SPEED
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> STATUS: NOMINAL
            </span>
            <span className="text-zinc-300 font-medium">TOTAL XP: 8+ YEARS</span>
          </div>
        </div>

        {/* Right Column: Calibrated Proficiency Tiers */}
        <div
          id="profile-proficiency-tiers"
          className="lg:col-span-7 editorial-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-white/10 gap-2">
              <h3 className="text-base font-semibold text-white tracking-wide font-sans">
                Calibrated Proficiency Tiers
              </h3>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-accent shadow-[0_0_8px_#00f2fe]"></span>{' '}
                  Core Strength
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span> Advanced
                </span>
              </div>
            </div>

            {/* Tier Bars & Details */}
            <div className="space-y-6">
              {proficiencyTiers.map((skill) => (
                <div key={skill.title} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-medium text-white group-hover:text-cyan-accent transition-colors">
                        {skill.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                        {skill.badge}
                      </span>
                    </div>
                    <span className={`text-xs font-mono font-medium ${skill.tierColor}`}>
                      {skill.tier}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-light rounded-full overflow-hidden">
                    <div
                      className={`h-full ${skill.barColor} rounded-full transition-all duration-700`}
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1.5 font-light">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 text-xs text-zinc-500 font-mono flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-accent shrink-0" />
            <span>
              Validated through real-shipped enterprise software rather than arbitrary vanity percentage scales.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
