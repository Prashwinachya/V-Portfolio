export const projectsData = [
  {
    id: "v-finance",
    slug: "v-finance",
    title: "V Finance",
    subtitle: "Intelligent Financial Tracking & Transaction Management Platform",
    tagline: "Streamlining multi-account transaction ledgers, analytics, and asset distribution.",
    category: "Fintech & Distributed Systems",
    role: "Full-Stack Developer & Systems Designer",
    timeline: "2024",
    status: "Completed",
    isFeatured: true,
    accentColor: "purple",
    colorGradient: "from-purple-600 via-violet-600 to-indigo-700",
    badgeGlow: "glow-purple",
    heroImage: "/projects/v-finance.jpg",
    tags: ["Java", "Web Technologies", "Database", "REST APIs", "Analytics"],
    stats: [
      { label: "Query Latency", value: "< 120ms" },
      { label: "Data Integrity", value: "ACID Compliant" },
      { label: "Asset Classes", value: "Multi-Currency" },
      { label: "Architecture", value: "3-Tier Modular" }
    ],
    overview: "V Finance is a comprehensive financial management platform designed to streamline transaction ledgers, expense classification, and personal portfolio valuations into a unified, high-performance interface. Addressing the fragmentation and clunky workflows of typical personal finance tools, V Finance provides instantaneous calculation of balance states, historical timeline analysis, and data-driven spending breakdowns.",
    problemStatement: "Traditional financial tracking applications often suffer from slow relational query execution, complicated UX hierarchies, and lack of cohesive visibility across disparate accounts. Users struggle with tedious manual input, confusing charts, and concerns regarding transactional precision.",
    solution: "Built on a resilient Java backend and reactive front-end modules, V Finance executes normalized SQL relational models with strict constraint checking. The system delivers lightning-fast analytics calculations, responsive visualization charts, and automated classification algorithms that identify spending anomalies.",
    keyFeatures: [
      {
        title: "Real-Time Portfolio Valuation",
        description: "Dynamic asset allocation monitoring across savings, investments, and expenses with instant visual distribution breakdowns.",
        icon: "TrendingUp"
      },
      {
        title: "ACID Transaction Ledger",
        description: "Strict database transaction consistency guaranteeing zero balance discrepancies during high-frequency entry processing.",
        icon: "ShieldCheck"
      },
      {
        title: "Interactive Analytics & Insights",
        description: "High-contrast visual charting for monthly velocity, categorical budgeting thresholds, and automated expense forecasting.",
        icon: "BarChart3"
      },
      {
        title: "Security & Input Sanitization",
        description: "Multi-layered validation and prepared statements mitigating injection risks while maintaining quick session handling.",
        icon: "Lock"
      }
    ],
    architecture: {
      client: "Modern Responsive Web UI with dynamic charting and glassmorphic telemetry panels",
      businessLogic: "Java Application Layer implementing transactional services, budget evaluators, and session tokens",
      persistence: "Normalized Relational Database (MySQL/RDBMS) structured in 3rd Normal Form with index optimization",
      security: "Role-based verification, secure parameters, and input sanitization layer"
    },
    techStack: [
      { category: "Backend Engine", skills: ["Java", "OOP Principles", "REST Endpoints", "Servlet/MVC"] },
      { category: "Database & Storage", skills: ["MySQL", "Relational Modeling", "ACID Transactions", "Indexing"] },
      { category: "User Interface", skills: ["HTML5", "CSS3 / Modern Styling", "JavaScript", "Responsive UI"] },
      { category: "Tools & Workflow", skills: ["Git", "Maven", "Postman", "VS Code"] }
    ],
    githubUrl: "https://github.com/VaishnaviAcharya06",
    liveDemoUrl: "https://github.com/VaishnaviAcharya06"
  },
  {
    id: "industry-equipment-system",
    slug: "industry-equipment-system",
    title: "Industry Equipment System",
    subtitle: "Telemetry-Driven Machinery Health & Predictive Maintenance Platform",
    tagline: "Deterministic hardware telemetry tracking and industrial equipment asset management.",
    category: "Industrial Systems & Architecture",
    role: "Systems Programmer & Architectural Lead",
    timeline: "2024",
    status: "Completed",
    isFeatured: false,
    accentColor: "cyan",
    colorGradient: "from-cyan-500 via-blue-600 to-indigo-700",
    badgeGlow: "glow-cyan",
    heroImage: "/projects/industry-equipment.jpg",
    tags: ["C Programming", "System Architecture", "UI/UX", "Data Structures", "Telemetry"],
    stats: [
      { label: "Memory Footprint", value: "< 15 MB" },
      { label: "Execution Speed", value: "Sub-millisecond" },
      { label: "State Tracking", value: "4-Stage FSM" },
      { label: "Data Integrity", value: "Binary Logged" }
    ],
    overview: "The Industry Equipment System is an industrial-grade management and inventory telemetry suite engineered to monitor machinery status, vibration telemetry, temperature metrics, and preventive maintenance cycles. Built with strict performance constraints in mind, it bridges industrial plant-floor requirements with low-latency diagnostics.",
    problemStatement: "Unexpected industrial machine failure and unmonitored equipment wear cause substantial financial losses and safety hazards on factory floors. Many legacy systems are bloated, memory-intensive, or lack real-time escalation triggers for impending mechanical faults.",
    solution: "Engineered in C with custom memory-efficient data structures, the system simulates SCADA-style equipment health telemetry. A finite state machine dynamically tracks machinery across Operational, Warning, Critical Fault, and Maintenance states, triggering immediate warnings before catastrophic downtime occurs.",
    keyFeatures: [
      {
        title: "Machinery Telemetry Diagnostics",
        description: "Continuous monitoring of vibration thresholds, operating heat, runtime cycles, and operational fatigue parameters.",
        icon: "Cpu"
      },
      {
        title: "Automated Maintenance Lifecycle",
        description: "Predictive scheduling algorithms prioritizing service queues based on accumulated operational strain.",
        icon: "Wrench"
      },
      {
        title: "Low-Level Memory Optimization",
        description: "Zero memory leak design using efficient pointer traversal and compact binary records for real-time responsiveness.",
        icon: "Zap"
      },
      {
        title: "Plant Floor Operations Dashboard",
        description: "Clear ergonomic display enabling factory technicians to assess fleet status with zero cognitive friction.",
        icon: "Activity"
      }
    ],
    architecture: {
      client: "Modular operator console with telemetry cards and visual status indicators",
      businessLogic: "C Core Processing Engine featuring state-machine transitions and sensor threshold comparators",
      persistence: "Binary structured file storage optimized for rapid append operations and diagnostic replay",
      security: "Role-based technician permissions and tamper-resistant audit logs"
    },
    techStack: [
      { category: "Core Language", skills: ["C Programming", "Pointers & Memory Mgmt", "Data Structures"] },
      { category: "System Engineering", skills: ["Finite State Machines", "File I/O Streams", "Modular Design"] },
      { category: "UX & Ergonomics", skills: ["System Telemetry UI", "Terminal UX", "Visual Schematics"] },
      { category: "Diagnostics", skills: ["GDB", "Valgrind Memory Profiling", "GCC Toolchain"] }
    ],
    githubUrl: "https://github.com/VaishnaviAcharya06",
    liveDemoUrl: "https://github.com/VaishnaviAcharya06"
  },
  {
    id: "vote-fraud-detection-system",
    slug: "vote-fraud-detection-system",
    title: "Vote Fraud Detection System",
    subtitle: "Cryptographic Electoral Integrity & Algorithmic Anomaly Recognition Platform",
    tagline: "Verifying ballot legitimacy through cryptographic hashing and velocity anomaly heuristics.",
    category: "Cybersecurity & Algorithmic Verification",
    role: "Security Engineer & Algorithmic Developer",
    timeline: "2024",
    status: "Completed",
    isFeatured: true,
    accentColor: "emerald",
    colorGradient: "from-emerald-500 via-teal-600 to-cyan-700",
    badgeGlow: "glow-emerald",
    heroImage: "/projects/vote-fraud.jpg",
    tags: ["Java", "Security", "Algorithms", "Cryptography", "Anomaly Detection"],
    stats: [
      { label: "Verification", value: "SHA-256 Hashing" },
      { label: "Fraud Detection", value: "Multi-Heuristic" },
      { label: "Audit Trail", value: "Tamper-Evident" },
      { label: "Throughput", value: "Real-Time Flags" }
    ],
    overview: "A secure, transparent electoral monitoring framework created to detect and flag fraudulent voting behaviors during electronic balloting. Incorporating cryptographic verification logs, voter duplicate scanning, and velocity spike detection, the system ensures verifiable democratic transparency.",
    problemStatement: "Electronic voting solutions face intense scrutiny regarding ballot tampering, identity spoofing, duplicate casting, and lack of verifiable audit trails. Trust can only be maintained if fraud detection is algorithmic, transparent, and unalterable.",
    solution: "The application introduces a multi-tier fraud detection pipeline. Every cast ballot is assigned a cryptographic SHA-256 block hash tied to voter registry nonces. Concurrently, behavioral heuristics analyze time-series velocity spikes and precinct anomalies to quarantine suspicious submissions before final tallying.",
    keyFeatures: [
      {
        title: "Cryptographic Block Verification",
        description: "Immutable sequential ballot hashing making post-submission alteration or ballot stuffing mathematically impossible.",
        icon: "ShieldAlert"
      },
      {
        title: "Duplicate & Spoofing Heuristics",
        description: "Instantaneous cross-precinct identity matching to prevent multi-station vote attempts.",
        icon: "ScanFace"
      },
      {
        title: "Velocity Spike & Anomaly Radar",
        description: "Algorithmic anomaly detection flagging statistical voting speed impossibilities at specific voting terminals.",
        icon: "Radar"
      },
      {
        title: "Transparent Audit Ledger",
        description: "Read-only verifiable report logs exportable for non-partisan election observers and forensic validation.",
        icon: "FileCheck"
      }
    ],
    architecture: {
      client: "Election officer monitoring dashboard with real-time risk heatmaps and alert queues",
      businessLogic: "Java Algorithmic Processing Engine managing fraud heuristic scoring and quarantine pipelines",
      persistence: "Cryptographically linked ballot database with integrity verification checksums",
      security: "SHA-256 cryptographic hashing, salted voter hashes, and strict privilege separation"
    },
    techStack: [
      { category: "Language & Logic", skills: ["Java", "Object-Oriented Design", "Pattern Recognition"] },
      { category: "Security", skills: ["SHA-256 Hashing", "Nonce Verification", "Audit Logging"] },
      { category: "Data & Storage", skills: ["Relational Database", "Transaction Queues", "Query Optimization"] },
      { category: "Tools", skills: ["JUnit Testing", "Git", "Security Best Practices"] }
    ],
    githubUrl: "https://github.com/VaishnaviAcharya06",
    liveDemoUrl: "https://github.com/VaishnaviAcharya06"
  },
  {
    id: "career-guidance-system",
    slug: "career-guidance-system",
    title: "Career Guidance System",
    subtitle: "AI-Assisted Skill Gap Analysis & Personalized Career Pathway Navigator",
    tagline: "Empowering students and professionals to navigate personalized tech careers with data-driven roadmaps.",
    category: "EdTech & Predictive Roadmapping",
    role: "Full-Stack Developer & UI/UX Designer",
    timeline: "2024",
    status: "Completed",
    isFeatured: false,
    accentColor: "amber",
    colorGradient: "from-amber-500 via-orange-600 to-rose-600",
    badgeGlow: "glow-amber",
    heroImage: "/projects/career-guidance.jpg",
    tags: ["Web Dev", "API Integration", "Database", "UI/UX", "Roadmap Graphs"],
    stats: [
      { label: "Pathway Match", value: "94% Alignment" },
      { label: "Skill Taxonomy", value: "Multi-Domain" },
      { label: "Milestone Engine", value: "Step-by-Step" },
      { label: "Interface", value: "Interactive Graph" }
    ],
    overview: "An interactive digital platform designed to help students and aspiring professionals demystify technological career choices. By matching individual skills, academic coursework, and personal interests against dynamic industry requirement matrices, the system generates customized learning roadmaps.",
    problemStatement: "Engineering undergraduates frequently encounter career ambiguity, overwhelming advice, and unclear skill requirements when preparing for technical roles. Traditional counseling is often subjective, static, and disconnected from modern engineering market demands.",
    solution: "The Career Guidance System establishes a dynamic skill graph where users benchmark their current abilities against tech roles (such as Full-Stack, Data Science, Systems Engineering, and Cloud). The platform generates tailored curriculum milestones, highlights high-priority missing skills, and suggests verified learning pathways.",
    keyFeatures: [
      {
        title: "Dynamic Skill Pathway Graph",
        description: "Visual roadmap graph tracing foundational prerequisites, milestone progressions, and advanced specialization nodes.",
        icon: "GitFork"
      },
      {
        title: "Aptitude & Skill Gap Scorer",
        description: "Real-time proficiency scoring highlighting critical competencies required for target career roles.",
        icon: "Target"
      },
      {
        title: "Curated Resource Aggregator",
        description: "Integration of high-value courses, documentation, and practical project ideas tailored to user progress.",
        icon: "BookOpen"
      },
      {
        title: "Mentor Match & Milestone Tracker",
        description: "Structured goal setting with progress metrics and direct linkage to recommended industry mentor competencies.",
        icon: "Compass"
      }
    ],
    architecture: {
      client: "Responsive Web Application featuring interactive pathway nodes and aptitude progress gauges",
      businessLogic: "Recommendation calculation service mapping student skill profiles to target role vectors",
      persistence: "Relational database storing skill taxonomies, role criteria, and student milestone history",
      integration: "RESTful endpoints for course catalog synchronization and resource retrieval"
    },
    techStack: [
      { category: "Frontend", skills: ["JavaScript / React", "CSS3 / Modern Layouts", "Interactive SVGs"] },
      { category: "Backend & APIs", skills: ["Node.js / Express or Java", "RESTful Architecture", "JSON APIs"] },
      { category: "Data Modeling", skills: ["Database Schema Design", "Relational Queries", "Profile State"] },
      { category: "Product Design", skills: ["Figma Mockups", "User Journey Mapping", "Information Architecture"] }
    ],
    githubUrl: "https://github.com/VaishnaviAcharya06",
    liveDemoUrl: "https://github.com/VaishnaviAcharya06"
  }
];

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    accent: "from-purple-500/20 to-violet-500/10",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/80",
    description: "Core languages used for systems engineering, problem solving, and software applications.",
    items: [
      { name: "Python", highlight: "Data structures & algorithmic problem solving" },
      { name: "JavaScript (ES6+)", highlight: "Asynchronous programming & modern web" },
      { name: "Java", highlight: "Object-oriented design & backend architecture" },
      { name: "C / C++", highlight: "Memory management & low-level fundamentals" },
      { name: "SQL", highlight: "Relational queries, ACID transactions & schema modeling" }
    ]
  },
  {
    category: "Web Development",
    icon: "Layout",
    accent: "from-violet-500/20 to-pink-500/10",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200/80",
    description: "Building responsive, modern, and accessible user interfaces and web systems.",
    items: [
      { name: "React", highlight: "Component design, custom hooks & state management" },
      { name: "Tailwind CSS", highlight: "Utility-first modern styling & design systems" },
      { name: "HTML5 & CSS3", highlight: "Semantic layout, responsive design & standards" },
      { name: "RESTful APIs", highlight: "API integration, JSON data handling & contracts" },
      { name: "Responsive Design", highlight: "Cross-device accessibility & mobile-first layouts" }
    ]
  },
  {
    category: "Tools & Technologies",
    icon: "Server",
    accent: "from-pink-500/20 to-rose-500/10",
    badgeColor: "bg-pink-50 text-pink-700 border-pink-200/80",
    description: "Developer workflows, database persistence, and system utilities.",
    items: [
      { name: "Git & GitHub", highlight: "Version control, branching & project management" },
      { name: "Node.js & Express", highlight: "Server-side logic & backend services" },
      { name: "MongoDB", highlight: "NoSQL document storage & schema flexibility" },
      { name: "Firebase", highlight: "Cloud authentication & database hosting" },
      { name: "VS Code & Terminal", highlight: "Development environment & command-line tools" }
    ]
  },
  {
    category: "Currently Learning & Exploring",
    icon: "Sparkles",
    accent: "from-amber-500/20 to-orange-500/10",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200/80",
    description: "Emerging domains, algorithmic refinement, and cutting-edge paradigms.",
    items: [
      { name: "Machine Learning Concepts", highlight: "Predictive algorithms & intelligent data models" },
      { name: "Cloud Platforms", highlight: "Exploratory deployment & serverless tools" },
      { name: "System Architecture", highlight: "High-reliability system design & scalability" },
      { name: "UI/UX & Motion Engineering", highlight: "Crafting delightful, accessible micro-interactions" }
    ]
  }
];

export const experienceData = [
  {
    title: "Computer Science & Engineering Undergrad",
    institution: "Sahyadri College of Engineering & Management",
    period: "2022 — Present (Class of 2026)",
    location: "Mangalore, Karnataka, India",
    description: "Pursuing rigorous computer science coursework spanning data structures, algorithms, computer architecture, database management systems, computer networks, and software engineering. Actively building hands-on projects and collaborating in technical team initiatives.",
    badges: ["Dean's List / High Academic Standing", "System Engineering Focus", "Tech Community Contributor"]
  },
  {
    title: "Academic & Systems Project Developer",
    institution: "Self-Directed & Campus Research Projects",
    period: "2023 — Present",
    location: "Karnataka, India",
    description: "Architected 4 complete software systems including cryptographic election verification, SCADA industrial telemetry in C, fintech tracking platforms, and intelligent educational roadmaps. Focused on writing maintainable, clean code with verifiable performance.",
    badges: ["4 Major Systems Deployed", "Full-Stack Implementation", "Algorithmic Engineering"]
  }
];
