const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'blogs');

// Helper: Common SVG Header & Ambient Glows
function baseSvg(bg = '#090d16', accent1 = '#6366f1', accent2 = '#06b6d4') {
  return `
  <defs>
    <filter id="glow1" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="90"/></filter>
    <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="80"/></filter>
    <linearGradient id="accGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${accent1}"/>
      <stop offset="100%" stop-color="${accent2}"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.95"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" rx="24" fill="${bg}"/>
  <!-- Ambient Glow Orbs -->
  <circle cx="180" cy="160" r="240" fill="${accent1}" opacity="0.18" filter="url(#glow1)"/>
  <circle cx="1040" cy="460" r="260" fill="${accent2}" opacity="0.16" filter="url(#glow2)"/>
  <!-- Subtle Background Grid -->
  <g opacity="0.05" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="90" x2="1200" y2="90"/>
    <line x1="0" y1="180" x2="1200" y2="180"/>
    <line x1="0" y1="270" x2="1200" y2="270"/>
    <line x1="0" y1="360" x2="1200" y2="360"/>
    <line x1="0" y1="450" x2="1200" y2="450"/>
    <line x1="0" y1="540" x2="1200" y2="540"/>
    <line x1="150" y1="0" x2="150" y2="630"/>
    <line x1="300" y1="0" x2="300" y2="630"/>
    <line x1="450" y1="0" x2="450" y2="630"/>
    <line x1="600" y1="0" x2="600" y2="630"/>
    <line x1="750" y1="0" x2="750" y2="630"/>
    <line x1="900" y1="0" x2="900" y2="630"/>
    <line x1="1050" y1="0" x2="1050" y2="630"/>
  </g>
  `;
}

function footerBranding() {
  return `
  <!-- Footer Branding -->
  <line x1="80" y1="560" x2="1120" y2="560" stroke="#1e293b" stroke-width="1"/>
  <text x="80" y="590" fill="#64748b" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" letter-spacing="1">RANKVRA ENGINEERING SERIES</text>
  <text x="1120" y="590" fill="#64748b" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" text-anchor="end">WWW.RANKVRA.COM</text>
  `;
}

const generators = {
  // 1. FULL-STACK WEB DEVELOPMENT: 3-Tier Layered Architecture
  'full-stack-web-development.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#090d16', '#6366f1', '#38bdf8')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.2"/>
    <text x="96" y="77" fill="#a5b4fc" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">FULL-STACK ARCHITECTURE</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Full-Stack Web Development</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">Frontend Layer, API Gateway &amp; Database Persistence</text>

    <!-- 3-Tier Stack Illustration -->
    <!-- Tier 1: Client Frontend Window -->
    <g transform="translate(80, 215)">
      <rect width="1040" height="92" rx="14" fill="#0f172a" stroke="#6366f1" stroke-width="1.5"/>
      <circle cx="28" cy="24" r="5" fill="#ef4444"/>
      <circle cx="44" cy="24" r="5" fill="#eab308"/>
      <circle cx="60" cy="24" r="5" fill="#22c55e"/>
      <rect x="85" y="15" width="280" height="18" rx="9" fill="#1e293b"/>
      <text x="98" y="28" fill="#64748b" font-family="monospace" font-size="11">https://app.enterprise.com/dashboard</text>
      
      <rect x="25" y="46" width="310" height="34" rx="8" fill="#1e1b4b" stroke="#4338ca"/>
      <text x="40" y="68" fill="#e0e7ff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">🎨 Frontend Tier (Next.js 15 / React)</text>
      <text x="360" y="68" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">Server Components • Sub-Second UI Hydration • Tailwind CSS Design System</text>
      <rect x="940" y="48" width="75" height="28" rx="6" fill="#10b981" opacity="0.2"/>
      <text x="954" y="66" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">CLIENT</text>
    </g>

    <!-- Flow Connector Lines -->
    <path d="M600 307 L600 335" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 4"/>
    <polygon points="600,340 595,330 605,330" fill="#38bdf8"/>

    <!-- Tier 2: Backend API Gateway -->
    <g transform="translate(80, 340)">
      <rect width="1040" height="88" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
      <rect x="25" y="24" width="310" height="38" rx="8" fill="#082f49" stroke="#0284c7"/>
      <text x="40" y="48" fill="#bae6fd" font-family="system-ui, sans-serif" font-size="14" font-weight="700">⚡ API &amp; Server Tier (Node.js / Python)</text>
      <text x="360" y="48" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">REST &amp; GraphQL Endpoints • JWT Auth • Webhook Queue Orchestration</text>
      <rect x="920" y="30" width="95" height="28" rx="6" fill="#38bdf8" opacity="0.2"/>
      <text x="934" y="48" fill="#7dd3fc" font-family="system-ui, sans-serif" font-size="11" font-weight="700">COMPUTE</text>
    </g>

    <!-- Flow Connector Lines -->
    <path d="M600 428 L600 455" stroke="#10b981" stroke-width="2" stroke-dasharray="4 4"/>
    <polygon points="600,460 595,450 605,450" fill="#10b981"/>

    <!-- Tier 3: Database & Cache -->
    <g transform="translate(80, 460)">
      <rect width="1040" height="88" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
      <rect x="25" y="24" width="310" height="38" rx="8" fill="#064e3b" stroke="#059669"/>
      <text x="40" y="48" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="14" font-weight="700">🗄️ Persistence Tier (PostgreSQL + Redis)</text>
      <text x="360" y="48" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">ACID Transaction Safety • Sub-Millisecond In-Memory Caching • Read Replicas</text>
      <rect x="920" y="30" width="95" height="28" rx="6" fill="#10b981" opacity="0.2"/>
      <text x="937" y="48" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="11" font-weight="700">STORAGE</text>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 2. CHOOSING WEB TECH: Floating Tech Stack Badges Matrix
  'web-development-technology.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#070b19', '#06b6d4', '#6366f1')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#083344" stroke="#06b6d4" stroke-width="1.2"/>
    <text x="96" y="77" fill="#67e8f9" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">TECHNOLOGY SELECTION</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Choosing the Right Tech Stack</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">Aligning Frameworks, Databases &amp; Cloud Tools with Real Business Goals</text>

    <!-- Tech Grid Matrix -->
    <g transform="translate(80, 215)">
      <!-- Next.js Badge -->
      <g transform="translate(0, 0)">
        <rect width="240" height="140" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <circle cx="40" cy="40" r="20" fill="#000000" stroke="#475569" stroke-width="1"/>
        <text x="40" y="46" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="800" text-anchor="middle">N</text>
        <text x="75" y="46" fill="#ffffff" font-family="system-ui, sans-serif" font-size="17" font-weight="700">Next.js 15</text>
        <text x="20" y="85" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">SSR &amp; Server Components</text>
        <text x="20" y="108" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="600">SEO &amp; High-Speed Web</text>
      </g>
      <!-- Python FastAPI -->
      <g transform="translate(265, 0)">
        <rect width="240" height="140" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <circle cx="40" cy="40" r="20" fill="#0284c7" opacity="0.2"/>
        <text x="40" y="46" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle">🐍</text>
        <text x="75" y="46" fill="#ffffff" font-family="system-ui, sans-serif" font-size="17" font-weight="700">Python FastAPI</text>
        <text x="20" y="85" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">High-Throughput Async</text>
        <text x="20" y="108" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="600">AI &amp; Compute Pipelines</text>
      </g>
      <!-- Node.js / Express -->
      <g transform="translate(530, 0)">
        <rect width="240" height="140" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <circle cx="40" cy="40" r="20" fill="#15803d" opacity="0.2"/>
        <text x="40" y="46" fill="#4ade80" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle">⚡</text>
        <text x="75" y="46" fill="#ffffff" font-family="system-ui, sans-serif" font-size="17" font-weight="700">Node.js Engine</text>
        <text x="20" y="85" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">Real-time WebSockets</text>
        <text x="20" y="108" fill="#a78bfa" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Enterprise Microservices</text>
      </g>
      <!-- PostgreSQL -->
      <g transform="translate(795, 0)">
        <rect width="245" height="140" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <circle cx="40" cy="40" r="20" fill="#1e3a8a" opacity="0.3"/>
        <text x="40" y="46" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle">🗄️</text>
        <text x="75" y="46" fill="#ffffff" font-family="system-ui, sans-serif" font-size="17" font-weight="700">PostgreSQL</text>
        <text x="20" y="85" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">ACID Relational Core</text>
        <text x="20" y="108" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Complex Business Logic</text>
      </g>

      <!-- Bottom Banner Comparison Bar -->
      <g transform="translate(0, 160)">
        <rect width="1040" height="140" rx="16" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5"/>
        <text x="35" y="42" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="14" font-weight="700" letter-spacing="1">SELECTION CRITERIA MATRIX</text>
        <text x="35" y="75" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="800">Speed to Market vs Long-Term Maintainability vs Cloud Costs</text>
        <text x="35" y="108" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="14">We architect custom enterprise platforms without vendor lock-in or bloated legacy templates.</text>
        <rect x="850" y="45" width="150" height="42" rx="10" fill="#06b6d4" opacity="0.2" stroke="#06b6d4"/>
        <text x="925" y="71" fill="#67e8f9" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">DECISION GUIDE</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 3. FRONTEND VS BACKEND: Split Screen Duality
  'frontend-vs-backend-development.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#0a0e1a', '#3b82f6', '#10b981')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#1e1b4b" stroke="#3b82f6" stroke-width="1.2"/>
    <text x="96" y="77" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">SYSTEM DUALITY</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Frontend vs Backend Development</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">What Each Layer Delivers and How They Integrate for Maximum ROI</text>

    <!-- Split Visual: Left = Frontend UI, Right = Backend Code -->
    <g transform="translate(80, 215)">
      <!-- Left: Frontend Card -->
      <rect x="0" y="0" width="495" height="310" rx="20" fill="#0f172a" stroke="#3b82f6" stroke-width="2"/>
      <rect x="25" y="25" width="120" height="28" rx="8" fill="#1d4ed8" opacity="0.3"/>
      <text x="37" y="44" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="12" font-weight="700">🎨 FRONTEND</text>
      <text x="25" y="90" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800">Client-Side Experience</text>
      <!-- Mock UI Wireframe inside -->
      <g transform="translate(25, 115)">
        <rect width="445" height="165" rx="10" fill="#1e293b"/>
        <rect x="15" y="15" width="120" height="12" rx="4" fill="#3b82f6"/>
        <rect x="15" y="38" width="190" height="8" rx="4" fill="#64748b"/>
        <rect x="15" y="60" width="90" height="30" rx="6" fill="#3b82f6"/>
        <text x="60" y="80" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Book Demo</text>
        <!-- Metric bars -->
        <rect x="15" y="110" width="415" height="18" rx="4" fill="#0f172a"/>
        <rect x="15" y="110" width="370" height="18" rx="4" fill="#10b981"/>
        <text x="25" y="123" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Lighthouse 99 Performance</text>
        <text x="15" y="150" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Next.js • React • Responsive UI • Core Web Vitals</text>
      </g>

      <!-- Center Laser Line & Exchange Orb -->
      <line x1="520" y1="155" x2="520" y2="155" stroke="#ffffff"/>

      <!-- Right: Backend Card -->
      <rect x="545" y="0" width="495" height="310" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
      <rect x="570" y="25" width="120" height="28" rx="8" fill="#065f46" opacity="0.3"/>
      <text x="582" y="44" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="12" font-weight="700">⚙️ BACKEND</text>
      <text x="570" y="90" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800">Server &amp; Data Infrastructure</text>
      <!-- Mock Terminal inside -->
      <g transform="translate(570, 115)">
        <rect width="445" height="165" rx="10" fill="#022c22" stroke="#059669" stroke-width="1"/>
        <circle cx="15" cy="18" r="4" fill="#ef4444"/>
        <circle cx="28" cy="18" r="4" fill="#eab308"/>
        <circle cx="41" cy="18" r="4" fill="#22c55e"/>
        <text x="15" y="48" fill="#34d399" font-family="monospace" font-size="11">POST /api/v1/auth/login 200 OK (24ms)</text>
        <text x="15" y="70" fill="#a7f3d0" font-family="monospace" font-size="11">SELECT * FROM users WHERE org_id = $1;</text>
        <text x="15" y="92" fill="#6ee7b7" font-family="monospace" font-size="11">✓ Redis cache warm • JWT token signed</text>
        <text x="15" y="114" fill="#34d399" font-family="monospace" font-size="11">✓ Stripe webhook idempotency verified</text>
        <text x="15" y="148" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Node.js • Python • PostgreSQL • APIs &amp; Security</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 4. CUSTOM WEB APPLICATION: Rich Enterprise App Window Mockup
  'custom-web-application-development.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#090d16', '#10b981', '#3b82f6')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#064e3b" stroke="#10b981" stroke-width="1.2"/>
    <text x="96" y="77" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">CUSTOM ENTERPRISE SOFTWARE</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Custom Web Application Development</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">Tailored B2B Portals, Insurance Systems &amp; Operational Workflows</text>

    <!-- Browser Window Container -->
    <g transform="translate(80, 215)">
      <rect width="1040" height="310" rx="18" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
      <!-- Window Controls & URL bar -->
      <circle cx="28" cy="22" r="5" fill="#ef4444"/>
      <circle cx="44" cy="22" r="5" fill="#eab308"/>
      <circle cx="60" cy="22" r="5" fill="#22c55e"/>
      <rect x="85" y="13" width="340" height="18" rx="6" fill="#1e293b"/>
      <text x="95" y="26" fill="#64748b" font-family="monospace" font-size="10">https://portal.sterlingwholesaleinsurance.com</text>

      <!-- App Interface Content -->
      <!-- Left Sidebar -->
      <rect x="15" y="45" width="180" height="250" rx="10" fill="#1e293b"/>
      <text x="35" y="78" fill="#10b981" font-family="system-ui, sans-serif" font-size="14" font-weight="800">RankVRA Ops</text>
      <rect x="25" y="95" width="160" height="28" rx="6" fill="#10b981" opacity="0.2"/>
      <text x="40" y="113" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="700">📊 Dashboard</text>
      <text x="40" y="145" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">📑 Applications</text>
      <text x="40" y="175" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">👥 Underwriters</text>
      <text x="40" y="205" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">⚙️ API Connectors</text>
      <text x="40" y="260" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">Proprietary IP 100%</text>

      <!-- Main Dashboard Content -->
      <!-- Top 3 Metric Cards -->
      <g transform="translate(210, 50)">
        <rect width="255" height="75" rx="10" fill="#1e293b" stroke="#334155"/>
        <text x="18" y="28" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">ACTIVE ACCOUNTS</text>
        <text x="18" y="58" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800">4,280</text>
        <text x="175" y="56" fill="#10b981" font-family="system-ui, sans-serif" font-size="12" font-weight="700">+18.4%</text>

        <rect x="275" y="0" width="255" height="75" rx="10" fill="#1e293b" stroke="#334155"/>
        <text x="293" y="28" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">QUOTES PROCESSED</text>
        <text x="293" y="58" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800">$18.6M</text>
        <text x="450" y="56" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Instant</text>

        <rect x="550" y="0" width="255" height="75" rx="10" fill="#1e293b" stroke="#334155"/>
        <text x="568" y="28" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">AVERAGE RESPONSE</text>
        <text x="568" y="58" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800">38ms</text>
        <text x="730" y="56" fill="#10b981" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Global</text>
      </g>

      <!-- Bottom Activity Chart & Table -->
      <g transform="translate(210, 140)">
        <rect width="805" height="150" rx="10" fill="#1e293b" stroke="#334155"/>
        <text x="20" y="28" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Real-Time Workflow Pipeline Automation</text>
        <!-- SVG Sparkline Area Chart -->
        <path d="M 20 115 L 120 90 L 220 100 L 320 60 L 420 75 L 520 40 L 620 50 L 720 20 L 780 25 L 780 130 L 20 130 Z" fill="#10b981" opacity="0.15"/>
        <path d="M 20 115 L 120 90 L 220 100 L 320 60 L 420 75 L 520 40 L 620 50 L 720 20 L 780 25" stroke="#10b981" stroke-width="2.5" fill="none"/>
        <circle cx="720" cy="20" r="5" fill="#34d399"/>
        <text x="730" y="24" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Peak Performance</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 5. API INTEGRATION: Hub-and-Spoke Connected Ecosystem
  'api-integration.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#090d16', '#8b5cf6', '#06b6d4')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#2e1065" stroke="#8b5cf6" stroke-width="1.2"/>
    <text x="96" y="77" fill="#c4b5fd" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">SYSTEM CONNECTIVITY</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Website &amp; Business API Integration</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">Unifying CRMs, ERPs, Payment Gateways &amp; Third-Party Services</text>

    <!-- Hub and Spoke Diagram -->
    <g transform="translate(600, 365)">
      <!-- Connecting Spoke Lines -->
      <line x1="0" y1="0" x2="-360" y2="-80" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="6 6"/>
      <line x1="0" y1="0" x2="-280" y2="90" stroke="#06b6d4" stroke-width="2" stroke-dasharray="6 6"/>
      <line x1="0" y1="0" x2="360" y2="-80" stroke="#10b981" stroke-width="2" stroke-dasharray="6 6"/>
      <line x1="0" y1="0" x2="280" y2="90" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 6"/>
      <line x1="0" y1="0" x2="0" y2="-120" stroke="#ec4899" stroke-width="2" stroke-dasharray="6 6"/>

      <!-- Central Core Hub -->
      <circle cx="0" cy="0" r="75" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="3"/>
      <circle cx="0" cy="0" r="60" fill="#0f172a"/>
      <text x="0" y="-8" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="800" text-anchor="middle">CENTRAL</text>
      <text x="0" y="14" fill="#a78bfa" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">API HUB</text>
      <text x="0" y="32" fill="#38bdf8" font-family="monospace" font-size="10" text-anchor="middle">JSON / REST</text>

      <!-- Node 1: Stripe Payments -->
      <g transform="translate(-360, -80)">
        <rect x="-90" y="-35" width="180" height="70" rx="14" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
        <text x="0" y="-6" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">💳 Stripe &amp; Gateway</text>
        <text x="0" y="16" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Webhooks &amp; Vault</text>
      </g>

      <!-- Node 2: HubSpot CRM -->
      <g transform="translate(-280, 90)">
        <rect x="-90" y="-35" width="180" height="70" rx="14" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5"/>
        <text x="0" y="-6" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">👥 CRM (HubSpot)</text>
        <text x="0" y="16" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Real-time Lead Sync</text>
      </g>

      <!-- Node 3: WhatsApp Cloud API -->
      <g transform="translate(0, -120)">
        <rect x="-95" y="-35" width="190" height="70" rx="14" fill="#0f172a" stroke="#ec4899" stroke-width="1.5"/>
        <text x="0" y="-6" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">💬 WhatsApp Meta API</text>
        <text x="0" y="16" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Instant Notifications</text>
      </g>

      <!-- Node 4: ERP & Accounting -->
      <g transform="translate(360, -80)">
        <rect x="-90" y="-35" width="180" height="70" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <text x="0" y="-6" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">📦 ERP &amp; Invoicing</text>
        <text x="0" y="16" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Automated Ledger</text>
      </g>

      <!-- Node 5: Cloud Storage & Auth -->
      <g transform="translate(280, 90)">
        <rect x="-90" y="-35" width="180" height="70" rx="14" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="0" y="-6" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">☁️ AWS S3 &amp; Cloud</text>
        <text x="0" y="16" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Encrypted Documents</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 6. AI AUTOMATION: Neural Workflow Flowchart
  'ai-automation-business-applications.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#090d16', '#ec4899', '#8b5cf6')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#500724" stroke="#ec4899" stroke-width="1.2"/>
    <text x="96" y="77" fill="#fbcfe8" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">INTELLIGENT SYSTEMS</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">AI Automation for Business</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">LLM Microservices, WhatsApp Agents &amp; Real-Time Lead Qualification</text>

    <!-- 3-Stage Pipeline Layout -->
    <g transform="translate(80, 220)">
      <!-- Stage 1: Trigger -->
      <g transform="translate(0, 0)">
        <rect width="310" height="300" rx="18" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <rect x="25" y="25" width="130" height="28" rx="8" fill="#1e293b"/>
        <text x="35" y="44" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">1. INBOUND TRIGGER</text>
        <text x="25" y="95" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="800">Lead Event Captured</text>
        <!-- Trigger items -->
        <rect x="20" y="115" width="270" height="42" rx="8" fill="#1e293b"/>
        <text x="35" y="141" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13">💬 WhatsApp Business Inquiry</text>
        <rect x="20" y="165" width="270" height="42" rx="8" fill="#1e293b"/>
        <text x="35" y="191" fill="#34d399" font-family="system-ui, sans-serif" font-size="13">📑 Website Quote Request Form</text>
        <rect x="20" y="215" width="270" height="42" rx="8" fill="#1e293b"/>
        <text x="35" y="241" fill="#f472b6" font-family="system-ui, sans-serif" font-size="13">📄 PDF Document Upload</text>
      </g>

      <!-- Arrow 1 -->
      <path d="M 325 150 L 355 150" stroke="#ec4899" stroke-width="3"/>
      <polygon points="360,150 350,145 350,155" fill="#ec4899"/>

      <!-- Stage 2: AI Engine -->
      <g transform="translate(365, 0)">
        <rect width="310" height="300" rx="18" fill="#180924" stroke="#ec4899" stroke-width="2"/>
        <rect x="25" y="25" width="120" height="28" rx="8" fill="#500724"/>
        <text x="35" y="44" fill="#f472b6" font-family="system-ui, sans-serif" font-size="12" font-weight="700">2. AI PROCESSOR</text>
        <text x="25" y="95" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="800">LLM Reasoning</text>
        <!-- AI Subtasks -->
        <rect x="20" y="115" width="270" height="42" rx="8" fill="#2d1242"/>
        <text x="35" y="141" fill="#fbcfe8" font-family="system-ui, sans-serif" font-size="13">🧠 Intent &amp; Budget Scoring</text>
        <rect x="20" y="165" width="270" height="42" rx="8" fill="#2d1242"/>
        <text x="35" y="191" fill="#fbcfe8" font-family="system-ui, sans-serif" font-size="13">⚡ Entity Data Extraction</text>
        <rect x="20" y="215" width="270" height="42" rx="8" fill="#2d1242"/>
        <text x="35" y="241" fill="#fbcfe8" font-family="system-ui, sans-serif" font-size="13">⏱️ &lt; 2 Second Execution</text>
      </g>

      <!-- Arrow 2 -->
      <path d="M 690 150 L 720 150" stroke="#8b5cf6" stroke-width="3"/>
      <polygon points="725,150 715,145 715,155" fill="#8b5cf6"/>

      <!-- Stage 3: Automated Actions -->
      <g transform="translate(730, 0)">
        <rect width="310" height="300" rx="18" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <rect x="25" y="25" width="130" height="28" rx="8" fill="#1e293b"/>
        <text x="35" y="44" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">3. BUSINESS ACTION</text>
        <text x="25" y="95" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="800">Instant Execution</text>
        <!-- Actions -->
        <rect x="20" y="115" width="270" height="42" rx="8" fill="#1e293b"/>
        <text x="35" y="141" fill="#34d399" font-family="system-ui, sans-serif" font-size="13">✅ Lead Created in CRM</text>
        <rect x="20" y="165" width="270" height="42" rx="8" fill="#1e293b"/>
        <text x="35" y="191" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13">📲 Sales Team Slack Alert</text>
        <rect x="20" y="215" width="270" height="42" rx="8" fill="#1e293b"/>
        <text x="35" y="241" fill="#c084fc" font-family="system-ui, sans-serif" font-size="13">✉️ Personalized Follow-up</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 7. BACKEND DEVELOPMENT: High-Throughput Server Infrastructure
  'backend-development-guide.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#0a0c16', '#f59e0b', '#3b82f6')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#451a03" stroke="#f59e0b" stroke-width="1.2"/>
    <text x="96" y="77" fill="#fde68a" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">SERVER INFRASTRUCTURE</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Backend Development Architecture</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">High-Concurrency REST APIs, PostgreSQL Schemas &amp; Zero-Downtime Microservices</text>

    <!-- Architecture Visual -->
    <g transform="translate(80, 215)">
      <!-- Left: Load Balancer -->
      <g transform="translate(0, 45)">
        <rect width="200" height="210" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="100" y="45" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle">Cloudflare / ALB</text>
        <text x="100" y="70" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">LOAD BALANCER</text>
        <rect x="25" y="95" width="150" height="32" rx="6" fill="#1e293b"/>
        <text x="100" y="116" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">SSL Termination</text>
        <rect x="25" y="135" width="150" height="32" rx="6" fill="#1e293b"/>
        <text x="100" y="156" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">DDoS Mitigation</text>
        <text x="100" y="195" fill="#34d399" font-family="monospace" font-size="11" text-anchor="middle">100k req / sec</text>
      </g>

      <!-- Connecting Lines to Workers -->
      <path d="M 200 110 L 260 70" stroke="#f59e0b" stroke-width="2"/>
      <path d="M 200 150 L 260 150" stroke="#f59e0b" stroke-width="2"/>
      <path d="M 200 190 L 260 230" stroke="#f59e0b" stroke-width="2"/>

      <!-- Center: 3 Stateless App Workers -->
      <g transform="translate(260, 20)">
        <rect width="360" height="75" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <text x="25" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="700">🚀 App Worker Node 01 (Docker)</text>
        <text x="25" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Node.js Express • Stateless API Handler</text>

        <rect y="90" width="360" height="75" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <text x="25" y="125" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="700">🚀 App Worker Node 02 (Docker)</text>
        <text x="25" y="148" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Python FastAPI • Async Job Processor</text>

        <rect y="180" width="360" height="75" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <text x="25" y="215" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="700">🚀 App Worker Node 03 (Docker)</text>
        <text x="25" y="238" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Auto-scaled Cloud Instance</text>
      </g>

      <!-- Connecting Lines to Data -->
      <path d="M 620 100 L 680 100" stroke="#3b82f6" stroke-width="2"/>
      <path d="M 620 200 L 680 200" stroke="#10b981" stroke-width="2"/>

      <!-- Right: Database Tier -->
      <g transform="translate(680, 20)">
        <!-- Redis Cache -->
        <rect width="360" height="115" rx="14" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
        <text x="25" y="38" fill="#f87171" font-family="system-ui, sans-serif" font-size="15" font-weight="700">⚡ In-Memory Cache (Redis)</text>
        <text x="25" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="800">Sub-Millisecond Query Response</text>
        <text x="25" y="92" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Sessions, Rate Limiting &amp; Real-time Caching</text>

        <!-- PostgreSQL Database -->
        <g transform="translate(0, 135)">
          <rect width="360" height="120" rx="14" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="25" y="38" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="15" font-weight="700">🗄️ Primary PostgreSQL + Replica</text>
          <text x="25" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="800">ACID Relational Compliance</text>
          <text x="25" y="92" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Automatic Failover • Automated Hourly Backups</text>
        </g>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 8. FRONTEND DEVELOPMENT: Multi-Device Showcase & 100 Speed Score
  'frontend-development-guide.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#070e17', '#06b6d4', '#10b981')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#083344" stroke="#06b6d4" stroke-width="1.2"/>
    <text x="96" y="77" fill="#67e8f9" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">CLIENT-SIDE ENGINEERING</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Frontend Development Best Practices</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">Building Blazing-Fast, Accessible &amp; High-Converting Web Interfaces</text>

    <!-- Visual Showcase: Desktop + Mobile Frames -->
    <g transform="translate(80, 215)">
      <!-- Desktop Frame -->
      <rect width="680" height="310" rx="16" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5"/>
      <circle cx="25" cy="22" r="5" fill="#ef4444"/>
      <circle cx="40" cy="22" r="5" fill="#eab308"/>
      <circle cx="55" cy="22" r="5" fill="#22c55e"/>
      <rect x="80" y="12" width="280" height="20" rx="6" fill="#1e293b"/>
      <text x="95" y="26" fill="#94a3b8" font-family="monospace" font-size="11">https://www.rankvra.com</text>

      <!-- Desktop Mock UI -->
      <g transform="translate(25, 50)">
        <rect width="630" height="95" rx="10" fill="#1e293b"/>
        <text x="25" y="38" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="800">Ultra-Fast Server-Rendered UI</text>
        <text x="25" y="65" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">Zero layout shifts, instant touch interaction &amp; dynamic client state.</text>
        <rect x="520" y="25" width="85" height="32" rx="6" fill="#06b6d4"/>
        <text x="562" y="46" fill="#000000" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Explore</text>

        <!-- 3 Feature Chips -->
        <g transform="translate(0, 115)">
          <rect width="195" height="120" rx="10" fill="#1e293b" stroke="#334155"/>
          <text x="18" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="700">⚡ Next.js 15 &amp; SSR</text>
          <text x="18" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Server Component</text>
          <text x="18" y="78" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Streaming Hydration</text>

          <rect x="215" y="0" width="195" height="120" rx="10" fill="#1e293b" stroke="#334155"/>
          <text x="233" y="32" fill="#34d399" font-family="system-ui, sans-serif" font-size="13" font-weight="700">📱 Touch &amp; Mobile</text>
          <text x="233" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">100% Fluid Breakpoints</text>
          <text x="233" y="78" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Zero CLS (0.000)</text>

          <rect x="430" y="0" width="200" height="120" rx="10" fill="#1e293b" stroke="#334155"/>
          <text x="448" y="32" fill="#a78bfa" font-family="system-ui, sans-serif" font-size="13" font-weight="700">🛡️ TypeScript</text>
          <text x="448" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">100% Type-Safe UI</text>
          <text x="448" y="78" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Compile-Time Safety</text>
        </g>
      </g>

      <!-- Right: Mobile Device Frame -->
      <g transform="translate(720, 0)">
        <rect width="320" height="310" rx="24" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <rect x="110" y="12" width="100" height="14" rx="7" fill="#1e293b"/>
        <!-- Lighthouse 100 Badge inside Mobile -->
        <circle cx="160" cy="110" r="55" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
        <text x="160" y="118" fill="#34d399" font-family="system-ui, sans-serif" font-size="34" font-weight="900" text-anchor="middle">100</text>
        <text x="160" y="190" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="800" text-anchor="middle">LIGHTHOUSE SCORE</text>
        <text x="160" y="215" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">Performance • Accessibility</text>
        <text x="160" y="235" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">Best Practices • SEO</text>
        <rect x="60" y="258" width="200" height="30" rx="8" fill="#10b981" opacity="0.2"/>
        <text x="160" y="278" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Verified on Google PageSpeed</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 9. COST BREAKDOWN: Financial ROI & Scope Tier Matrix
  'custom-web-application-development-cost.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#090d16', '#10b981', '#f59e0b')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#064e3b" stroke="#10b981" stroke-width="1.2"/>
    <text x="96" y="77" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">INVESTMENT ARCHITECTURE</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Web Application Cost Breakdown</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">The Core Factors Determining Custom Software Investment &amp; ROI</text>

    <!-- 3 Tier Scope Columns -->
    <g transform="translate(80, 215)">
      <!-- Tier 1: MVP -->
      <g transform="translate(0, 0)">
        <rect width="325" height="310" rx="18" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <rect x="25" y="25" width="85" height="26" rx="6" fill="#1e293b"/>
        <text x="35" y="42" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">STAGE 1</text>
        <text x="25" y="85" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="800">MVP Prototype</text>
        <text x="25" y="110" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Speed to Market</text>
        <line x1="25" y1="130" x2="300" y2="130" stroke="#1e293b"/>
        <text x="25" y="160" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">✓ Core functional user workflows</text>
        <text x="25" y="190" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">✓ Single-role authentication (JWT)</text>
        <text x="25" y="220" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">✓ Basic PostgreSQL database</text>
        <text x="25" y="250" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">✓ 4 - 8 Weeks Delivery</text>
      </g>

      <!-- Tier 2: Scaled Business App (Featured) -->
      <g transform="translate(355, 0)">
        <rect width="330" height="310" rx="18" fill="#06221c" stroke="#10b981" stroke-width="2"/>
        <rect x="25" y="25" width="120" height="26" rx="6" fill="#065f46"/>
        <text x="35" y="42" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="11" font-weight="700">MOST POPULAR</text>
        <text x="25" y="85" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="800">Commercial Platform</text>
        <text x="25" y="110" fill="#34d399" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Enterprise Operations</text>
        <line x1="25" y1="130" x2="305" y2="130" stroke="#065f46"/>
        <text x="25" y="160" fill="#d1fae5" font-family="system-ui, sans-serif" font-size="13">✓ Multi-role RBAC permissions</text>
        <text x="25" y="190" fill="#d1fae5" font-family="system-ui, sans-serif" font-size="13">✓ Stripe / Razorpay Gateways</text>
        <text x="25" y="220" fill="#d1fae5" font-family="system-ui, sans-serif" font-size="13">✓ Third-Party API integrations</text>
        <text x="25" y="250" fill="#d1fae5" font-family="system-ui, sans-serif" font-size="13">✓ Redis In-Memory Caching</text>
        <rect x="25" y="270" width="280" height="26" rx="6" fill="#10b981" opacity="0.2"/>
        <text x="165" y="287" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">ZERO ONGOING SEAT FEES</text>
      </g>

      <!-- Tier 3: Enterprise Scaled -->
      <g transform="translate(715, 0)">
        <rect width="325" height="310" rx="18" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <rect x="25" y="25" width="110" height="26" rx="6" fill="#1e293b"/>
        <text x="35" y="42" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="11" font-weight="700">SCALE &amp; SLA</text>
        <text x="25" y="85" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="800">Enterprise Suite</text>
        <text x="25" y="110" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="13" font-weight="600">High-Throughput Infra</text>
        <line x1="25" y1="130" x2="300" y2="130" stroke="#1e293b"/>
        <text x="25" y="160" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">✓ Multi-tenant architecture</text>
        <text x="25" y="190" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">✓ SOC2 / OWASP Hardening</text>
        <text x="25" y="220" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">✓ Auto-scaling Cloud Cluster</text>
        <text x="25" y="250" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">✓ 99.9% Uptime Guarantee</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 10. WEBSITE VS WEB APPLICATION: Side-by-side Architectural Comparison
  'website-vs-web-application.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#090d16', '#6366f1', '#ec4899')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.2"/>
    <text x="96" y="77" fill="#a5b4fc" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">ARCHITECTURAL TAXONOMY</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Website vs Web Application</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">Understanding the Core Differences in User Authentication, Data &amp; Purpose</text>

    <!-- Side-by-Side Comparison Panels -->
    <g transform="translate(80, 215)">
      <!-- Left: Marketing Website -->
      <g transform="translate(0, 0)">
        <rect width="495" height="310" rx="18" fill="#0f172a" stroke="#3b82f6" stroke-width="2"/>
        <rect x="25" y="25" width="135" height="28" rx="8" fill="#1e3a8a" opacity="0.3"/>
        <text x="35" y="44" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="12" font-weight="700">📄 PUBLIC WEBSITE</text>
        <text x="25" y="90" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800">Content &amp; Lead Funnel</text>
        <line x1="25" y1="110" x2="470" y2="110" stroke="#1e293b"/>
        <text x="25" y="145" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="14">🎯 Primary Goal: Organic Search &amp; Discovery</text>
        <text x="25" y="180" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Informational content, case studies, blogs</text>
        <text x="25" y="205" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Globally cached on CDN edge servers (Vercel/Cloudflare)</text>
        <text x="25" y="230" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Read-heavy traffic with high search crawlability</text>
        <rect x="25" y="260" width="170" height="30" rx="6" fill="#3b82f6" opacity="0.2"/>
        <text x="35" y="280" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">OPTIMIZED FOR SEO</text>
      </g>

      <!-- Right: Web Application -->
      <g transform="translate(545, 0)">
        <rect width="495" height="310" rx="18" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
        <rect x="25" y="25" width="145" height="28" rx="8" fill="#500724" opacity="0.3"/>
        <text x="35" y="44" fill="#fbcfe8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">💻 WEB APPLICATION</text>
        <text x="25" y="90" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800">Interactive Business Portal</text>
        <line x1="25" y1="110" x2="470" y2="110" stroke="#1e293b"/>
        <text x="25" y="145" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="14">⚙️ Primary Goal: Task Execution &amp; Operations</text>
        <text x="25" y="180" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• User accounts, granular access controls &amp; session tokens</text>
        <text x="25" y="205" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Dynamic CRUD database mutations &amp; background tasks</text>
        <text x="25" y="230" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Integrates with CRMs, payment gateways &amp; ERP systems</text>
        <rect x="25" y="260" width="190" height="30" rx="6" fill="#ec4899" opacity="0.2"/>
        <text x="35" y="280" fill="#f472b6" font-family="system-ui, sans-serif" font-size="12" font-weight="700">OPTIMIZED FOR BUSINESS</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 11. SCALABLE WEB APP: Global High-Traffic Cloud Architecture
  'scalable-web-application-development.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#090d16', '#8b5cf6', '#06b6d4')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#2e1065" stroke="#8b5cf6" stroke-width="1.2"/>
    <text x="96" y="77" fill="#c4b5fd" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">HIGH-TRAFFIC RESILIENCE</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Scalable Web App Architecture</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">Horizontal Auto-Scaling, Distributed Caching &amp; Database Read Replicas</text>

    <!-- Global Scale Topology -->
    <g transform="translate(80, 215)">
      <!-- Step 1: Users -->
      <g transform="translate(0, 30)">
        <rect width="180" height="240" rx="14" fill="#0f172a" stroke="#334155"/>
        <text x="90" y="45" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle">Global Traffic</text>
        <text x="90" y="70" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">USA • UK • IN</text>
        <circle cx="90" cy="130" r="35" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="90" y="138" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="24" text-anchor="middle">🌍</text>
        <text x="90" y="195" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Millions of Requests</text>
        <text x="90" y="215" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Sub-50ms DNS</text>
      </g>

      <!-- Arrow -->
      <path d="M 180 150 L 225 150" stroke="#8b5cf6" stroke-width="2"/>

      <!-- Step 2: Edge CDN -->
      <g transform="translate(230, 30)">
        <rect width="210" height="240" rx="14" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
        <text x="105" y="45" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle">Edge Anycast CDN</text>
        <text x="105" y="70" fill="#a78bfa" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">300+ Edge Nodes</text>
        <rect x="20" y="95" width="170" height="32" rx="6" fill="#1e1b4b"/>
        <text x="105" y="116" fill="#c4b5fd" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Static Asset Cache</text>
        <rect x="20" y="135" width="170" height="32" rx="6" fill="#1e1b4b"/>
        <text x="105" y="156" fill="#c4b5fd" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">DDoS Absorption</text>
        <rect x="20" y="175" width="170" height="32" rx="6" fill="#1e1b4b"/>
        <text x="105" y="196" fill="#c4b5fd" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">SSL Handshake 15ms</text>
      </g>

      <!-- Arrow -->
      <path d="M 440 150 L 485 150" stroke="#8b5cf6" stroke-width="2"/>

      <!-- Step 3: Horizontal Container Pool -->
      <g transform="translate(490, 0)">
        <rect width="270" height="300" rx="16" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5"/>
        <text x="135" y="38" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle">Stateless Server Pods</text>
        <text x="135" y="60" fill="#67e8f9" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">KUBERNETES AUTO-SCALE</text>

        <!-- Pod 1 -->
        <rect x="20" y="80" width="230" height="55" rx="8" fill="#083344" stroke="#0e7490"/>
        <text x="35" y="105" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700">Container Node 01</text>
        <text x="35" y="123" fill="#67e8f9" font-family="monospace" font-size="10">CPU: 24% • Mem: 320MB</text>

        <!-- Pod 2 -->
        <rect x="20" y="145" width="230" height="55" rx="8" fill="#083344" stroke="#0e7490"/>
        <text x="35" y="170" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700">Container Node 02</text>
        <text x="35" y="188" fill="#67e8f9" font-family="monospace" font-size="10">CPU: 28% • Mem: 340MB</text>

        <!-- Pod 3 -->
        <rect x="20" y="210" width="230" height="55" rx="8" fill="#083344" stroke="#0e7490"/>
        <text x="35" y="235" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700">Auto-Spun Node 03</text>
        <text x="35" y="253" fill="#34d399" font-family="monospace" font-size="10">Traffic Spike Detected</text>
      </g>

      <!-- Arrow -->
      <path d="M 760 150 L 805 150" stroke="#10b981" stroke-width="2"/>

      <!-- Step 4: Distributed Database -->
      <g transform="translate(810, 30)">
        <rect width="230" height="240" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <text x="115" y="45" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle">Data Layer Split</text>
        <text x="115" y="70" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">READ / WRITE SPLIT</text>

        <rect x="20" y="90" width="190" height="60" rx="8" fill="#064e3b" stroke="#059669"/>
        <text x="35" y="115" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Primary Database</text>
        <text x="35" y="135" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="11">Dedicated Write Node</text>

        <rect x="20" y="160" width="190" height="60" rx="8" fill="#064e3b" stroke="#059669"/>
        <text x="35" y="185" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Read Replicas (x3)</text>
        <text x="35" y="205" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="11">Offloading Read Queries</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 12. PERFORMANCE OPTIMIZATION: Core Web Vitals Dials & Gauges
  'website-performance-optimization.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#070f14', '#10b981', '#3b82f6')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#064e3b" stroke="#10b981" stroke-width="1.2"/>
    <text x="96" y="77" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">SUB-SECOND WEB SPEED</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Website Performance Optimization</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">Transforming Core Web Vitals into High Search Rankings &amp; Conversions</text>

    <!-- 3 Speed Dial Gauges -->
    <g transform="translate(80, 215)">
      <!-- LCP Gauge -->
      <g transform="translate(0, 0)">
        <rect width="325" height="310" rx="18" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <circle cx="162" cy="115" r="65" stroke="#1e293b" stroke-width="12" fill="none"/>
        <path d="M 116 161 A 65 65 0 1 1 208 161" stroke="#10b981" stroke-width="12" stroke-linecap="round" fill="none"/>
        <text x="162" y="115" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="900" text-anchor="middle">0.8s</text>
        <text x="162" y="135" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">FAST (GOOD)</text>
        <text x="162" y="210" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="800" text-anchor="middle">LCP (Largest Content)</text>
        <text x="162" y="238" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13" text-anchor="middle">Target: &lt; 2.5s • RankVRA: 0.8s</text>
        <text x="162" y="265" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">Server Components &amp; Edge CDN</text>
      </g>

      <!-- INP Gauge -->
      <g transform="translate(355, 0)">
        <rect width="330" height="310" rx="18" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/>
        <circle cx="165" cy="115" r="65" stroke="#1e293b" stroke-width="12" fill="none"/>
        <path d="M 119 161 A 65 65 0 1 1 211 161" stroke="#06b6d4" stroke-width="12" stroke-linecap="round" fill="none"/>
        <text x="165" y="115" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="900" text-anchor="middle">32ms</text>
        <text x="165" y="135" fill="#67e8f9" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">INSTANT</text>
        <text x="165" y="210" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="800" text-anchor="middle">INP (Touch Interaction)</text>
        <text x="165" y="238" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13" text-anchor="middle">Target: &lt; 200ms • RankVRA: 32ms</text>
        <text x="165" y="265" fill="#67e8f9" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">Zero Main-Thread Blocking</text>
      </g>

      <!-- CLS Gauge -->
      <g transform="translate(715, 0)">
        <rect width="325" height="310" rx="18" fill="#0f172a" stroke="#3b82f6" stroke-width="2"/>
        <circle cx="162" cy="115" r="65" stroke="#1e293b" stroke-width="12" fill="none"/>
        <path d="M 116 161 A 65 65 0 1 1 208 161" stroke="#3b82f6" stroke-width="12" stroke-linecap="round" fill="none"/>
        <text x="162" y="115" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="900" text-anchor="middle">0.000</text>
        <text x="162" y="135" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">PERFECT ZERO</text>
        <text x="162" y="210" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="800" text-anchor="middle">CLS (Layout Shift)</text>
        <text x="162" y="238" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13" text-anchor="middle">Target: &lt; 0.1 • RankVRA: 0.000</text>
        <text x="162" y="265" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">Pre-Allocated Aspect Ratios</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 13. WEB SECURITY: Defense-in-Depth Shield Vault
  'secure-web-application-development.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#0e0709', '#ef4444', '#f59e0b')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#450a0a" stroke="#ef4444" stroke-width="1.2"/>
    <text x="96" y="77" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">DEFENSE IN DEPTH</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Secure Web Application Development</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">OWASP Top 10 Hardening, Tokenized Auth &amp; Database Encryption</text>

    <!-- Concentric Shield Security Layout -->
    <g transform="translate(80, 215)">
      <!-- Left: Massive Shield Graphic -->
      <g transform="translate(0, 0)">
        <rect width="450" height="310" rx="18" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
        <!-- Shield Path -->
        <path d="M 225 45 L 340 90 L 340 185 C 340 240 225 275 225 275 C 225 275 110 240 110 185 L 110 90 Z" fill="#450a0a" stroke="#ef4444" stroke-width="3"/>
        <circle cx="225" cy="155" r="28" fill="#ef4444" opacity="0.3"/>
        <text x="225" y="165" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" text-anchor="middle">🔒</text>
        <text x="225" y="225" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle">OWASP VERIFIED</text>
      </g>

      <!-- Right: Security Layers -->
      <g transform="translate(480, 0)">
        <!-- Layer 1 -->
        <rect width="560" height="70" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <rect x="20" y="20" width="32" height="32" rx="8" fill="#450a0a"/>
        <text x="36" y="42" fill="#f87171" font-family="system-ui, sans-serif" font-size="16" text-anchor="middle">🛡️</text>
        <text x="70" y="36" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="700">Edge WAF &amp; Rate Limiting</text>
        <text x="70" y="55" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Cloudflare DDoS Shield &amp; Redis Token Bucket Throttling</text>

        <!-- Layer 2 -->
        <g transform="translate(0, 80)">
          <rect width="560" height="70" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
          <rect x="20" y="20" width="32" height="32" rx="8" fill="#431407"/>
          <text x="36" y="42" fill="#fb923c" font-family="system-ui, sans-serif" font-size="16" text-anchor="middle">🔑</text>
          <text x="70" y="36" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="700">Cryptographic Auth &amp; MFA</text>
          <text x="70" y="55" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">HttpOnly Secure JWT Cookies • WebAuthn Hardware Keys</text>
        </g>

        <!-- Layer 3 -->
        <g transform="translate(0, 160)">
          <rect width="560" height="70" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
          <rect x="20" y="20" width="32" height="32" rx="8" fill="#1e1b4b"/>
          <text x="36" y="42" fill="#a78bfa" font-family="system-ui, sans-serif" font-size="16" text-anchor="middle">⚡</text>
          <text x="70" y="36" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="700">Parameterized SQL &amp; Sanitization</text>
          <text x="70" y="55" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Zero Raw String Interpolation • Automated XSS &amp; CSRF Defense</text>
        </g>

        <!-- Layer 4 -->
        <g transform="translate(0, 240)">
          <rect width="560" height="70" rx="12" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
          <rect x="20" y="20" width="32" height="32" rx="8" fill="#064e3b"/>
          <text x="36" y="42" fill="#34d399" font-family="system-ui, sans-serif" font-size="16" text-anchor="middle">🗄️</text>
          <text x="70" y="36" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="700">AES-256 Database Encryption at Rest</text>
          <text x="70" y="55" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="12">Automated hourly snapshot backups &amp; point-in-time recovery</text>
        </g>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 14. PAYMENT GATEWAYS: Credit Card & Webhook Transaction Flow
  'payment-gateway-integration.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#060e14', '#06b6d4', '#10b981')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#083344" stroke="#06b6d4" stroke-width="1.2"/>
    <text x="96" y="77" fill="#67e8f9" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">PAYMENT INFRASTRUCTURE</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Payment Gateway Integration</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">Stripe, Razorpay &amp; Cryptographic Webhook Checkout Pipelines</text>

    <!-- Visual: Credit Card Mockup + Verified Webhook Pipeline -->
    <g transform="translate(80, 215)">
      <!-- Left: Credit Card Tokenization Mockup -->
      <g transform="translate(0, 25)">
        <rect width="450" height="260" rx="20" fill="url(#cardGrad)" stroke="#06b6d4" stroke-width="2"/>
        <!-- Card Chip -->
        <rect x="40" y="40" width="55" height="42" rx="8" fill="#eab308" opacity="0.8"/>
        <!-- Contactless icon -->
        <text x="40" y="125" fill="#ffffff" font-family="monospace" font-size="22" letter-spacing="4">•••• •••• •••• 4242</text>
        <text x="40" y="175" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">CARDHOLDER</text>
        <text x="40" y="198" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="700">ENTERPRISE CLIENT</text>
        <text x="250" y="175" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">VALID THRU</text>
        <text x="250" y="198" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="700">12/28</text>
        <!-- Logo -->
        <rect x="350" y="170" width="65" height="38" rx="6" fill="#1e293b"/>
        <text x="382" y="194" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="14" font-weight="900" text-anchor="middle">VISA</text>
        <!-- Security text -->
        <text x="40" y="240" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="600">✓ Tokenized: Zero card numbers touch your server</text>
      </g>

      <!-- Right: Webhook Verification Flow -->
      <g transform="translate(490, 0)">
        <rect width="550" height="310" rx="18" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <text x="35" y="42" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="800">Cryptographic Webhook Handshake</text>

        <!-- Pipeline Step 1 -->
        <rect x="30" y="65" width="490" height="65" rx="10" fill="#1e293b"/>
        <text x="48" y="93" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="14" font-weight="700">1. Client Checkout Session</text>
        <text x="48" y="114" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Encrypted token sent directly to Stripe / Razorpay API vault</text>

        <!-- Pipeline Step 2 -->
        <rect x="30" y="145" width="490" height="65" rx="10" fill="#1e293b"/>
        <text x="48" y="173" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="14" font-weight="700">2. HMAC-SHA256 Signature Verification</text>
        <text x="48" y="194" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Server verifies cryptographic signature header before fulfilling order</text>

        <!-- Pipeline Step 3 -->
        <rect x="30" y="225" width="490" height="65" rx="10" fill="#064e3b" stroke="#059669"/>
        <text x="48" y="253" fill="#34d399" font-family="system-ui, sans-serif" font-size="14" font-weight="700">3. Idempotent Order Completion</text>
        <text x="48" y="274" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="12">Zero duplicate charge risk • Automatic PDF Invoice generation</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 15. SAAS DEVELOPMENT: Multi-Tenant Architecture
  'saas-development-guide.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#090d18', '#6366f1', '#a855f7')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.2"/>
    <text x="96" y="77" fill="#c4b5fd" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">SUBSCRIPTION SOFTWARE</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">SaaS Application Development</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">Multi-Tenant Isolation, Automated Billing Cycles &amp; Feature Metering</text>

    <!-- Multi-Tenant Organization Layout -->
    <g transform="translate(80, 215)">
      <!-- Left: Tenant Switcher -->
      <g transform="translate(0, 0)">
        <rect width="320" height="310" rx="18" fill="#0f172a" stroke="#6366f1" stroke-width="1.5"/>
        <text x="25" y="42" fill="#a78bfa" font-family="system-ui, sans-serif" font-size="13" font-weight="700">MULTI-TENANT ORG SWITCHER</text>
        <text x="25" y="80" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="800">Isolated Workspaces</text>

        <!-- Org 1 -->
        <rect x="20" y="105" width="280" height="52" rx="10" fill="#1e1b4b" stroke="#6366f1"/>
        <circle cx="45" cy="131" r="14" fill="#6366f1"/>
        <text x="45" y="137" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle">A</text>
        <text x="70" y="128" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Acme Enterprise</text>
        <text x="70" y="145" fill="#a78bfa" font-family="system-ui, sans-serif" font-size="11">Enterprise Plan (50 Seats)</text>

        <!-- Org 2 -->
        <rect x="20" y="168" width="280" height="52" rx="10" fill="#1e293b"/>
        <circle cx="45" cy="194" r="14" fill="#334155"/>
        <text x="45" y="200" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle">T</text>
        <text x="70" y="191" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">TechLogistics Inc</text>
        <text x="70" y="208" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Pro Plan (10 Seats)</text>

        <!-- Org 3 -->
        <rect x="20" y="231" width="280" height="52" rx="10" fill="#1e293b"/>
        <circle cx="45" cy="257" r="14" fill="#334155"/>
        <text x="45" y="263" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle">G</text>
        <text x="70" y="254" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Global Medical</text>
        <text x="70" y="271" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Custom Enterprise SLA</text>
      </g>

      <!-- Right: Subscription & Metering Dashboard -->
      <g transform="translate(350, 0)">
        <rect width="690" height="310" rx="18" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <text x="35" y="42" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="800">Recurring Subscription Telemetry</text>

        <!-- Top Metrics Cards -->
        <g transform="translate(30, 60)">
          <rect width="200" height="75" rx="10" fill="#1e293b"/>
          <text x="18" y="28" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">MONTHLY RECURRING (MRR)</text>
          <text x="18" y="58" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800">$64,800</text>

          <rect x="215" y="0" width="200" height="75" rx="10" fill="#1e293b"/>
          <text x="233" y="28" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">CHURN RATE</text>
          <text x="233" y="58" fill="#10b981" font-family="system-ui, sans-serif" font-size="24" font-weight="800">0.8%</text>

          <rect x="430" y="0" width="200" height="75" rx="10" fill="#1e293b"/>
          <text x="448" y="28" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">API CALLS / MO</text>
          <text x="448" y="58" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="24" font-weight="800">14.2M</text>
        </g>

        <!-- Metering Progress -->
        <g transform="translate(30, 160)">
          <text x="0" y="20" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">PostgreSQL Row-Level Security (RLS)</text>
          <text x="0" y="42" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Tenant isolation enforced directly in database engine: WHERE tenant_id = current_setting('app.tenant_id')</text>
          <!-- Security Badges -->
          <rect y="65" width="290" height="38" rx="8" fill="#064e3b" stroke="#059669"/>
          <text x="18" y="89" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="700">✓ 100% Zero Cross-Tenant Data Leaks</text>
          <rect x="310" y="65" width="315" height="38" rx="8" fill="#1e1b4b" stroke="#4338ca"/>
          <text x="328" y="89" fill="#a5b4fc" font-family="system-ui, sans-serif" font-size="12" font-weight="700">✓ Automated Stripe Billing Invoices</text>
        </g>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 16. ADMIN DASHBOARDS: Real-Time Executive Operations Center
  'admin-dashboard-development.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#070e17', '#10b981', '#3b82f6')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#064e3b" stroke="#10b981" stroke-width="1.2"/>
    <text x="96" y="77" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">OPERATIONAL CONTROL</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Custom Admin Dashboard Development</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">Executive KPI Visualizations, Optimistic CRUD &amp; Immutable Audit Logs</text>

    <!-- Sleek Dashboard Interface -->
    <g transform="translate(80, 215)">
      <rect width="1040" height="310" rx="18" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
      <!-- Top Stats Row -->
      <g transform="translate(25, 25)">
        <rect width="235" height="85" rx="12" fill="#1e293b" stroke="#334155"/>
        <text x="20" y="32" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">TOTAL GROSS VOLUME</text>
        <text x="20" y="66" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="900">$248,500</text>
        <text x="165" y="64" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="700">+38.4%</text>

        <rect x="250" y="0" width="235" height="85" rx="12" fill="#1e293b" stroke="#334155"/>
        <text x="270" y="32" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">ACTIVE CONTRACTS</text>
        <text x="270" y="66" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="900">1,429</text>
        <text x="415" y="64" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">+12%</text>

        <rect x="500" y="0" width="235" height="85" rx="12" fill="#1e293b" stroke="#334155"/>
        <text x="520" y="32" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">SYSTEM SLA UPTIME</text>
        <text x="520" y="66" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="900">99.98%</text>
        <text x="665" y="64" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Healthy</text>

        <rect x="750" y="0" width="240" height="85" rx="12" fill="#1e293b" stroke="#334155"/>
        <text x="770" y="32" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">AVG TASK LATENCY</text>
        <text x="770" y="66" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="900">18ms</text>
        <text x="915" y="64" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Edge</text>
      </g>

      <!-- Bottom Interactive Area Chart & Audit Table -->
      <g transform="translate(25, 130)">
        <rect width="990" height="155" rx="14" fill="#1e293b"/>
        <text x="25" y="32" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Revenue Growth &amp; Transaction Velocity (Live Stream)</text>
        <!-- Mountain Area Chart -->
        <path d="M 25 125 L 140 105 L 260 115 L 380 75 L 500 85 L 620 45 L 740 55 L 860 25 L 965 30 L 965 140 L 25 140 Z" fill="#10b981" opacity="0.18"/>
        <path d="M 25 125 L 140 105 L 260 115 L 380 75 L 500 85 L 620 45 L 740 55 L 860 25 L 965 30" stroke="#10b981" stroke-width="2.5" fill="none"/>
        <circle cx="860" cy="25" r="5" fill="#34d399"/>
        <text x="872" y="28" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Peak Month</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 17. CUSTOM CRM: Visual Kanban Sales Pipeline Workflow
  'custom-crm-development.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#0a0d16', '#f59e0b', '#6366f1')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#451a03" stroke="#f59e0b" stroke-width="1.2"/>
    <text x="96" y="77" fill="#fde68a" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">SALES PIPELINE AUTOMATION</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Custom CRM Development</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">Tailored Sales Funnels, Zero Per-Seat Licensing &amp; Deep Internal Tool Sync</text>

    <!-- Visual Kanban Board (4 Columns) -->
    <g transform="translate(80, 215)">
      <!-- Col 1: Lead Capture -->
      <g transform="translate(0, 0)">
        <rect width="245" height="310" rx="14" fill="#0f172a" stroke="#334155"/>
        <rect x="15" y="15" width="215" height="30" rx="6" fill="#1e293b"/>
        <text x="25" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="700">INBOUND LEADS (14)</text>
        <!-- Card 1 -->
        <rect x="15" y="55" width="215" height="110" rx="10" fill="#1e293b" stroke="#334155"/>
        <text x="28" y="80" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Apex Capital Group</text>
        <text x="28" y="102" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="800">$64,000</text>
        <text x="28" y="125" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">WhatsApp Bot Qualified</text>
        <text x="28" y="145" fill="#34d399" font-family="system-ui, sans-serif" font-size="10" font-weight="600">⚡ Auto-Assigned</text>
      </g>

      <!-- Col 2: Discovery -->
      <g transform="translate(265, 0)">
        <rect width="245" height="310" rx="14" fill="#0f172a" stroke="#334155"/>
        <rect x="15" y="15" width="215" height="30" rx="6" fill="#1e293b"/>
        <text x="25" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="700">DISCOVERY &amp; DEMO (8)</text>
        <!-- Card 2 -->
        <rect x="15" y="55" width="215" height="110" rx="10" fill="#1e293b" stroke="#334155"/>
        <text x="28" y="80" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Sterling Wholesale</text>
        <text x="28" y="102" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="800">$120,000</text>
        <text x="28" y="125" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Scope Architecture Audit</text>
        <text x="28" y="145" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="10" font-weight="600">📅 Demo Scheduled</text>
      </g>

      <!-- Col 3: Proposal -->
      <g transform="translate(530, 0)">
        <rect width="245" height="310" rx="14" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="15" y="15" width="215" height="30" rx="6" fill="#451a03"/>
        <text x="25" y="35" fill="#fde68a" font-family="system-ui, sans-serif" font-size="12" font-weight="700">PROPOSAL SENT (5)</text>
        <!-- Card 3 -->
        <rect x="15" y="55" width="215" height="110" rx="10" fill="#1e293b" stroke="#f59e0b"/>
        <text x="28" y="80" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Nordic Shipping Logistics</text>
        <text x="28" y="102" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="13" font-weight="800">$85,000</text>
        <text x="28" y="125" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Custom CRM Contract</text>
        <text x="28" y="145" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="10" font-weight="600">⏳ Awaiting e-Signature</text>
      </g>

      <!-- Col 4: Deal Won -->
      <g transform="translate(795, 0)">
        <rect width="245" height="310" rx="14" fill="#06221c" stroke="#10b981" stroke-width="2"/>
        <rect x="15" y="15" width="215" height="30" rx="6" fill="#065f46"/>
        <text x="25" y="35" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="12" font-weight="700">DEAL WON (🎉 24)</text>
        <!-- Card 4 -->
        <rect x="15" y="55" width="215" height="110" rx="10" fill="#0f172a" stroke="#10b981"/>
        <text x="28" y="80" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Capital &amp; Co Insurance</text>
        <text x="28" y="102" fill="#34d399" font-family="system-ui, sans-serif" font-size="13" font-weight="800">$185,000</text>
        <text x="28" y="125" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Production Deployment</text>
        <text x="28" y="145" fill="#34d399" font-family="system-ui, sans-serif" font-size="10" font-weight="700">✓ Stripe Paid • Active</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 18. ANDROID APP VS WEB APP: Dual Device Mockup
  'android-app-vs-web-application.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#090d16', '#06b6d4', '#ec4899')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#083344" stroke="#06b6d4" stroke-width="1.2"/>
    <text x="96" y="77" fill="#67e8f9" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">PLATFORM DECISION FRAMEWORK</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Android App vs Web Application</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">Hardware Integration vs Universal Browser Reach: Which Fits Your Business?</text>

    <!-- Side-by-Side Devices Layout -->
    <g transform="translate(80, 215)">
      <!-- Left: Android Smartphone Mockup -->
      <g transform="translate(0, 0)">
        <rect width="495" height="310" rx="18" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/>
        <rect x="25" y="25" width="165" height="28" rx="8" fill="#083344"/>
        <text x="35" y="44" fill="#67e8f9" font-family="system-ui, sans-serif" font-size="12" font-weight="700">📱 NATIVE ANDROID APP</text>
        <text x="25" y="90" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="800">Hardware &amp; Push Triggers</text>
        <line x1="25" y1="110" x2="470" y2="110" stroke="#1e293b"/>
        <text x="25" y="145" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="14">Best suited when your product requires:</text>
        <text x="25" y="180" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Background GPS &amp; Bluetooth IoT beacon tracking</text>
        <text x="25" y="205" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Deep camera, biometric face/fingerprint authentication</text>
        <text x="25" y="230" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Offline local SQLite database synchronization</text>
        <rect x="25" y="260" width="180" height="30" rx="6" fill="#06b6d4" opacity="0.2"/>
        <text x="35" y="280" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">PLAY STORE DISTRIBUTION</text>
      </g>

      <!-- Right: Responsive Web App / PWA -->
      <g transform="translate(545, 0)">
        <rect width="495" height="310" rx="18" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
        <rect x="25" y="25" width="160" height="28" rx="8" fill="#500724"/>
        <text x="35" y="44" fill="#fbcfe8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">🌐 CLOUD WEB APP / PWA</text>
        <text x="25" y="90" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="800">Zero-Friction Universal Reach</text>
        <line x1="25" y1="110" x2="470" y2="110" stroke="#1e293b"/>
        <text x="25" y="145" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="14">Best suited when your business demands:</text>
        <text x="25" y="180" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Instant access via URL with ZERO app store download barriers</text>
        <text x="25" y="205" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• 0% App store commissions on Stripe / Razorpay transactions</text>
        <text x="25" y="230" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Instant code deployments with no 48-hour app reviews</text>
        <rect x="25" y="260" width="170" height="30" rx="6" fill="#ec4899" opacity="0.2"/>
        <text x="35" y="280" fill="#f472b6" font-family="system-ui, sans-serif" font-size="12" font-weight="700">MAXIMUM CONVERSION</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 19. THIRD-PARTY API AUTOMATION: Workflow Engine Diagram
  'third-party-api-integration.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#090d16', '#8b5cf6', '#10b981')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#2e1065" stroke="#8b5cf6" stroke-width="1.2"/>
    <text x="96" y="77" fill="#c4b5fd" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">EVENT-DRIVEN ARCHITECTURE</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Third-Party API Automation</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">Connecting Disconnected Tools to Eliminate Redundant Manual Data Entry</text>

    <!-- Visual Automation Pipeline -->
    <g transform="translate(80, 225)">
      <!-- Trigger Card -->
      <g transform="translate(0, 50)">
        <rect width="250" height="180" rx="14" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
        <rect x="20" y="20" width="100" height="26" rx="6" fill="#1e1b4b"/>
        <text x="30" y="37" fill="#c4b5fd" font-family="system-ui, sans-serif" font-size="11" font-weight="700">1. TRIGGER</text>
        <text x="20" y="78" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="800">Form Submission</text>
        <text x="20" y="105" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Customer submits high-intent</text>
        <text x="20" y="125" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">enterprise inquiry form</text>
        <text x="20" y="155" fill="#38bdf8" font-family="monospace" font-size="11">HTTP POST /webhook</text>
      </g>

      <!-- Connecting Arrow 1 -->
      <path d="M 250 140 L 320 140" stroke="#8b5cf6" stroke-width="2"/>

      <!-- Middle Processing Node -->
      <g transform="translate(325, 20)">
        <rect width="320" height="240" rx="16" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
        <rect x="20" y="20" width="130" height="26" rx="6" fill="#2e1065"/>
        <text x="30" y="37" fill="#c4b5fd" font-family="system-ui, sans-serif" font-size="11" font-weight="700">2. AUTOMATION HUB</text>
        <text x="20" y="78" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="800">Data Transformation</text>

        <rect x="20" y="100" width="280" height="38" rx="6" fill="#0f172a"/>
        <text x="35" y="124" fill="#34d399" font-family="system-ui, sans-serif" font-size="12">✓ Verify HMAC Security Signature</text>

        <rect x="20" y="145" width="280" height="38" rx="6" fill="#0f172a"/>
        <text x="35" y="169" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12">✓ Normalize Phone &amp; Address Fields</text>

        <rect x="20" y="190" width="280" height="38" rx="6" fill="#0f172a"/>
        <text x="35" y="214" fill="#a78bfa" font-family="system-ui, sans-serif" font-size="12">✓ Exponential Backoff Auto-Retries</text>
      </g>

      <!-- Connecting Arrows to Multi-Destinations -->
      <path d="M 645 100 L 715 65" stroke="#10b981" stroke-width="2"/>
      <path d="M 645 140 L 715 140" stroke="#06b6d4" stroke-width="2"/>
      <path d="M 645 180 L 715 215" stroke="#f59e0b" stroke-width="2"/>

      <!-- Right 3 Parallel Action Nodes -->
      <g transform="translate(720, 0)">
        <rect width="320" height="75" rx="10" fill="#0f172a" stroke="#10b981"/>
        <text x="20" y="32" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">👥 HubSpot CRM Lead Created</text>
        <text x="20" y="54" fill="#34d399" font-family="system-ui, sans-serif" font-size="12">Instant pipeline assignment in 250ms</text>

        <rect y="105" width="320" height="75" rx="10" fill="#0f172a" stroke="#06b6d4"/>
        <text x="20" y="137" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">💬 WhatsApp &amp; Slack Alert</text>
        <text x="20" y="159" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12">Sales reps notified on mobile instantly</text>

        <rect y="210" width="320" height="75" rx="10" fill="#0f172a" stroke="#f59e0b"/>
        <text x="20" y="242" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">📦 ERP / Accounting Record</text>
        <text x="20" y="264" fill="#fde68a" font-family="system-ui, sans-serif" font-size="12">Customer billing profile pre-populated</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `,

  // 20. CHOOSING WEB DEV COMPANY: 5-Star Due-Diligence Audit Scorecard
  'how-to-choose-a-web-development-company.svg': () => `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${baseSvg('#090d19', '#6366f1', '#eab308')}
    <!-- Header -->
    <rect x="80" y="55" width="280" height="34" rx="17" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.2"/>
    <text x="96" y="77" fill="#c4b5fd" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">DUE DILIGENCE BLUEPRINT</text>
    <text x="80" y="135" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Choosing a Web Development Partner</text>
    <text x="80" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="18">The 10-Point Technical Due Diligence Framework for Founders &amp; Executives</text>

    <!-- Scorecard Grid (4 Distinct Verification Pillars) -->
    <g transform="translate(80, 215)">
      <!-- Pillar 1: Code & Architecture -->
      <g transform="translate(0, 0)">
        <rect width="245" height="310" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <circle cx="50" cy="50" r="22" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
        <text x="50" y="57" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">💻</text>
        <text x="25" y="110" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="800">1. Architecture</text>
        <text x="25" y="132" fill="#a78bfa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">NO BLOATED THEMES</text>
        <text x="25" y="165" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Modern Next.js / React</text>
        <text x="25" y="190" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Clean Git repositories</text>
        <text x="25" y="215" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• TypeScript Type Safety</text>
        <rect x="25" y="250" width="195" height="28" rx="6" fill="#10b981" opacity="0.2"/>
        <text x="122" y="268" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">✓ VERIFIED CODEBASE</text>
      </g>

      <!-- Pillar 2: 100% IP Ownership -->
      <g transform="translate(265, 0)">
        <rect width="245" height="310" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <circle cx="50" cy="50" r="22" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
        <text x="50" y="57" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">📜</text>
        <text x="25" y="110" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="800">2. IP Ownership</text>
        <text x="25" y="132" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="700">100% CLIENT CONTROL</text>
        <text x="25" y="165" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• You own all code &amp; IP</text>
        <text x="25" y="190" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Database keys in your name</text>
        <text x="25" y="215" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Zero vendor lock-in</text>
        <rect x="25" y="250" width="195" height="28" rx="6" fill="#10b981" opacity="0.2"/>
        <text x="122" y="268" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">✓ ASSET SOVEREIGNTY</text>
      </g>

      <!-- Pillar 3: Speed & Security -->
      <g transform="translate(530, 0)">
        <rect width="245" height="310" rx="16" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/>
        <circle cx="50" cy="50" r="22" fill="#083344" stroke="#06b6d4" stroke-width="1.5"/>
        <text x="50" y="57" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">⚡</text>
        <text x="25" y="110" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="800">3. Vitals &amp; Security</text>
        <text x="25" y="132" fill="#67e8f9" font-family="system-ui, sans-serif" font-size="12" font-weight="700">SUB-SECOND SPEEDS</text>
        <text x="25" y="165" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Core Web Vitals passed</text>
        <text x="25" y="190" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• OWASP security defense</text>
        <text x="25" y="215" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Multi-layer encryption</text>
        <rect x="25" y="250" width="195" height="28" rx="6" fill="#06b6d4" opacity="0.2"/>
        <text x="122" y="268" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">✓ HIGH-SPEED RATING</text>
      </g>

      <!-- Pillar 4: Post-Launch SLA -->
      <g transform="translate(795, 0)">
        <rect width="245" height="310" rx="16" fill="#0f172a" stroke="#eab308" stroke-width="2"/>
        <circle cx="50" cy="50" r="22" fill="#422006" stroke="#eab308" stroke-width="1.5"/>
        <text x="50" y="57" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">🤝</text>
        <text x="25" y="110" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="800">4. Support SLA</text>
        <text x="25" y="132" fill="#fde047" font-family="system-ui, sans-serif" font-size="12" font-weight="700">GUARANTEED UPTIME</text>
        <text x="25" y="165" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• 24/7 uptime monitoring</text>
        <text x="25" y="190" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Priority feature sprints</text>
        <text x="25" y="215" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">• Direct engineer access</text>
        <rect x="25" y="250" width="195" height="28" rx="6" fill="#eab308" opacity="0.2"/>
        <text x="122" y="268" fill="#facc15" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">✓ LIFETIME PARTNER</text>
      </g>
    </g>
    ${footerBranding()}
  </svg>
  `
};

let generated = 0;
for (const [filename, fn] of Object.entries(generators)) {
  const filePath = path.join(targetDir, filename);
  const raw = fn().trim();
  const escaped = raw.replace(/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;');
  fs.writeFileSync(filePath, escaped, 'utf8');
  generated++;
  console.log(`Generated attractive distinct SVG: ${filename}`);
}

console.log(`Successfully created ${generated} unique, attractive visual blueprints!`);
