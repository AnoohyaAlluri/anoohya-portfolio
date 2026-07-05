"use client";

import { useEffect, useState } from "react";

const stackItems = [
  { icon: "📊", title: "Analytics", detail: "GA4, funnels, KPIs, attribution" },
  { icon: "🤖", title: "AI & ML", detail: "Prediction, segmentation, workflow AI" },
  { icon: "🖥️", title: "Dashboards", detail: "Power BI, Tableau, Looker, Streamlit" },
  { icon: "⚙️", title: "Automation", detail: "Apps Script, CRM workflows, reporting" },
  { icon: "🔎", title: "SEO", detail: "SEO, AEO, GEO, content strategy" },
  { icon: "💬", title: "Social Media", detail: "Content systems, reels, campaign planning" },
  { icon: "✉️", title: "Email", detail: "Mailchimp, lifecycle, nurture flows" },
  { icon: "💻", title: "Coding", detail: "Python, SQL, R, data workflows" },
];

const projects = [
  {
    tag: "Dashboards",
    title: "Lead Intelligence Dashboard",
    description:
      "Built a marketing intelligence dashboard to centralize lead sources, conversion signals, attribution gaps, and executive KPIs.",
    tools: ["Python", "Streamlit", "GA4", "Google Ads"],
  },
  {
    tag: "Attribution",
    title: "GA4 + Campaign Tracking System",
    description:
      "Mapped marketing events, lead actions, and traffic sources into a cleaner tracking framework for campaign optimization.",
    tools: ["GA4", "GTM", "Meta Pixel", "CRO"],
  },
  {
    tag: "SEO / AEO / GEO",
    title: "Local Growth Content Framework",
    description:
      "Developed search-ready content systems for property management topics, FAQs, landing pages, and AI-assisted discoverability.",
    tools: ["SEO", "Content", "Analytics", "AI"],
  },
  {
    tag: "Automation",
    title: "CRM + Review Workflow",
    description:
      "Designed trigger-based outreach and review generation workflows to reduce manual follow-up and improve operational visibility.",
    tools: ["CRM", "Mailchimp", "Apps Script", "Automation"],
  },
  {
    tag: "Predictive Analytics",
    title: "Campaign Prediction Models",
    description:
      "Applied regression, classification, and segmentation models to improve targeting, forecasting, and marketing decision-making.",
    tools: ["Python", "R", "SQL", "Tableau"],
  },
];

const tools = [
  "Python",
  "SQL",
  "R",
  "GA4",
  "GTM",
  "Google Ads",
  "Meta Ads",
  "Tableau",
  "Power BI",
  "Looker Studio",
  "HubSpot",
  "Salesforce",
  "Mailchimp",
  "SEO",
  "A/B Testing",
  "CRO",
];

const credentials = [
  {
    title: "SQL Advanced",
    issuer: "HackerRank",
    date: "Issued Aug 2025",
    detail:
      "Advanced SQL certification validating SQL querying, database logic, and analytical problem-solving.",
    skills: ["SQL", "SSAS", "Data Analysis"],
    href: "https://www.hackerrank.com/certificates/944c5575cd92",
  },
  {
    title: "Google Analytics",
    issuer: "Google Skillshop",
    date: "Issued Jul 2025 · Expires Jul 2026",
    detail:
      "Validated knowledge of Google Analytics measurement, reporting, traffic analysis, and marketing performance tracking.",
    skills: ["Google Analytics", "Marketing Analytics", "Reporting"],
    href: "https://skillshop.credential.net/ecc3d6f7-2eb1-4a46-bc3b-3f0e13a6a4bc#acc.OSmnNWrc",
  },
  {
    title: "Gen AI",
    issuer: "Google",
    date: "Issued Jun 2024",
    detail:
      "Google credential focused on generative AI applications for marketing, productivity, and workflow innovation.",
    skills: ["Generative AI", "AI for Marketing", "Workflow Innovation"],
    href: "https://www.skills.google/public_profiles/032a9598-f8ad-4590-b13b-70df6d36d859/badges/9607505?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "R Programming",
    issuer: "Udemy",
    date: "Issued Jul 2023",
    detail:
      "Training in R programming and analytical workflows for data analysis, statistical thinking, and business problem-solving.",
    skills: ["R Programming", "Analytical Skills", "Data Analysis"],
    href: "https://www.udemy.com/certificate/UC-ffd34fc5-ccfd-4cdf-a457-536fd89f85bb/",
  },
  {
    title: "R Systems Certificate",
    issuer: "R Systems",
    date: "Professional Recognition",
    detail:
      "Certificate of appreciation for customer research and development of a go-to-market strategy.",
    skills: ["Customer Research", "Go-to-Market Strategy", "Market Analysis"],
    href: "/R-systems-certificate.pdf",
  },
  {
    title: "Sensory Marketing Study",
    issuer: "Publication",
    date: "Published 2023",
    detail:
      "Published research using survey data and statistical analysis to study sensory drivers of Gen Z purchase intent and brand loyalty.",
    skills: ["Research", "Marketing Analytics", "Survey Analysis"],
    href: "http://junikhyatjournal.in/no_1_Online_23/60_online_nov.pdf",
  },
];

const proofLinks = [
  {
    title: "GitHub",
    text: "Code, analytics projects, and portfolio case studies",
    href: "https://github.com/AnoohyaAlluri",
  },
  {
    title: "Tableau Public",
    text: "Dashboard and visualization work",
    href: "https://public.tableau.com/app/profile/anoohya.allurii/vizzes",
  },
  {
    title: "LinkedIn",
    text: "Professional background, credentials, and work history",
    href: "https://www.linkedin.com/in/anoohyaalluri/",
  },
  {
    title: "Linktree",
    text: "Certifications, publication, and additional proof links",
    href: "https://linktr.ee/anoohyaalluri",
  },
];

export default function Home() {
  const [certificationsOpen, setCertificationsOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
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
              <a href="#creative" className="hover:text-[#6f86b8]">
                Creative
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
              Let&apos;s Connect ↗
            </a>
          </nav>

          <section className="grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <div className="flex flex-col justify-center">
              <p className="mb-4 font-serif text-xl italic text-[#d36d81]">
                hey there! 👋
              </p>

              <h1 className="max-w-4xl font-serif text-6xl font-black leading-[0.9] tracking-tight text-[#202020] sm:text-7xl lg:text-8xl">
                Hi, I&apos;m{" "}
                <span className="block text-[#5f78ab]">Anoohya Alluri</span>
              </h1>

              <h2 className="mt-6 text-xl font-semibold text-[#2a2a2a] sm:text-2xl">
                Marketing Technology & Analytics Specialist
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#3d3d3d] sm:text-lg">
                I build analytics, automation, and marketing technology systems
                that turn messy data into clear decisions. My work connects
                attribution, SEO, dashboards, AI workflows, and growth operations
                into measurable business visibility.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="/Resume/MA.pdf"
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
                  View Case Studies ↗
                </a>

                <a
                  href="#creative"
                  className="rounded-xl border border-[#d69aa7] bg-[#fff4f6] px-6 py-3 text-center text-sm font-bold text-[#70323c] transition hover:-translate-y-1 hover:bg-[#f8d9df]"
                >
                  View Creative Proof ✦
                </a>

                <a
                  href="mailto:anoohyaalluri@gmail.com"
                  className="rounded-xl bg-[#f1c5cc] px-6 py-3 text-center text-sm font-bold text-[#70323c] transition hover:-translate-y-1 hover:bg-[#ebb3bd]"
                >
                  Contact Me ✉
                </a>
              </div>
            </div>

            <div className="relative min-h-[500px] sm:min-h-[540px] lg:min-h-[560px]">
              <div className="absolute right-0 top-6 h-72 w-72 rounded-full bg-[#eec3cc] blur-3xl" />

              <div className="absolute left-4 top-6 z-10 rotate-[-6deg] rounded-2xl bg-white p-4 shadow-xl sm:left-8">
                <p className="font-serif text-lg italic leading-7 text-[#2f2f2f]">
                  Data tells
                  <br />
                  the story.
                  <br />
                  I help make it
                  <br />
                  impactful. 💗
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
                Always learning.
                <br />
                Always building.
                <br />
                Always growing. ✦
              </div>
            </div>
          </section>

          <section
            id="about"
            className="border-y border-[#eadfce] px-6 py-10 sm:px-10"
          >
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                Portfolio concept
              </p>
              <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
                What&apos;s in My Marketing{" "}
                <span className="rounded-full border-2 border-[#d69aa7] px-3 text-[#5f78ab]">
                  Analytics
                </span>{" "}
                Stack?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#4a4a4a]">
                A creative proof hub for the work I do across marketing
                analytics, attribution, automation, dashboards, AI workflows,
                SEO, and social media systems.
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

          <section id="projects" className="px-6 py-12 sm:px-10">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                  Featured proof
                </p>
                <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
                  Case Studies
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#555]">
                Project files that show how I connect business problems with
                tracking systems, dashboards, automation, AI workflows, and
                growth-focused execution.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-5">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-3xl border border-[#e4d7c5] bg-white p-5 shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="mb-4 h-32 rounded-2xl bg-gradient-to-br from-[#203354] via-[#5f78ab] to-[#eec3cc] p-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest">
                      {project.tag}
                    </p>
                    <div className="mt-8 h-2 w-20 rounded-full bg-white/60" />
                    <div className="mt-3 h-2 w-28 rounded-full bg-white/30" />
                  </div>
                  <h3 className="font-serif text-xl font-bold leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#555]">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-[#f5edf0] px-3 py-1 text-xs font-semibold text-[#70323c]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="creative"
            className="overflow-hidden border-y border-[#eadfce] bg-[#fffaf3] px-6 py-16 sm:px-10"
          >
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                  Creative campaign studio
                </p>

                <h2 className="mt-3 font-serif text-4xl font-black leading-tight sm:text-5xl">
                  Social media proof, shown like a real campaign system.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#555] sm:text-base">
                  Built a repeatable content production workflow for WPM across
                  educational carousels, founder-led reels, owner-risk messaging,
                  property performance content, and campaign CTAs. This section
                  shows the creative side of the marketing system: strategy,
                  content planning, visual direction, AI-assisted production, and
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
                  Portfolio framing: this is not just posting content. It shows
                  a structured creative workflow connected to brand positioning,
                  owner education, lead-generation messaging, and executive
                  approval cycles.
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-[420px] [perspective:1400px]">
                <div className="absolute -left-12 top-12 h-44 w-44 rounded-full bg-[#d8e3ea] blur-3xl" />
                <div className="absolute -right-12 bottom-16 h-48 w-48 rounded-full bg-[#f1c5cc] blur-3xl" />

                <div className="relative mx-auto w-[290px] origin-center rotate-[-3deg] rounded-[3.2rem] bg-gradient-to-br from-[#111111] via-[#242424] to-[#050505] p-[10px] shadow-[0_30px_70px_rgba(32,51,84,0.28)] transition duration-500 hover:rotate-0 hover:scale-[1.01] sm:w-[330px] lg:w-[360px]">
                  <div className="absolute -left-[5px] top-24 h-14 w-[5px] rounded-l-xl bg-[#1b1b1b]" />
                  <div className="absolute -left-[5px] top-40 h-16 w-[5px] rounded-l-xl bg-[#1b1b1b]" />
                  <div className="absolute -right-[5px] top-32 h-20 w-[5px] rounded-r-xl bg-[#1b1b1b]" />

                  <div className="relative overflow-hidden rounded-[2.7rem] bg-[#faf7f1]">
                    <div className="absolute left-1/2 top-0 z-30 h-7 w-28 -translate-x-1/2 rounded-b-3xl bg-[#111111]" />

                    <div className="flex items-center justify-between border-b border-[#ece7df] bg-[#fffdf9] px-4 pb-3 pt-9">
                      <span className="text-lg font-black text-[#202020]">‹</span>
                      <div className="text-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#777]">
                          Instagram proof
                        </p>
                        <p className="text-sm font-black text-[#202020]">
                          westsidepropertymgmt
                        </p>
                      </div>
                      <span className="text-lg font-black text-[#202020]">•••</span>
                    </div>

                    <div className="relative h-[520px] overflow-hidden bg-[#f8f4ed] p-2 sm:h-[560px]">
                      <img
                        src="/social/wpm-social-grid.png"
                        alt="WPM social media campaign grid proof"
                        className="h-full w-full rounded-[1.4rem] object-contain object-center"
                      />

                      <div className="pointer-events-none absolute right-[16%] top-[38%] flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-xs font-black text-[#203354] shadow-lg">
                        ▶
                      </div>

                      <div className="pointer-events-none absolute right-[16%] top-[68%] flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-xs font-black text-[#203354] shadow-lg">
                        ▶
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-8 max-w-sm rounded-3xl border border-[#eadfce] bg-white/80 p-5 text-center shadow-md">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                    Visual proof
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-black">
                    WPM Social Content System
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#555]">
                    Strategy-led reels, carousels, founder messaging, and
                    owner-education content packaged as a portfolio-ready proof
                    asset.
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
                Tools & technologies
              </p>
              <h2 className="mt-3 font-serif text-4xl font-black">
                Hard Skills I Work With
              </h2>
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
            className="border-y border-[#eadfce] bg-[#fbf5ec] px-6 py-12 sm:px-10"
          >
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                  Certifications & proof
                </p>
                <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
                  Credential Folder
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#555]">
                Open this proof folder to view verified credentials that support
                my work in analytics, SQL, AI, data visualization, marketing
                measurement, and business intelligence.
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
                      Recruiter proof folder
                    </p>
                    <h3 className="mt-1 font-serif text-3xl font-black text-[#202020]">
                      Certifications
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#555]">
                      A curated file system of certifications, academic
                      recognition, and technical proof that validates my
                      analytics and marketing technology skill set.
                    </p>
                  </div>
                </div>

                <div className="rounded-full bg-[#203354] px-5 py-2 text-center text-sm font-bold text-white shadow-md transition group-hover:bg-[#16243c]">
                  {certificationsOpen
                    ? "Close proof folder ↑"
                    : "Open proof folder ↓"}
                </div>
              </div>
            </button>

            {certificationsOpen && (
              <div className="mt-6 rounded-[2rem] border border-[#e4d7c5] bg-[#fffaf3] p-5 shadow-inner">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-2xl">🗂️</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                      Folder opened
                    </p>
                    <h3 className="font-serif text-2xl font-black">
                      Credential Files
                    </h3>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {credentials.map((credential) => (
                    <a
                      key={credential.title + credential.date}
                      href={credential.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-3xl border border-[#e4d7c5] bg-white p-5 shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef1f8] text-3xl transition group-hover:rotate-6">
                          📄
                        </div>
                        <span className="rounded-full bg-[#f5edf0] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#70323c]">
                          file
                        </span>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6f86b8]">
                        {credential.issuer}
                      </p>

                      <h3 className="mt-3 font-serif text-xl font-bold leading-tight">
                        {credential.title}
                      </h3>

                      <p className="mt-2 text-xs font-semibold text-[#8a4b57]">
                        {credential.date}
                      </p>

                      <p className="mt-3 text-sm leading-6 text-[#555]">
                        {credential.detail}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {credential.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-[#f5edf0] px-3 py-1 text-xs font-semibold text-[#70323c]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <p className="mt-5 text-sm font-bold text-[#203354]">
                        View proof file ↗
                      </p>
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
                  Proof & links
                </p>
                <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
                  Everything Recruiters Need in One Place
                </h2>
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
