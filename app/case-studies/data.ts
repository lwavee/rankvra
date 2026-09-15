export interface CaseStudyMetric {
  label: string;
  value: string;
  context: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  client: string;
  industry: string;
  location: string;
  timeline: string;
  servicesUsed: string[];
  startingPoint: string;
  challenge: string;
  strategy: string[];
  workCompleted: {
    title: string;
    description: string;
  }[];
  metrics: CaseStudyMetric[];
  techStack: string[];
  outcomeSummary: string;
  keyTakeaways: string[];
  publishedDate: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "lakeview-heritage-resort",
    slug: "lakeview-heritage-resort",
    title: "How Lakeview Heritage Resort Reduced OTA Dependency with Sub-Second Next.js Engineering",
    tagline: "Custom Next.js architecture, Google Maps 3-Pack optimization, and a 1-tap WhatsApp booking funnel built for an independent boutique resort in Udaipur.",
    client: "Lakeview Heritage Resort",
    industry: "Hospitality & Tourism",
    location: "Udaipur, Rajasthan",
    timeline: "8 Weeks Engineering & Search Launch",
    servicesUsed: [
      "Custom Next.js Web Development",
      "Core Web Vitals Remediation",
      "Hospitality Local SEO",
      "WhatsApp Direct Booking Funnel",
    ],
    startingPoint:
      "The resort relied on Online Travel Agencies (OTAs) like MakeMyTrip and Booking.com for over 80% of its room occupancy, paying 18% to 22% in commissions on every reservation. Their existing legacy WordPress site had an 5.2s mobile Largest Contentful Paint (LCP), failed Google Core Web Vitals, and lost mobile visitors before images even loaded.",
    challenge:
      "OTAs were running search ads on the resort's exact brand name, siphoning travelers who already intended to book directly. The slow website gave visitors no incentive to book on the official site, and international guests encountered confusing booking forms that failed on mobile viewports.",
    strategy: [
      "Re-engineer the digital storefront from scratch using Next.js 15+, eliminating all slow PHP plugins and database overhead.",
      "Deploy edge-cached static generation and next/image optimization to achieve sub-second mobile page loads (<0.8s LCP).",
      "Integrate Google Hotel Free Booking Links and optimize the Google Business Profile with localized geo-signals around Lake Pichola.",
      "Build a frictionless 1-tap WhatsApp direct concierge funnel allowing domestic and NRI travelers to inquire about room suites instantly.",
    ],
    workCompleted: [
      {
        title: "Headless Next.js Architecture",
        description:
          "Replaced bloated legacy WordPress templates with modular React components, custom Tailwind CSS, and automatic static pre-rendering on Vercel Edge networks.",
      },
      {
        title: "Mobile Core Web Vitals Overhaul",
        description:
          "Compressed luxury suite photography into modern WebP formats with responsive srcsets, reducing total page payload from 6.8MB to under 450KB.",
      },
      {
        title: "Local Hospitality Search Clustering",
        description:
          "Structured schema graphs (Hotel, PostalAddress, GeoCoordinates) and published localized intent guides for luxury stays, lake views, and destination wedding queries in Udaipur.",
      },
      {
        title: "Direct WhatsApp Booking Engine",
        description:
          "Engineered pre-populated WhatsApp reservation links tied directly to specific suite types and dates, eliminating complex checkout forms.",
      },
    ],
    metrics: [
      {
        label: "Mobile LCP Speed",
        value: "0.8s",
        context: "Down from 5.2s on legacy WordPress, achieving 100% green Core Web Vitals pass scores.",
      },
      {
        label: "Page Weight Reduction",
        value: "-85%",
        context: "Optimized image and script payloads without sacrificing high-resolution luxury imagery.",
      },
      {
        label: "Direct Booking Share",
        value: "Substantial Lift",
        context: "Direct guest WhatsApp and phone inquiries replaced high-commission OTA bookings for peak season dates.",
      },
      {
        label: "Google Maps Visibility",
        value: "Top 3 Rank",
        context: "Consistent appearance in the local 3-pack for boutique heritage queries around Lake Pichola.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel Edge Network", "JSON-LD Schema", "WhatsApp Business API"],
    outcomeSummary:
      "By replacing a sluggish template with custom web engineering and hyper-localized search positioning, Lakeview Heritage Resort established a dependable direct guest acquisition engine, significantly protecting its operating margins across peak season.",
    keyTakeaways: [
      "Speed directly impacts guest conversion: mobile travelers abandon hospitality sites taking more than 3 seconds to load.",
      "A fast WhatsApp booking funnel converts significantly higher than traditional 6-step hotel reservation engines in the Indian and NRI market.",
      "Claiming your exact brand entity on Google prevents OTAs from hijacking your direct organic reservations.",
    ],
    publishedDate: "2026-09-14",
  },
  {
    id: "mewar-stone-marble-exports",
    slug: "mewar-stone-marble-exports",
    title: "Engineered B2B Lead Funnel for Mewar Stone & Marble Exporters",
    tagline: "Technical product catalogs, international B2B search architecture, and buyer inquiry funnels for a stone manufacturer in Rajasthan.",
    client: "Mewar Stone & Marble Exports",
    industry: "Industrial Manufacturing & Mining",
    location: "Sukher / Madri Industrial Area, Udaipur",
    timeline: "10 Weeks Technical Architecture & Search Campaign",
    servicesUsed: [
      "B2B Web Application Development",
      "Technical Stone Specification Catalogs",
      "Export & Commercial SEO",
      "High-Intent Google Ads (PPC)",
    ],
    startingPoint:
      "The exporter had no search visibility for high-value wholesale queries such as 'green marble slabs manufacturer India' or 'sandstone export supplier Rajasthan'. They relied almost exclusively on expensive third-party trade portals that pit suppliers against each other in race-to-the-bottom price wars.",
    challenge:
      "B2B stone procurement managers and commercial architects demand precise technical specifications (compressive strength, water absorption, slab dimensions, finishes). The old brochure website lacked structured technical data, causing potential overseas buyers from the UAE, US, and Europe to exit without requesting quotations.",
    strategy: [
      "Architect a comprehensive digital product catalog with structured technical spec sheets for each marble and granite variety.",
      "Implement B2B Product and Organization schema markup so Google and AI search systems index specific stone properties.",
      "Launch targeted search campaigns capturing high-intent international buyer queries across the Middle East, North America, and domestic Indian metro contractors.",
      "Provide an instant Request For Quotation (RFQ) flow with direct container-load calculators and technical spec sheet downloads.",
    ],
    workCompleted: [
      {
        title: "Technical Stone Catalog Architecture",
        description:
          "Engineered dynamic catalog pages with filterable dimensions, finishes (polished, flamed, honed), and downloadable PDF stone laboratory test reports.",
      },
      {
        title: "International & Commercial SEO",
        description:
          "Optimized content clusters around commercial B2B procurement terms, targeting wholesale buyers, civil contractors, and overseas stone importers.",
      },
      {
        title: "High-Intent Search PPC Funnels",
        description:
          "Targeted procurement searches with strict negative keyword lists to prevent retail consumer clicks, maximizing B2B lead quality.",
      },
      {
        title: "Automated RFQ & WhatsApp Pipeline",
        description:
          "Built a lead capture flow routing international inquiries directly to sales directors via WhatsApp and email with inquiry metadata.",
      },
    ],
    metrics: [
      {
        label: "B2B Export Leads",
        value: "Direct RFQs",
        context: "Replaced third-party portal dependency with proprietary container-load buyer inquiries.",
      },
      {
        label: "Commercial Keywords",
        value: "Page 1 Ranks",
        context: "Achieved top organic rankings for wholesale stone export search terms across target markets.",
      },
      {
        label: "Inquiry Quality",
        value: "High-Intent",
        context: "Over 70% of inbound inquiries originated from verified contractors, architectural firms, and trading houses.",
      },
      {
        label: "Cost Per Acquisition",
        value: "-45%",
        context: "Lower acquisition cost compared to traditional international trade exhibitions and portal subscriptions.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Ads B2B Engine", "Product Schema Markup", "Automated RFQ System"],
    outcomeSummary:
      "Mewar Stone & Marble transformed their digital presence from a dormant online brochure into an active international sales engine, securing repeat container export orders directly from verified overseas commercial procurement managers.",
    keyTakeaways: [
      "B2B buyers need specifications, not marketing fluff: detailed stone specs build immediate procurement trust.",
      "Direct digital channels yield significantly higher profit margins than third-party middleman directories.",
      "Intent-focused search capture filters out low-value consumer inquiries and attracts qualified container-load buyers.",
    ],
    publishedDate: "2026-09-12",
  },
  {
    id: "smile-care-dental",
    slug: "smile-care-dental",
    title: "Dominating the Google Maps 3-Pack for Smile Care Dental & Healthcare",
    tagline: "Local SEO, Google Business Profile optimization, and high-converting patient booking landing pages in Udaipur.",
    client: "Smile Care Dental & Healthcare",
    industry: "Healthcare & Specialized Clinics",
    location: "Shastri Circle, Udaipur, Rajasthan",
    timeline: "6 Weeks Local Search Sprint & Patient Funnel",
    servicesUsed: [
      "Google Maps 3-Pack Optimization",
      "Local Citation Audit & Clean-up",
      "Mobile Patient Appointment Landing Pages",
      "Google Review Velocity Funnel",
    ],
    startingPoint:
      "Despite having top-rated clinical doctors and modern dental equipment, the clinic was invisible on Google Maps beyond a 500-meter radius around their physical clinic. Patients searching for 'dental implants Udaipur' or 'best root canal dentist Udaipur' were calling competitors who ranked in the local 3-pack.",
    challenge:
      "The clinic had fragmented NAP (Name, Address, Phone) citations across older directories, missing category selections on Google Business Profile, and an outdated mobile site that made scheduling a consultation cumbersome on smartphones.",
    strategy: [
      "Cleanse and unify NAP citations across all major Indian business directories (Justdial, Sulekha, IndiaMart, Google).",
      "Optimize primary and secondary GBP categories, service menus, operational hours, and geo-tagged clinic photography.",
      "Develop ultra-fast, mobile-friendly treatment landing pages with transparent procedure FAQs and doctor credentials.",
      "Implement an ethical post-treatment patient feedback system encouraging satisfied patients to leave detailed Google reviews.",
    ],
    workCompleted: [
      {
        title: "Google Business Profile Optimization",
        description:
          "Re-architected clinical categories, service attributes, pricing clarity, and geo-tagged clinical infrastructure imagery.",
      },
      {
        title: "Localized Treatment Landing Pages",
        description:
          "Built high-speed mobile pages for dental implants, invisible aligners, and cosmetic dentistry with one-click WhatsApp appointment booking.",
      },
      {
        title: "Local Citation Synchronization",
        description:
          "Audited and standardized clinic NAP data across 35+ regional and national healthcare directories.",
      },
      {
        title: "Verified Review Acceleration",
        description:
          "Implemented automated WhatsApp post-consultation follow-ups providing patients with a 1-tap link to share their clinic experience.",
      },
    ],
    metrics: [
      {
        label: "Google Maps Position",
        value: "Top 3 Pack",
        context: "Consistent 3-pack prominence across Udaipur neighborhoods (Panchwati, Chetak, Shastri Circle, Hiran Magri).",
      },
      {
        label: "Monthly Phone Inquiries",
        value: "Steady Lift",
        context: "Significant increase in direct phone calls and WhatsApp appointment requests from local searchers.",
      },
      {
        label: "Review Velocity",
        value: "Authentic Reviews",
        context: "Doubled verified 5-star patient reviews detailing specific successful dental procedures.",
      },
      {
        label: "Mobile Conversion Rate",
        value: "High Intent",
        context: "Over 40% of page visitors took action to call, message on WhatsApp, or book a consultation.",
      },
    ],
    techStack: ["Next.js", "Tailwind CSS", "Google Business Profile API", "MedicalBusiness Schema", "WhatsApp Booking Automation"],
    outcomeSummary:
      "By establishing authoritative local search signals and streamlining mobile appointment booking, Smile Care Dental cemented its position as a go-to dental healthcare clinic in Udaipur, generating continuous qualified patient bookings every month.",
    keyTakeaways: [
      "Over 65% of healthcare inquiries on mobile originate from the Google Maps 3-Pack, not traditional organic web links.",
      "Consistent NAP data and active review velocity are fundamental prerequisites for sustained local map dominance.",
      "Transparent treatment explanations and doctor bios reduce patient hesitation and drive appointment bookings.",
    ],
    publishedDate: "2026-09-10",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
