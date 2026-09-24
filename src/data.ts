import {
  HeroPhase,
  SkillItem,
  CaseStudy,
  CognitiveStage,
  DiagnosticProblem,
  TimelineLevel,
} from './types';

export const HERO_PHASES: HeroPhase[] = [
  {
    id: 1,
    label: 'Requirement',
    badge: 'Active Node: Phase 01',
    title: 'Requirement Deconstruction',
    description:
      'Extracting core business vectors, user intents, technical boundaries, and system constraints, then translating ambiguous stakeholder goals into tangible, trackable product matrices.',
  },
  {
    id: 2,
    label: 'Research',
    badge: 'Active Node: Phase 02',
    title: 'Contextual & Field Research',
    description:
      'Synthesizing quantitative logs, user interviews, cognitive friction points, and competitor mechanics into actionable architectural roadmaps.',
  },
  {
    id: 3,
    label: 'UX Strategy',
    badge: 'Active Node: Phase 03',
    title: 'UX Information Architecture',
    description:
      'Structuring state models, permission tiers, navigation topologies, and high-level routing diagrams before touching layout pixels.',
  },
  {
    id: 4,
    label: 'UI Design',
    badge: 'Active Node: Phase 04',
    title: 'High-Fidelity Interface Craft',
    description:
      'Sculpting intentional interfaces with mathematical spatial grids, rigorous typographic scales, micro-interactions, and accessible AA contrast standards.',
  },
  {
    id: 5,
    label: 'Prototype',
    badge: 'Active Node: Phase 05',
    title: 'Interactive Validation Prototyping',
    description:
      'Creating hyper-realistic click-through prototypes with realistic edge cases to pressure-test workflows with executive stakeholders.',
  },
  {
    id: 6,
    label: 'Design System',
    badge: 'Active Node: Phase 06',
    title: 'Design Tokens & System Governance',
    description:
      'Authoring robust Figma token architectures, semantic color modes, atomic components, and auto-layout rules directly aligned with Tailwind/CSS variables.',
  },
  {
    id: 7,
    label: 'Frontend Dev',
    badge: 'Active Node: Phase 07',
    title: 'Frontend Engineering & Architecture',
    description:
      'Writing clean, typed, modular React/Next.js components with zero design handoff drift. Optimistic updates, sub-second latency, and WCAG AA accessibility.',
  },
  {
    id: 8,
    label: 'Working App',
    badge: 'Active Node: Phase 08',
    title: 'Production Release & Telemetry',
    description:
      'Validating Lighthouse performance, zero layout shift, real-world edge execution, and continuous customer behavioral telemetry.',
  },
];

export const SKILL_ITEMS: SkillItem[] = [
  {
    id: 'figma',
    category: 'design',
    categoryLabel: 'DESIGN // 01',
    title: 'Figma & FigJam',
    description:
      'Design system variables, component branching, and clickable interactive prototypes.',
    tags: ['Tokens', 'Auto-Layout', 'Design Tokens'],
  },
  {
    id: 'ux-research',
    category: 'design',
    categoryLabel: 'DESIGN // 02',
    title: 'UX Research & Testing',
    description:
      'Qualitative user sessions, heuristic audits, and customer journey friction analysis.',
    tags: ['Interviews', 'Usability', 'Card Sorting'],
  },
  {
    id: 'react-next',
    category: 'frontend',
    categoryLabel: 'FRONTEND // 01',
    title: 'React & Next.14/15',
    description:
      'App Router, Server/Client components, SSR, static generation, state orchestration.',
    tags: ['React 19', 'Next.js', 'Turbopack'],
  },
  {
    id: 'tailwind-radix',
    category: 'frontend',
    categoryLabel: 'FRONTEND // 02',
    title: 'Tailwind & Radix UI',
    description:
      'Ultra-clean CSS utility architecture, Radix primitives, micro-animations, headless UI patterns.',
    tags: ['Tailwind v4', 'Radix', 'Motion'],
  },
  {
    id: 'headless-wp',
    category: 'cms',
    categoryLabel: 'CMS // 01',
    title: 'Headless WordPress',
    description:
      'Decoupled backend powering a React frontend with lightning-fast cached static delivery.',
    tags: ['Headless', 'Custom Post Types', 'ACF Pro'],
  },
  {
    id: 'wpgraphql',
    category: 'cms',
    categoryLabel: 'CMS // 02',
    title: 'WPGraphQL & REST APIs',
    description:
      'Strict schemas, nested relational queries, optimized field payloads, zero over-fetching.',
    tags: ['GraphQL', 'Apollo', 'Webhook Invalidation'],
  },
  {
    id: 'ai-prototyping',
    category: 'ai',
    categoryLabel: 'AI WORKFLOW // 01',
    title: 'AI-Assisted Prototyping',
    description:
      'Rapid LLM component generation, synthetic test data seeding, algorithmic UI explorations.',
    tags: ['Copilot', 'Prompt Eng', 'Synthetic Seed'],
  },
  {
    id: 'rag-ui',
    category: 'ai',
    categoryLabel: 'AI WORKFLOW // 02',
    title: 'RAG UI & Semantic Search',
    description:
      'Building trust patterns, verification sidebars, and interactive citations for generative AI engines.',
    tags: ['RAG Sources', 'Citation UI', 'Vector Search'],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'modal-healthcare',
    missionNumber: 'MISSION 01 // LOGISTICS',
    category: 'LOGISTICS SERVICES',
    title: 'LKQ Corporation / Fresh Gravity',
    summary:
      'UI/UX design and frontend implementation for a logistics-services experience, translating enterprise requirements into a clear, responsive interface.',
    tags: ['Figma', 'HTML', 'CSS', 'JavaScript', 'Angular'],
    metrics: {
      primaryValue: '2024–25',
      primaryLabel: 'Engagement Period',
      secondaryValue: '4 mo',
      secondaryLabel: 'Delivery Window',
    },
    highlightNote:
      'Role: UI/UX Designer and Developer.',
    blueprint: {
      tag: 'LOGISTICS DELIVERY // CASE 01',
      title: 'LKQ Corporation / Fresh Gravity',
      challenge: 'Translate logistics-service requirements into an intuitive, implementation-ready interface.',
      solution: 'Created the UI/UX direction and supported frontend implementation for responsive enterprise workflows.',
      stack: 'Figma, HTML, CSS, JavaScript, Angular',
    },
  },
  {
    id: 'modal-energy',
    missionNumber: 'MISSION 02 // HEALTHCARE',
    category: 'HEALTHCARE STAFFING',
    title: 'Cross Country Healthcare',
    summary:
      'UI/UX design and development for a healthcare staffing platform, creating usable workflows across desktop and responsive web experiences.',
    tags: ['Adobe XD', 'React', 'Next.js', 'Builder.io'],
    metrics: {
      primaryValue: '2022–23',
      primaryLabel: 'Engagement Period',
      secondaryValue: '1 yr',
      secondaryLabel: 'Delivery Window',
    },
    highlightNote:
      'Role: UI/UX Designer and Developer.',
    blueprint: {
      tag: 'HEALTHCARE DELIVERY // CASE 02',
      title: 'Cross Country Healthcare',
      challenge: 'Design healthcare staffing workflows that are clear and efficient for web users.',
      solution: 'Produced wireframes and high-fidelity UI, then supported React and Next.js implementation.',
      stack: 'Adobe XD, HTML, CSS, JavaScript, React, Next.js, Builder.io',
    },
  },
  {
    id: 'modal-headless',
    missionNumber: 'MISSION 03 // WEARABLE',
    category: 'WEARABLE APP DESIGN',
    title: 'TikTik Watch, Band & App UI',
    summary:
      'Ongoing UI/UX work for a wearable watch, band, and companion app, focused on focused interactions and a cohesive product experience.',
    tags: ['Figma', 'FigJam', 'Wearable UX'],
    metrics: {
      primaryValue: '2023–Now',
      primaryLabel: 'Engagement Period',
      secondaryValue: 'Ongoing',
      secondaryLabel: 'Project Status',
    },
    highlightNote:
      'Role: UI/UX Designer.',
    blueprint: {
      tag: 'WEARABLE EXPERIENCE // CASE 03',
      title: 'TikTik Watch, Band & App UI',
      challenge: 'Design a connected wearable and companion-app experience that remains clear across small screens and everyday use cases.',
      solution: 'Developed the product UI/UX direction and interaction flows in Figma and FigJam.',
      stack: 'Figma, FigJam',
    },
  },
  {
    id: 'modal-booking',
    missionNumber: 'MISSION 04 // FINTECH',
    category: 'BANKING & MONEY EXCHANGE',
    title: 'Remit Prime / Prime Bank Mobile UI',
    summary:
      'Mobile UI/UX for banking and money-exchange workflows, with user flows designed for clarity in high-trust financial journeys.',
    tags: ['Figma', 'FigJam', 'Mobile UX'],
    metrics: {
      primaryValue: '2019–22',
      primaryLabel: 'Engagement Period',
      secondaryValue: '2 yrs',
      secondaryLabel: 'Delivery Window',
    },
    highlightNote:
      'Role: UI/UX Designer.',
    blueprint: {
      tag: 'FINTECH EXPERIENCE // CASE 04',
      title: 'Remit Prime / Prime Bank Mobile UI',
      challenge: 'Create banking and money-exchange journeys that make complex actions easier to understand on mobile.',
      solution: 'Designed user flows and high-fidelity mobile UI patterns for the product experience.',
      stack: 'Figma, FigJam',
    },
  },
  {
    id: 'modal-rag',
    missionNumber: 'MISSION 05 // OPEN SOURCE',
    category: 'WORDPRESS PLUGIN',
    title: 'KGraph Headless Toolkit for WPGraphQL',
    summary:
      'A focused WordPress admin toolkit for building, inspecting, testing, saving, and exporting WPGraphQL queries.',
    tags: ['WordPress', 'WPGraphQL', 'React', 'TypeScript'],
    metrics: {
      primaryValue: 'Live',
      primaryLabel: 'Plugin Status',
      secondaryValue: 'OSS',
      secondaryLabel: 'Project Type',
    },
    highlightNote:
      'Published in the WordPress plugin directory and showcased with a dedicated product website.',
    blueprint: {
      tag: 'OPEN-SOURCE RELEASE // CASE 05',
      title: 'KGraph Headless Toolkit for WPGraphQL',
      challenge: 'Make common WPGraphQL query and schema-exploration workflows more efficient inside WordPress administration.',
      solution: 'Built a focused developer tool to build, inspect, test, save, and export WPGraphQL queries.',
      stack: 'WordPress, WPGraphQL, React, TypeScript',
    },
  },
];

export const COGNITIVE_STAGES: CognitiveStage[] = [
  {
    id: 1,
    label: '1. Understand',
    badge: 'PHASE 01 // REQUIREMENT INGESTION',
    title: '1. Understand Business Vectors & Constraints',
    description:
      'Before opening Figma or writing a single line of React, I dissect the business reality: what are the revenue drivers? Who is the end user? Where are the technical bottlenecks? I extract clear measurable success metrics.',
    artifact: 'Deconstructed Scope Matrix & KPI Definition Sheet',
    simTitle: 'Requirement Packet Ingested',
    simDesc:
      'Deconstructing 14 stakeholder statements into prioritized architectural user epics.',
  },
  {
    id: 2,
    label: '2. Question',
    badge: 'PHASE 02 // SKEPTICAL INQUIRY',
    title: '2. Question the Assumptions',
    description:
      'Do we really need a 6-step form? Can permissions be implicit? Questioning every inherited habit saves hundreds of hours of design debt and unnecessary development cycles.',
    artifact: 'Assumption Stress-Test & Redundancy Log',
    simTitle: '4 Redundant Workflows Pruned',
    simDesc:
      'Eliminated secondary confirmation steps, slashing estimated user friction time by 35%.',
  },
  {
    id: 3,
    label: '3. Research',
    badge: 'PHASE 03 // EVIDENCE GATHERING',
    title: '3. Contextual Research & Usability Audits',
    description:
      'Speaking with actual users, reviewing session telemetry, and studying edge-case drop-offs. Synthesizing real behavioral data instead of relying on subjective opinions.',
    artifact: 'Heuristic Audit Report & Behavioral Heatmaps',
    simTitle: '18 User Friction Hotspots Identified',
    simDesc:
      'Cataloged high cognitive load zones across desktop and mobile screens.',
  },
  {
    id: 4,
    label: '4. User Map',
    badge: 'PHASE 04 // INFORMATION ARCHITECTURE',
    title: '4. User Journey & State Mapping',
    description:
      'Mapping out user state machines, auth paths, data dependency trees, and error fallback scenarios in FigJam before visual layout decisions are made.',
    artifact: 'State Machine Topology & User Decision Trees',
    simTitle: 'State Navigation Graph Completed',
    simDesc:
      'Deterministic routing created for all multi-tenant permission tiers.',
  },
  {
    id: 5,
    label: '5. Wireframe',
    badge: 'PHASE 05 // STRUCTURAL CADENCE',
    title: '5. Wireframing & Structural Ergonomics',
    description:
      'Building rapid low-fidelity layouts to test visual hierarchy, reading cadence, button positioning, and scanability under realistic viewport constraints.',
    artifact: 'Grayscale Wireframe Matrix (Figma)',
    simTitle: 'Ergonomic Layout Validated',
    simDesc:
      'Primary interaction controls positioned within 400px thumb reach radius.',
  },
  {
    id: 6,
    label: '6. Design UI',
    badge: 'PHASE 06 // SYSTEMIC CRAFT',
    title: '6. High-Fidelity UI & Design Tokens',
    description:
      'Infusing the layout with typographic discipline, contrast-compliant dark tones, strict spacing tokens, accessible interaction states, and refined micro-aesthetics.',
    artifact: 'Atomic Token Library (Color, Spacing, Typography)',
    simTitle: 'Design Tokens Normalized',
    simDesc:
      'Tokens mapped 1:1 to Tailwind classes for deterministic handoff.',
  },
  {
    id: 7,
    label: '7. Code & Dev',
    badge: 'PHASE 07 // ZERO-LOSS CODE',
    title: '7. Production React & Frontend Architecture',
    description:
      'Writing typed React/Next.js components. Applying Radix accessible primitives, Tailwind CSS utility styling, zero-CLS image configurations, and caching strategies.',
    artifact: 'Typed Component Library & App Router Pages',
    simTitle: 'Clean Compilation: 0 Handoff Drift',
    simDesc:
      'Interactive components render with exact mathematical parity to Figma.',
  },
  {
    id: 8,
    label: '8. Deliver',
    badge: 'PHASE 08 // REALM DELIVERY',
    title: '8. Deliver, Telemetry & Continuous Refinement',
    description:
      'Deploying to edge networks, running Lighthouse audits, testing with real screen readers, and inspecting real-world customer usage logs for continuous improvement.',
    artifact: 'Production Release & Lighthouse 99+ Report',
    simTitle: 'Production App Shipped',
    simDesc:
      'Continuous telemetry active. Sub-second global page loads verified.',
  },
];

export const DIAGNOSTIC_PROBLEMS: DiagnosticProblem[] = [
  {
    id: 1,
    tabLabel: '1. Registration Abandonment (Step 3)',
    problemTitle: 'Registration Abandonment at Step 3',
    problemDesc:
      'Users drop off by 48% at the clinical credential verification screen due to confusing document upload demands and lack of inline validation.',
    questionTitle: 'Is all info required upfront?',
    questionDesc:
      'Can we defer secondary license uploads until after account activation? What feedback indicates document legibility in real-time?',
    uxTitle: 'Progressive Disclosure & Micro-Steps',
    uxDesc:
      'Split the form into atomic sub-questions with automatic OCR scanning and clear progress state preservation across user sessions.',
    techTitle: 'Optimistic UI & Local State Sync',
    techDesc:
      'Use React Hook Form with Zod schemas; save state to IndexedDB/sessionStorage so a refresh or browser closure never loses progress.',
    outcomeVal: '+38% Lift in Verified Completion',
    outcomeDesc:
      'Reduced average friction drop-off from 48% to 10%, cutting customer support onboarding tickets by over half in the first 60 days.',
  },
  {
    id: 2,
    tabLabel: '2. Dashboard Cognitive Overload',
    problemTitle: 'Dashboard Cognitive Overload',
    problemDesc:
      'Operations commanders struggle to spot critical solar turbine outages because 80+ data widgets compete simultaneously for visual attention.',
    questionTitle: 'What requires immediate human intervention?',
    questionDesc:
      'Which data points are passive background metrics, and which are urgent alert thresholds requiring immediate field-dispatch routing?',
    uxTitle: 'Hierarchical Alert Triage Matrix',
    uxDesc:
      'Group widgets into 3 clean visual planes: Immediate Critical Action, Secondary Trendline Analysis, and Collapsible Fleet Archives.',
    techTitle: 'WebSocket Subscription & Virtualized Lists',
    techDesc:
      'Decouple real-time telemetry into lightweight WebSockets with React-Window virtualization for zero DOM lag during 10,000 evt/s surges.',
    outcomeVal: '-62% Alarm Reaction Time',
    outcomeDesc:
      'Field dispatches triggered in 42 seconds down from 3.2 minutes, preventing battery hardware overheat escalations.',
  },
  {
    id: 3,
    tabLabel: '3. Slow Web Performance / Hard CMS',
    problemTitle: 'Slow Web Performance / Complex CMS',
    problemDesc:
      'A global media portal on monolithic WordPress takes 6.4 seconds to load, crashes during traffic spikes, and confuses content authors.',
    questionTitle: 'Why is the CMS rendering the frontend?',
    questionDesc:
      'Can we keep the authoring WordPress dashboard they love while decoupling frontend rendering entirely to an edge static layer?',
    uxTitle: 'Instantaneous Edge Reader UX',
    uxDesc:
      'Pre-rendered editorial templates with zero layout shifts, optimistic category filtering, and instant page hover prefetching.',
    techTitle: 'Next.js App Router + WPGraphQL ISR',
    techDesc:
      'Headless WordPress serving WPGraphQL to Next.js on Vercel. Webhook cache invalidation purges only modified article pages in 200ms.',
    outcomeVal: '99/100 Lighthouse // 0.8s LCP',
    outcomeDesc:
      'Infrastructure hosting costs cut by 45% while handling 4x concurrent users with zero server downtime.',
  },
];

export const TIMELINE_LEVELS: TimelineLevel[] = [
  {
    id: 'lvl-current',
    levelBadge: 'LEVEL 04 // CURRENT',
    isCurrent: true,
    period: 'MAY 2017 — PRESENT',
    title: 'Lead UI/UX Designer & Developer · Orangebitsindia',
    description:
      'Leading UX research, user flows, wireframes, high-fidelity interface systems, and responsive frontend delivery across enterprise portals and web applications.',
    tags: ['Figma', 'React', 'Next.js', 'Builder.io'],
  },
  {
    id: 'lvl-06-07',
    levelBadge: 'LEVEL 03',
    period: 'MAY 2016 — MAY 2017',
    title: 'Web Designer & Developer · Mastersoft ERP Solutions',
    description:
      'Created wireframes and high-fidelity interfaces, then implemented approved designs with HTML, CSS, JavaScript, and .NET-based frameworks.',
    tags: ['Wireframes', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'lvl-04-05',
    levelBadge: 'LEVEL 02',
    period: 'MAY 2015 — MAY 2016',
    title: 'Web Designer & Developer · Raisoni Group of Institutions',
    description:
      'Designed WordPress websites and collaborated with developers and stakeholders to deliver clear, usable digital experiences.',
    tags: ['WordPress', 'Web Design', 'Stakeholder Collaboration'],
  },
  {
    id: 'lvl-01-03',
    levelBadge: 'LEVEL 01',
    period: 'JUN 2014 — JAN 2015',
    title: 'Graphic Designer & Web Designer/Developer · Buldhana Urban Credit Co-op Society',
    description:
      'Designed banking websites and portal experiences using HTML, CSS, JavaScript, and PHP while working closely with developers and stakeholders.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
];
