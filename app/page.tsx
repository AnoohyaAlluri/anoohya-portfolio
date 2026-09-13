"use client";

import { useEffect, useState } from "react";

/* -------------------------------------------------------------------------- */
/*                               AT-A-GLANCE DATA                             */
/* -------------------------------------------------------------------------- */

const heroMetrics = [
  {
    value: "788+",
    label: "Historical Leads Analyzed",
    detail: "across 10+ acquisition sources",
  },
  {
    value: "109",
    label: "Converted Leads Identified",
    detail: "through lifecycle analysis",
  },
  {
    value: "35.2%",
    label: "High-Value Lead Conversion",
    detail: "vs. 13.8% overall",
  },
  {
    value: "231 → 40",
    label: "Owner Inquiries Validated",
    detail: "raw submissions to qualified intent",
  },
];

const stackItems = [
  {
    icon: "◎",
    title: "Measure Acquisition",
    detail:
      "Connect campaign, website, CRM, and operational data so source performance and conversion behavior can be measured reliably.",
  },
  {
    icon: "✓",
    title: "Validate Lead Quality",
    detail:
      "Clean, deduplicate, reconcile, and segment lead data to distinguish qualified opportunities from noisy activity.",
  },
  {
    icon: "↗",
    title: "Prioritize Growth",
    detail:
      "Use funnel, attribution, statistical, and behavioral analysis to identify high-value audiences and acquisition gaps.",
  },
  {
    icon: "⚙",
    title: "Automate Execution",
    detail:
      "Build governed CRM, outreach, reporting, and lead-management workflows that reduce manual effort and improve consistency.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 EXPERIENCE                                 */
/* -------------------------------------------------------------------------- */

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dates: string;
  positioning: string;
  proof: string[];
  tools: string[];
};

const experienceItems: ExperienceItem[] = [
  {
    role: "Technology Marketing Analyst",
    company: "Westside Property Management",
    location: "Los Angeles, CA",
    dates: "Aug 2025 – Present",
    positioning:
      "Lead generation analytics, acquisition measurement, marketing data, attribution, CRM automation, and executive reporting.",
    proof: [
      "Built lead intelligence across 788 historical leads and 10+ acquisition sources.",
      "Identified 109 converted leads and 91 high-value opportunities.",
      "Validated 231 raw website submissions into 40 qualified owner-intent inquiries.",
      "Developed Power BI reporting across acquisition, funnels, leasing, and nearly 2,000 managed units.",
    ],
    tools: [
      "SQL Server",
      "Power BI",
      "GA4",
      "GTM",
      "Google Ads",
      "Apps Script",
      "CRM",
    ],
  },
  {
    role: "Marketing Analyst",
    company: "Baylor Scott & White Health",
    location: "Dallas, TX",
    dates: "Jul 2024 – Apr 2025",
    positioning:
      "Marketing data integration, Adobe Analytics, acquisition reporting, customer journey analysis, segmentation, and conversion optimization.",
    proof: [
      "Integrated Adobe Analytics, campaign, CRM, and Epic EHR data using SQL Server.",
      "Analyzed paid, organic, email, referral, and appointment journeys across 4+ acquisition channels.",
      "Developed Power BI reporting across 18 outpatient clinics.",
      "Delivered funnel and attribution insights associated with an approximately 12% increase in online appointment requests.",
    ],
    tools: [
      "Adobe Analytics",
      "SQL Server",
      "Power BI",
      "HubSpot",
      "Epic EHR",
      "Google Ads",
      "Mailchimp",
    ],
  },
  {
    role: "Marketing Data Analyst",
    company: "Zemoso Technologies",
    location: "Hyderabad, India",
    dates: "Jan 2022 – Aug 2023",
    positioning:
      "SQL-based marketing analysis, BI reporting, customer segmentation, Adobe Analytics, experimentation, and retention analysis.",
    proof: [
      "Queried and validated campaign and customer data for recurring KPI reporting.",
      "Built Power BI dashboards covering channel, funnel, customer, and campaign performance.",
      "Used Adobe Analytics and GTM to analyze traffic, engagement, attribution, and conversion funnels.",
      "Applied customer segmentation, A/B testing, churn analysis, trend analysis, and promotional evaluation.",
    ],
    tools: [
      "SQL",
      "Power BI",
      "Adobe Analytics",
      "GTM",
      "Excel",
      "A/B Testing",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                  PROJECTS                                  */
/* -------------------------------------------------------------------------- */

type FeaturedProject = {
  tag: string;
  title: string;
  description: string;
  problemSolved: string;
  businessValue: string;
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
    tag: "Lead Generation Analytics",
    title: "Lead Intelligence & Owner Acquisition Analytics",
    description:
      "I built a governed acquisition analytics system that connects historical lead data, website inquiries, source attribution, qualification logic, CRM outcomes, and executive reporting.",
    problemSolved:
      "Lead and acquisition data existed across multiple systems, making it difficult to distinguish qualified demand, evaluate source quality, and connect marketing activity to downstream outcomes.",
    businessValue:
      "Creates a defensible view of lead quality, source performance, conversion behavior, high-value opportunities, and records requiring follow-up or validation.",
    tools: [
      "SQL Server",
      "Power BI",
      "Python",
      "Google Ads",
      "AppFolio",
      "Attribution",
    ],
    status: "Featured Case Study",
    icon: "◎",
    image: "/lead-intelligence-kpi.png",
    previewClass: "from-[#203354] via-[#5f78ab] to-[#d8e3ea]",
    proof: [
      "788 leads · 10+ sources",
      "109 converted · 91 high-value",
      "231 raw → 40 validated inquiries",
    ],
    href: "https://github.com/AnoohyaAlluri/lead-intelligence-system",
    buttonLabel: "View Lead Intelligence Case Study",
  },
  {
    tag: "Marketing Measurement & Attribution",
    title: "Cross-Channel Measurement Architecture",
    description:
      "I standardized conversion measurement across GA4, Google Tag Manager, Google Ads, and Meta Pixel to improve attribution quality and separate meaningful lead actions from lower-value behavioral events.",
    problemSolved:
      "Fragmented event definitions and conversion configurations reduced confidence in campaign reporting and made business outcomes difficult to interpret consistently.",
    businessValue:
      "Improves conversion governance, attribution reliability, lead measurement, and confidence in paid-media and growth reporting.",
    tools: [
      "GA4",
      "Google Tag Manager",
      "Google Ads",
      "Meta Pixel",
      "Attribution",
    ],
    status: "Production Implementation",
    icon: "⌁",
    previewClass: "from-[#244c5a] via-[#6f9e9a] to-[#dce9df]",
    proof: [
      "10+ conversion/event configurations",
      "High-intent conversion governance",
      "Source-to-outcome diagnostics",
    ],
  },
  {
    tag: "CRM & Growth Automation",
    title: "Lead Outreach & Campaign Governance System",
    description:
      "I designed CRM-based email and lead-management workflows combining segmentation, personalization, suppression rules, deduplication, audit controls, and response tracking.",
    problemSolved:
      "Manual outreach required repeated eligibility, duplicate, and suppression checks, increasing the risk of inconsistent targeting and duplicate contact.",
    businessValue:
      "Creates a scalable and auditable prospecting workflow while improving targeting quality, contact governance, and campaign consistency.",
    tools: [
      "Google Apps Script",
      "CRM",
      "Mailchimp",
      "Segmentation",
      "Automation",
      "Data QA",
    ],
    status: "Workflow System",
    icon: "↗",
    previewClass: "from-[#51436f] via-[#8c78ad] to-[#ddd5eb]",
    proof: [
      "201 audited first-touch emails",
      "177 unique prospects",
      "Deduplication · DNC · audit controls",
    ],
    href:
      "https://github.com/AnoohyaAlluri/luxury-rental-mls-outreach-pipeline",
    buttonLabel: "View Automation Case Study",
  },
  {
    tag: "SEO / AEO / GEO Analytics",
    title: "Search Growth & Conversion Analytics Framework",
    description:
      "I connected search-query data, landing-page behavior, local intent, content architecture, conversion paths, and measurement to identify high-intent organic growth opportunities.",
    problemSolved:
      "Search visibility, landing-page performance, content strategy, and conversion measurement were being evaluated separately instead of as one acquisition system.",
    businessValue:
      "Connects search visibility with user intent, page performance, conversion pathways, and measurable owner-acquisition opportunities.",
    tools: [
      "Google Search Console",
      "GA4",
      "Microsoft Clarity",
      "SEO",
      "AEO",
      "GEO",
      "CRO",
    ],
    status: "Featured Case Study",
    icon: "⌕",
    previewClass: "from-[#71505d] via-[#b47f8f] to-[#f0d9df]",
    proof: [
      "SEO · AEO · GEO framework",
      "4 high-intent website assets",
      "1,800+ monthly search impressions",
    ],
    href:
      "https://github.com/AnoohyaAlluri/seo-aeo-geo-local-growth-framework",
    buttonLabel: "View Search Analytics Case Study",
    liveHref: "https://www.westsidepropertymanagement.com/",
    liveButtonLabel: "View Live Implementation",
  },
];

const internalInitiatives: InternalInitiative[] = [
  {
    title: "Executive BI & Portfolio Intelligence",
    category: "Marketing Data & BI",
    description:
      "Developed Power BI reporting with SQL, Power Query, and DAX to connect acquisition, campaign, funnel, leasing, and portfolio-level performance into executive-ready views.",
    tools: ["SQL", "Power BI", "Power Query", "DAX"],
    proof: [
      "Acquisition and funnel reporting",
      "Campaign and leasing KPIs",
      "Nearly 2,000 managed units",
    ],
  },
  {
    title: "Paid Media & Conversion Integrity",
    category: "Growth Analytics",
    description:
      "Audited campaign measurement, distinguished business outcomes from soft platform events, and used controlled changes to diagnose media-mix and conversion-quality issues.",
    tools: ["Google Ads", "GA4", "GTM", "Experimentation"],
    proof: [
      "Conversion-quality diagnosis",
      "CTR, CPC and conversion monitoring",
      "2 controlled paid-media / SEO tests",
    ],
  },
  {
    title: "Operational Analytics & Process Intelligence",
    category: "Business Analytics",
    description:
      "Applied data analysis and workflow diagnostics to operational processes to identify documentation gaps, recurring patterns, execution risks, and automation opportunities.",
    tools: ["Python", "Excel", "Tableau", "Process Analytics"],
    proof: [
      "Operational pattern analysis",
      "Process-gap identification",
      "Automation opportunity mapping",
    ],
  },
];

const supportingProjects: SupportingProject[] = [
  {
    title: "SQL Data Warehouse",
    category: "Data Engineering",
    description:
      "Designed a bronze, silver, and gold SQL warehouse architecture to standardize raw data and produce analytics-ready business models.",
    tools: ["SQL", "ETL", "Data Modeling", "Data Warehouse"],
    href: "https://github.com/AnoohyaAlluri/sql-data-warehouse-project",
    buttonLabel: "View GitHub",
  },
  {
    title: "SQL Business Analytics",
    category: "Data Analytics",
    description:
      "Applied SQL to exploratory analysis, KPI evaluation, segmentation, performance diagnostics, and decision-ready business reporting.",
    tools: ["SQL", "EDA", "KPI Analysis", "Segmentation"],
    href: "https://github.com/AnoohyaAlluri/sql-data-analytics-project",
    buttonLabel: "View GitHub",
  },
  {
    title: "Tableau Dashboard Collection",
    category: "Data Visualization",
    description:
      "Created interactive dashboards and geospatial analyses for customer segmentation, regional demand evaluation, and executive insight communication.",
    tools: ["Tableau", "Mapbox", "Excel", "Data Visualization"],
    href: "https://public.tableau.com/app/profile/anoohya.allurii/vizzes",
    buttonLabel: "View Tableau",
  },
];

/* -------------------------------------------------------------------------- */
/*                              WEBSITE PROOF                                 */
/* -------------------------------------------------------------------------- */

const websiteProofSlides = [
  {
    title: "Homepage UX + CTA Positioning",
    label: "Conversion Architecture",
    image: "/website/homepage-ux.png",
    caption:
      "Reframed owner-facing hierarchy, trust signals, and CTA placement around a clearer lead-conversion path.",
  },
  {
    title: "Owner Journey Content Blocks",
    label: "Audience Segmentation",
    image: "/website/owner-guidance-cards.png",
    caption:
      "Mapped distinct conversion pathways for switchers, accidental landlords, and first-time investors.",
  },
  {
    title: "LA Rental Market Resource",
    label: "SEO / AEO Content",
    image: "/website/la-market-resource.png",
    caption:
      "Structured search-focused educational content to support discovery, decision-making, and lead capture.",
  },
  {
    title: "Accidental Landlord Guide",
    label: "Lead Generation",
    image: "/website/accidental-landlord-guide.png",
    caption:
      "Built a problem-aware resource experience that moves uncertain owners toward a measurable next action.",
  },
  {
    title: "Guide Cover / Resource Design",
    label: "Acquisition Asset",
    image: "/website/guide-cover.png",
    caption:
      "Packaged owner education into a branded acquisition asset supporting organic and campaign distribution.",
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
    label: "Local Search",
    image: "/website/santa-monica-local-seo.png",
    caption:
      "Aligned local search intent, service messaging, trust signals, and lead pathways for high-value property owners.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   SKILLS                                   */
/* -------------------------------------------------------------------------- */

const toolGroups = [
  {
    title: "Data, SQL & Business Intelligence",
    tools: [
      "SQL",
      "SQL Server",
      "Power BI",
      "DAX",
      "Power Query",
      "Python",
      "Advanced Excel",
      "Tableau",
      "Data Modeling",
      "Data Validation",
    ],
  },
  {
    title: "Marketing Analytics & Attribution",
    tools: [
      "GA4",
      "Google Tag Manager",
      "Adobe Analytics",
      "Google Search Console",
      "Meta Pixel",
      "Attribution Analysis",
      "Conversion Tracking",
      "Funnel Analysis",
      "Customer Journey Analytics",
    ],
  },
  {
    title: "Lead Generation, CRM & Automation",
    tools: [
      "HubSpot",
      "Mailchimp",
      "Google Apps Script",
      "CRM Analytics",
      "Lead Lifecycle",
      "Audience Segmentation",
      "Lead Quality Analysis",
      "Deduplication",
      "Suppression Logic",
      "Email Campaign Analytics",
    ],
  },
  {
    title: "Growth Analytics & Experimentation",
    tools: [
      "Google Ads",
      "Meta Ads",
      "CRO",
      "SEO / AEO / GEO",
      "A/B Testing",
      "Controlled Experiments",
      "Statistical Analysis",
      "CTR / CPC / CPA / CPL",
      "ROAS / ROI",
      "Conversion Rate Analysis",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                CREDENTIALS                                 */
/* -------------------------------------------------------------------------- */

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
    proofType: "Measurement Credential",
    detail:
      "Validated knowledge of analytics measurement, reporting, traffic analysis, and marketing performance tracking.",
    skills: ["Google Analytics", "Measurement", "Reporting"],
    href:
      "https://skillshop.credential.net/ecc3d6f7-2eb1-4a46-bc3b-3f0e13a6a4bc#acc.OSmnNWrc",
  },
  {
    title: "Gen AI",
    issuer: "Google",
    date: "Issued Jun 2024",
    proofType: "AI Workflow Credential",
    detail:
      "Google credential focused on generative AI applications for marketing, productivity, and workflow innovation.",
    skills: ["Generative AI", "Marketing", "Workflow Innovation"],
    href:
      "https://www.skills.google/public_profiles/032a9598-f8ad-4590-b13b-70df6d36d859/badges/9607505?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "R Programming",
    issuer: "Udemy",
    date: "Issued Jul 2023",
    proofType: "Statistical Analysis Training",
    detail:
      "Training in R programming, statistical analysis, and analytical workflows for business problem-solving.",
    skills: ["R", "Statistics", "Data Analysis"],
    href:
      "https://www.udemy.com/certificate/UC-ffd34fc5-ccfd-4cdf-a457-536fd89f85bb/",
  },
  {
    title: "R Systems Certificate",
    issuer: "R Systems",
    date: "Professional Recognition",
    proofType: "Go-to-Market Strategy Recognition",
    detail:
      "Certificate of appreciation for customer research and development of a go-to-market strategy.",
    skills: ["Customer Research", "GTM Strategy", "Market Analysis"],
    href: "/R-systems-certificate.pdf",
  },
  {
    title: "Sensory Marketing Study",
    issuer: "Publication",
    date: "Published 2023",
    proofType: "Published Research",
    detail:
      "Published research using survey data and statistical analysis to study sensory drivers of Gen Z purchase intent and brand loyalty.",
    skills: ["Research", "Statistics", "Marketing Analytics"],
    href: "http://junikhyatjournal.in/no_1_Online_23/60_online_nov.pdf",
  },
];

const resourceLinks = [
  {
    title: "GitHub",
    text: "Lead intelligence, SQL, automation, analytics engineering, and growth-system case studies",
    href: "https://github.com/AnoohyaAlluri",
  },
  {
    title: "Tableau",
    text: "Interactive BI dashboards, customer analysis, and geospatial decision support",
    href: "https://public.tableau.com/app/profile/anoohya.allurii/vizzes",
  },
  {
    title: "LinkedIn",
    text: "Professional experience, credentials, analytical work, and career updates",
    href: "https://www.linkedin.com/in/anoohyaalluri/",
  },
  {
    title: "Resume",
    text: "Marketing analytics, lead generation, growth analytics, and technical experience",
    href: "/resume",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

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
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f0e6] text-[#202020]">
      <section className="relative overflow-hidden bg-[#6f86b8] px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#e6dacb] bg-[#fbf5ec] shadow-2xl">

          {/* NAVIGATION */}
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

            <div className="hidden items-center gap-7 text-sm font-medium md:flex">
              <a href="#about" className="hover:text-[#6f86b8]">
                About
              </a>
              <a href="#experience" className="hover:text-[#6f86b8]">
                Experience
              </a>
              <a href="#projects" className="hover:text-[#6f86b8]">
                Case Studies
              </a>
              <a href="#website-proof" className="hover:text-[#6f86b8]">
                Growth
              </a>
              <a href="#skills" className="hover:text-[#6f86b8]">
                Skills
              </a>
              <a href="#contact" className="hover:text-[#6f86b8]">
                Contact
              </a>
            </div>

            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#203354] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#16243c]"
            >
              Resume ↗
            </a>
          </nav>

          {/* HERO */}
          <section className="grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#d36d81]">
                Marketing Analytics · Lead Generation · Growth Analytics
              </p>

              <h1 className="max-w-4xl font-serif text-6xl font-black leading-[0.9] tracking-tight text-[#202020] sm:text-7xl lg:text-8xl">
                Anoohya
                <span className="block text-[#5f78ab]">Alluri</span>
              </h1>

              <h2 className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-[#2a2a2a] sm:text-2xl">
                Marketing Analytics & Lead Generation Analyst
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-7 text-[#3d3d3d] sm:text-lg">
                I connect <strong>SQL, Power BI, GA4/GTM, Adobe Analytics,
                CRM, and campaign data</strong> to answer three questions:
                <strong> Which sources create quality leads? Where does the
                funnel break? What should we optimize next?</strong>
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#555]">
                3+ years across marketing analytics, acquisition analysis,
                attribution, customer journeys, CRM automation, experimentation,
                BI reporting, and growth optimization.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#projects"
                  className="rounded-xl bg-[#203354] px-6 py-3 text-center text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  View Analytics Case Studies ↗
                </a>

                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#203354] bg-white/70 px-6 py-3 text-center text-sm font-bold text-[#203354] transition hover:-translate-y-1 hover:bg-white"
                >
                  View Resume ↗
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border border-[#d69aa7] bg-[#fff4f6] px-6 py-3 text-center text-sm font-bold text-[#70323c] transition hover:-translate-y-1 hover:bg-[#f8d9df]"
                >
                  Contact ✉
                </a>
              </div>

              <div className="mt-9 grid max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4">
                {heroMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-[#e4d7c5] bg-white/80 p-4 shadow-sm"
                  >
                    <p className="font-serif text-2xl font-black text-[#203354] sm:text-3xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs font-black leading-4 text-[#2d2d2d]">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-[10px] leading-4 text-[#777]">
                      {metric.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[500px] sm:min-h-[540px] lg:min-h-[560px]">
              <div className="absolute right-0 top-6 h-72 w-72 rounded-full bg-[#eec3cc] blur-3xl" />

              <div className="absolute left-4 top-6 z-10 rotate-[-5deg] rounded-2xl bg-white p-4 shadow-xl sm:left-8">
                <p className="font-serif text-lg italic leading-7 text-[#2f2f2f]">
                  Measure.
                  <br />
                  Validate.
                  <br />
                  Prioritize.
                  <br />
                  Grow. ✦
                </p>
              </div>

              <div className="absolute bottom-4 right-0 w-[92%] rotate-2 rounded-[2rem] bg-[#6f86b8] p-5 shadow-2xl sm:right-4 sm:w-[88%]">
                <div className="rounded-[1.5rem] border border-white/40 bg-[#f8efe4] p-5">
                  <div className="relative flex h-[380px] items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-dashed border-[#d8c4ad] bg-white/70 sm:h-[430px] lg:h-[470px]">
                    <img
                      src="/images/anoohya-full.jpg.png"
                      alt="Anoohya Alluri"
                      className="h-full w-full object-cover object-[center_32%]"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 z-20 rotate-[-7deg] rounded-xl bg-[#fff4f6] px-5 py-4 text-sm font-semibold text-[#7b3b46] shadow-md">
                Data.
                <br />
                Leads.
                <br />
                Decisions. ✦
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section
            id="about"
            className="border-y border-[#eadfce] px-6 py-12 sm:px-10"
          >
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                How I work
              </p>

              <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
                From raw data to{" "}
                <span className="rounded-full border-2 border-[#d69aa7] px-3 text-[#5f78ab]">
                  growth decisions
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#4a4a4a]">
                My work sits at the intersection of marketing, analytics,
                technology, and operations. I build the measurement and
                decision systems behind stronger lead generation, attribution,
                lifecycle visibility, and campaign performance.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stackItems.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-[#e4d7c5] bg-white/70 p-5 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef1f8] text-3xl font-black text-[#203354] transition group-hover:rotate-6">
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

          {/* EXPERIENCE */}
          <section
            id="experience"
            className="border-y border-[#eadfce] bg-[#fffaf3] px-6 py-16 sm:px-10"
          >
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                    Professional experience
                  </p>

                  <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
                    Analytics across the customer lifecycle
                  </h2>
                </div>

                <p className="max-w-xl text-sm leading-6 text-[#555]">
                  Experience spanning lead generation, marketing data,
                  attribution, digital analytics, CRM, BI, customer journey
                  analysis, experimentation, and conversion optimization.
                </p>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {experienceItems.map((item) => (
                  <article
                    key={item.role + item.company}
                    className="flex h-full flex-col rounded-[1.75rem] border border-[#e4d7c5] bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6f86b8]">
                      {item.dates}
                    </p>

                    <h3 className="mt-3 font-serif text-2xl font-black leading-tight">
                      {item.role}
                    </h3>

                    <p className="mt-1 text-sm font-bold text-[#70323c]">
                      {item.company}
                    </p>

                    <p className="text-xs text-[#777]">{item.location}</p>

                    <p className="mt-4 text-sm leading-6 text-[#555]">
                      {item.positioning}
                    </p>

                    <div className="mt-5 space-y-3">
                      {item.proof.map((proof) => (
                        <div
                          key={proof}
                          className="flex items-start gap-2 text-sm leading-5 text-[#3f3f3f]"
                        >
                          <span className="mt-1 font-black text-[#6f86b8]">
                            ●
                          </span>
                          <span>{proof}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {item.tools.map((tool) => (
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
            </div>
          </section>

          {/* PROJECTS */}
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
                    Selected case studies
                  </p>

                  <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
                    Lead Generation, Analytics & Growth Systems
                  </h2>
                </div>

                <p className="max-w-xl text-sm leading-7 text-[#555]">
                  Work showing how I move from business question → data →
                  analysis → workflow → measurement → decision.
                </p>
              </div>

              <div className="mt-10 grid gap-7 md:grid-cols-2">
                {featuredProjects.map((project) => (
                  <article
                    key={project.title}
                    className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/60 p-5 shadow-[0_22px_60px_rgba(32,51,84,0.13)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/80 hover:shadow-[0_28px_75px_rgba(32,51,84,0.20)]"
                  >
                    <div
                      className={`relative min-h-[200px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${project.previewClass} p-5 text-white shadow-inner`}
                    >
                      <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full border border-white/25 bg-white/10" />
                      <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full border border-white/20 bg-white/10" />

                      <div className="relative flex items-start justify-between gap-4">
                        <div className="max-w-[270px]">
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
                            <div className="mt-5 text-5xl font-black">
                              {project.icon}
                            </div>
                          )}
                        </div>

                        <span className="max-w-[150px] rounded-full border border-white/30 bg-white/15 px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wider backdrop-blur">
                          {project.status}
                        </span>
                      </div>

                      <div className="relative mt-5 grid grid-cols-3 gap-2">
                        {project.proof.map((item) => (
                          <div
                            key={item}
                            className="rounded-xl border border-white/25 bg-white/10 p-2 backdrop-blur"
                          >
                            <p className="text-[10px] font-semibold leading-4 text-white/90">
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

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-[#eadfce] bg-[#fffaf3]/90 p-4">
                          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#70323c]">
                            Business problem
                          </p>
                          <p className="mt-2 text-sm leading-6 text-[#4b3a3e]">
                            {project.problemSolved}
                          </p>
                        </div>

                        <div className="rounded-2xl border border-[#d8e3ea] bg-[#eef1f8]/75 p-4">
                          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#5f78ab]">
                            Business value
                          </p>
                          <p className="mt-2 text-sm leading-6 text-[#39465f]">
                            {project.businessValue}
                          </p>
                        </div>
                      </div>

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
                                {project.liveButtonLabel ?? "View Live"} ↗
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

              {/* ADDITIONAL SYSTEMS */}
              <section className="mt-14 rounded-[2rem] border border-white/70 bg-white/45 p-6 shadow-[0_18px_50px_rgba(32,51,84,0.10)] backdrop-blur-xl sm:p-8">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-[#6f86b8]">
                      Additional systems
                    </p>

                    <h3 className="mt-2 font-serif text-3xl font-black text-[#202020] sm:text-4xl">
                      BI, Experimentation & Operational Analytics
                    </h3>
                  </div>

                  <p className="max-w-xl text-sm leading-6 text-[#555]">
                    Additional analytical systems supporting executive
                    reporting, marketing performance, experimentation, and
                    operational decision-making.
                  </p>
                </div>

                <div className="mt-7 grid gap-5 lg:grid-cols-3">
                  {internalInitiatives.map((initiative) => (
                    <article
                      key={initiative.title}
                      className="flex h-full flex-col rounded-[1.5rem] border border-[#e4d7c5] bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#6f86b8]">
                        {initiative.category}
                      </p>

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

              {/* TECHNICAL PROJECTS */}
              <div className="mt-14">
                <button
                  type="button"
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  className="group relative w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/60 p-6 text-left shadow-[0_20px_55px_rgba(32,51,84,0.12)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/80 hover:shadow-2xl"
                >
                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-5">
                      <div className="flex h-20 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d8e3ea] to-[#f1c5cc] text-5xl shadow-md">
                        🗂️
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                          Technical foundations
                        </p>

                        <h3 className="mt-1 font-serif text-3xl font-black">
                          SQL, BI & Applied Analytics
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#555]">
                          Supporting work in SQL, data modeling, business
                          analytics, dashboard development, and visualization.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-full bg-[#203354] px-5 py-2 text-center text-sm font-bold text-white shadow-md">
                      {projectsOpen
                        ? "Close technical projects ↑"
                        : "View technical projects ↓"}
                    </div>
                  </div>
                </button>

                {projectsOpen && (
                  <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/40 p-5 shadow-inner backdrop-blur-xl">
                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                      {supportingProjects.map((project) => (
                        <article
                          key={project.title}
                          className="flex h-full flex-col rounded-[1.6rem] border border-white/75 bg-white/70 p-5 shadow-md transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                        >
                          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#6f86b8]">
                            {project.category}
                          </p>

                          <h3 className="mt-3 font-serif text-2xl font-black">
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
                            {project.href && (
                              <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex rounded-full bg-[#203354] px-4 py-2 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#16243c]"
                              >
                                {project.buttonLabel ?? "View Project"} ↗
                              </a>
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

          {/* WEBSITE / GROWTH */}
          <section
            id="website-proof"
            className="overflow-hidden border-y border-[#eadfce] bg-[#fbf5ec] px-6 py-16 sm:px-10"
          >
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                  Growth & conversion analytics
                </p>

                <h2 className="mt-3 font-serif text-4xl font-black leading-tight sm:text-5xl">
                  I treat the website as an acquisition funnel, not just a
                  marketing asset.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#555] sm:text-base">
                  Search intent, landing-page behavior, CTA architecture,
                  audience pathways, lead capture, and conversion measurement
                  are analyzed as one connected customer journey.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "SEO / AEO / GEO",
                    "Landing-page analytics",
                    "Customer journeys",
                    "Lead capture",
                    "CRO & funnel analysis",
                    "Conversion measurement",
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
                  <strong>Objective:</strong> connect search visibility and
                  user behavior to qualified lead actions and measurable
                  acquisition outcomes.
                </p>

                <a
                  href="https://www.westsidepropertymanagement.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-xl bg-[#203354] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#16243c]"
                >
                  View Live Implementation ↗
                </a>
              </div>

              <div className="relative mx-auto w-full max-w-[720px]">
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
                        Acquisition System
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
                        aria-label="Previous website project"
                        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-2xl font-black text-[#203354] shadow-xl"
                      >
                        ‹
                      </button>

                      <button
                        type="button"
                        onClick={nextWebsiteSlide}
                        aria-label="Next website project"
                        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-2xl font-black text-[#203354] shadow-xl"
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

          {/* CAMPAIGN / CRM OPERATIONS */}
          <section
            id="creative"
            className="overflow-hidden border-y border-[#eadfce] bg-[#fffaf3] px-6 py-16 sm:px-10"
          >
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                  Lead generation & campaign operations
                </p>

                <h2 className="mt-3 font-serif text-4xl font-black leading-tight sm:text-5xl">
                  I connect audience strategy, CRM workflows, outreach, and
                  measurement.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#555] sm:text-base">
                  Campaign execution is strongest when segmentation, messaging,
                  suppression logic, lead lifecycle, CTA strategy, and
                  performance measurement operate as one system.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "CRM segmentation",
                    "Email outreach",
                    "Lead nurturing",
                    "Campaign QA",
                    "Suppression / DNC logic",
                    "Performance measurement",
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
                  <strong>Workflow:</strong> qualify → segment → personalize →
                  suppress duplicates → launch → track → analyze.
                </p>
              </div>

              <div className="mx-auto w-full max-w-[500px] rounded-[2rem] border border-[#eadfce] bg-white/85 p-7 shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6f86b8]">
                  Campaign governance
                </p>

                <h3 className="mt-3 font-serif text-3xl font-black">
                  Lead Outreach Workflow
                </h3>

                <div className="mt-7 space-y-3">
                  {[
                    ["01", "Validate", "Lead quality, history, eligibility"],
                    ["02", "Segment", "Source, intent, behavior, audience"],
                    ["03", "Govern", "Deduplication, suppression, DNC rules"],
                    ["04", "Execute", "Personalized email / campaign workflow"],
                    ["05", "Measure", "Responses, outcomes, funnel movement"],
                  ].map(([step, title, detail]) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 rounded-2xl border border-[#eadfce] bg-[#fffaf3] p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#203354] text-xs font-black text-white">
                        {step}
                      </div>

                      <div>
                        <p className="text-sm font-black">{title}</p>
                        <p className="mt-1 text-xs leading-5 text-[#666]">
                          {detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#eef1f8] p-4">
                    <p className="font-serif text-2xl font-black text-[#203354]">
                      201
                    </p>
                    <p className="text-xs font-bold">audited first-touch emails</p>
                  </div>

                  <div className="rounded-2xl bg-[#f5edf0] p-4">
                    <p className="font-serif text-2xl font-black text-[#70323c]">
                      177
                    </p>
                    <p className="text-xs font-bold">unique prospects reached</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section
            id="skills"
            className="border-y border-[#eadfce] bg-[#fffaf3] px-6 py-14 sm:px-10"
          >
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                Technical capability
              </p>

              <h2 className="mt-3 font-serif text-4xl font-black">
                Analytics, MarTech & Growth Stack
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[#555] sm:text-base">
                Tools grouped by the business problems I use them to solve,
                rather than as a flat technology list.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2">
              {toolGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[1.5rem] border border-[#e4d7c5] bg-white/80 p-6 shadow-sm"
                >
                  <h3 className="font-serif text-2xl font-black">
                    {group.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[#e4d7c5] bg-[#fbf5ec] px-4 py-2 text-sm font-bold text-[#203354]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CREDENTIALS */}
          <section
            id="credentials"
            className="relative overflow-hidden border-y border-[#eadfce] bg-[#fbf5ec] px-6 py-14 sm:px-10"
          >
            <div className="relative flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                  Credentials & research
                </p>

                <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
                  Verified Learning & Analytical Foundation
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-6 text-[#555]">
                Credentials and research supporting my SQL, analytics,
                experimentation, AI, research, and marketing capabilities.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setCertificationsOpen(!certificationsOpen)}
              className="group mt-10 w-full rounded-[2rem] border border-[#e4d7c5] bg-white p-6 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex h-20 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f1c5cc] to-[#d8e3ea] text-5xl shadow-md">
                    📁
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
                      Credentials library
                    </p>

                    <h3 className="mt-1 font-serif text-3xl font-black">
                      Certifications & Research
                    </h3>
                  </div>
                </div>

                <div className="rounded-full bg-[#203354] px-5 py-2 text-sm font-bold text-white">
                  {certificationsOpen
                    ? "Close credentials ↑"
                    : "View credentials ↓"}
                </div>
              </div>
            </button>

            {certificationsOpen && (
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {credentials.map((credential) => (
                  <a
                    key={credential.title + credential.date}
                    href={credential.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-[1.6rem] border border-[#e4d7c5] bg-white/85 p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#f8efe4] to-[#d8e3ea] text-3xl">
                      ✦
                    </div>

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.3em] text-[#6f86b8]">
                      {credential.issuer}
                    </p>

                    <h3 className="mt-3 font-serif text-2xl font-black">
                      {credential.title}
                    </h3>

                    <p className="mt-2 text-sm font-bold text-[#8a4b57]">
                      {credential.proofType}
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
                  </a>
                ))}
              </div>
            )}
          </section>

          {/* RESOURCES */}
          <section
            id="resources"
            className="bg-[#5f78ab] px-6 py-14 text-white sm:px-10"
          >
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f1c5cc]">
                  Professional proof
                </p>

                <h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">
                  Code, Dashboards, Credentials & Experience
                </h2>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-4">
                {resourceLinks.map((link) => (
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

          {/* CONTACT */}
          <section
            id="contact"
            className="bg-[#203354] px-6 py-16 text-white sm:px-10"
          >
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f1c5cc]">
                Contact
              </p>

              <h2 className="mt-3 font-serif text-4xl font-black leading-tight sm:text-5xl">
                Open to roles where marketing data drives growth decisions.
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/85">
                I am targeting <strong>Lead Generation Analyst, Growth Marketing
                Analyst, Marketing Data Analyst, Marketing Analytics, and
                MarTech</strong> roles where I can improve acquisition
                measurement, lead quality, attribution, CRM workflows,
                experimentation, and executive reporting.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:anoohyaifo@gmail.com"
                  className="rounded-xl bg-[#f1c5cc] px-6 py-3 text-sm font-bold text-[#70323c] shadow-lg transition hover:-translate-y-1 hover:bg-[#ebb3bd]"
                >
                  Email Me ✉
                </a>

                <a
                  href="https://www.linkedin.com/in/anoohyaalluri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/20"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/20"
                >
                  View Resume ↗
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
