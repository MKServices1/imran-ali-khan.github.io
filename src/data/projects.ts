// ─────────────────────────────────────────────────────────────────────────
// PROJECTS DATA
// `caseStudies` = deep write-ups for the strongest, most differentiated work.
// `shipped`     = every other published app, shown as a compact trust grid
//                 (real store links, no invented descriptions).
//
// To add a new case study: copy an object in `caseStudies` and fill it in.
// To add a quick "also shipped" entry: add an object to `shipped`.
// See README.md → "How to add a new project" for the full guide.
// ─────────────────────────────────────────────────────────────────────────

export type StoreLinks = {
  playStore?: string;
  appStore?: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  company?: string;
  product: string;
  problem: string;
  approach: string[];
  architecture: string;
  challenge: string;
  result: string;
  tech: string[];
  links?: StoreLinks;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'iskaan-saas',
    name: 'SaaS Product — Built from Scratch',
    tagline: 'New SaaS platform, architected and built end-to-end at ISKAAN Tech',
    role: 'Software Engineer (Flutter)',
    company: 'ISKAAN Tech',
    product: 'A new SaaS product built from a blank repository — architecture, auth flows, and integrations owned end-to-end.',
    problem:
      'ISKAAN needed a new SaaS product built with no existing codebase to inherit from — every architectural decision, from state management to deep-linking, had to be made and justified from day one.',
    approach: [
      'Set up the app architecture and project structure from scratch, choosing BLoC and Provider for state management.',
      'Integrated Dio for networking and built the API layer, including deep linking and password-reset workflows.',
      'Used AI coding tools (Claude Code, Cursor) with deliberate prompt engineering to speed up mechanical implementation, freeing up time for architecture decisions and requirements work.',
      'Built responsive UI screens directly from wireframes and design guidelines, keeping platform-specific UX consistent across Android and iOS.',
    ],
    architecture:
      'Feature-first structure with Dio-based API layer and BLoC/Provider for modules requiring predictable state transitions (auth, password reset, deep-linked flows).',
    challenge:
      'Deep linking and password-reset flows both need to interrupt the app\'s normal navigation stack correctly — getting this right without a legacy codebase to reference required careful routing design up front.',
    result:
      'Shipped a working SaaS product with deep linking and password-reset flows functioning reliably in production, deployed to the Play Store and TestFlight with Shorebird integrated for fast OTA releases.',
    tech: ['Flutter', 'Dart', 'BLoC', 'Provider', 'Dio', 'Deep Linking', 'Shorebird', 'Claude Code', 'Prompt Engineering'],
  },
  {
    slug: 'bjs-workforce',
    name: 'Workforce Management Suite',
    tagline: 'Migrated from legacy Windows software to Flutter, with hardware control via platform channels',
    role: 'Software Engineer (Flutter)',
    company: 'BJS Soft Solutions',
    product:
      'A multi-role workforce management system (Admin, Manager, Supervisor, Worker) migrated from a legacy Windows product, plus AR-enabled sales applications.',
    problem:
      'An existing Windows product needed to become a modern, mobile-first Flutter app, while a separate module required direct hardware interaction — something standard Flutter APIs don\'t expose.',
    approach: [
      'Used Platform Channels to bridge Flutter and native Android code for hardware control, since no Flutter plugin covered the required interactions.',
      'Converted the codebase from GetX to BLoC for better modularity as the app grew across four distinct user roles.',
      'Implemented clean architecture (MVC) for the AR-enabled sales application and MVVM with Dio-based API modules for the task and workflow management app.',
      'Built permission-based access control so Admins, Managers, Supervisors and Workers each see only the data and actions relevant to their role.',
      'Contributed to Journey Planner and Task Assignment modules with real-time APIs for supervisor/worker coordination, and supported e-learning and certification-tracking features.',
    ],
    architecture:
      'MVC for the AR sales app, MVVM with Dio for task/workflow modules, BLoC for cross-cutting state — all gated by a role-based permission layer (Admin / Manager / Supervisor / Worker).',
    challenge:
      'Platform Channels require writing and maintaining native-side code alongside Dart, and getting hardware state changes to propagate back into Flutter\'s widget tree without janky UI updates took deliberate architecture work.',
    result:
      'Delivered a production multi-role workforce app with working hardware integration and structured, secure data visibility per role. Also led a team of 2 developers on this codebase — owning task allocation and code review.',
    tech: ['Flutter', 'Dart', 'Platform Channels', 'BLoC', 'MVC', 'MVVM', 'Dio', 'REST APIs'],
  },
  {
    slug: 'stovoo',
    name: 'Stovoo',
    tagline: 'Single-app, multi-role food delivery platform',
    role: 'Flutter Developer',
    product: 'A single-app food delivery system covering customer ordering, rider tracking, and restaurant control in one codebase.',
    problem:
      'Three very different user journeys — ordering, delivering, and restaurant management — needed to live in one app without becoming an unmaintainable tangle of conditionals.',
    approach: [
      'Built core modules for customer ordering, real-time rider tracking, and restaurant-side order control using GetX.',
      'Integrated Google Maps for live location tracking and optimized REST API calls to keep the experience responsive during peak ordering.',
    ],
    architecture: 'Role-driven single codebase using GetX for state and navigation, with Google Maps and optimized RESTful API integration for real-time location data.',
    challenge:
      'Real-time location updates for riders need to stay accurate and battery-efficient without flooding the UI with re-renders — this required careful state scoping in GetX.',
    result: 'Shipped to both the Play Store and App Store, with all three role-based modules functioning in a single production app.',
    tech: ['Flutter', 'GetX', 'Google Maps API', 'REST APIs', 'Real-Time Location'],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.mightysofts.stovoo&hl=en',
      appStore: 'https://apps.apple.com/us/app/stovoo/id6443545690',
    },
  },
  {
    slug: 'reloradar',
    name: 'ReloRadar',
    tagline: 'US-based real estate platform with tour scheduling and behavior tracking',
    role: 'Flutter Developer',
    product: 'A US real estate platform enabling property purchases, direct mailing, and scheduled multi-home tours with agents.',
    problem:
      'Buyers needed a way to research, get contacted about, and tour multiple properties with agents in one coordinated flow — without the scheduling and tracking logic living entirely on the backend.',
    approach: [
      'Implemented BLoC for predictable state across the property search, mailing, and tour-scheduling flows.',
      'Used Dio for API integration and deep linking to route users directly into specific property or tour views.',
      'Integrated Google Maps for property location and Mixpanel for user behavior tracking.',
      'Wired up Firebase for social logins and dynamic links to support shareable property links.',
    ],
    architecture: 'BLoC-driven state management with Dio for networking, Firebase for auth/dynamic links, and Mixpanel instrumenting the funnel from browse to scheduled tour.',
    challenge:
      'Coordinating multi-home tour scheduling with multiple agents\' availability, inside a mobile UI that still needed to feel simple to a home buyer, required careful state and UX design.',
    result: 'Delivered a working buyer-facing platform for property discovery, direct mailing, and scheduled multi-home agent tours.',
    tech: ['Flutter', 'BLoC', 'Dio', 'Deep Linking', 'Google Maps API', 'Mixpanel', 'Firebase'],
  },
  {
    slug: 'hunt-and-harris',
    name: 'Hunt & Harris RE',
    tagline: 'Dubai real estate CRM with property management and permission-based module switching',
    role: 'Flutter Developer',
    product: 'A Dubai real estate app combining Property Management and CRM modules behind a single permission-based login.',
    problem:
      'Agents and admins needed one app that could switch between property-management and CRM contexts depending on their role and permissions, without maintaining two separate apps.',
    approach: [
      'Built an MVVM architecture with Provider for state management, keeping the property-management and CRM modules cleanly separated but switchable at runtime.',
      'Integrated REST APIs for leads, listings, viewings, tasks, notes, schedules, and a calendar view.',
      'Wired up FCM for push notifications so agents get real-time updates on lead and task activity.',
      'Implemented permission-based login so the same app surfaces different modules and data depending on the logged-in user\'s role.',
    ],
    architecture: 'MVVM with Provider, REST API layer, FCM for push notifications, and a role-based module-switching layer gating access to Property Management vs. CRM.',
    challenge:
      'Switching entire feature modules in and out based on runtime permissions — without duplicating navigation or state logic — required a deliberate MVVM boundary between modules.',
    result: 'Live production CRM used by Dubai-based real estate agents, covering the full lead-to-close workflow: leads, listings, viewings, tasks, notes, schedules, and calendar.',
    tech: ['Flutter', 'MVVM', 'Provider', 'REST APIs', 'FCM', 'Role-Based Access'],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.huntandharrisre.erpapp&hl=en',
      appStore: 'https://apps.apple.com/us/app/hunt-and-harris-re/id6468483431',
    },
  },
];

// Every other published app — shown as a compact "also shipped" grid.
// Descriptions are kept minimal and factual; no assumptions beyond what
// the app name/store listing itself makes clear.
export type ShippedApp = {
  name: string;
  category?: string;
  links: StoreLinks;
};

export const shipped: ShippedApp[] = [
  {
    name: 'Fire Kirin Guide',
    category: 'Static guide app — tips, rewards & Firestore-backed support',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.firekirin.guide',
    },
  },
  {
    name: 'Sure CRM',
    category: 'Real estate CRM · Dubai',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.app.sureCrm&hl=en',
      appStore: 'https://apps.apple.com/us/app/sure-crm/id6743427892',
    },
  },
  {
    name: 'Creative Homes CRM',
    category: 'Real estate CRM · Dubai',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.creativehomes.crmapp',
      appStore: 'https://apps.apple.com/us/app/creative-homes-crm/id6468985460',
    },
  },
  {
    name: 'GPG Global CRM',
    category: 'Real estate CRM · Dubai',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.app.gpgGlobalCrm',
      appStore: 'https://apps.apple.com/us/app/gpg-global-crm/id6743427839',
    },
  },
  {
    name: 'Stanford Properties CRM',
    category: 'Real estate CRM',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.stanford.crmapp.stanford_properties_crm_mobile',
    },
  },
  {
    name: 'Doted Driver',
    category: 'Driver app · signatures & background location tracking',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.dotedco.dotedDriver',
      appStore: 'https://apps.apple.com/app/doted-driver/id6739454766',
    },
  },
  {
    name: 'DeliveriX — User',
    category: 'Delivery platform',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.vga.deliveryx',
      appStore: 'https://apps.apple.com/us/app/deliverix-user/id6748141981',
    },
  },
  {
    name: 'DeliveriX — Driver',
    category: 'Delivery platform',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.vga.deliverix.driver',
      appStore: 'https://apps.apple.com/us/app/deliverix-driver/id6748141427',
    },
  },
  {
    name: 'AllOut',
    category: 'Trips & adventures · UAE',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.AllOut.app',
    },
  },
  {
    name: 'CarHelp',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.vga.carhelp',
      appStore: 'https://apps.apple.com/us/app/car-help-%D9%83%D8%A7%D8%B1-%D9%87%D9%8A%D9%84%D8%A8/id6755152556',
    },
  },
  {
    name: 'RRR Arena',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.vga.rrrarena',
      appStore: 'https://apps.apple.com/us/app/rrrarena/id6749176887',
    },
  },
  {
    name: 'AMR',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.vga.amr',
      appStore: 'https://apps.apple.com/us/app/amr-%D8%A2%D9%85%D8%B1/id6766049292',
    },
  },
  {
    name: 'Klick',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.klick.app',
    },
  },
];
