const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'app', 'blogs');

const imagePlacements = [
  // web-dev-posts-1.ts
  {
    file: 'web-dev-posts-1.ts',
    targetSectionId: 'api-layer',
    image: {
      url: '/images/blogs/api-integration.svg',
      alt: 'API Integration bridge connecting frontend to database persistence',
      caption: 'The API Bridge: Type-safe JSON exchange, REST contracts, and webhook queues'
    }
  },
  {
    file: 'web-dev-posts-1.ts',
    targetSectionId: 'backend-technologies',
    image: {
      url: '/images/blogs/backend-development-guide.svg',
      alt: 'Backend development frameworks including Node.js Express and Python FastAPI',
      caption: 'Backend Engine Selection: Matching concurrency, async task queues, and transactional requirements'
    }
  },
  {
    file: 'web-dev-posts-1.ts',
    targetSectionId: 'how-they-communicate',
    image: {
      url: '/images/blogs/full-stack-web-development.svg',
      alt: 'Full stack synchronization connecting client UI and backend services',
      caption: 'The Full-Stack Bridge: Orchestrating client state and backend data persistence seamlessly'
    }
  },
  {
    file: 'web-dev-posts-1.ts',
    targetSectionId: 'the-inflection-point',
    image: {
      url: '/images/blogs/admin-dashboard-development.svg',
      alt: 'Custom enterprise application interface and real-time dashboard',
      caption: 'Operational Interface: Real-time telemetry, zero per-seat licensing, and custom business pipelines'
    }
  },
  {
    file: 'web-dev-posts-1.ts',
    targetSectionId: 'webhooks-vs-polling',
    image: {
      url: '/images/blogs/third-party-api-integration.svg',
      alt: 'Event driven webhook pipelines and third-party automated workflows',
      caption: 'Event-Driven Automation: Asynchronous webhook pipelines with automatic retry resilience'
    }
  },

  // web-dev-posts-2.ts
  {
    file: 'web-dev-posts-2.ts',
    targetSectionId: 'whatsapp-automation',
    image: {
      url: '/images/blogs/custom-crm-development.svg',
      alt: 'AI lead qualification and automated CRM deal pipeline',
      caption: 'Automated Lead Routing: AI intent scoring synchronized into active CRM deal stages'
    }
  },
  {
    file: 'web-dev-posts-2.ts',
    targetSectionId: 'database-architecture',
    image: {
      url: '/images/blogs/scalable-web-application-development.svg',
      alt: 'Scalable backend database topology with read replicas and Redis caching',
      caption: 'Persistence Tier: Read replicas and in-memory Redis caching offloading database load'
    }
  },
  {
    file: 'web-dev-posts-2.ts',
    targetSectionId: 'core-web-vitals-deep-dive',
    image: {
      url: '/images/blogs/website-performance-optimization.svg',
      alt: 'Core Web Vitals performance indicators and speed gauges',
      caption: 'Core Web Vitals Mastery: Achieving sub-1.2s LCP and sub-50ms INP responsiveness'
    }
  },
  {
    file: 'web-dev-posts-2.ts',
    targetSectionId: 'complexity-tiers',
    image: {
      url: '/images/blogs/secure-web-application-development.svg',
      alt: 'Enterprise web application security defense in depth',
      caption: 'Security Investment: OWASP hardening, encrypted vaults, and continuous vulnerability audits'
    }
  },
  {
    file: 'web-dev-posts-2.ts',
    targetSectionId: 'the-hybrid-model',
    image: {
      url: '/images/blogs/web-development-technology.svg',
      alt: 'Technology stack selection matrix for websites and web applications',
      caption: 'Stack Alignment: Matching technical architecture with strategic business requirements'
    }
  },

  // web-dev-posts-3.ts
  {
    file: 'web-dev-posts-3.ts',
    targetSectionId: 'core-web-vitals-breakdown',
    image: {
      url: '/images/blogs/frontend-development-guide.svg',
      alt: 'Modern frontend engineering and 100 Lighthouse performance metrics',
      caption: 'Frontend Optimization: Minimizing main-thread JavaScript execution for instantaneous touch response'
    }
  },
  {
    file: 'web-dev-posts-3.ts',
    targetSectionId: 'owasp-top-10-mitigation',
    image: {
      url: '/images/blogs/payment-gateway-integration.svg',
      alt: 'Secure payment gateway integration and cryptographic webhooks',
      caption: 'Tokenized Transactions: Zero card numbers touch your database, eliminating regulatory risk'
    }
  },
  {
    file: 'web-dev-posts-3.ts',
    targetSectionId: 'the-payment-lifecycle',
    image: {
      url: '/images/blogs/api-integration.svg',
      alt: 'API integration hub connecting payment gateways and cloud services',
      caption: 'Gateway Connectivity: Secure webhook event listeners with HMAC cryptographic signatures'
    }
  },
  {
    file: 'web-dev-posts-3.ts',
    targetSectionId: 'multi-tenancy-models',
    image: {
      url: '/images/blogs/admin-dashboard-development.svg',
      alt: 'SaaS admin dashboard and subscription telemetry',
      caption: 'Subscription Control: Monitoring MRR, active seats, and customer usage metrics in real time'
    }
  },

  // web-dev-posts-4.ts
  {
    file: 'web-dev-posts-4.ts',
    targetSectionId: 'real-time-telemetry',
    image: {
      url: '/images/blogs/custom-web-application-development.svg',
      alt: 'Custom web application and operational portal interface',
      caption: 'Operational Portal: Real-time data streams and optimistic UI state handling'
    }
  },
  {
    file: 'web-dev-posts-4.ts',
    targetSectionId: 'when-custom-crm-wins',
    image: {
      url: '/images/blogs/third-party-api-integration.svg',
      alt: 'CRM third-party API automation and webhook synchronization',
      caption: 'Connected Sales Engine: Instant bi-directional data flow between CRM, ERP, and communication tools'
    }
  },
  {
    file: 'web-dev-posts-4.ts',
    targetSectionId: 'the-pwa-middle-ground',
    image: {
      url: '/images/blogs/frontend-development-guide.svg',
      alt: 'Progressive web application and responsive mobile user experience',
      caption: 'Cross-Platform Velocity: Mobile-first responsive interfaces with zero download barriers'
    }
  },
  {
    file: 'web-dev-posts-4.ts',
    targetSectionId: 'bidirectional-sync',
    image: {
      url: '/images/blogs/api-integration.svg',
      alt: 'Enterprise API integration hub and webhook pipeline',
      caption: 'System Orchestration: Connecting disjointed SaaS tools into a unified event-driven ecosystem'
    }
  },
  {
    file: 'web-dev-posts-4.ts',
    targetSectionId: 'technical-due-diligence',
    image: {
      url: '/images/blogs/full-stack-web-development.svg',
      alt: 'Full stack engineering standards and clean code architecture',
      caption: 'Technical Due Diligence: Inspecting clean component hierarchies, custom repos, and verified speed'
    }
  }
];

let embedded = 0;
for (const p of imagePlacements) {
  const filePath = path.join(dir, p.file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find the section definition inside content.sections array:
  // We want to match: id: "targetSectionId",
  // Note: the file has multiple occurrences (one in tableOfContents, one in content.sections).
  // We want to match the one in content.sections which is followed by heading: "..."
  const regex = new RegExp(`(id:\\s*"${p.targetSectionId}",\\s*heading:)`, 'g');
  if (regex.test(content)) {
    const imageBlock = `id: "${p.targetSectionId}",\n          image: {\n            url: "${p.image.url}",\n            alt: "${p.image.alt}",\n            caption: "${p.image.caption}"\n          },\n          heading:`;
    
    // Check if image already embedded
    if (!content.includes(p.image.caption)) {
      content = content.replace(regex, imageBlock);
      fs.writeFileSync(filePath, content, 'utf8');
      embedded++;
      console.log(`Embedded image into ${p.file} -> section [${p.targetSectionId}]`);
    } else {
      console.log(`Image already exists in ${p.file} -> section [${p.targetSectionId}]`);
    }
  } else {
    console.warn(`Could not match section heading for: ${p.targetSectionId} in ${p.file}`);
  }
}

console.log(`Successfully embedded ${embedded} technical diagrams into sections!`);
