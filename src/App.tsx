'use client';

import { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { AmbientGlow } from './components/AmbientGlow';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { SkillsSection } from './components/SkillsSection';
import { MissionsSection } from './components/MissionsSection';
import { BlueprintModal } from './components/BlueprintModal';
import { CognitivePipelineSection } from './components/CognitivePipelineSection';
import { SuperpowerSection } from './components/SuperpowerSection';
import { JourneySection } from './components/JourneySection';
import { DiagnosticSection } from './components/DiagnosticSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { CaseStudy } from './types';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <div className="relative antialiased selection:bg-cyan-accent selection:text-obsidian min-h-screen bg-obsidian text-zinc-100 font-sans">
      {/* Ambient background glow & matrix grid */}
      <AmbientGlow />

      {/* Global floating glass navigation header */}
      <HeaderNav activeSection="hero" />

      {/* Main page content */}
      <main className="relative z-10">
        <ScrollReveal><HeroSection /></ScrollReveal>
        <ScrollReveal><ProfileSection /></ScrollReveal>
        <ScrollReveal><SkillsSection /></ScrollReveal>
        <ScrollReveal><MissionsSection onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)} /></ScrollReveal>
        <ScrollReveal><CognitivePipelineSection /></ScrollReveal>
        <ScrollReveal><SuperpowerSection /></ScrollReveal>
        <ScrollReveal><JourneySection /></ScrollReveal>
        <ScrollReveal><DiagnosticSection /></ScrollReveal>
        <ScrollReveal><AchievementsSection /></ScrollReveal>
        <ScrollReveal><ContactSection /></ScrollReveal>
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Case Study Architectural Blueprint Modal */}
      <BlueprintModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
}
