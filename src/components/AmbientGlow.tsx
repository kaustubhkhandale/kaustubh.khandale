import React from 'react';

export const AmbientGlow: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Ambient gradient lights */}
      <div className="ambient-orb ambient-orb-primary absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/[0.04] blur-[140px] rounded-full" />
      <div className="ambient-orb ambient-orb-left absolute top-[40%] -left-60 w-[600px] h-[600px] bg-cyan-400/[0.025] blur-[160px] rounded-full" />
      <div className="ambient-orb ambient-orb-right absolute bottom-20 right-0 w-[500px] h-[500px] bg-cyan-300/[0.03] blur-[150px] rounded-full" />

      {/* Sub-pixel ambient dot matrix */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00f2fe 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Slow telemetry sweep inspired by generative grid backgrounds. */}
      <div className="ambient-scanline absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-accent/40 to-transparent" />
      <div className="ambient-scanline ambient-scanline-delayed absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/25 to-transparent" />

      <div className="absolute inset-0 opacity-[0.18]">
        <span className="telemetry-node telemetry-node-one" />
        <span className="telemetry-node telemetry-node-two" />
        <span className="telemetry-node telemetry-node-three" />
      </div>
    </div>
  );
};
