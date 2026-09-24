export interface HeroPhase {
  id: number;
  label: string;
  badge: string;
  title: string;
  description: string;
}

export interface SkillItem {
  id: string;
  category: 'design' | 'frontend' | 'cms' | 'ai';
  categoryLabel: string;
  title: string;
  description: string;
  tags: string[];
}

export interface CaseStudy {
  id: string;
  missionNumber: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
  metrics: {
    primaryValue: string;
    primaryLabel: string;
    secondaryValue: string;
    secondaryLabel: string;
  };
  highlightNote: string;
  blueprint: {
    tag: string;
    title: string;
    challenge: string;
    solution: string;
    stack: string;
  };
}

export interface CognitiveStage {
  id: number;
  label: string;
  badge: string;
  title: string;
  description: string;
  artifact: string;
  simTitle: string;
  simDesc: string;
}

export interface DiagnosticProblem {
  id: number;
  tabLabel: string;
  problemTitle: string;
  problemDesc: string;
  questionTitle: string;
  questionDesc: string;
  uxTitle: string;
  uxDesc: string;
  techTitle: string;
  techDesc: string;
  outcomeVal: string;
  outcomeDesc: string;
}

export interface TimelineLevel {
  id: string;
  levelBadge: string;
  isCurrent?: boolean;
  period: string;
  title: string;
  description: string;
  tags?: string[];
}
