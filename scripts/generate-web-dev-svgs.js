const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'blogs');

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const svgs = [
  {
    filename: 'full-stack-web-development.svg',
    badge: 'FULL-STACK WEB DEVELOPMENT',
    title: 'Full-Stack Web Engineering',
    subtitle: 'Frontend, Backend, and APIs Explained for Decision-Makers',
    accent: '#6366f1',
    cards: [
      { icon: '💻', title: 'Frontend Layer', subtitle: 'React, Next.js, and SSR', desc1: 'Sub-second UI hydration, dynamic routing,', desc2: 'and mobile-first responsive interfaces.', tag: 'CLIENT EXPERIENCE' },
      { icon: '⚙️', title: 'Backend & APIs', subtitle: 'Node.js, Python, and REST', desc1: 'Business logic, secure authentication,', desc2: 'webhook orchestration, and async jobs.', tag: 'COMPUTE & LOGIC' },
      { icon: '🗄️', title: 'Data Tier', subtitle: 'PostgreSQL & Redis', desc1: 'ACID transactional integrity and high-speed', desc2: 'in-memory caching for low query latency.', tag: 'PERSISTENCE' }
    ]
  },
  {
    filename: 'web-development-technology.svg',
    badge: 'TECHNOLOGY STACK STRATEGY',
    title: 'Choosing Web Development Tech',
    subtitle: 'Selecting Frameworks, Backends, and Databases for Business Growth',
    accent: '#06b6d4',
    cards: [
      { icon: '⚛️', title: 'Frontend Stacks', subtitle: 'Next.js vs Single Page Apps', desc1: 'Optimizing for SEO discovery, render', desc2: 'performance, and fast developer velocity.', tag: 'UI FRAMEWORKS' },
      { icon: '🐍', title: 'Backend Engines', subtitle: 'FastAPI, Express, Django', desc1: 'Matching concurrency needs, asynchronous', desc2: 'task queues, and computational load.', tag: 'SERVER APIS' },
      { icon: '📊', title: 'Database Choice', subtitle: 'Relational vs Document', desc1: 'PostgreSQL relational integrity against', desc2: 'unstructured document data stores.', tag: 'DATA MODELS' }
    ]
  },
  {
    filename: 'frontend-vs-backend-development.svg',
    badge: 'SYSTEM ARCHITECTURE',
    title: 'Frontend vs Backend Development',
    subtitle: 'What Each Layer Does and What Your Business Actually Needs',
    accent: '#3b82f6',
    cards: [
      { icon: '🎨', title: 'Frontend Scope', subtitle: 'Client-Side Interaction', desc1: 'Visual layout, accessible navigation,', desc2: 'responsiveness, and state handling.', tag: 'USER INTERACTION' },
      { icon: '🛡️', title: 'Backend Scope', subtitle: 'Server-Side Compute', desc1: 'Data persistence, security enforcement,', desc2: 'payments, and background worker queues.', tag: 'SERVER INFRA' },
      { icon: '🔄', title: 'The Bridge', subtitle: 'Contract-Driven APIs', desc1: 'Type-safe JSON exchange connecting browser', desc2: 'clients to server infrastructure securely.', tag: 'DATA EXCHANGE' }
    ]
  },
  {
    filename: 'custom-web-application-development.svg',
    badge: 'CUSTOM APPLICATION ENGINEERING',
    title: 'Custom Web Applications',
    subtitle: 'When Off-The-Shelf Software Fails and Custom Engineering Delivers ROI',
    accent: '#10b981',
    cards: [
      { icon: '🏢', title: 'B2B Portals', subtitle: 'Wholesale & Enterprise', desc1: 'Automating multi-step workflows, file', desc2: 'processing, and approval lifecycles.', tag: 'OPERATIONS' },
      { icon: '📈', title: 'Zero Seat Fees', subtitle: 'Unlimited User Scaling', desc1: 'Eliminate escalating software subscription', desc2: 'costs as employee headcounts grow.', tag: 'COST EFFICIENCY' },
      { icon: '🔐', title: 'IP Ownership', subtitle: 'Proprietary Codebases', desc1: '100% control over database schemas,', desc2: 'sensitive customer records, and code.', tag: 'FULL ASSET CONTROL' }
    ]
  },
  {
    filename: 'api-integration.svg',
    badge: 'API DEVELOPMENT & INTEGRATION',
    title: 'Website API Integration',
    subtitle: 'Connecting Web Platforms with CRMs, ERPs, and Cloud Tools',
    accent: '#8b5cf6',
    cards: [
      { icon: '⚡', title: 'REST & GraphQL', subtitle: 'Standardized Endpoints', desc1: 'Robust request and response interfaces', desc2: 'compliant with OpenAPI standards.', tag: 'API PROTOCOLS' },
      { icon: '🔗', title: 'Third-Party Sync', subtitle: 'HubSpot, Stripe, ERPs', desc1: 'Bidirectional record synchronization', desc2: 'eliminating manual double data entry.', tag: 'AUTOMATION' },
      { icon: '🪝', title: 'Webhook Pipelines', subtitle: 'Event-Driven Sync', desc1: 'Asynchronous event listeners with HMAC', desc2: 'signature verification and retries.', tag: 'EVENT LISTENERS' }
    ]
  },
  {
    filename: 'ai-automation-business-applications.svg',
    badge: 'AI AUTOMATION FOR BUSINESS',
    title: 'AI Automation & Web Applications',
    subtitle: 'Transforming Websites with Intelligent Bots and LLM Workflows',
    accent: '#ec4899',
    cards: [
      { icon: '🤖', title: 'WhatsApp AI', subtitle: 'Meta Cloud API Workflows', desc1: 'Sub-30-second automated response,', desc2: 'lead qualification, and instant routing.', tag: 'MESSAGING AI' },
      { icon: '🧠', title: 'LLM Pipelines', subtitle: 'Document & Lead Triage', desc1: 'Automated data extraction from incoming', desc2: 'invoices, PDFs, and RFPs.', tag: 'SMART EXTRACTION' },
      { icon: '⚙️', title: 'Sync Triggers', subtitle: 'Instant Lead Assignment', desc1: 'Enriched customer intent synchronized', desc2: 'directly into CRM pipelines in real time.', tag: 'PIPELINE SYNC' }
    ]
  },
  {
    filename: 'backend-development-guide.svg',
    badge: 'BACKEND ENGINEERING GUIDE',
    title: 'Modern Backend Architecture',
    subtitle: 'The Engine Powering Secure, High-Throughput Web Applications',
    accent: '#f59e0b',
    cards: [
      { icon: '🗄️', title: 'Relational Schemas', subtitle: 'PostgreSQL ACID Safety', desc1: 'Normalized tables, foreign-key guarantees,', desc2: 'and zero data corruption risks.', tag: 'DATA INTEGRITY' },
      { icon: '🚀', title: 'High Concurrency', subtitle: 'Node.js & Python Async', desc1: 'Non-blocking I/O capable of handling', desc2: 'thousands of requests per second.', tag: 'PERFORMANCE' },
      { icon: '🔒', title: 'Access Control', subtitle: 'Granular RBAC & MFA', desc1: 'Role-based authorization and encrypted', desc2: 'sessions defending against intrusions.', tag: 'SECURITY TIER' }
    ]
  },
  {
    filename: 'frontend-development-guide.svg',
    badge: 'FRONTEND ENGINEERING GUIDE',
    title: 'Modern Frontend Development',
    subtitle: 'How Fast, Interactive Interfaces Drive Conversion & User Retention',
    accent: '#06b6d4',
    cards: [
      { icon: '⚡', title: 'Sub-Second Speed', subtitle: 'Core Web Vitals Pass', desc1: 'Server Components and minimal JavaScript', desc2: 'ensuring sub-1.2s Largest Contentful Paint.', tag: 'SPEED METRICS' },
      { icon: '📱', title: 'Responsiveness', subtitle: 'Mobile-First Touch UX', desc1: 'Seamless adaptability across all mobile', desc2: 'viewports with zero layout shift.', tag: 'ADAPTIVE DESIGN' },
      { icon: '🛡️', title: 'TypeScript Safety', subtitle: 'Type-Safe Components', desc1: 'Eliminate runtime crashes with strict', desc2: 'compile-time interface verification.', tag: 'CODE STABILITY' }
    ]
  },
  {
    filename: 'custom-web-application-development-cost.svg',
    badge: 'PROJECT PRICING & SCOPE',
    title: 'Web Application Cost Breakdown',
    subtitle: 'Engineering Factors Influencing Custom Software Investment',
    accent: '#10b981',
    cards: [
      { icon: '⚙️', title: 'Architecture Scope', subtitle: 'MVP vs Scaled Enterprise', desc1: 'Multi-role permissions, complex workflows,', desc2: 'and transaction throughput volume.', tag: 'COMPLEXITY' },
      { icon: '🔗', title: 'Integrations Tier', subtitle: 'APIs, Gateways & ERPs', desc1: 'Stripe payments, third-party webhooks,', desc2: 'and legacy database connectors.', tag: 'CONNECTED TOOLS' },
      { icon: '🛡️', title: 'Security & SLAs', subtitle: 'Compliance & Audits', desc1: 'OWASP vulnerability defenses, backup', desc2: 'retention, and dedicated uptime SLAs.', tag: 'RELIABILITY' }
    ]
  },
  {
    filename: 'website-vs-web-application.svg',
    badge: 'STRATEGIC ARCHITECTURE',
    title: 'Website vs Web Application',
    subtitle: 'Understanding the Crucial Differences in Technology and Purpose',
    accent: '#6366f1',
    cards: [
      { icon: '📄', title: 'Business Website', subtitle: 'Informational & Discovery', desc1: 'Content consumption, SEO authority, and', desc2: 'high-converting marketing funnels.', tag: 'PUBLIC VISIBILITY' },
      { icon: '💻', title: 'Web Application', subtitle: 'Dynamic & Interactive', desc1: 'Authenticated sessions, complex CRUD', desc2: 'workflows, and state manipulation.', tag: 'OPERATIONS' },
      { icon: '🚀', title: 'The Hybrid Model', subtitle: 'Next.js App Router', desc1: 'Marketing pages pre-rendered for SEO with', desc2: 'authenticated app portals under one roof.', tag: 'BEST OF BOTH' }
    ]
  },
  {
    filename: 'scalable-web-application-development.svg',
    badge: 'SCALABLE ARCHITECTURE',
    title: 'Building Scalable Web Apps',
    subtitle: 'Engineering for Millions of Requests without Performance Degradation',
    accent: '#8b5cf6',
    cards: [
      { icon: '🧱', title: 'Stateless Services', subtitle: 'Horizontal Container Scale', desc1: 'Dockerized microservices scaled dynamically', desc2: 'across cloud compute instances.', tag: 'AUTO-SCALING' },
      { icon: '⚡', title: 'Caching Hierarchy', subtitle: 'Redis & Edge CDN', desc1: 'Offloading 80% of database load through', desc2: 'intelligent TTL cache invalidation.', tag: 'QUERY OFFLOADING' },
      { icon: '🗄️', title: 'Read Replicas', subtitle: 'PostgreSQL Distribution', desc1: 'Segregating heavy analytical queries from', desc2: 'mission-critical write transactions.', tag: 'DATABASE SCALE' }
    ]
  },
  {
    filename: 'website-performance-optimization.svg',
    badge: 'CORE WEB VITALS & SPEED',
    title: 'Website Performance Optimization',
    subtitle: 'Turning Milliseconds into Search Rankings and Conversions',
    accent: '#3b82f6',
    cards: [
      { icon: '⚡', title: 'LCP &lt; 1.2s', subtitle: 'Server Rendering & AVIF', desc1: 'Edge caching, modern image formats, and', desc2: 'Server Components eliminate render lag.', tag: 'FAST PAINT' },
      { icon: '🎯', title: 'INP &lt; 50ms', subtitle: 'Unblocking Main Thread', desc1: 'Streamlined script execution ensures', desc2: 'instant user click and tap response.', tag: 'INPUT LATENCY' },
      { icon: '📐', title: 'CLS = 0.000', subtitle: 'Zero Visual Jitter', desc1: 'Pre-reserved image dimensions ensure zero', desc2: 'layout shifts during client loading.', tag: 'STABLE LAYOUT' }
    ]
  },
  {
    filename: 'secure-web-application-development.svg',
    badge: 'SECURITY ENGINEERING',
    title: 'Enterprise Web Security',
    subtitle: 'Defense-in-Depth for Business Data, APIs, and User Authentication',
    accent: '#ef4444',
    cards: [
      { icon: '🛡️', title: 'OWASP Top 10', subtitle: 'Proactive Hardening', desc1: 'Parameterized SQL, rigorous input schema', desc2: 'validation, and sanitization.', tag: 'EXPLOIT DEFENSE' },
      { icon: '🔑', title: 'Auth & Sessions', subtitle: 'HttpOnly & MFA', desc1: 'Cryptographic JWT cookies and multi-factor', desc2: 'authentication preventing hijack.', tag: 'ACCESS GUARDS' },
      { icon: '🔒', title: 'Rate Limiting', subtitle: 'DDoS & Brute Force Defense', desc1: 'Redis token buckets throttling excessive', desc2: 'login and API endpoint requests.', tag: 'ABUSE PREVENTION' }
    ]
  },
  {
    filename: 'payment-gateway-integration.svg',
    badge: 'PAYMENT GATEWAY INTEGRATION',
    title: 'Payment Gateway Integration',
    subtitle: 'Stripe, Razorpay, and Secure Transaction Workflows for Web Platforms',
    accent: '#06b6d4',
    cards: [
      { icon: '💳', title: 'Payment Gateways', subtitle: 'Stripe, Razorpay, PayPal', desc1: 'Multi-currency checkout, card vaults,', desc2: 'and localized payment options.', tag: 'GLOBAL CHECKOUT' },
      { icon: '🪝', title: 'Webhook Safety', subtitle: 'HMAC Signature Verification', desc1: 'Ensuring orders are only fulfilled upon', desc2: 'verified cryptographic receipt.', tag: 'EVENT VERIFICATION' },
      { icon: '🔒', title: 'PCI Compliance', subtitle: 'Tokenized Processing', desc1: 'Zero raw card numbers touch your server,', desc2: 'eliminating regulatory compliance risk.', tag: 'TOKENIZATION' }
    ]
  },
  {
    filename: 'saas-development-guide.svg',
    badge: 'SAAS PRODUCT ENGINEERING',
    title: 'SaaS Application Development',
    subtitle: 'Architecting Multi-Tenant Products with Automated Subscriptions',
    accent: '#6366f1',
    cards: [
      { icon: '🏢', title: 'Multi-Tenancy', subtitle: 'Isolated Data Schemas', desc1: 'Row-level security separating subscriber', desc2: 'data within shared database clusters.', tag: 'TENANT ISOLATION' },
      { icon: '💳', title: 'Billing Engines', subtitle: 'Stripe Subscriptions', desc1: 'Automated recurring billing, seat upgrades,', desc2: 'invoice webhooks, and grace periods.', tag: 'RECURRING REVENUE' },
      { icon: '📊', title: 'Tenant Analytics', subtitle: 'Usage & Quota Limits', desc1: 'Real-time telemetry measuring feature', desc2: 'utilization and API rate enforcement.', tag: 'USAGE TRACKING' }
    ]
  },
  {
    filename: 'admin-dashboard-development.svg',
    badge: 'OPERATIONAL TOOLING',
    title: 'Custom Admin Dashboards',
    subtitle: 'Building High-Performance Internal Tools and Business Portals',
    accent: '#10b981',
    cards: [
      { icon: '📊', title: 'Real-Time KPI Data', subtitle: 'Streaming Metrics', desc1: 'Live revenue feeds, order funnels, and', desc2: 'user conversion rate visualizations.', tag: 'EXECUTIVE METRICS' },
      { icon: '⚡', title: 'High-Speed CRUD', subtitle: 'Optimistic UI Updates', desc1: 'Instantaneous data edits with background', desc2: 'database synchronization.', tag: 'OPERATIONS' },
      { icon: '🔒', title: 'Audit Logging', subtitle: 'Compliance Tracking', desc1: 'Immutable audit logs recording every', desc2: 'data change, export, and privilege grant.', tag: 'COMPLIANCE' }
    ]
  },
  {
    filename: 'custom-crm-development.svg',
    badge: 'CRM SYSTEMS ENGINEERING',
    title: 'Custom CRM Development',
    subtitle: 'Tailored Lead Management Workflows vs Generic Off-the-Shelf SaaS',
    accent: '#f59e0b',
    cards: [
      { icon: '🎯', title: 'Exact Sales Match', subtitle: 'Zero Bloatware', desc1: 'Designed precisely around your sales funnel', desc2: 'without irrelevant generic menus.', tag: 'PROCESS MATCH' },
      { icon: '📈', title: 'Unlimited Users', subtitle: 'No Per-Seat Pricing', desc1: 'Onboard 100 sales agents without paying', desc2: 'hundreds of dollars per month.', tag: 'COST SCALING' },
      { icon: '🔗', title: 'Internal Tool Sync', subtitle: 'Bi-Directional ERP Sync', desc1: 'Direct database integration with your ERP,', desc2: 'warehouse, and billing tools.', tag: 'SEAMLESS SYNC' }
    ]
  },
  {
    filename: 'android-app-vs-web-application.svg',
    badge: 'PLATFORM STRATEGY',
    title: 'Android App vs Web Application',
    subtitle: 'Choosing Between Native Mobile Apps, Responsive Web, and PWAs',
    accent: '#06b6d4',
    cards: [
      { icon: '📱', title: 'Native Android', subtitle: 'Device Hardware Access', desc1: 'Bluetooth, background location, and deep', desc2: 'camera integration via Google Play.', tag: 'HARDWARE ACCESS' },
      { icon: '🌐', title: 'Web Application', subtitle: 'Zero Friction Access', desc1: 'Universal browser reach, instant updates,', desc2: 'and 100% bypass of app store fees.', tag: 'FRICTIONLESS REACH' },
      { icon: '🔄', title: 'Progressive Web App', subtitle: 'The Modern Hybrid', desc1: 'Home screen installability, service worker', desc2: 'caching, and push notification support.', tag: 'HYBRID ADVANTAGE' }
    ]
  },
  {
    filename: 'third-party-api-integration.svg',
    badge: 'BUSINESS AUTOMATION',
    title: 'Third-Party API Automation',
    subtitle: 'Connecting Fragmented Tools to Eliminate Manual Operational Work',
    accent: '#8b5cf6',
    cards: [
      { icon: '🔄', title: 'Automated Sync', subtitle: 'Bi-Directional Flow', desc1: 'Instantaneous synchronization between', desc2: 'marketing, sales, and accounting tools.', tag: 'REAL-TIME DATA' },
      { icon: '🛡️', title: 'Resilience Layer', subtitle: 'Queue & Retry Logic', desc1: 'Exponential backoff protecting systems', desc2: 'against external third-party outages.', tag: 'FAULT TOLERANCE' },
      { icon: '📈', title: 'Lead Hand-Off', subtitle: 'Instant Routing', desc1: 'Route high-ticket leads to sales reps', desc2: 'within seconds of form submission.', tag: 'SPEED-TO-LEAD' }
    ]
  },
  {
    filename: 'how-to-choose-a-web-development-company.svg',
    badge: 'AGENCY SELECTION BLUEPRINT',
    title: 'Choosing a Web Dev Partner',
    subtitle: 'The Technical Due Diligence Framework for Business Owners & Founders',
    accent: '#6366f1',
    cards: [
      { icon: '💻', title: 'Code Quality', subtitle: 'No Bloated Templates', desc1: 'Inspecting custom repository architecture,', desc2: 'modern frameworks, and speed metrics.', tag: 'ENGINEERING AUDIT' },
      { icon: '📜', title: 'IP Ownership', subtitle: '100% Client Control', desc1: 'Ensuring your company owns all repositories,', desc2: 'databases, and cloud credentials.', tag: 'ASSET PROTECTION' },
      { icon: '🤝', title: 'Post-Launch SLA', subtitle: 'Proactive Maintenance', desc1: 'Guaranteed uptime monitoring, security', desc2: 'patching, and ongoing feature sprints.', tag: 'LONG-TERM SUPPORT' }
    ]
  }
];

function generateSvg(item) {
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" rx="24" fill="#0f172a"/>
  <!-- Subtle Grid -->
  <g opacity="0.08" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="90" x2="1200" y2="90"/>
    <line x1="0" y1="180" x2="1200" y2="180"/>
    <line x1="0" y1="270" x2="1200" y2="270"/>
    <line x1="0" y1="360" x2="1200" y2="360"/>
    <line x1="0" y1="450" x2="1200" y2="450"/>
    <line x1="0" y1="540" x2="1200" y2="540"/>
    <line x1="200" y1="0" x2="200" y2="630"/>
    <line x1="400" y1="0" x2="400" y2="630"/>
    <line x1="600" y1="0" x2="600" y2="630"/>
    <line x1="800" y1="0" x2="800" y2="630"/>
    <line x1="1000" y1="0" x2="1000" y2="630"/>
  </g>
  <defs>
    <filter id="b1" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="80"/></filter>
    <filter id="b2" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="90"/></filter>
  </defs>
  <circle cx="200" cy="180" r="220" fill="${item.accent}" opacity="0.18" filter="url(#b1)"/>
  <circle cx="1020" cy="450" r="250" fill="${item.accent}" opacity="0.15" filter="url(#b2)"/>

  <!-- Badge -->
  <rect x="80" y="65" width="310" height="38" rx="19" fill="#1e293b" stroke="${item.accent}" stroke-width="1.5"/>
  <text x="100" y="89" fill="#e2e8f0" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="1">${escapeXml(item.badge)}</text>

  <!-- Titles -->
  <text x="80" y="155" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="42" font-weight="800" letter-spacing="-1">${escapeXml(item.title)}</text>
  <text x="80" y="205" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400">${escapeXml(item.subtitle)}</text>

  <!-- Cards -->
  ${item.cards.map((c, idx) => {
    const x = 80 + idx * 350;
    return `
  <g transform="translate(${x}, 270)">
    <rect width="330" height="260" rx="18" fill="#1e293b" stroke="#334155" stroke-width="1"/>
    <rect x="24" y="22" width="44" height="44" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1"/>
    <text x="46" y="50" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="800" text-anchor="middle">${c.icon}</text>
    <text x="24" y="98" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700">${escapeXml(c.title)}</text>
    <text x="24" y="122" fill="${item.accent}" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600">${escapeXml(c.subtitle)}</text>
    <text x="24" y="154" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="400">${escapeXml(c.desc1)}</text>
    <text x="24" y="174" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="400">${escapeXml(c.desc2)}</text>
    <rect x="24" y="206" width="160" height="26" rx="6" fill="${item.accent}" opacity="0.16"/>
    <text x="34" y="223" fill="${item.accent}" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700">${escapeXml(c.tag)}</text>
  </g>`;
  }).join('')}

  <!-- Footer Branding -->
  <text x="80" y="585" fill="#64748b" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" letter-spacing="1">RANKVRA WEB ENGINEERING &amp; ARCHITECTURE SERIES</text>
  <text x="1120" y="585" fill="#64748b" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" text-anchor="end">WWW.RANKVRA.COM</text>
</svg>`;
}

svgs.forEach((item) => {
  const filePath = path.join(targetDir, item.filename);
  fs.writeFileSync(filePath, generateSvg(item), 'utf8');
  console.log(`Generated pure SVG: ${item.filename}`);
});
