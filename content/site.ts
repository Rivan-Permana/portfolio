// Single source of truth for every word on the site.
// Facts mirror CV_Rivan_Permana (Nov 2026). Edit here, not in components.

export const profile = {
  name: "Rivan Permana",
  role: "Software Engineer",
  location: "Depok, Indonesia",
  email: "sinarivan99@gmail.com",
  linkedin: "https://www.linkedin.com/in/rivan-permana",
  github: "https://github.com/Rivan-Permana",
  cv: "/CV_Rivan_Permana.pdf",
  status: "Open to software engineering roles · Remote-friendly",
};

export const hero = {
  eyebrow: "Rivan Permana · Software Engineer · Depok, Indonesia",
  headline: "I build the part you don't see.",
  sub: "APIs, data pipelines and the AI services behind them, built for a telco, a government ministry, a psychology institute and a beauty company. On most of those teams, I was also the one holding the plan.",
};

export type Chapter = {
  n: string;
  key: string;
  label: string;
  title: string;
  // Paragraphs; wrap the single key phrase of a chapter in [[double brackets]].
  body: string[];
};

export const chapters: Chapter[] = [
  {
    n: "01",
    key: "curiosity",
    label: "Curiosity",
    title: "I started with two classrooms at once.",
    body: [
      "In 2022 I enrolled in two programs in the same month: an applied informatics degree at Politeknik Negeri Jakarta and a professional diploma at Universitas Indonesia. It wasn't a grand plan. I wanted to know how the things I used every day actually worked, and one classroom felt too slow.",
      "Two years later, Bangkit Academy picked 4,636 people out of more than 45,000 applicants, and I was one of them. I graduated with Distinction. More importantly, I learned the thing nobody puts on a certificate: [[training a model is the easy part. Getting it into someone's hands is the job.]]",
    ],
  },
  {
    n: "02",
    key: "building",
    label: "Building",
    title: "Then I started shipping.",
    body: [
      "At Telkomsel, I helped build ConvoInsight, a tool that lets people ask questions of their data in plain language. Behind the chat box: a Flask API with 30+ endpoints, a router that sends each question to the right agent, encrypted credentials, and a deploy pipeline on Cloud Run.",
      "At the Ministry of Marine Affairs and Fisheries, I built the mobile API behind the Inspectorate General's whistleblowing system, with token auth, role-based access and push alerts, so a report filed from a phone reaches the people who investigate it.",
      "At BLP Beauty, I walked into two production systems with no documentation and wrote it, so the next person wouldn't have to guess.",
      "And for my thesis, I built BeeSmart end to end: an accounting system for a real kindergarten, with a 180+ account chart of accounts, tested through a 31-step acceptance run. [[None of it is flashy. All of it has to work.]]",
    ],
  },
  {
    n: "03",
    key: "ownership",
    label: "Ownership",
    title: "Somebody has to hold the whole thing.",
    body: [
      "I've been project manager on five product teams. I didn't take the role because I like meetings. I took it because I kept noticing that projects rarely fail in the code. [[They fail in the gaps between people.]]",
      "That instinct got its real test at PT Mitra Datasains Indonesia. Our client, the Applied Psychology Institute at Universitas Indonesia, assesses people through their voice: a short recording goes in, and an assessment report comes out. I built the logic and quantitative model services and wired them into the platform as isolated containers behind a versioned inference API, with audio-quality checks so a bad recording never becomes a bad report.",
      "That's the work I'm proudest of. Somebody's evaluation depends on it being right.",
    ],
  },
  {
    n: "04",
    key: "next",
    label: "Next",
    title: "What I want to build next.",
    body: [
      "I want to work close to the people I'm building for: sitting with the user, understanding the problem in their words, then going back and building the thing that actually holds up in production. Backend, AI or data, the label matters less to me than that loop.",
      "I'm a BNSP-certified Associate Data Engineer, I've shipped for four organisations, and I'm looking for a team that cares about the part nobody sees. [[If that's you, keep scrolling.]]",
    ],
  },
];

export type Track = "Backend" | "AI/ML" | "Data" | "Fullstack";
export const tracks: Track[] = ["Backend", "AI/ML", "Data", "Fullstack"];

export type Project = {
  id: string;
  name: string;
  context: string;
  line: string;
  detail: string;
  role: string;
  dates: string;
  tracks: Track[];
  stack: string[];
  status?: string;
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "midas",
    name: "Voice Assessment Platform",
    context: "PT Mitra Datasains Indonesia × LPT FPsi UI",
    line: "A short voice recording goes in; a psychologist-approved assessment report comes out.",
    detail:
      "Logic and quantitative model services running alongside an XGBoost verbal model as isolated containers behind a versioned inference-job API, with audio-QC gating, reproducible openSMILE feature pipelines and deterministic PDF/A-3b reports.",
    role: "Machine Learning Engineer (Contract)",
    dates: "Jun – Oct 2026",
    tracks: ["AI/ML", "Backend", "Data", "Fullstack"],
    stack: ["Python", "XGBoost", "openSMILE", "Celery", "PostgreSQL", "Docker"],
    status: "Client delivery",
    featured: true,
  },
  {
    id: "convoinsight",
    name: "ConvoInsight",
    context: "Telkomsel",
    line: "Ask your sales data a question in plain language; a team of agents answers with charts.",
    detail:
      "A router picks which Polars agents to run (manipulation, visualization, analysis) and a compiler writes the insight. Flask API with 30+ endpoints, LiteLLM multi-provider access, Fernet-encrypted keys, Cloud Run with Cloud Build CI/CD.",
    role: "Project Manager & Backend Engineer",
    dates: "Aug – Dec 2025",
    tracks: ["AI/ML", "Backend", "Data", "Fullstack"],
    stack: ["Flask", "LiteLLM", "Polars", "React", "Cloud Run"],
    featured: true,
  },
  {
    id: "beesmart",
    name: "BeeSmart Finance",
    context: "Undergraduate thesis",
    line: "Double-entry accounting for a real kindergarten, built solo from schema to deploy.",
    detail:
      "Attendance-based invoices, payroll and spending auto-post into journals against a 180+ account chart. Immutable posted journals, maker-checker approval and an audit log enforced by database triggers. Passed a 31-step UAT across three personas.",
    role: "Sole Full-Stack Developer",
    dates: "Jan – Oct 2026",
    tracks: ["Fullstack", "Backend", "Data"],
    stack: ["Django REST", "Vue 3", "PostgreSQL 16", "Cloudflare"],
    href: "https://github.com/Rivan-Permana/beesmartfinance-skripsi",
    featured: true,
  },
  {
    id: "kkp",
    name: "Whistleblowing System API",
    context: "Ministry of Marine Affairs and Fisheries",
    line: "The mobile API that carries a report from a phone to the people who investigate it.",
    detail:
      "v1 REST API for the LaporV Android app: complaint submission, tracking, statistics and admin status workflows, secured with Sanctum tokens, role-based access control and Firebase push alerts.",
    role: "Backend Developer (Contract)",
    dates: "Nov 2025 – Feb 2026",
    tracks: ["Backend"],
    stack: ["Laravel 12", "MySQL", "Sanctum", "FCM"],
  },
  {
    id: "fitai",
    name: "FitAI",
    context: "PBL TIK Expo PNJ 2025",
    line: "Snap your meal: it recognises the food and answers nutrition questions about it.",
    detail:
      "YOLOv8 fine-tuned on Food-101 and UECFood100, served separately from the user API, plus a RAG chatbot over Indonesian food-composition data (LangChain, FAISS, Llama 3 8B via Groq).",
    role: "Project Manager & AI Engineer",
    dates: "Feb – Jun 2025",
    tracks: ["AI/ML"],
    stack: ["YOLOv8", "LangChain", "FAISS", "FastAPI"],
  },
  {
    id: "said",
    name: "SAID",
    context: "PKM-KC national research grant",
    line: "Early stroke screening on a phone: a face-screening model and a BE-FAST triage chatbot.",
    detail:
      "Led a four-person team to a national grant from the Ministry of Higher Education. Built a distilled face-screening model for mobile and an Indonesian triage chatbot on FastAPI and Cloud Run.",
    role: "Project Manager & ML/Backend Engineer",
    dates: "Jul – Nov 2025",
    tracks: ["AI/ML", "Backend"],
    stack: ["Gemini", "FastAPI", "Cloud Run"],
  },
  {
    id: "jobmate",
    name: "JobMate",
    context: "DBS Foundation Coding Camp · Top 20 of 398",
    line: "An inclusive career platform with personalised job recommendations.",
    detail:
      "Led a six-person team; built a REST API with PostgreSQL and Firebase Auth, a LangChain + Gemini FAQ chatbot and an ML recommendation service, all on Cloud Run.",
    role: "Project Manager & Backend Engineer",
    dates: "Apr – Jun 2025",
    tracks: ["Backend", "AI/ML"],
    stack: ["PostgreSQL", "Firebase Auth", "LangChain", "Cloud Run"],
  },
  {
    id: "culture",
    name: "CultureConnect",
    context: "Bangkit Academy capstone · Grade 91.7 (A)",
    line: "Café recommendations that start from how you feel.",
    detail:
      "Led a seven-person team across ML, cloud and Android; designed the GCP architecture and deployed the recommendation models.",
    role: "Project Manager & Cloud Engineer",
    dates: "Oct – Dec 2024",
    tracks: ["Backend", "AI/ML"],
    stack: ["Cloud Run", "Firestore", "Cloud Storage", "PostgreSQL"],
  },
  {
    id: "etl",
    name: "HR Data Warehouse",
    context: "BNSP Associate Data Engineer certification",
    line: "Three messy sources, one star schema, one dashboard.",
    detail:
      "Python ETL consolidating a REST API, a remote MySQL database and CSV files into a PostgreSQL star schema with a Tableau dashboard; degrades gracefully when the source database times out.",
    role: "Data Engineer (individual)",
    dates: "May 2026",
    tracks: ["Data"],
    stack: ["Python", "PostgreSQL", "MySQL", "Tableau"],
  },
];

export type Role = {
  org: string;
  title: string;
  dates: string;
  place: string;
  note?: string;
  points: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    org: "PT Mitra Datasains Indonesia",
    title: "Machine Learning Engineer (Contract)",
    dates: "Jun 2026 – Oct 2026",
    place: "Depok",
    note: "Client: Applied Psychology Institute, Universitas Indonesia",
    points: [
      "Built logic and quantitative model services and wired them, alongside the existing XGBoost verbal model, into the voice-assessment platform as isolated containers behind a versioned inference-job API with audio-QC gating.",
      "Built the participant-to-report path: tokenized sessions and consent, resumable audio upload, and deterministic PDF/A-3b reports with psychologist approval.",
      "Made audio feature pipelines reproducible across runtimes by tracking extractor configuration, binary fingerprints and model hashes.",
    ],
    tags: ["Python", "XGBoost", "openSMILE", "Celery", "PostgreSQL RLS", "Docker"],
  },
  {
    org: "BLP Beauty",
    title: "IT Developer Intern",
    dates: "Feb 2026 – May 2026",
    place: "South Jakarta",
    points: [
      "Reverse-engineered and documented two internal production systems for HR operations and budgeting (four NestJS and Angular codebases): architecture, API contracts, data models and CI/CD.",
      "Surfaced undocumented legacy features, proposed improvements, and shipped bug fixes with light test scripts.",
    ],
    tags: ["NestJS", "Angular", "Documentation"],
  },
  {
    org: "Ministry of Marine Affairs and Fisheries",
    title: "Backend Developer (Contract), Inspectorate General",
    dates: "Nov 2025 – Feb 2026",
    place: "Central Jakarta",
    points: [
      "Built the v1 mobile REST API for the ministry's Whistleblowing System and its LaporV Android app: submission, tracking, statistics and admin workflows.",
      "Secured it with Sanctum token auth and role-based access control; added Firebase push alerts for new reports.",
    ],
    tags: ["Laravel 12", "MySQL", "Sanctum", "FCM"],
  },
  {
    org: "Telkomsel",
    title: "Machine Learning Engineer Intern",
    dates: "Aug 2025 – Dec 2025",
    place: "South Jakarta",
    note: "Product: ConvoInsight · Project Manager & Backend Engineer",
    points: [
      "Co-developed a multi-agent LLM platform that turns natural-language questions on sales and marketing data into charts and insights.",
      "Developed the Flask REST API (30+ endpoints) and Polars pipelines over GCS, PostgreSQL and Firestore; deployed on Cloud Run with Cloud Build.",
      "Set the roadmap and ran weekly planning, stand-ups and demos across frontend, backend and data science.",
    ],
    tags: ["Flask", "LiteLLM", "Polars", "Cloud Run"],
  },
];

export const stack: { group: string; items: { name: string; mark: string; use: string }[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", mark: "Py", use: "APIs · ML · ETL" },
      { name: "TypeScript", mark: "TS", use: "Vue · React" },
      { name: "SQL", mark: "SQL", use: "Postgres · MySQL" },
      { name: "PHP", mark: "PHP", use: "Laravel" },
      { name: "JavaScript", mark: "JS", use: "Express · Node" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "FastAPI", mark: "FA", use: "FitAI · SAID" },
      { name: "Flask", mark: "Fl", use: "ConvoInsight" },
      { name: "Django REST", mark: "DRF", use: "BeeSmart" },
      { name: "Laravel", mark: "Lv", use: "KKP" },
      { name: "Celery", mark: "Ce", use: "Job queues" },
    ],
  },
  {
    group: "AI / ML",
    items: [
      { name: "LiteLLM", mark: "LL", use: "LLM routing" },
      { name: "LangChain", mark: "LC", use: "RAG · agents" },
      { name: "XGBoost", mark: "XG", use: "Voice models" },
      { name: "YOLOv8", mark: "YO", use: "Vision" },
      { name: "FAISS", mark: "FS", use: "Vector search" },
    ],
  },
  {
    group: "Data & Cloud",
    items: [
      { name: "PostgreSQL", mark: "PG", use: "Triggers · RLS" },
      { name: "Polars", mark: "PL", use: "Pipelines" },
      { name: "GCP", mark: "GCP", use: "Cloud Run · Build" },
      { name: "Docker", mark: "Dk", use: "Compose · Caddy" },
      { name: "Vue 3", mark: "Vue", use: "PrimeVue · Pinia" },
    ],
  },
];

export const recognition = [
  { what: "Certified Associate Data Engineer (CADE)", who: "BNSP", when: "2026" },
  { what: "Semifinalist, top 480 teams", who: "DIGDAYA × Hackathon, Bank Indonesia & OJK", when: "2026" },
  { what: "Finalist", who: "TechnoScape Hackathon 9.0, BINUS", when: "2026" },
  { what: "National research grant (SAID)", who: "PKM-KC, Ministry of Higher Education", when: "2025" },
  { what: "Top 20 of 398 teams", who: "DBS Foundation Coding Camp", when: "2025" },
  { what: "Finalist", who: "IT Festival, IPB", when: "2025" },
  { what: "Distinction, top 10% · 1 of 4,636 from 45,000+", who: "Bangkit Academy", when: "2024" },
];

export const education = [
  {
    school: "Politeknik Negeri Jakarta",
    what: "Bachelor of Applied Science (D4), Informatics Engineering · GPA 3.30",
    when: "2022 – 2026",
  },
  {
    school: "CEP-CCIT, Faculty of Engineering, Universitas Indonesia",
    what: "Professional Diploma",
    when: "2022 – 2024",
  },
];

export const activities = [
  { what: "Initiator", who: "IEEE Student Branch PNJ", when: "2025" },
  { what: "Front-End & Back-End track · 1 of 3,000 from 63,000+", who: "Coding Camp by DBS Foundation", when: "2025" },
  { what: "Data Entry Specialist (Volunteer)", who: "PNJ & Directorate of Vocational Higher Education", when: "2024" },
  { what: "Public Relations Staff", who: "TIKFEST, HIMATIK Eclipse", when: "2023" },
];

export const contact = {
  title: "If you've read this far, we should probably talk.",
  sub: "Tell me what you're building. I read every message.",
};
