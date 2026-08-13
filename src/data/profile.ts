// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for personal information.
// Everything on the site is derived from this file and ./experience.ts,
// ./projects.ts and ./skills.ts. Update your info here — see README.md
// "How to update content" for details.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Imran Ali Khan',
  role: 'Senior Flutter Developer',
  location: 'Lahore, Pakistan',
  email: 'imranalikhan878@gmail.com',
  phone: '+92 333 9837704',
  availability: 'Available immediately',
  yearsExperience: '4.5+ years',

  links: {
    linkedin: 'https://linkedin.com/in/imran-ali--khan',
    github: 'https://github.com/MKServices1',
    // Same number as `phone` above, in wa.me click-to-chat format.
    whatsapp: 'https://wa.me/923339837704',
  },

  // Short positioning line used in <title> tags, meta description, hero eyebrow.
  tagline: 'Senior Flutter Developer building production mobile apps for real businesses',

  // Hero headline — kept factual, no invented claims.
  heroHeadline: 'I build Flutter apps that ship, scale, and stay maintainable.',

  heroSubline:
    "4.5+ years shipping production Android & iOS apps — from hardware-integrated workforce tools to real-time CRMs and a SaaS platform built from scratch. Currently based in Lahore, available immediately.",

  // Longer narrative for the About / Engineering Approach section — derived
  // directly from the user's own words, lightly edited for the page.
  aboutNarrative: [
    "I'm a Flutter developer from Lahore with about four and a half years of experience and a degree in Software Engineering.",
    "I started at BJS Soft Solutions, migrating legacy Windows systems to Flutter and building workforce management apps — admin, manager, supervisor and worker roles, with hardware control through platform channels.",
    "At Senarios I moved deeper into architecture: offline-first storage, syncing data with the server, and real-time messaging.",
    "Most recently at ISKAAN Tech, I built a SaaS product from scratch and upgraded several live CRM apps for Dubai-based clients. The company downsized in 2025, so I'm available immediately.",
    "Over the last two years my work has shifted. I spend less time on mechanical implementation — AI tools like Claude Code and Cursor, directed through deliberate prompt engineering, have taken that over — and more time with stakeholders, understanding what they actually need and writing it down properly. That shift is why roles centered on understanding a real-world process, not just writing code, interest me most.",
  ],

  resumeFile: 'imran-ali-khan-flutter-developer.pdf',
};

export const engineeringApproach = [
  {
    title: 'Architecture first',
    description:
      'I default to Clean Architecture and MVC/MVVM so business logic stays independent of UI and backend changes don’t cascade through the app.',
  },
  {
    title: 'Offline-first where it matters',
    description:
      'Built local storage and sync layers so apps stay usable without a connection and reconcile cleanly when it returns.',
  },
  {
    title: 'State management with intent',
    description:
      'BLoC, Provider, Riverpod or GetX — chosen per project based on team size and complexity, not habit.',
  },
  {
    title: 'Deployment is part of the job',
    description:
      'Comfortable owning releases end-to-end: Play Store, TestFlight, and Shorebird for over-the-air patches without a full store review.',
  },
  {
    title: 'AI-assisted, not AI-replaced',
    description:
      'Claude Code and Cursor, driven by deliberate prompt engineering, handle mechanical implementation so more time goes into understanding requirements and system design.',
  },
  {
    title: 'Requirements before code',
    description:
      'The last two years have shifted my focus toward working directly with stakeholders to translate real-world processes into correct technical specs before writing a line of code.',
  },
];

export const achievements = [
  {
    label: 'Production apps shipped',
    value: '17+',
    detail: 'Published to the Play Store and/or App Store',
  },
  {
    label: 'Years of experience',
    value: '4.5+',
    detail: 'Across 3 companies, consistently in Flutter',
  },
  {
    label: 'Live client CRMs upgraded',
    value: '5+',
    detail: 'Dubai-based real estate CRM platforms, refactored and maintained',
  },
  {
    label: 'SaaS product',
    value: '1',
    detail: 'Architected and built from scratch at ISKAAN Tech',
  },
];
