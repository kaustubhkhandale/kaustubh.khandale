import React, { useState } from 'react';
import { Sparkles, Radio, Code2, Play, RefreshCw } from 'lucide-react';

type ViewPerspective = 'wireframe' | 'hifi' | 'code' | 'live';

export const SuperpowerSection: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewPerspective>('hifi');
  const [pingLatency, setPingLatency] = useState<number | string>(14);
  const [isPinging, setIsPinging] = useState(false);

  const triggerPing = () => {
    setIsPinging(true);
    setPingLatency('...');
    setTimeout(() => {
      const ms = Math.floor(Math.random() * 12) + 11;
      setPingLatency(ms);
      setIsPinging(false);
    }, 280);
  };

  return (
    <section
      id="superpower"
      className="py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> 06 // Translation Engine
        </span>
        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mt-2 font-sans">
          Design + Code Superpower
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 font-light mt-4 leading-relaxed">
          “I don’t stop at the design handoff.” Because I understand how interfaces are actually compiled in production,
          every design I craft is mathematically realistic, component-driven, and engineer-ready.
        </p>
      </div>

      {/* Interactive 4-View Switcher Container */}
      <div
        id="translation-switcher-card"
        className="editorial-card rounded-3xl p-6 sm:p-10"
      >
        {/* Controls Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-accent animate-ping"></span>
            <span className="text-xs font-mono text-zinc-400">
              SWITCH VIEWPORT PERSPECTIVE:
            </span>
          </div>

          <div id="view-mode-tabs" className="flex flex-wrap gap-2 text-xs font-mono">
            <button
              onClick={() => setCurrentView('wireframe')}
              className={`px-4 py-1.5 rounded-lg border transition-all cursor-pointer ${
                currentView === 'wireframe'
                  ? 'border-cyan-accent bg-cyan-subtle text-cyan-accent font-semibold shadow-[0_0_10px_rgba(0,242,254,0.18)]'
                  : 'border-white/10 bg-surface text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              1. Wireframe
            </button>
            <button
              onClick={() => setCurrentView('hifi')}
              className={`px-4 py-1.5 rounded-lg border transition-all cursor-pointer ${
                currentView === 'hifi'
                  ? 'border-cyan-accent bg-cyan-subtle text-cyan-accent font-semibold shadow-[0_0_10px_rgba(0,242,254,0.18)]'
                  : 'border-white/10 bg-surface text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              2. Hi-Fi UI
            </button>
            <button
              onClick={() => setCurrentView('code')}
              className={`px-4 py-1.5 rounded-lg border transition-all cursor-pointer ${
                currentView === 'code'
                  ? 'border-cyan-accent bg-cyan-subtle text-cyan-accent font-semibold shadow-[0_0_10px_rgba(0,242,254,0.18)]'
                  : 'border-white/10 bg-surface text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              3. React/JSX
            </button>
            <button
              onClick={() => setCurrentView('live')}
              className={`px-4 py-1.5 rounded-lg border transition-all cursor-pointer ${
                currentView === 'live'
                  ? 'border-cyan-accent bg-cyan-subtle text-cyan-accent font-semibold shadow-[0_0_10px_rgba(0,242,254,0.18)]'
                  : 'border-white/10 bg-surface text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              4. Live App
            </button>
          </div>
        </div>

        {/* Dynamic Visual Display Container */}
        <div className="min-h-[380px] rounded-2xl bg-surface/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-center items-center relative overflow-hidden">
          {/* View 1: Wireframe */}
          {currentView === 'wireframe' && (
            <div
              id="view-wireframe"
              className="w-full max-w-xl space-y-4 border border-dashed border-zinc-700 p-6 rounded-xl bg-obsidian/50 animate-fadeIn"
            >
              <div className="flex justify-between items-center border-b border-dashed border-zinc-800 pb-3">
                <div className="w-24 h-4 bg-zinc-800 rounded"></div>
                <div className="w-10 h-4 bg-zinc-800 rounded"></div>
              </div>
              <div className="w-3/4 h-7 bg-zinc-800/80 rounded"></div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="h-20 border border-dashed border-zinc-800 rounded p-3">
                  <div className="w-14 h-3 bg-zinc-800 mb-2"></div>
                  <div className="w-full h-2.5 bg-zinc-900 rounded"></div>
                </div>
                <div className="h-20 border border-dashed border-zinc-800 rounded p-3">
                  <div className="w-14 h-3 bg-zinc-800 mb-2"></div>
                  <div className="w-full h-2.5 bg-zinc-900 rounded"></div>
                </div>
              </div>
              <div className="w-full h-10 border border-dashed border-zinc-700 rounded flex items-center justify-center text-[10px] font-mono text-zinc-400">
                WIREFRAME CONTAINER — AUTO-LAYOUT CONSTRAINTS MAPPED
              </div>
            </div>
          )}

          {/* View 2: Hi-Fi UI */}
          {currentView === 'hifi' && (
            <div
              id="view-hifi"
              className="w-full max-w-xl editorial-card rounded-2xl p-6 sm:p-7 border border-white/15 glow-cyan animate-fadeIn"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse"></div>
                  <span className="text-xs font-semibold text-white font-sans">
                    Telemetry Monitor
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-accent px-2.5 py-0.5 rounded bg-cyan-subtle border border-cyan-accent/20">
                  AUTO-LAYOUT / SAFE
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-light mb-4">
                Real-time edge cluster latency across 4 continents.
              </p>
              <div className="flex items-baseline justify-between p-4 rounded-xl bg-surface mb-4 border border-white/5">
                <span className="text-xs font-mono text-zinc-400">Global Throughput</span>
                <span className="text-2xl font-light text-cyan-accent font-mono">
                  94.8 GB/s
                </span>
              </div>
              <button className="w-full py-2.5 rounded-xl bg-cyan-accent text-obsidian text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-sm">
                Deploy Config
              </button>
            </div>
          )}

          {/* View 3: React/JSX Code */}
          {currentView === 'code' && (
            <div
              id="view-code"
              className="w-full max-w-xl bg-obsidian rounded-xl p-5 border border-white/10 font-mono text-xs text-zinc-300 overflow-x-auto animate-fadeIn"
            >
              <div className="text-zinc-500 pb-2 mb-3 border-b border-white/5 flex items-center justify-between">
                <span>// TelemetryNode.tsx - Pure React Component</span>
                <Code2 className="w-3.5 h-3.5 text-cyan-accent" />
              </div>
              <pre className="text-[11px] leading-relaxed text-zinc-300">
                <span className="text-cyan-accent">export const</span>{' '}
                <span className="text-indigo-300">TelemetryCard</span> = ({'{'} latency, throughput {'}'}: Props) =&gt; {'{\n'}
                {'  '}<span className="text-cyan-accent">return</span> ({'\n'}
                {'    '}&lt;<span className="text-indigo-400">div</span>{' '}
                <span className="text-zinc-400">className</span>=
                <span className="text-emerald-300">"editorial-card rounded-2xl p-6 glow-cyan"</span>&gt;{'\n'}
                {'      '}&lt;<span className="text-indigo-400">div</span>{' '}
                <span className="text-zinc-400">className</span>=
                <span className="text-emerald-300">"flex items-center justify-between"</span>&gt;{'\n'}
                {'        '}&lt;<span className="text-indigo-400">StatusIndicator</span>{' '}
                <span className="text-zinc-400">status</span>=
                <span className="text-emerald-300">"active"</span> /&gt;{'\n'}
                {'        '}&lt;<span className="text-indigo-400">Badge</span>&gt;{'{latency}'}ms&lt;/<span className="text-indigo-400">Badge</span>&gt;{'\n'}
                {'      '}&lt;/<span className="text-indigo-400">div</span>&gt;{'\n'}
                {'      '}&lt;<span className="text-indigo-400">h4</span>{' '}
                <span className="text-zinc-400">className</span>=
                <span className="text-emerald-300">"text-white font-semibold"</span>&gt;Global Throughput&lt;/<span className="text-indigo-400">h4</span>&gt;{'\n'}
                {'      '}&lt;<span className="text-indigo-400">p</span>{' '}
                <span className="text-zinc-400">className</span>=
                <span className="text-emerald-300">"text-cyan-accent font-mono"</span>&gt;{'{throughput}'}&lt;/<span className="text-indigo-400">p</span>&gt;{'\n'}
                {'    '}&lt;/<span className="text-indigo-400">div</span>&gt;{'\n'}
                {'  '});{'\n'}
                {'}'};
              </pre>
            </div>
          )}

          {/* View 4: Live App (Interactive Ping Simulator) */}
          {currentView === 'live' && (
            <div
              id="view-live"
              className="w-full max-w-xl bg-surface rounded-2xl p-6 sm:p-8 border border-cyan-accent/40 text-center animate-fadeIn shadow-[0_0_30px_rgba(0,242,254,0.12)]"
            >
              <div className="text-xs font-mono text-cyan-accent mb-2 flex items-center justify-center gap-1.5 font-medium">
                <Radio className="w-3.5 h-3.5 text-cyan-accent animate-pulse" />
                LIVE INTERACTIVE EDGE INSTANCE
              </div>
              <h4 className="text-sm font-semibold text-white mb-4 font-sans">
                Click to simulate round-trip client edge ping
              </h4>
              <div className="p-6 bg-obsidian rounded-xl mb-5 border border-white/10 flex flex-col items-center">
                <span className="text-xs text-zinc-500 font-mono mb-1">LATENCY READING</span>
                <span className="text-4xl font-mono font-light text-cyan-accent tracking-wider">
                  {typeof pingLatency === 'number' ? `${pingLatency} ms` : pingLatency}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
                  <Play className="w-2.5 h-2.5" /> STATUS: EDGE REGION US-EAST (VERCEL)
                </span>
              </div>
              <button
                onClick={triggerPing}
                disabled={isPinging}
                className="px-6 py-2.5 rounded-full bg-cyan-accent text-obsidian text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-2 mx-auto disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isPinging ? 'animate-spin' : ''}`} />
                <span>Ping Edge Node Again</span>
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-zinc-500 font-mono gap-2">
          <span>FIGMA AUTO-LAYOUT = FLEXBOX / CSS GRID</span>
          <span>NO MISCOMMUNICATION • NO BROKEN HANDOFFS • ZERO WASTED SPRINTS</span>
        </div>
      </div>
    </section>
  );
};
