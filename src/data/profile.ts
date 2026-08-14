// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for personal information.
// Everything on the site is derived from this file and ./experience.ts,
// ./projects.ts and ./skills.ts. Update your info here, see README.md
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
    github: 'https://github.com/imran-ali-khan',
    // Same number as `phone` above, in wa.me click-to-chat format.
    whatsapp: 'https://wa.me/923339837704',
  },

  // Short positioning line used in <title> tags, meta description, hero eyebrow.
  tagline: 'Senior Flutter Developer who ships production apps real businesses depend on',

  // Hero headline, kept factual, no invented claims.
  heroHeadline: "I build Flutter apps that ship on time and hold up long after launch.",

  heroSubline:
    "Four and a half years building production Android and iOS apps, from hardware-integrated workforce tools to real-time CRMs and a SaaS platform I built from the ground up. Based in Lahore, available to start right away.",

  // Longer narrative for the About / Engineering Approach section, written
  // in the user's own voice and lightly edited for the page.
  aboutNarrative: [
    "I'm a Flutter developer based in Lahore with about four and a half years of experience and a degree in Software Engineering.",
    "I started at BJS Soft Solutions, migrating legacy Windows systems to Flutter and building workforce management apps for admin, manager, supervisor, and worker roles, with hardware control through platform channels.",
    "At Senarios, I moved deeper into architecture work: offline-first storage, syncing data with the server, and real-time messaging.",
    "Most recently, at ISKAAN Tech, I built a SaaS product from scratch and upgraded several live CRM apps for clients in Dubai. The company downsized in 2025, which is why I'm available right away.",
    "Over the last two years, my work has shifted. I spend less time on the mechanical parts of implementation, since AI tools like Claude Code and Cursor, used with careful prompt engineering, now handle a lot of that, and more time with stakeholders, figuring out what they actually need and writing it down properly. That's why roles centered on understanding a real business process, not just writing code, interest me the most.",
  ],

  resumeFile: 'imran-ali-khan-flutter-developer.pdf',
};

export const engineeringApproach = [
  {
    title: 'Architecture first',
    description:
      "I lean on Clean Architecture and MVC or MVVM by default, so business logic stays independent from the UI and a backend change doesn't ripple through the whole app.",
  },
  {
    title: 'Offline-first where it matters',
    description:
      'I build local storage and sync layers so an app still works without a connection, and reconciles cleanly once one comes back.',
  },
  {
    title: 'State management with intent',
    description:
      'BLoC, Provider, Riverpod, or GetX, picked per project based on team size and complexity, not out of habit.',
  },
  {
    title: 'Deployment is part of the job',
    description:
      'Comfortable owning releases end to end: Play Store, TestFlight, and Shorebird for over-the-air patches without a full store review.',
  },
  {
    title: 'AI-assisted, not AI-replaced',
    description:
      'I use Claude Code and Cursor for the mechanical parts of implementation, guided by careful prompt engineering, which frees up more time for understanding requirements and system design.',
  },
  {
    title: 'Requirements before code',
    description:
      'The last two years have shifted my focus toward working directly with stakeholders, translating real-world processes into correct technical specs before writing a line of code.',
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
    detail: 'Across three companies, consistently in Flutter',
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
