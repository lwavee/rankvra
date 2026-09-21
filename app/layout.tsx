import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VisitorTracker from "./components/VisitorTracker";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rankvra.com"),
  title: "RankVRA | Web Development, SEO & Digital Growth Agency",
  description:
    "RankVRA helps businesses build high-converting websites, improve search visibility and generate qualified enquiries through SEO, digital marketing and technology. Founded by Naveen Panchal in Udaipur, Rajasthan.",
  keywords: [
    "RankVRA",
    "RankVRA Udaipur",
    "RankVRA Naveen Panchal",
    "web development company udaipur",
    "seo agency udaipur",
    "digital marketing agency udaipur",
    "google ads agency udaipur",
    "local seo udaipur",
    "hotel marketing agency",
    "b2b lead generation agency india",
    "custom web development company",
    "technical seo consultant india",
    "naveen panchal",
    "lw_avee",
  ],
  authors: [{ name: "Naveen Panchal (lw_avee)" }, { name: "RankVRA" }],
  creator: "RankVRA",
  publisher: "RankVRA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "RankVRA | Web Development, SEO & Digital Growth Agency",
    description:
      "RankVRA helps businesses build high-converting websites, improve search visibility and generate qualified enquiries through SEO, digital marketing and technology. Led by Naveen Panchal in Udaipur.",
    url: "https://www.rankvra.com",
    siteName: "RankVRA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.rankvra.com/logo.png",
        width: 1200,
        height: 630,
        alt: "RankVRA - Web Development, SEO & Digital Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RankVRA | Web Development, SEO & Digital Growth Agency",
    description:
      "High-speed custom websites, technical SEO, and ROI-driven marketing funnels founded by Naveen Panchal in Udaipur, Rajasthan.",
    images: ["https://www.rankvra.com/logo.png"],
  },
  alternates: {
    canonical: "https://www.rankvra.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.rankvra.com/#organization",
      name: "RankVRA",
      legalName: "RankVRA",
      alternateName: ["Rank VRA", "RankVRA Udaipur", "RankVRA Agency"],
      url: "https://www.rankvra.com",
      logo: "https://www.rankvra.com/logo.png",
      image: "https://www.rankvra.com/logo.png",
      telephone: "+917297875798",
      email: "info@rankvra.com",
      priceRange: "₹₹ - ₹₹₹",
      founder: {
        "@id": "https://www.rankvra.com/#founder",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Udaipur",
        addressRegion: "Rajasthan",
        postalCode: "313001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 24.5854,
        longitude: 73.7125,
      },
      sameAs: [
        "https://www.instagram.com/lw_avee/?__pwa=1",
        "https://www.youtube.com/@Lw_avee",
        "https://www.facebook.com/lwavee?locale=hi_IN",
        "https://github.com/lwavee",
      ],
      areaServed: [
        { "@type": "City", name: "Udaipur" },
        { "@type": "AdministrativeArea", name: "Rajasthan" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      description:
        "RankVRA is a web development, SEO, and digital growth agency founded by Naveen Panchal in Udaipur, Rajasthan. We engineer ultra-fast websites, search visibility, and lead generation funnels for clients in India and worldwide.",
      knowsAbout: [
        "Web Development",
        "Search Engine Optimization (SEO)",
        "Local SEO",
        "Digital Marketing",
        "Google Ads",
        "Conversion Rate Optimization",
        "AI Automation",
        "Next.js",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "RankVRA Core Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Development & High-Speed Next.js Applications",
              url: "https://www.rankvra.com/services/web-development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical SEO & Search Engine Optimization",
              url: "https://www.rankvra.com/services/seo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Local SEO & Google Business Profile Optimization in Udaipur",
              url: "https://www.rankvra.com/services/local-seo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Performance Digital Marketing & Google Ads Management",
              url: "https://www.rankvra.com/services/google-ads",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Workflows & WhatsApp Lead Automation",
              url: "https://www.rankvra.com/services/ai-automation",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.rankvra.com/#founder",
      name: "Naveen Panchal",
      alternateName: ["lw_avee", "Learn with Avee"],
      jobTitle: "Founder & Technical Lead",
      worksFor: {
        "@id": "https://www.rankvra.com/#organization",
      },
      image: "https://www.rankvra.com/ceo-naveen.png",
      sameAs: [
        "https://www.instagram.com/lw_avee/?__pwa=1",
        "https://www.youtube.com/@Lw_avee",
        "https://www.facebook.com/lwavee?locale=hi_IN",
        "https://github.com/lwavee",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.rankvra.com/#website",
      url: "https://www.rankvra.com",
      name: "RankVRA",
      alternateName: ["Rank VRA"],
      publisher: {
        "@id": "https://www.rankvra.com/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (typeof Element !== 'undefined') {
                  const _set = Element.prototype.setAttribute;
                  Element.prototype.setAttribute = function(k, v) {
                    if (k === 'bis_skin_checked') return;
                    return _set.apply(this, arguments);
                  };
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0f172a] antialiased" suppressHydrationWarning>
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}
