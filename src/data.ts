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
    missionNumber: 'MISSION 01 // ENTERPRISE',
    category: 'HEALTHCARE PORTAL',
    title: 'Healthcare Multi-Portal Ecosystem',
    summary:
      'Unified triple-portal infrastructure serving Healthcare Practitioners (HCPs), Hospital Administrators, and Internal Compliance Verification Officers. Resolved severe drop-offs through atomic step validation and role-based permissions.',
    tags: ['UX Architecture', 'Design System', 'React.js', 'Tailwind CSS'],
    metrics: {
      primaryValue: '-42%',
      primaryLabel: 'Abandonment Drop-off',
      secondaryValue: '14,820',
      secondaryLabel: 'Active Verified HCPs',
    },
    highlightNote:
      'Designed reusable 40+ component clinical design system with AA contrast compliance.',
    blueprint: {
      tag: 'HEALTHCARE BLUEPRINT // CASE 01',
      title: 'Healthcare Multi-Portal Ecosystem Architecture',
      challenge:
        'Three completely disparate user archetypes (Doctors, Hospital Administrators, and Compliance Verifiers) were sharing an archaic single-portal login with conflicting permission levels, resulting in severe registration abandonment and frequent compliance audit citations.',
      solution:
        'Architected a unified tokenized design system in Figma with 40+ atomic components. Built a role-gated Next.js App Router application with optimistic form completion, automated OCR credential validation, and an audited compliance timeline component.',
      stack:
        'Next.js 14, TypeScript, Tailwind CSS, Zod Validation, React Hook Form, Radix UI Primitives',
    },
  },
  {
    id: 'modal-energy',
    missionNumber: 'MISSION 02 // IOT',
    category: 'ACTIVE SLA',
    title: 'Renewable Energy Operations Platform',
    summary:
      'Tri-part IoT ecosystem: Field Technician Mobile App, Customer Portal, and Operations Control Command Center managing solar equipment telemetry and real-time fault resolution.',
    tags: ['Next.js', 'Mapbox', 'React', 'Offline Sync'],
    metrics: {
      primaryValue: '-54%',
      primaryLabel: 'Faster Dispatch Time',
      secondaryValue: 'PWA Sync',
      secondaryLabel: 'Offline Protocol',
    },
    highlightNote:
      'Offline-first architecture with automatic IndexedDB queue reconciliation when field cellular connection resumes.',
    blueprint: {
      tag: 'IOT BLUEPRINT // CASE 02',
      title: 'Renewable Energy Operations Platform',
      challenge:
        'Field technicians in remote solar fields frequently lost internet connection, rendering existing web portals useless and causing missed SLAs on critical solar inverter breakdowns.',
      solution:
        'Designed an offline-first Progressive Web App with IndexedDB sync queues. Real-time operations map powered by Mapbox GL with aggregated telemetry clustering and one-tap emergency crew dispatch.',
      stack:
        'React, Vite, Mapbox GL JS, Tailwind CSS, WebSockets, Workbox PWA',
    },
  },
  {
    id: 'modal-headless',
    missionNumber: 'MISSION 03 // ARCHITECTURE',
    category: 'HEADLESS',
    title: 'Enterprise Headless WP Corporate Portal',
    summary:
      'Internationalized multi-region website decoupling WordPress CMS via custom WPGraphQL into Next.js App Router for zero-latency static page generation.',
    tags: ['WPGraphQL', 'Next 14', 'Vercel', 'ISR'],
    metrics: {
      primaryValue: '99/100',
      primaryLabel: 'Lighthouse Speed',
      secondaryValue: '200ms',
      secondaryLabel: 'Build Time ISR',
    },
    highlightNote:
      'Decoupled publishing experience allowed 80+ content editors to work freely while public users browse cached static edge pages.',
    blueprint: {
      tag: 'ARCHITECTURE BLUEPRINT // CASE 03',
      title: 'Enterprise Headless WordPress Corporate Platform',
      challenge:
        'A global enterprise required custom editorial workflows for 80+ content writers while demanding modern developer experience, instant page loads, and zero PHP database queries on public visits.',
      solution:
        'Decoupled WordPress with WPGraphQL. Implemented Incremental Static Regeneration (ISR) in Next.js, allowing editors to publish instantaneously while users enjoy global CDN static delivery with zero CLS layout shift.',
      stack:
        'Headless WordPress, WPGraphQL, Next.js App Router, Tailwind CSS, Vercel Edge CDN',
    },
  },
  {
    id: 'modal-booking',
    missionNumber: 'MISSION 04 // UX ENGINE',
    category: 'MULTI-STATE',
    title: 'Frictionless Booking & Scheduling Engine',
    summary:
      'Condensing a confusing 7-step enterprise reservation pipeline into an effortless, single-glance interactive state machine with inline calendar slot intelligence.',
    tags: ['React', 'Tailwind', 'State Machine', 'XState'],
    metrics: {
      primaryValue: '+38%',
      primaryLabel: 'Conversion Lift',
      secondaryValue: '58s',
      secondaryLabel: 'Reduced from a 4.1-min checkout',
    },
    highlightNote:
      'State-machine driven scheduler with smart date heuristics and instant calendar slot detection.',
    blueprint: {
      tag: 'UX ENGINE BLUEPRINT // CASE 04',
      title: 'Frictionless Booking & Scheduling Engine',
      challenge:
        '7-step legacy scheduling funnel suffered a 4.1-minute average completion time and 64% user churn before entering payment details.',
      solution:
        'Rebuilt as a single-view, state-machine driven scheduler with smart date heuristics, instant calendar slot detection, and zero superfluous page reloads.',
      stack:
        'React, XState, Tailwind CSS, Framer Motion Micro-Interactions, Stripe Elements',
    },
  },
  {
    id: 'modal-rag',
    missionNumber: 'MISSION 05 // AI UX',
    category: 'ENTERPRISE RAG',
    title: 'Gov AI Document Intelligence Platform',
    summary:
      'Transforming 50,000+ pages of municipal policy and regulatory legal acts into verifiable, grounded conversational answers with instant source sentence highlighting.',
    tags: ['Figma', 'Next.js', 'Semantic UX', 'PDF Grounding'],
    metrics: {
      primaryValue: '96%',
      primaryLabel: 'Citation Accuracy',
      secondaryValue: '12x',
      secondaryLabel: 'Efficiency Lift',
    },
    highlightNote:
      'Every synthesized answer provides direct source citations that jump straight into high-resolution PDF viewer bounds.',
    blueprint: {
      tag: 'AI UX BLUEPRINT // CASE 05',
      title: 'Gov AI Document Intelligence Platform',
      challenge:
        'Municipal legal researchers spent dozens of hours manually verifying AI citations because typical LLM responses hallucinated policy numbers and statutory references.',
      solution:
        'Engineered a split-pane RAG user interface where every generative sentence contains an interactive source badge. Clicking any citation opens the original verified municipal PDF highlighted to the exact sentence.',
      stack:
        'Next.js, Tailwind CSS, Python RAG Vector Backend, PDF.js Document Highlighting, Radix UI',
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
    levelBadge: 'CURRENT LEVEL',
    isCurrent: true,
    period: '2023 — PRESENT',
    title: 'Architecting Complete Digital Product Experiences',
    description:
      'Leading end-to-end product design and frontend execution. Architecting AI-assisted search interfaces, complex multi-tenant enterprise dashboards, and headless GraphQL backends with sub-second page performance.',
    tags: ['Enterprise Strategy', 'Next 15 App Router', 'RAG UX Design'],
  },
  {
    id: 'lvl-06-07',
    levelBadge: 'LEVEL 06-07',
    period: '2020 — 2023',
    title: 'Design + Engineering Convergence & Enterprise Portals',
    description:
      'Senior Product Designer & Frontend Specialist for healthcare and renewable energy platforms. Scaled multi-role permission portals, built unified Figma-to-code component libraries, and decoupled legacy WordPress architectures into modern React stacks.',
    tags: ['WPGraphQL', 'Tailwind CSS', 'Async Orientations'],
  },
  {
    id: 'lvl-04-05',
    levelBadge: 'LEVEL 04-05',
    period: '2018 — 2020',
    title: 'UX Research, Journey Architecture & Design Systems',
    description:
      'Spearheaded user research programs, wireframing, and systemic Figma token definitions. Reduced stakeholder handoff friction by 80% through unified UI kit governance and living storybook components.',
    tags: ['Design Systems', 'Figma Tokens', 'User Testing'],
  },
  {
    id: 'lvl-01-03',
    levelBadge: 'LEVEL 01-03',
    period: '2016 — 2018',
    title: 'Web Standards, DOM Engineering & Visual Craft',
    description:
      'Mastering the deep roots: semantic HTML5, clean CSS architecture, responsive typography scales, vanilla JavaScript manipulation, and rigorous cross-browser performance standards.',
    tags: ['HTML5 / CSS3', 'JavaScript DOM', 'Core Web Vitals'],
  },
];
