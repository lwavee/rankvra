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
  liveUrl?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "capital-co-insurance",
    slug: "capital-co-insurance",
    title: "Capital & Co Insurance Services: Modernizing Commercial Insurance Acquisition",
    tagline: "High-trust commercial insurance web design, policy lead capture architecture, and technical SEO for a forward-thinking insurance brokerage.",
    client: "Capital & Co Insurance Services",
    industry: "Commercial & Personal Insurance",
    location: "United States",
    timeline: "6 Weeks Full-Cycle Architecture & Launch",
    liveUrl: "https://capcoinsurance.com/",
    servicesUsed: [
      "Custom Web Development",
      "Insurance Agency Web Design",
      "Lead Capture Automation",
      "Technical SEO",
      "Conversion Rate Optimization",
    ],
    startingPoint:
      "Capital & Co needed a high-trust digital storefront capable of presenting complex commercial and personal insurance policies with absolute clarity, establishing an authoritative presence to capture high-value commercial policyholders.",
    challenge:
      "Standard agency templates often overwhelm prospective policyholders with dense industry jargon, complex quote forms, and poor mobile readability. The client required a modern, responsive web application that established immediate institutional credibility and guided prospects into clean, policy-specific consultation pathways.",
    strategy: [
      "Architect a clean, modern web presence that positions commercial liability, property, auto, and personal lines with clear value propositions.",
      "Build focused multi-step inquiry pathways tailored to commercial policy types, reducing cognitive load and friction.",
      "Deploy responsive, accessible UI with sub-second page transitions, ensuring an effortless experience across all mobile viewports.",
      "Implement comprehensive InsuranceAgency schema and structured data to establish strong entity understanding in search engines.",
    ],
    workCompleted: [
      {
        title: "Full-Stack Web Engineering",
        description:
          "Engineered a lightweight, high-performance web platform utilizing modern React and Next.js architecture, delivering instantaneous page navigation and stable visual layout.",
      },
      {
        title: "Insurance Policy Funnels",
        description:
          "Crafted dedicated inquiry flows for commercial general liability, commercial property, workers' compensation, and personal lines.",
      },
      {
        title: "Trust-First UX Architecture",
        description:
          "Integrated prominent carrier representation, licensing transparency, and clear coverage guidance to reassure corporate decision-makers.",
      },
      {
        title: "Technical SEO & Structured Data",
        description:
          "Implemented comprehensive Schema.org markup (InsuranceAgency, Service, PostalAddress) to solidify regional and national commercial search positioning.",
      },
    ],
    metrics: [
      {
        label: "Platform Speed",
        value: "Sub-Second",
        context: "Ultra-fast page loads and minimal visual shift across mobile viewports.",
      },
      {
        label: "Inquiry Flow",
        value: "Frictionless",
        context: "Streamlined multi-step quote submissions matched to specific policy lines.",
      },
      {
        label: "Mobile UX",
        value: "100% Responsive",
        context: "Clean typography, accessible touch targets, and frictionless mobile forms.",
      },
      {
        label: "Source Ownership",
        value: "Full Client IP",
        context: "Proprietary, maintainable codebase without restrictive template locks.",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JSON-LD Schema", "Secure Lead Webhooks"],
    outcomeSummary:
      "Capital & Co Insurance Services established an authoritative, high-converting digital presence that clearly communicates their coverage capabilities, supports commercial client acquisition, and represents their brokerage with modern professionalism.",
    keyTakeaways: [
      "Insurance buyers seek trust and speed: clear policy explanations and fast-loading pages significantly reduce drop-offs.",
      "Segmenting quote requests by specific policy type yields far higher lead quality than one-size-fits-all inquiry forms.",
      "Custom web engineering protects client brand identity far better than bloated off-the-shelf WordPress themes.",
    ],
    publishedDate: "2026-09-15",
  },
  {
    id: "sterling-insurance-portal",
    slug: "sterling-insurance-portal",
    title: "Sterling Wholesale Insurance: Engineering a High-Volume Broker Portal & Submission Engine",
    tagline: "Custom web application engineering, secure broker authentication, and automated submission workflows for wholesale insurance.",
    client: "Sterling Wholesale Insurance",
    industry: "Wholesale Insurance & Underwriting",
    location: "United States",
    timeline: "12 Weeks Custom Web Application Architecture",
    liveUrl: "https://app.sterlingwholesaleinsurance.com/",
    servicesUsed: [
      "Custom Web Application Development",
      "Wholesale Portal Architecture",
      "Broker Authentication & Role Management",
      "Submission Workflow Automation",
    ],
    startingPoint:
      "Sterling Wholesale Insurance required an internal and retail-broker-facing digital portal to manage wholesale submissions, supplemental documents, and underwriting reviews without relying on disorganized email chains.",
    challenge:
      "Wholesale commercial insurance involves extensive underwriting data, variable document requirements, and strict timelines. Relying on manual email exchanges created operational bottlenecks, delayed quotes, and increased administrative overhead for underwriting teams.",
    strategy: [
      "Engineer a secure, high-performance web portal enabling appointed retail brokers to submit, track, and manage commercial risk files in real time.",
      "Develop role-based access control (RBAC) and session management for brokers, underwriters, and administrators.",
      "Build structured submission intake forms with validation to ensure complete submissions prior to underwriter review.",
      "Deliver an intuitive dashboard focused on daily operational speed, document clarity, and real-time status visibility.",
    ],
    workCompleted: [
      {
        title: "Custom Web Application Engineering",
        description:
          "Architected a scalable web application with robust state management, modular component architecture, and responsive layouts.",
      },
      {
        title: "Secure Authentication & RBAC",
        description:
          "Configured protected routes, role-based access control, and secure credential handling for authorized insurance partners.",
      },
      {
        title: "Structured Submission Pipeline",
        description:
          "Engineered streamlined application forms that validate complex underwriting data before submission, cutting down review cycles.",
      },
      {
        title: "Administrative Workflow Dashboard",
        description:
          "Created an operational dashboard allowing internal team members to review documents, assign underwriters, and update policy status.",
      },
    ],
    metrics: [
      {
        label: "Submission Efficiency",
        value: "Accelerated",
        context: "Eliminated email confusion by structuring file intake into a centralized portal.",
      },
      {
        label: "System Availability",
        value: "High Uptime",
        context: "Reliable portal accessibility for retail brokers submitting commercial risks.",
      },
      {
        label: "Data Integrity",
        value: "Validated",
        context: "Client-side and server-side validation prevented incomplete submission filings.",
      },
      {
        label: "Application Speed",
        value: "Instant UI",
        context: "Single-page application responsiveness for high-volume daily broker interactions.",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "JWT Authentication", "RESTful APIs"],
    outcomeSummary:
      "Sterling Wholesale Insurance deployed an enterprise-grade digital portal that streamlined broker submissions, eliminated manual administrative bottlenecks, and positioned the company as a technically advanced wholesale partner.",
    keyTakeaways: [
      "Custom web applications turn cumbersome administrative workflows into competitive operational advantages.",
      "Strict data validation at the point of submission saves hundreds of underwriting hours down the line.",
      "A fast, modern portal enhances broker loyalty and strengthens wholesale distribution networks.",
    ],
    publishedDate: "2026-09-12",
  },
  {
    id: "swastik-computer-education",
    slug: "swastik-computer-education",
    title: "Swastik Computer Education: Digital Campus & Student Enrollment Engine",
    tagline: "Modern academic web architecture, curriculum directories, and streamlined student admission pathways for an IT institute.",
    client: "Swastik Computer Education",
    industry: "Education & Professional IT Training",
    location: "India",
    timeline: "5 Weeks Portal & Web Architecture",
    servicesUsed: [
      "Custom Web Development",
      "Course Catalog Architecture",
      "Student Inquiry Funnels",
      "Local & Regional SEO",
    ],
    startingPoint:
      "The institution offered technical and vocational training across programming, software applications, and accounting, but lacked an interactive digital platform where students could explore curricula and enroll.",
    challenge:
      "Prospective students needed transparent course syllabi, batch timings, instructor credentials, and certificate verification. The previous static presence failed to convert digital visitors into enrolled students.",
    strategy: [
      "Develop a modern, accessible educational website with interactive course modules and syllabus breakdowns.",
      "Build a streamlined online inquiry and batch registration flow connected to direct counseling alerts.",
      "Optimize local and regional educational search signals to capture students seeking career advancement courses.",
    ],
    workCompleted: [
      {
        title: "Interactive Course Directory",
        description:
          "Structured detailed syllabus pages for programming languages, web technologies, software tools, and vocational certifications.",
      },
      {
        title: "Online Verification & Admissions",
        description:
          "Built student registration inquiry pathways with automated WhatsApp alerts to admission counselors.",
      },
      {
        title: "Mobile-First UX",
        description:
          "Tailored the entire mobile browsing experience for smartphone users seeking vocational training.",
      },
      {
        title: "Educational Search Optimization",
        description:
          "Configured EducationalOrganization schema markup and structured data across primary search touchpoints.",
      },
    ],
    metrics: [
      {
        label: "Course Discovery",
        value: "Direct Inquiries",
        context: "Students directly access module details and request batch schedules online.",
      },
      {
        label: "Mobile Usability",
        value: "Sub-Second",
        context: "Optimized mobile page loads across cellular networks in India.",
      },
      {
        label: "Inquiry Organization",
        value: "Centralized",
        context: "Replaced disorganized paper inquiries with structured digital candidate records.",
      },
      {
        label: "Educational Trust",
        value: "Transparent",
        context: "Curriculum clarity and instructor details elevated institutional credibility.",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Educational Organization Schema", "Lead Webhooks"],
    outcomeSummary:
      "Swastik Computer Education established a trusted digital presence that provides students with clear curriculum insights and delivers a steady, organized pipeline of course enrollments.",
    keyTakeaways: [
      "Transparent course syllabi and batch schedules directly resolve candidate hesitations.",
      "Instant WhatsApp inquiry options are crucial for education lead conversion in India.",
      "A fast mobile site is essential since over 80% of students browse vocational programs on mobile devices.",
    ],
    publishedDate: "2026-09-08",
  },
  {
    id: "e-biozone",
    slug: "e-biozone",
    title: "E-Biozone: Scientific Catalog & B2B Laboratory Equipment Platform",
    tagline: "Technical product catalogs, laboratory spec sheets, and institutional quotation funnels for scientific research suppliers.",
    client: "E-Biozone",
    industry: "Biotechnology & Laboratory Supplies",
    location: "India & International",
    timeline: "8 Weeks Product Catalog Engineering",
    servicesUsed: [
      "B2B Web Development",
      "Technical Product Catalog",
      "Quotation Request Engine",
      "Commercial & Technical SEO",
    ],
    startingPoint:
      "E-Biozone supplies laboratory instruments, chemicals, and biotechnology research products to universities, diagnostics centers, and commercial laboratories.",
    challenge:
      "Scientific buyers require granular technical specifications, safety data sheets, and compliance certificates before submitting Request for Quotation (RFQ) inquiries. Standard ecommerce carts failed to fit their institutional procurement model.",
    strategy: [
      "Develop a structured scientific product catalog categorized by discipline and technical application.",
      "Build a seamless 'Request a Quote' cart flow allowing procurement managers to request bulk pricing without standard consumer checkout friction.",
      "Implement deep technical Product and TechnicalSpecification schema for B2B search indexing.",
    ],
    workCompleted: [
      {
        title: "Scientific Product Taxonomy",
        description:
          "Designed an intuitive multi-level catalog for lab consumables, precision instruments, and diagnostic reagents.",
      },
      {
        title: "B2B Request For Quote (RFQ) Engine",
        description:
          "Created an inquiry builder allowing institutional buyers to compile multi-item quote requests.",
      },
      {
        title: "Technical Spec Sheet Integration",
        description:
          "Added downloadable calibration specs, safety data sheets, and compliance certifications.",
      },
      {
        title: "Enterprise Search Optimization",
        description:
          "Structured commercial search terms targeting laboratory procurement and research procurement teams.",
      },
    ],
    metrics: [
      {
        label: "Procurement RFQs",
        value: "Direct Pipeline",
        context: "Inbound institutional quotation requests generated without middleman commissions.",
      },
      {
        label: "Catalog Navigation",
        value: "Instant Filter",
        context: "Researchers quickly filter products by application, purity grade, and instrument type.",
      },
      {
        label: "Specification Clarity",
        value: "Standardized",
        context: "Downloadable documentation answered technical compliance queries upfront.",
      },
      {
        label: "Digital Catalog",
        value: "100% Scalable",
        context: "Easily expandable data architecture supporting hundreds of scientific SKUs.",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "B2B Catalog Engine", "Product Schema JSON-LD"],
    outcomeSummary:
      "E-Biozone transformed their product distribution with a high-performance technical catalog that attracts research laboratories and generates direct, qualified commercial quotations.",
    keyTakeaways: [
      "B2B buyers evaluate precision: detailed technical specifications build procurement confidence.",
      "Replacing consumer checkouts with customized RFQ workflows significantly lifts institutional inquiries.",
      "Structured product data helps Google index technical equipment for precise commercial queries.",
    ],
    publishedDate: "2026-09-05",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
