// ─────────────────────────────────────────────────────────────────────────
// SKILLS, grouped for fast scanning by technical recruiters.
// Deliberately no percentages / skill bars: levels aren't quantifiable
// honestly, so we list what's actually been used in production instead.
// ─────────────────────────────────────────────────────────────────────────

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Mobile',
    items: ['Flutter', 'Dart', 'Flutter Web', 'Android Deployment', 'iOS Deployment', 'Shorebird'],
  },
  {
    category: 'Architecture',
    items: ['Clean Architecture', 'MVC', 'MVVM', 'Offline-first Apps', 'Platform Channels'],
  },
  {
    category: 'State Management',
    items: ['BLoC', 'Provider', 'Riverpod', 'GetX'],
  },
  {
    category: 'Backend & APIs',
    items: ['Firebase (Auth, Firestore, Functions, FCM)', 'REST APIs', 'WebSockets', 'MQTT', 'FastAPI (basic)'],
  },
  {
    category: 'Integrations',
    items: ['RevenueCat', 'Stripe', 'Google Maps API', 'Mixpanel', 'Push Notifications', 'Deep Linking', 'Biometric Auth'],
  },
  {
    category: 'Languages',
    items: ['Dart', 'Python', 'C++'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git', 'Postman', 'Figma', 'Android Studio', 'VS Code', 'Agile / Sprint Planning'],
  },
  {
    category: 'AI-assisted Development',
    items: ['Prompt Engineering', 'Claude Code', 'Cursor', 'Antigravity'],
  },
];
