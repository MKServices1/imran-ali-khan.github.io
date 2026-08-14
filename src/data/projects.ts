// ─────────────────────────────────────────────────────────────────────────
// PROJECTS DATA
// `caseStudies` = deep write-ups for the strongest, most differentiated work.
// `shipped`     = every other published app, shown as a compact trust grid
//                 (real store links, no invented descriptions).
//
// To add a new case study: copy an object in `caseStudies` and fill it in.
// To add a quick "also shipped" entry: add an object to `shipped`.
// See README.md, "How to add a new project" for the full guide.
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
    name: 'SaaS Product, Built from Scratch',
    tagline: 'New SaaS platform, architected and built end to end at ISKAAN Tech',
    role: 'Software Engineer (Flutter)',
    company: 'ISKAAN Tech',
    product: 'A new SaaS product built from a blank repository, with the architecture, auth flows, and integrations all owned end to end.',
    problem:
      'ISKAAN needed a new SaaS product with no existing codebase to build on, which meant every architectural decision, from state management to deep linking, had to be made and justified from day one.',
    approach: [
      "Set up the app's architecture and project structure from scratch, settling on BLoC and Provider for state management.",
      'Built the API layer on Dio, including deep linking and the password-reset flow.',
      'Leaned on AI coding tools like Claude Code and Cursor, guided by careful prompt engineering, to move faster through the mechanical parts of the build and spend more time on architecture and requirements.',
      'Turned wireframes and design guidelines into responsive UI screens, keeping the experience consistent across Android and iOS.',
    ],
    architecture:
      'A feature-first structure with a Dio-based API layer, and BLoC or Provider for the modules that needed predictable state transitions, like auth, password reset, and deep-linked flows.',
    challenge:
      "Deep linking and password-reset flows both need to interrupt the app's normal navigation stack correctly. Without a legacy codebase to reference, getting that right meant careful routing design up front, not trial and error.",
    result:
      'Shipped a working SaaS product with deep linking and password reset running reliably in production, deployed to the Play Store and TestFlight, with Shorebird wired up for fast over-the-air releases.',
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
      "An existing Windows product needed to become a modern, mobile-first Flutter app. A separate module also needed direct hardware interaction, something standard Flutter APIs simply don't expose.",
    approach: [
      'Bridged Flutter and native Android code with Platform Channels to get hardware control, since no existing plugin covered what was needed.',
      'Migrated the codebase from GetX to BLoC for better modularity as the app grew to cover four distinct user roles.',
      'Used clean architecture (MVC) for the AR-enabled sales app, and MVVM with Dio-based API modules for the task and workflow management app.',
      'Built permission-based access control so Admins, Managers, Supervisors, and Workers each only saw the data and actions relevant to them.',
      'Contributed to the Journey Planner and Task Assignment modules with real-time APIs for supervisor and worker coordination, and supported e-learning and certification-tracking features.',
    ],
    architecture:
      'MVC for the AR sales app, MVVM with Dio for the task and workflow modules, and BLoC for cross-cutting state, all sitting behind a role-based permission layer for Admin, Manager, Supervisor, and Worker.',
    challenge:
      "Platform Channels require writing and maintaining native-side code alongside Dart, and getting hardware state changes to propagate back into Flutter's widget tree without janky UI updates took deliberate architecture work.",
    result:
      'Delivered a production multi-role workforce app with working hardware integration and structured, secure data visibility per role. I also led a two-person dev team on this codebase, handling task allocation and code review.',
    tech: ['Flutter', 'Dart', 'Platform Channels', 'BLoC', 'MVC', 'MVVM', 'Dio', 'REST APIs'],
  },
  {
    slug: 'stovoo',
    name: 'Stovoo',
    tagline: 'Single-app, multi-role food delivery platform',
    role: 'Flutter Developer',
    product: 'A single-app food delivery system covering customer ordering, rider tracking, and restaurant control in one codebase.',
    problem:
      'Three very different user journeys (ordering, delivering, and restaurant management) needed to live inside one app without turning into an unmaintainable tangle of conditionals.',
    approach: [
      'Built the core modules for customer ordering, real-time rider tracking, and restaurant-side order control, all using GetX.',
      'Integrated Google Maps for live location tracking and tuned the REST API calls to keep things responsive during peak ordering hours.',
    ],
    architecture: 'A single, role-driven codebase using GetX for state and navigation, with Google Maps and a tuned RESTful API layer handling real-time location data.',
    challenge:
      'Real-time location updates for riders need to stay accurate and battery-efficient without flooding the UI with re-renders, which meant scoping GetX state carefully.',
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
      'Buyers needed one coordinated flow to research properties, get contacted about them, and schedule tours with agents, without pushing all the scheduling and tracking logic onto the backend.',
    approach: [
      'Used BLoC to keep state predictable across property search, mailing, and tour-scheduling flows.',
      'Used Dio for API integration, plus deep linking to route users straight into a specific property or tour view.',
      'Integrated Google Maps for property locations and Mixpanel to track user behavior.',
      'Wired up Firebase for social logins and dynamic links so property listings could be shared directly.',
    ],
    architecture: 'BLoC-driven state management, Dio handling networking, Firebase covering auth and dynamic links, and Mixpanel instrumenting the whole funnel from browsing to a scheduled tour.',
    challenge:
      "Coordinating multi-home tour scheduling with multiple agents' availability, inside a mobile UI that still needed to feel simple to a home buyer, required careful state and UX design.",
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
      'Built an MVVM architecture with Provider for state management, keeping the property-management and CRM modules cleanly separated, but switchable at runtime.',
      'Integrated REST APIs for leads, listings, viewings, tasks, notes, schedules, and a calendar view.',
      'Wired up FCM for push notifications so agents get real-time updates on lead and task activity.',
      "Implemented permission-based login so the same app surfaces different modules and data depending on the logged-in user's role.",
    ],
    architecture: 'MVVM with Provider, a REST API layer, FCM for push notifications, and a role-based module-switching layer that gates access between Property Management and CRM.',
    challenge:
      'Switching entire feature modules in and out based on runtime permissions, without duplicating navigation or state logic, required a deliberate MVVM boundary between modules.',
    result: 'Live production CRM used by Dubai-based real estate agents, covering the full lead-to-close workflow: leads, listings, viewings, tasks, notes, schedules, and calendar.',
    tech: ['Flutter', 'MVVM', 'Provider', 'REST APIs', 'FCM', 'Role-Based Access'],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.huntandharrisre.erpapp&hl=en',
      appStore: 'https://apps.apple.com/us/app/hunt-and-harris-re/id6468483431',
    },
  },
];

// Every other published app, shown as a compact "also shipped" grid.
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
    category: 'Static guide app for tips, rewards, and Firestore-backed support',
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
    name: 'DeliveriX User App',
    category: 'Delivery platform',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.vga.deliveryx',
      appStore: 'https://apps.apple.com/us/app/deliverix-user/id6748141981',
    },
  },
  {
    name: 'DeliveriX Driver App',
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
