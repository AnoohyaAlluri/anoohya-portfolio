"use client";

import { useEffect, useState } from "react";

const stackItems = [
  {
    icon: "📐",
    title: "Measurement Architecture",
    detail:
      "Connect GA4, CRM, campaign, website, and operational data into reliable reporting structures.",
  },
  {
    icon: "⚙️",
    title: "Growth Operations",
    detail:
      "Design scalable workflows for lead management, campaign execution, QA, and follow-up.",
  },
  {
    icon: "🤖",
    title: "Automation & AI Systems",
    detail:
      "Use code, automation, and AI-assisted workflows to reduce friction and improve execution quality.",
  },
  {
    icon: "📊",
    title: "Executive Decision Support",
    detail:
      "Translate fragmented signals into KPIs, risk visibility, priorities, and decision-ready insights.",
  },
];

type FeaturedProject = {
  tag: string;
  title: string;
  description: string;
  tools: string[];
  status: string;
  icon: string;
  image?: string;
  previewClass: string;
  proof: string[];
  href?: string;
  buttonLabel?: string;
  liveHref?: string;
  liveButtonLabel?: string;
};

type SupportingProject = {
  title: string;
  category: string;
  description: string;
  tools: string[];
  href?: string;
  buttonLabel?: string;
};

type InternalInitiative = {
  title: string;
  category: string;
  description: string;
  tools: string[];
  proof: string[];
};

const featuredProjects: FeaturedProject[] = [
  {
    tag: "Marketing Analytics Engineering",
    title: "Lead Intelligence & Attribution System",
    description:
      "Engineered a synthetic lead intelligence system that standardizes fragmented acquisition data, scores match confidence, routes exceptions, validates data quality, and prepares reporting-ready outputs.",
    tools: ["Python", "Pandas", "Data Quality", "Attribution"],
    status: "Published Case Study",
    icon: "🧠",
    image: "/lead-intelligence-kpi.png",
    previewClass:
      "from-[#203354] via-[#5f78ab] to-[#d8e3ea]",
    proof: [
      "Data standardization and QA",
      "Match-confidence and exception logic",
      "Analytics-ready outputs",
    ],
    href: "https://github.com/AnoohyaAlluri/lead-intelligence-system",
    buttonLabel: "View GitHub Case Study",
  },
  {
    tag: "SEO / AEO / GEO",
    title: "Local Growth & Search Authority System",
    description:
      "Designed a search growth framework connecting local SEO, answer-engine optimization, generative-engine visibility, content architecture, internal linking, structured answers, and conversion pathways.",
    tools: ["SEO", "AEO", "GEO", "Search Analytics"],
    status: "Published Case Study",
    icon: "🔎",
    previewClass:
      "from-[#244c5a] via-[#6f9e9a] to-[#dce9df]",
    proof: [
      "Local intent and content architecture",
      "Internal linking and answer system",
      "Live website implementation proof",
    ],
    href:
      "https://github.com/AnoohyaAlluri/seo-aeo-geo-local-growth-framework",
    buttonLabel: "View GitHub Case Study",
    liveHref: "https://www.westsidepropertymanagement.com/",
    liveButtonLabel: "View Live Website",
  },
  {
    tag: "Growth Operations & Automation",
    title: "Luxury Rental Lead Pipeline & Outreach Automation",
    description:
      "Engineered a synthetic listing-to-outreach pipeline that cleans property data, applies qualification and suppression logic, generates campaign queues, and validates outputs before activation.",
    tools: ["Python", "Pandas", "Data Pipeline", "Pytest"],
    status: "Published Case Study",
    icon: "🏙️",
    previewClass:
      "from-[#51436f] via-[#8c78ad] to-[#ddd5eb]",
    proof: [
      "Listing-data standardization",
      "Qualification and suppression logic",
      "Campaign queues and automated QA",
    ],
    href:
      "https://github.com/AnoohyaAlluri/luxury-rental-mls-outreach-pipeline",
    buttonLabel: "View GitHub Case Study",
  },
];

const internalInitiatives: InternalInitiative[] = [
  {
    title: "Growth & Operations Command Center",
    category: "Operations Intelligence",
    description:
      "Built the operating model for a leadership command center that consolidates project health, KPI attainment, blockers, decisions, evidence, and weekly execution into one decision-support workflow.",
    tools: ["Python", "Pandas", "Streamlit", "Data Governance"],
    proof: [
      "Portfolio health and KPI tracking",
      "Risk, blocker, and decision visibility",
      "Evidence-linked executive reporting",
    ],
  },
  {
    title: "Conversion Integrity & Attribution Audit",
    category: "Paid Media Analytics",
    description:
      "Separated business outcomes from soft platform events, diagnosed tracking gaps, and created a conversion-governance framework for more reliable paid-media decisions.",
    tools: ["Google Ads", "GA4", "GTM", "Attribution"],
    proof: [
      "Outcome and event classification",
      "Tracking and attribution diagnosis",
      "Measurement governance for budget decisions",
    ],
  },
  {
    title: "Maintenance Operations Intelligence",
    category: "Business Analytics",
    description:
      "Evaluated work-order patterns and process signals to surface documentation gaps, cancellation risk, recurring issue categories, and automation opportunities.",
    tools: ["Python", "Excel", "Tableau", "Process Analytics"],
    proof: [
      "Work-order pattern analysis",
      "Documentation and process-gap detection",
      "Automation and dashboard opportunity mapping",
    ],
  },
];

const supportingProjects: SupportingProject[] = [
  {
    title: "SQL Data Warehouse",
    category: "Data Engineering",
    description:
      "Designed a layered SQL warehouse using bronze, silver, and gold architecture to standardize raw data and deliver analytics-ready business models.",
    tools: ["SQL", "ETL", "Data Modeling", "Data Warehouse"],
    href:
      "https://github.com/AnoohyaAlluri/sql-data-warehouse-project",
    buttonLabel: "View GitHub",
  },
  {
    title: "SQL Business Analytics",
    category: "Data Analytics",
    description:
      "Applied SQL for exploratory analysis, KPI evaluation, segmentation, performance diagnostics, and decision-ready business reporting.",
    tools: ["SQL", "EDA", "KPI Analysis", "Reporting"],
    href:
      "https://github.com/AnoohyaAlluri/sql-data-analytics-project",
    buttonLabel: "View GitHub",
  },
  {
    title: "Tableau Dashboard Collection",
    category: "Data Visualization",
    description:
      "Created interactive dashboards and geospatial analyses for customer segmentation, regional demand evaluation, and executive insight communication.",
    tools: ["Tableau", "Mapbox", "Excel", "Data Visualization"],
    href:
      "https://public.tableau.com/app/profile/anoohya.allurii/vizzes",
    buttonLabel: "View Tableau",
  },
];

const websiteProofSlides = [
  {
    title: "Homepage UX + CTA Positioning",
    label: "Website UX",
    image: "/website/homepage-ux.png",
    caption:
      "Reframed owner-facing hierarchy, trust signals, and CTA placement around a clear consultation path.",
  },
  {
    title: "Owner Journey Content Blocks",
    label: "Information Architecture",
    image: "/website/owner-guidance-cards.png",
    caption:
      "Mapped distinct conversion pathways for switchers, accidental landlords, and first-time investors.",
  },
  {
    title: "LA Rental Market Resource",
    label: "SEO Content System",
    image: "/website/la-market-resource.png",
    caption:
      "Structured educational content to support search discovery, owner decision-making, and lead capture.",
  },
  {
    title: "Accidental Landlord Guide",
    label: "Lead Magnet UX",
    image: "/website/accidental-landlord-guide.png",
    caption:
      "Built a problem-aware guide experience that moves uncertain owners toward a clear next step.",
  },
  {
    title: "Guide Cover / Resource Design",
    label: "Content Packaging",
    image: "/website/guide-cover.png",
    caption:
      "Packaged educational content as a branded, reusable acquisition asset.",
  },
  {
    title: "Consultation Confirmation Page",
    label: "Conversion Flow",
    image: "/website/consultation-confirmation.png",
    caption:
      "Clarified post-conversion expectations and next steps after consultation requests.",
  },
  {
    title: "Santa Monica Local SEO Page",
    label: "Local SEO Landing Page",
    image: "/website/santa-monica-local-seo.png",
    caption:
      "Aligned local search intent, service messaging, proof, and CTA pathways for high-value property owners.",
  },
];

const tools = [
  "Python",
  "SQL",
  "Pandas",
  "Power BI",
  "Tableau",
  "Streamlit",
  "Microsoft Excel",
  "Power Query",
  "DAX",
  "GA4",
  "Google Tag Manager",
  "Google Ads",
  "Meta Ads",
  "Google Search Console",
  "HubSpot",
  "Mailchimp",
  "Google Apps Script",
  "ETL",
  "Attribution Analysis",
  "SEO / AEO / GEO",
];

const credentials = [
  {
    title: "SQL Advanced",
    issuer: "HackerRank",
    date: "Issued Aug 2025",
    proofType: "Verified SQL Credential",
    detail:
      "Advanced SQL certification validating SQL querying, database logic, and analytical problem-solving.",
    skills: ["SQL", "Advanced Queries", "Data Analysis"],
    href: "https://www.hackerrank.com/certificates/944c5575cd92",
  },
  {
    title: "Google Analytics",
    issuer: "Google Skillshop",
    date: "Issued Jul 2025",
    proofType: "Measurement & Reporting Credential",
    detail:
      "Validated knowledge of Google Analytics measurement, reporting, traffic analysis, and marketing performance tracking.",
    skills: ["Google Analytics", "Marketing Analytics", "Reporting"],
    href: "https://skillshop.credential.net/ecc3d6f7-2eb1-4a46-bc3b-3f0e13a6a4bc#acc.OSmnNWrc",
  },
  {
    title: "Gen AI",
    issuer: "Google",
    date: "Issued Jun 2024",
    proofType: "AI Workflow Credential",
    detail:
      "Google credential focused on generative AI applications for marketing, productivity, and workflow innovation.",
    skills: ["Generative AI", "AI for Marketing", "Workflow Innovation"],
    href: "https://www.skills.google/public_profiles/032a9598-f8ad-4590-b13b-70df6d36d859/badges/9607505?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "R Programming",
    issuer: "Udemy",
    date: "Issued Jul 2023",
    proofType: "Data Analysis Training",
    detail:
      "Training in R programming and analytical workflows for data analysis, statistical thinking, and business problem-solving.",
    skills: ["R Programming", "Analytical Skills", "Data Analysis"],
    href: "https://www.udemy.com/certificate/UC-ffd34fc5-ccfd-4cdf-a457-536fd89f85bb/",
  },
  {
    title: "R Systems Certificate",
    issuer: "R Systems",
    date: "Professional Recognition",
    proofType: "Go-to-Market Strategy Recognition",
    detail:
      "Certificate of appreciation for customer research and development of a go-to-market strategy.",
    skills: ["Customer Research", "Go-to-Market Strategy", "Market Analysis"],
    href: "/R-systems-certificate.pdf",
  },
  {
    title: "Sensory Marketing Study",
    issuer: "Publication",
    date: "Published 2023",
    proofType: "Published Research",
    detail:
      "Published research using survey data and statistical analysis to study sensory drivers of Gen Z purchase intent and brand loyalty.",
    skills: ["Research", "Marketing Analytics", "Survey Analysis"],
    href: "http://junikhyatjournal.in/no_1_Online_23/60_online_nov.pdf",
  },
];

const proofLinks = [
  {
    title: "GitHub",
    text: "Production-style code, data pipelines, QA logic, and case-study documentation",
    href: "https://github.com/AnoohyaAlluri",
  },
  {
    title: "Tableau Public",
    text: "Interactive dashboards, geospatial analysis, and visual decision support",
    href: "https://public.tableau.com/app/profile/anoohya.allurii/vizzes",
  },
  {
    title: "LinkedIn",
    text: "Experience, credentials, and professional project context",
    href: "https://www.linkedin.com/in/anoohyaalluri/",
  },
  {
    title: "Linktree",
    text: "Central access to certifications, research, and additional evidence",
    href: "https://linktr.ee/anoohyaalluri",
  },
];

export default function Home() {
  const [certificationsOpen, setCertificationsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [websiteSlide, setWebsiteSlide] = useState(0);

  const nextWebsiteSlide = () => {
    setWebsiteSlide((current) =>
      current === websiteProofSlides.length - 1 ? 0 : current + 1
    );
  };

  const previousWebsiteSlide = () => {
    setWebsiteSlide((current) =>
      current === 0 ? websiteProofSlides.length - 1 : current - 1
    );
  };

  const activeWebsiteSlide = websiteProofSlides[websiteSlide];

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const forceTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    forceTop();

    const timers = [
      window.setTimeout(forceTop, 0),
      window.setTimeout(forceTop, 100),
      window.setTimeout(forceTop, 300),
      window.setTimeout(forceTop, 700),
      window.setTimeout(forceTop, 1200),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f0e6] text-[#202020]">
      <section className="relative overflow-hidden bg-[#6f86b8] px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#e6dacb] bg-[#fbf5ec] shadow-2xl">
          <nav className="flex items-center justify-between border-b border-[#eadfce] px-6 py-5 sm:px-10">
            <div className="flex items-center gap-3 text-lg font-semibold tracking-tight">
              <img
                src="/images/anoohya-headshot.jpg.jpg"
                alt="Anoohya Alluri"
                className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-md"
              />
              <div>
                Anoohya Alluri <span className="text-[#d69aa7]">✦</span>
              </div>
            </div>

            <div className="hidden items-center gap-8 text-sm font-medium md:flex">
              <a href="#about" className="hover:text-[#6f86b8]">
                About
              </a>
              <a href="#projects" className="hover:text-[#6f86b8]">
                Projects
              </a>
              <a href="#website-proof" className="hover:text-[#6f86b8]">
                Web Systems
              </a>
              <a href="#creative" className="hover:text-[#6f86b8]">
                Campaign Systems
              </a>
              <a href="#skills" className="hover:text-[#6f86b8]">
                Skills
              </a>
              <a href="#credentials" className="hover:text-[#6f86b8]">
                Credentials
              </a>
              <a href="#proof" className="hover:text-[#6f86b8]">
                Proof
              </a>
            </div>

            <a
              href="https://www.linkedin.com/in/anoohyaalluri/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#203354] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#16243c]"
            >
              Connect on LinkedIn ↗
            </a>
          </nav>

          <section className="grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[#d36d81]">
                Marketing Analytics | Growth Operations | AI Automation
              </p>

              <h1 className="max-w-4xl font-serif text-6xl font-black leading-[0.9] tracking-tight text-[#202020] sm:text-7xl lg:text-8xl">
                Anoohya
                <span className="block text-[#5f78ab]">Alluri</span>
              </h1>

              <h2 className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-[#2a2a2a] sm:text-2xl">
                Marketing Analytics Engineer & Growth Operations Analyst
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#3d3d3d] sm:text-lg">
                I design measurement, automation, and decision-support systems
                that connect marketing data, CRM workflows, search performance,
                campaign execution, and operational reporting. My focus is
                turning fragmented inputs into reliable systems leaders can use.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#203354] px-6 py-3 text-center text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  View Resume ↓
                </a>

                <a
                  href="#projects"
                  className="rounded-xl border border-[#203354] bg-white/60 px-6 py-3 text-center text-sm font-bold text-[#203354] transition hover:-translate-y-1 hover:bg-white"
                >
                  Explore Case Studies ↗
                </a>

                <a
                  href="#website-proof"
                  className="rounded-xl border border-[#6f86b8] bg-[#eef1f8] px-6 py-3 text-center text-sm font-bold text-[#203354] transition hover:-translate-y-1 hover:bg-white"
                >
                  Review Web Systems ↔
                </a>

                <a
                  href="#creative"
                  className="rounded-xl border border-[#d69aa7] bg-[#fff4f6] px-6 py-3 text-center text-sm font-bold text-[#70323c] transition hover:-translate-y-1 hover:bg-[#f8d9df]"
                >
                  View Campaign Systems ✦
                </a>

                <a
                  href="mailto:anoohyaifo@gmail.com"
                  className="rounded-xl bg-[#f1c5cc] px-6 py-3 text-center text-sm font-bold text-[#70323c] transition hover:-translate-y-1 hover:bg-[#ebb3bd]"
                >
                  Contact ✉
                </a>
              </div>
            </div>

            <div className="relative min-h-[500px] sm:min-h-[540px] lg:min-h-[560px]">
              <div className="absolute right-0 top-6 h-72 w-72 rounded-full bg-[#eec3cc] blur-3xl" />

              <div className="absolute left-4 top-6 z-10 rotate-[-6deg] rounded-2xl bg-white p-4 shadow-xl sm:left-8">
                <p className="font-serif text-lg italic leading-7 text-[#2f2f2f]">
                  From fragmented
                  <br />
                  data to
                  <br />
                  decision-ready
                  <br />
                  systems. ✦
                </p>
              </div>

              <div className="absolute bottom-4 right-0 w-[92%] rotate-2 rounded-[2rem] bg-[#6f86b8] p-5 shadow-2xl sm:right-4 sm:w-[88%]">
                <div className="rounded-[1.5rem] border border-white/40 bg-[#f8efe4] p-5">
                  <div className="relative flex h-[380px] items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-dashed border-[#d8c4ad] bg-white/70 sm:h-[430px] lg:h-[470px]">
                    <img
                      src="/images/anoohya-full.jpg.png"
                      alt="Anoohya Alluri full portrait"
                      className="h-full w-full object-cover object-[center_32%]"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 z-20 rotate-[-8deg] rounded-xl bg-[#fff4f6] px-5 py-4 text-sm font-semibold text-[#7b3b46] shadow-md">
                Measure.
                <br />
                Automate.
                <br />
                Operationalize. ✦
              </div>
            </div>
          </section>

          <section
            id="about"
            className="border-y border-[#eadfce] px-6 py-10 sm:px-10"
          >
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                Professional value
              </p>
              <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
                I connect data, marketing, and operations into{" "}
                <span className="rounded-full border-2 border-[#d69aa7] px-3 text-[#5f78ab]">
                  decision systems
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#4a4a4a]">
                My differentiator is the ability to move from business problem
                to measurement design, workflow automation, analytical output,
                and executive-ready action without treating each function as a
                separate silo.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stackItems.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-[#e4d7c5] bg-white/70 p-5 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef1f8] text-3xl transition group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#555]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="projects"
            className="relative overflow-hidden border-y border-[#eadfce] bg-gradient-to-br from-[#eef1f8] via-[#fbf5ec] to-[#fff4f6] px-6 py-16 sm:px-10"
          >
            <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#9fb2d3]/30 blur-3xl" />
            <div className="absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-[#f1c5cc]/40 blur-3xl" />

            <div className="relative">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                    Evidence of capability
                  </p>
                  <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
                    Featured Systems & Case Studies
                  </h2>
                </div>

                <p className="max-w-xl text-sm leading-7 text-[#555]">
                  Selected work demonstrating how I diagnose measurement
                  gaps, engineer data workflows, automate execution, and
                  translate operational complexity into decision-ready systems.
                  Synthetic or anonymized assets are used where required.
                </p>
              </div>

              <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                {featuredProjects.map((project) => (
                  <article
                    key={project.title}
                    className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 p-5 shadow-[0_22px_60px_rgba(32,51,84,0.13)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/75 hover:shadow-[0_28px_75px_rgba(32,51,84,0.20)]"
                  >
                    <div
                      className={`relative min-h-[190px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${project.previewClass} p-5 text-white shadow-inner`}
                    >
                      <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full border border-white/25 bg-white/10" />
                      <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full border border-white/20 bg-white/10" />

                      <div className="relative flex items-start justify-between gap-4">
                        <div className="max-w-[230px]">
                          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/85">
                            {project.tag}
                          </p>

                          {project.image ? (
                            <div className="mt-4 overflow-hidden rounded-2xl border border-white/30 bg-white/95 p-2 shadow-xl">
                              <img
                                src={project.image}
                                alt={`${project.title} preview`}
                                className="h-32 w-full rounded-xl object-contain"
                              />
                            </div>
                          ) : (
                            <div className="mt-5 text-5xl">
                              {project.icon}
                            </div>
                          )}
                        </div>

                        <span className="max-w-[120px] rounded-full border border-white/30 bg-white/15 px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wider backdrop-blur">
                          {project.status}
                        </span>
                      </div>

                      <div className="relative mt-5 grid grid-cols-3 gap-2">
                        {project.proof.map((item, index) => (
                          <div
                            key={item}
                            className="rounded-xl border border-white/25 bg-white/10 p-2 backdrop-blur"
                          >
                            <p className="text-base font-black">
                              0{index + 1}
                            </p>
                            <p className="mt-1 text-[9px] font-semibold leading-3 text-white/80">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
                      <h3 className="font-serif text-2xl font-black leading-tight text-[#202020]">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#555]">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-[#eadfce] bg-white/75 px-3 py-1 text-xs font-bold text-[#70323c] shadow-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-6">
                        {project.href || project.liveHref ? (
                          <div
                            className={`grid gap-3 ${
                              project.href && project.liveHref
                                ? "sm:grid-cols-2"
                                : ""
                            }`}
                          >
                            {project.href && (
                              <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center rounded-xl bg-[#203354] px-4 py-3 text-center text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#16243c]"
                              >
                                {project.buttonLabel ?? "View Case Study"} ↗
                              </a>
                            )}

                            {project.liveHref && (
                              <a
                                href={project.liveHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center rounded-xl border border-[#203354] bg-white/80 px-4 py-3 text-center text-sm font-bold text-[#203354] shadow-md transition hover:-translate-y-0.5 hover:bg-white"
                              >
                                {project.liveButtonLabel ?? "View Live Website"} ↗
                              </a>
                            )}
                          </div>
                        ) : (
                          <div className="flex w-full items-center justify-center rounded-xl border border-[#c9d3e5] bg-[#eef1f8]/80 px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-[#5f78ab]">
                            {project.status}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <section className="mt-14 rounded-[2rem] border border-white/70 bg-white/45 p-6 shadow-[0_18px_50px_rgba(32,51,84,0.10)] backdrop-blur-xl sm:p-8">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-[#6f86b8]">
                      Strategic systems
                    </p>
                    <h3 className="mt-2 font-serif text-3xl font-black text-[#202020] sm:text-4xl">
                      Growth, Analytics & Operations Initiatives
                    </h3>
                  </div>

                  <p className="max-w-xl text-sm leading-6 text-[#555]">
                    Selected systems and analyses developed to strengthen
                    executive visibility, measurement integrity, operational
                    efficiency, and data-informed decision-making.
                  </p>
                </div>

                <div className="mt-7 grid gap-5 lg:grid-cols-3">
                  {internalInitiatives.map((initiative) => (
                    <article
                      key={initiative.title}
                      className="flex h-full flex-col rounded-[1.5rem] border border-[#e4d7c5] bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#6f86b8]">
                          {initiative.category}
                        </p>

                        <span className="rounded-full bg-[#eef1f8] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#5f78ab]">
                          Strategic Initiative
                        </span>
                      </div>

                      <h4 className="mt-4 font-serif text-2xl font-black leading-tight text-[#202020]">
                        {initiative.title}
                      </h4>

                      <p className="mt-3 text-sm leading-6 text-[#555]">
                        {initiative.description}
                      </p>

                      <div className="mt-5 space-y-2">
                        {initiative.proof.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 text-sm leading-5 text-[#444]"
                          >
                            <span className="mt-1 text-[#6f86b8]">●</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-wrap gap-2 pt-5">
                        {initiative.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full bg-[#f5edf0] px-3 py-1 text-xs font-bold text-[#70323c]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <div className="mt-14">
                <button
                  type="button"
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  className="group relative w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/60 p-6 text-left shadow-[0_20px_55px_rgba(32,51,84,0.12)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/80 hover:shadow-2xl"
                >
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#f1c5cc]/45 blur-2xl transition group-hover:scale-125" />
                  <div className="absolute -bottom-12 left-1/3 h-36 w-36 rounded-full bg-[#8fa5c8]/30 blur-2xl transition group-hover:scale-125" />

                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        <div className="absolute -right-1 -top-2 h-8 w-14 rounded-t-2xl bg-[#d69aa7]" />
                        <div className="relative flex h-20 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d8e3ea] to-[#f1c5cc] text-5xl shadow-md transition group-hover:-rotate-3 group-hover:scale-105">
                          🗂️
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                          Technical foundations
                        </p>
                        <h3 className="mt-1 font-serif text-3xl font-black text-[#202020]">
                          SQL, BI & Applied Analytics
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#555]">
                          Supporting technical work in data engineering, SQL analysis, dashboard development, and visual decision support.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-full bg-[#203354] px-5 py-2 text-center text-sm font-bold text-white shadow-md transition group-hover:bg-[#16243c]">
                      {projectsOpen ? "Close technical projects ↑" : "View technical projects ↓"}
                    </div>
                  </div>
                </button>

                {projectsOpen && (
                  <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/40 p-5 shadow-inner backdrop-blur-xl">
                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                      {supportingProjects.map((project) => (
                        <article
                          key={project.title}
                          className="flex h-full flex-col rounded-[1.6rem] border border-white/75 bg-white/70 p-5 shadow-md backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                        >
                          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#6f86b8]">
                            {project.category}
                          </p>

                          <h3 className="mt-3 font-serif text-2xl font-black leading-tight">
                            {project.title}
                          </h3>

                          <p className="mt-3 text-sm leading-6 text-[#555]">
                            {project.description}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.tools.map((tool) => (
                              <span
                                key={tool}
                                className="rounded-full bg-[#f5edf0] px-3 py-1 text-xs font-bold text-[#70323c]"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>

                          <div className="mt-auto pt-6">
                            {project.href ? (
                              <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex rounded-full bg-[#203354] px-4 py-2 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#16243c]"
                              >
                                {project.buttonLabel ?? "View Project"} ↗
                              </a>
                            ) : (
                              <span className="inline-flex rounded-full border border-[#d8c6ad] bg-[#fffaf3] px-4 py-2 text-xs font-bold text-[#70323c]">
                                Portfolio evidence in progress
                              </span>
                            )}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section
            id="website-proof"
            className="overflow-hidden border-y border-[#eadfce] bg-[#fbf5ec] px-6 py-16 sm:px-10"
          >
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                  Search growth & conversion architecture
                </p>

                <h2 className="mt-3 font-serif text-4xl font-black leading-tight sm:text-5xl">
                  Web experiences designed for visibility, trust, and qualified action.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#555] sm:text-base">
                  Designed and supported website improvements across local
                  search architecture, owner journeys, offer clarity, CTA
                  consistency, lead-magnet experiences, trust signals, and
                  conversion measurement. The objective is a connected growth
                  system, not isolated page edits.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Homepage UX",
                    "Local SEO pages",
                    "AEO / GEO content",
                    "Lead magnet UX",
                    "CTA optimization",
                    "Conversion flow",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#eadfce] bg-white/70 px-4 py-3 text-sm font-bold text-[#203354] shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-6 rounded-2xl bg-[#f5edf0] px-5 py-4 text-sm leading-6 text-[#70323c]">
                  Core approach: one clear offer, consistent CTA language,
                  low-friction forms, trust-building content, and measurable
                  conversion paths.
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-[720px]">
                <div className="absolute -left-14 top-10 h-48 w-48 rounded-full bg-[#d8e3ea] blur-3xl" />
                <div className="absolute -right-14 bottom-10 h-56 w-56 rounded-full bg-[#f1c5cc] blur-3xl" />

                <div className="relative rounded-[2rem] border border-[#d8c6ad] bg-[#151515] p-3 shadow-[0_35px_80px_rgba(32,51,84,0.30)]">
                  <div className="overflow-hidden rounded-[1.5rem] bg-white">
                    <div className="flex items-center justify-between border-b border-[#e8e2d8] bg-[#f8f4ed] px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#d69aa7]" />
                        <span className="h-3 w-3 rounded-full bg-[#f2c85b]" />
                        <span className="h-3 w-3 rounded-full bg-[#8fb8d8]" />
                      </div>

                      <div className="hidden rounded-full bg-white px-4 py-1 text-xs font-bold text-[#203354] shadow-sm sm:block">
                        westsidepropertymanagement.com
                      </div>

                      <div className="text-xs font-bold text-[#777]">
                        Growth System
                      </div>
                    </div>

                    <div className="relative bg-white">
                      <img
                        src={activeWebsiteSlide.image}
                        alt={activeWebsiteSlide.title}
                        className="h-auto w-full object-contain"
                      />

                      <button
                        type="button"
                        onClick={previousWebsiteSlide}
                        aria-label="Previous website proof"
                        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-2xl font-black text-[#203354] shadow-xl transition hover:scale-110"
                      >
                        ‹
                      </button>

                      <button
                        type="button"
                        onClick={nextWebsiteSlide}
                        aria-label="Next website proof"
                        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-2xl font-black text-[#203354] shadow-xl transition hover:scale-110"
                      >
                        ›
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-6 max-w-xl rounded-3xl border border-[#eadfce] bg-white/85 p-5 text-center shadow-md">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                    {activeWebsiteSlide.label}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-black">
                    {activeWebsiteSlide.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#555]">
                    {activeWebsiteSlide.caption}
                  </p>

                  <div className="mt-4 flex justify-center gap-2">
                    {websiteProofSlides.map((slide, index) => (
                      <button
                        key={slide.title}
                        type="button"
                        onClick={() => setWebsiteSlide(index)}
                        aria-label={`View ${slide.title}`}
                        className={`h-2.5 rounded-full transition ${
                          websiteSlide === index
                            ? "w-8 bg-[#203354]"
                            : "w-2.5 bg-[#d8c6ad]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="creative"
            className="overflow-hidden border-y border-[#eadfce] bg-[#fffaf3] px-6 py-16 sm:px-10"
          >
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                  Campaign strategy & content operations
                </p>

                <h2 className="mt-3 font-serif text-4xl font-black leading-tight sm:text-5xl">
                  Creative execution built as a repeatable growth workflow.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#555] sm:text-base">
                  Built a repeatable campaign workflow spanning audience
                  insight, message strategy, content planning, visual direction,
                  AI-assisted production, review cycles, CTA design, and
                  platform-ready execution.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Content strategy",
                    "Carousel design",
                    "Founder-led reels",
                    "CTA planning",
                    "AI-assisted video",
                    "Campaign operations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#eadfce] bg-white/70 px-4 py-3 text-sm font-bold text-[#203354] shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-6 rounded-2xl bg-[#f5edf0] px-5 py-4 text-sm leading-6 text-[#70323c]">
                  Each asset is connected to audience intent, business risk,
                  brand standards, CTA strategy, and approval workflow.
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-[420px] [perspective:1400px]">
                <div className="absolute -left-12 top-12 h-44 w-44 rounded-full bg-[#d8e3ea] blur-3xl" />
                <div className="absolute -right-12 bottom-16 h-48 w-48 rounded-full bg-[#f1c5cc] blur-3xl" />

                <div className="relative mx-auto w-[292px] origin-center rotate-[-3deg] rounded-[3.2rem] bg-gradient-to-br from-[#111111] via-[#242424] to-[#050505] p-[10px] shadow-[0_30px_70px_rgba(32,51,84,0.28)] transition duration-500 hover:rotate-0 hover:scale-[1.01] sm:w-[330px] lg:w-[360px]">
                  <div className="absolute -left-[5px] top-24 h-14 w-[5px] rounded-l-xl bg-[#1b1b1b]" />
                  <div className="absolute -left-[5px] top-40 h-16 w-[5px] rounded-l-xl bg-[#1b1b1b]" />
                  <div className="absolute -right-[5px] top-32 h-20 w-[5px] rounded-r-xl bg-[#1b1b1b]" />

                  <div className="relative overflow-hidden rounded-[2.7rem] bg-white">
                    <div className="absolute left-1/2 top-0 z-30 h-7 w-28 -translate-x-1/2 rounded-b-3xl bg-[#111111]" />

                    <div className="flex items-center justify-between border-b border-[#ece7df] bg-white px-4 pb-3 pt-9">
                      <span className="text-lg font-black text-[#202020]">
                        ‹
                      </span>

                      <div className="text-center">
                        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#777]">
                          Instagram proof
                        </p>
                        <p className="text-sm font-black text-[#202020]">
                          westsidepropertymgmt
                        </p>
                      </div>

                      <span className="text-lg font-black text-[#202020]">
                        •••
                      </span>
                    </div>

                    <div className="bg-white px-4 py-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[3px] shadow-md">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-xl font-black text-[#203354]">
                            WPM
                          </div>
                        </div>

                        <div className="grid flex-1 grid-cols-3 text-center">
                          <div>
                            <p className="text-sm font-black text-[#202020]">
                              Plan
                            </p>
                            <p className="text-[10px] font-semibold text-[#777]">
                              strategy
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-black text-[#202020]">
                              Build
                            </p>
                            <p className="text-[10px] font-semibold text-[#777]">
                              content
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-black text-[#202020]">
                              Measure
                            </p>
                            <p className="text-[10px] font-semibold text-[#777]">
                              performance
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3">
                        <p className="text-xs font-black text-[#202020]">
                          Westside Property Management
                        </p>
                        <p className="mt-1 text-[11px] leading-4 text-[#555]">
                          Owner education · Reels · Carousels · LA property
                          management
                        </p>
                      </div>

                      <div className="mt-3 flex gap-3 overflow-hidden">
                        {[
                          { label: "Creative", icon: "✦" },
                          { label: "Reels", icon: "▻" },
                          { label: "Campaigns", icon: "◆" },
                        ].map((item) => (
                          <div key={item.label} className="text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#e7e0d7] bg-gradient-to-br from-[#fffaf3] to-[#f1c5cc]/50 text-lg font-black text-[#203354] shadow-sm">
                              {item.icon}
                            </div>
                            <p className="mt-1 text-[9px] font-bold text-[#555]">
                              {item.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 border-y border-[#ece7df] bg-white text-center text-lg text-[#202020]">
                      <div className="border-b-2 border-[#202020] py-2">▦</div>
                      <div className="py-2">▻</div>
                      <div className="py-2">☰</div>
                    </div>

                    <div className="relative bg-white p-[3px]">
                      <img
                        src="/social/wpm-social-grid.png"
                        alt="WPM social media campaign grid proof"
                        className="w-full object-contain object-top"
                      />
                    </div>

                    <div className="grid grid-cols-5 border-t border-[#ece7df] bg-white px-5 py-3 text-center text-lg text-[#202020]">
                      <span>⌂</span>
                      <span>⌕</span>
                      <span>＋</span>
                      <span>▻</span>
                      <span>◉</span>
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-8 max-w-sm rounded-3xl border border-[#eadfce] bg-white/80 p-5 text-center shadow-md">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                    Campaign system
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-black">
                    Campaign Content & Execution System
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#555]">
                    Audience strategy, campaign messaging, content formats,
                    production workflow, approvals, and CTAs shown as one
                    connected execution system.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="skills"
            className="border-y border-[#eadfce] bg-[#fffaf3] px-6 py-10 sm:px-10"
          >
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                Technical capability
              </p>
              <h2 className="mt-3 font-serif text-4xl font-black">
                Platforms, Methods & Analytical Tools
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[#555] sm:text-base">
                A working stack spanning data analysis, measurement, automation,
                CRM, visualization, reporting, and search growth.
              </p>
            </div>

            <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-2xl border border-[#e4d7c5] bg-white px-5 py-3 text-sm font-bold text-[#203354] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section
            id="credentials"
            className="relative overflow-hidden border-y border-[#eadfce] bg-[#fbf5ec] px-6 py-14 sm:px-10"
          >
            <div className="absolute -left-20 top-12 h-56 w-56 rounded-full bg-[#d8e3ea]/70 blur-3xl" />
            <div className="absolute -right-20 bottom-12 h-64 w-64 rounded-full bg-[#f1c5cc]/70 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                  Validated capability
                </p>
                <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
                  Credentials, Research & Professional Proof
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-6 text-[#555]">
                Selected certifications, published research, and professional
                recognition supporting my analytical, technical, marketing
                systems, and applied research capabilities.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setCertificationsOpen(!certificationsOpen)}
              className="group relative mt-10 w-full overflow-hidden rounded-[2rem] border border-[#e4d7c5] bg-white p-6 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#f1c5cc]/50 blur-2xl transition group-hover:scale-125" />
              <div className="absolute -bottom-10 left-1/3 h-28 w-28 rounded-full bg-[#6f86b8]/20 blur-2xl transition group-hover:scale-125" />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="absolute -right-2 -top-2 h-7 w-12 rounded-t-xl bg-[#d69aa7]" />
                    <div className="relative flex h-20 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f1c5cc] to-[#d8e3ea] text-5xl shadow-md transition group-hover:-rotate-3 group-hover:scale-105">
                      📁
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                      Evidence library
                    </p>
                    <h3 className="mt-1 font-serif text-3xl font-black text-[#202020]">
                      Open Credentials & Research
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#555]">
                      Review certifications, technical learning,
                      professional recognition, and published research that
                      support the capabilities shown throughout this portfolio.
                    </p>
                  </div>
                </div>

                <div className="rounded-full bg-[#203354] px-5 py-2 text-center text-sm font-bold text-white shadow-md transition group-hover:bg-[#16243c]">
                  {certificationsOpen ? "Close evidence ↑" : "View evidence ↓"}
                </div>
              </div>
            </button>

            {certificationsOpen && (
              <div className="relative mt-8 rounded-[2rem] border border-[#e4d7c5] bg-white/60 p-5 shadow-inner">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                      Verified credentials
                    </p>
                    <h3 className="font-serif text-2xl font-black">
                      Technical Learning, Research & Recognition
                    </h3>
                  </div>

                  <div className="hidden rounded-full bg-[#fff4f6] px-4 py-2 text-sm font-bold text-[#70323c] shadow-sm sm:block">
                    Open any credential ↗
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {credentials.map((credential, index) => (
                    <a
                      key={credential.title + credential.date}
                      href={credential.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block min-h-[360px] rounded-[1.6rem] bg-[#efe7dc] p-3 shadow-[0_16px_35px_rgba(32,32,32,0.10)] transition hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <div
                        className={`absolute left-1/2 top-[-14px] z-20 -translate-x-1/2 text-4xl drop-shadow-sm transition group-hover:-translate-y-1 ${
                          index % 2 === 0 ? "rotate-[-6deg]" : "rotate-[6deg]"
                        }`}
                      >
                        🎀
                      </div>

                      <div
                        className={`relative h-full rounded-[1.25rem] border border-[#d8c6ad] bg-[#fffdf8] p-6 text-center ${
                          index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
                        } transition group-hover:rotate-0`}
                      >
                        <div className="absolute left-5 top-5 h-10 w-10 rounded-full border border-[#eadfce] bg-[#f8efe4]" />
                        <div className="absolute right-5 top-5 h-10 w-10 rounded-full border border-[#eadfce] bg-[#f8efe4]" />

                        <div className="mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#d8c6ad] bg-gradient-to-br from-[#f8efe4] to-[#d8e3ea] text-3xl shadow-inner">
                          ✦
                        </div>

                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.3em] text-[#6f86b8]">
                          {credential.issuer}
                        </p>

                        <h3 className="mx-auto mt-3 max-w-xs font-serif text-2xl font-black leading-tight text-[#202020]">
                          {credential.title}
                        </h3>

                        <p className="mt-2 text-sm font-bold text-[#8a4b57]">
                          {credential.proofType}
                        </p>

                        <div className="mx-auto mt-4 h-px w-28 bg-[#d8c6ad]" />

                        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#70323c]">
                          {credential.date}
                        </p>

                        <p className="mt-4 text-sm leading-6 text-[#555]">
                          {credential.detail}
                        </p>

                        <div className="mt-5 flex flex-wrap justify-center gap-2">
                          {credential.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full bg-[#f5edf0] px-3 py-1 text-[11px] font-bold text-[#70323c]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 inline-flex rounded-full bg-[#203354] px-5 py-2 text-sm font-bold text-white shadow-md transition group-hover:bg-[#16243c]">
                          View Credential ↗
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </section>

          <section
            id="proof"
            className="bg-[#5f78ab] px-6 py-12 text-white sm:px-10"
          >
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f1c5cc]">
                  Professional evidence
                </p>
                <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
                  Code, Dashboards, Credentials & Career Proof
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/85 sm:text-base">
                  Direct access to the code, visualization work, professional
                  history, certifications, and research behind this portfolio.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-4">
                {proofLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-2 hover:bg-white/20"
                  >
                    <h3 className="font-serif text-2xl font-bold">
                      {link.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/85">
                      {link.text}
                    </p>
                    <p className="mt-5 text-sm font-bold">Open ↗</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
