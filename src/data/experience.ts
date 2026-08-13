// ─────────────────────────────────────────────────────────────────────────
// EXPERIENCE TIMELINE — sourced directly from the CV. To add a new role,
// add an object to this array (newest first).
// ─────────────────────────────────────────────────────────────────────────

export type Role = {
  company: string;
  title: string;
  start: string;
  end: string; // 'Present' for current role
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const experience: Role[] = [
  {
    company: 'ISKAAN Tech',
    title: 'Software Engineer, Flutter',
    start: 'Mar 2025',
    end: 'Present',
    location: 'Lahore, Pakistan',
    summary:
      'Led redesign of live client CRM apps and built a new SaaS product from scratch, owning architecture, integrations, and release management.',
    highlights: [
      'Led redesign and refactoring of multiple cross-platform real estate CRM applications, upgrading Flutter SDK versions and improving code quality and maintainability.',
      'Designed and developed a new SaaS product, handling architecture setup, API integrations, deep linking, and password-reset workflows using Dio.',
      'Implemented state management with BLoC and Provider for scalable, maintainable app logic.',
      'Used AI coding tools (Claude Code, Cursor) with deliberate prompt engineering to speed up implementation, spending more time on architecture and requirements.',
      'Built responsive, user-friendly UI screens from wireframes and design guidelines, ensuring consistent UX across platforms.',
      'Managed app deployment to the Play Store and TestFlight, integrating Shorebird for faster, safer app releases.',
      'Collaborated in Agile teams — sprint planning, code reviews, and maintaining code hygiene through testing and refactoring.',
    ],
    tech: ['Flutter', 'Dart', 'BLoC', 'Provider', 'Dio', 'Shorebird', 'Deep Linking', 'Claude Code', 'Prompt Engineering'],
  },
  {
    company: 'Senarios Pvt Limited',
    title: 'Software Engineer, Flutter',
    start: 'Feb 2023',
    end: 'Mar 2025',
    location: 'Lahore, Pakistan',
    summary:
      'Moved deeper into architecture — offline-first storage, server sync, and real-time messaging — while integrating analytics and AI-driven chat.',
    highlights: [
      'Integrated RESTful APIs across multiple apps, improving data flow and user interactions.',
      'Implemented Mixpanel analytics integration to improve tracking and user engagement visibility.',
      'Improved Buyer App filters using BLoC, optimizing Buyer-Agent tour planning and scheduling.',
      'Integrated Google & Facebook Sign-In, REST APIs, and real-time chat using MQTT.',
      'Built offline data storage and contact sync between server and local database, with UI enhancements aligned to iOS standards.',
      'Refactored tightly coupled code for maintainability and performance.',
      'Integrated AI APIs for chatbot functionality in the Chat My Book App.',
      'Managed app deployment to the Play Store and TestFlight for smooth release cycles.',
    ],
    tech: ['Flutter', 'BLoC', 'Provider', 'MQTT', 'REST APIs', 'Mixpanel', 'Offline Storage', 'AI APIs'],
  },
  {
    company: 'BJS Soft Solutions Pvt Limited',
    title: 'Software Engineer, Flutter',
    start: 'Jan 2022',
    end: 'Feb 2023',
    location: 'Lahore, Pakistan',
    summary:
      'Migrated legacy Windows systems to Flutter with native hardware integration, and led a small team building multi-role workforce apps.',
    highlights: [
      'Assisted in migrating legacy products from Windows to Flutter Android, implementing Platform Channels to control hardware interactions.',
      'Converted GetX state management to BLoC for improved modularity and maintainability.',
      'Developed authentication flows and clean architecture (MVC) for AR-enabled sales applications.',
      'Designed and integrated API modules using Dio with MVVM architecture for task and workflow management apps.',
      'Contributed to Journey Planner and Task Assignment modules with real-time APIs for supervisor and worker coordination.',
      'Built permission-based access for multi-role apps (Admin, Manager, Supervisor, Worker), ensuring secure, structured data visibility.',
      'Supported e-learning and certification-tracking features for workforce management apps.',
      'Led a team of 2 developers — managing task allocation and code reviews.',
    ],
    tech: ['Flutter', 'Platform Channels', 'BLoC', 'GetX', 'MVC', 'MVVM', 'Dio'],
  },
];

export const education = {
  degree: 'BS (Hons.) Software Engineering',
  school: 'The University of Haripur',
  start: '2017',
  end: '2021',
};
