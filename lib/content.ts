export const services = [
  {
    num: "01",
    name: "People Systems Design",
    desc: "Building the foundational HR architecture that growing organisations need but often lack — before the cost of the gap becomes visible.",
    items: [
      "Onboarding frameworks",
      "Policy & handbook development",
      "Role clarity structures",
      "Performance management design",
      "Culture documentation",
    ],
  },
  {
    num: "02",
    name: "Organisational Development",
    desc: "Diagnosing the invisible forces that shape how your organisation actually operates — and restructuring them with intention.",
    items: [
      "Culture & climate assessment",
      "Team effectiveness audits",
      "Change management support",
      "Internal communication design",
      "Structural realignment",
    ],
  },
  {
    num: "03",
    name: "Leadership Development",
    desc: "Working with leaders and high-potential individuals to deepen self-awareness, expand capacity, and lead with more intention.",
    items: [
      "1:1 leadership conversations",
      "Manager readiness preparation",
      "Behavioural pattern mapping",
      "Peer group facilitation",
      "Executive coaching (in development)",
    ],
  },
  {
    num: "04",
    name: "Founder People Support",
    desc: "For early-stage founders who are scaling but have not yet built a formal people function — fractional support without the full-time cost.",
    items: [
      "Fractional P&C advisory",
      "Hiring process design",
      "Culture-first scaling strategy",
      "Conflict & tension navigation",
      "Compensation benchmarking support",
    ],
  },
  {
    num: "05",
    name: "Culture & Engagement",
    desc: "Translating abstract values into lived daily behaviour — and building the conditions under which people actually want to do good work.",
    items: [
      "Values clarification workshops",
      "Engagement survey design",
      "Recognition system design",
      "Psychological safety mapping",
      "Ritual & rhythm building",
    ],
  },
  {
    num: "06",
    name: "Workshops & Facilitation",
    desc: "Facilitated sessions for teams and leaders on the topics that most often go undiscussed — until they become crises.",
    items: [
      "Difficult conversations training",
      "Cross-team dynamics sessions",
      "Self-awareness & shadow work",
      "Resilience & pressure navigation",
      "Goal alignment facilitation",
    ],
  },
] as const;

export const approachSteps = [
  {
    num: "01",
    title: "Deep Diagnosis",
    text: "Before recommending anything, I listen. I map the actual dynamics at play — the stated problem, the hidden tensions, the cultural undercurrents. Nothing is prescribed until the environment is understood.",
  },
  {
    num: "02",
    title: "Structure Design",
    text: "With clarity on the problem, I design the framework — the systems, rhythms, roles, and processes that can hold the desired culture. Form before function. Structure before activation.",
  },
  {
    num: "03",
    title: "Human Activation",
    text: "Structures only live when people breathe life into them. This phase is about embedding change, facilitating adoption, and coaching individuals through transition — with attention to resistance and readiness.",
  },
  {
    num: "04",
    title: "Iterative Review",
    text: "Nothing I build is handed over and forgotten. I review, reflect, and refine. P&C work is never finished — it evolves with the people it serves.",
  },
] as const;

export const roadmapMonths = [
  {
    label: "Month 1–2",
    title: "Foundation",
    tasks: ["Practice launch", "First 3 clients", "Core frameworks built", "Portfolio seeded"],
  },
  {
    label: "Month 2",
    title: "Visibility",
    tasks: ["Consistent content", "Thought leadership", "Network activation", "First case studies"],
  },
  {
    label: "Month 3",
    title: "Credibility",
    tasks: ["Client testimonials", "Documented outcomes", "Workshop delivery", "First referrals"],
  },
  {
    label: "Month 4",
    title: "Depth",
    tasks: ["Coaching practice opens", "Signature framework", "Niche sharpening", "Community building"],
  },
  {
    label: "Month 5",
    title: "Scale",
    tasks: ["Retainer model launch", "Partnerships formed", "Team possibility", "Revenue milestone"],
  },
  {
    label: "Month 6",
    title: "Sustainability",
    tasks: ["Practice review", "Full offer suite live", "Brand established", "Next phase plan"],
  },
] as const;

export const credentials = [
  {
    img: "/illustrations/lbs-trans.png",
    title: "Lagos Business School",
    sub: "Entrepreneurial thinking and business strategy grounding",
  },
  {
    img: "/illustrations/psychology_jung-trans.png",
    title: "Jungian Psychology",
    sub: "Applied depth psychology — shadow work, archetypes, inner dynamics",
  },
  {
    img: "/illustrations/org_dev-trans.png",
    title: "Organisational Development",
    sub: "Systems thinking and culture architecture as active practice",
  },
  {
    img: "/illustrations/reflective-trans.png",
    title: "Reflective Practitioner",
    sub: "Poet, thinker, and keen observer of human behaviour in all its forms",
  },
] as const;

export const insights = [
  {
    tag: "Organisational Design",
    title: "Why Most Culture Work Fails Before It Starts",
    preview:
      "Culture is not a values poster. It is the sum of every repeated behaviour — and if the structure does not support the declared values, the values will always lose.",
    meta: "Essay · 5 min read",
  },
  {
    tag: "Leadership",
    title: "The Shadow of the Leader and What It Costs the Team",
    preview:
      "Every unexamined leader trait becomes an organisational system. Jung called it the shadow. P&C practitioners see it every day — they just do not always name it correctly.",
    meta: "Essay · 7 min read",
  },
  {
    tag: "African Context",
    title: "Building People Systems in Contexts Where None Existed",
    preview:
      "In many Nigerian organisations, the first HR document is written when the first crisis has already arrived. Here is how to build before the fire — even with limited resources.",
    meta: "Framework · 6 min read",
  },
] as const;

export const pillars = [
  {
    icon: "🧠",
    title: "Psychology-Led",
    text: "Human behaviour as the starting point for every intervention",
  },
  {
    icon: "🏗️",
    title: "Structure-First",
    text: "Clarity of form before execution of strategy",
  },
  {
    icon: "🌍",
    title: "African Context",
    text: "Solutions grounded in our actual operating environment",
  },
  {
    icon: "📈",
    title: "Growth-In-Progress",
    text: "A transparent, committed 6-month practice build",
  },
] as const;
