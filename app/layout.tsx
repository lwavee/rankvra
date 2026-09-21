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
  title: "RankVRA | Web Development, SEO & Digital Growth for Modern Businesses",
  description:
    "RankVRA is an India-based web development, custom software, and digital growth company serving businesses across the USA, UK, Canada, India, and global markets. Led by Naveen Panchal.",
  keywords: [
    "RankVRA",
    "web development agency",
    "custom web development company",
    "business website design",
    "website redesign services",
    "custom web application development",
    "technical seo services",
    "international seo agency",
    "insurance web design",
    "wholesale insurance portal development",
    "b2b lead generation company india",
    "naveen panchal",
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
    title: "RankVRA | Web Development, SEO & Digital Growth for Modern Businesses",
    description:
      "RankVRA is an India-based web development, custom software, and digital growth company serving businesses across the USA, UK, Canada, India, and international markets.",
    url: "https://www.rankvra.com",
    siteName: "RankVRA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.rankvra.com/logo.png",
        width: 1200,
        height: 630,
        alt: "RankVRA - Web Development, SEO & Digital Growth for Modern Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RankVRA | Web Development, SEO & Digital Growth for Modern Businesses",
    description:
      "High-speed custom websites, web applications, and technical SEO engineered by RankVRA for national and international businesses.",
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
      alternateName: ["Rank VRA", "RankVRA Digital", "RankVRA Agency"],
      url: "https://www.rankvra.com",
      logo: "https://www.rankvra.com/logo.png",
      image: "https://www.rankvra.com/logo.png",
      telephone: "+917297875798",
      email: "info@rankvra.com",
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
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "India" },
        { "@type": "AdministrativeArea", name: "Delhi NCR" },
        { "@type": "City", name: "Udaipur" },
      ],
      description:
        "RankVRA is an India-based web development, custom software, and digital growth company founded by Naveen Panchal. We engineer high-speed business websites, custom web applications, and search growth systems for national and international businesses.",
      knowsAbout: [
        "Web Development",
        "Website Design",
        "Website Redesign",
        "Custom Web Applications",
        "Technical SEO",
        "International SEO",
        "Insurance Web Solutions",
        "Ecommerce Development",
        "Next.js",
        "React",
        "TypeScript",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "RankVRA Core Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Development",
              url: "https://www.rankvra.com/services/web-development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Design & Redesign",
              url: "https://www.rankvra.com/services/website-design",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Application Development",
              url: "https://www.rankvra.com/services/web-application-development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical SEO & Search Optimization",
              url: "https://www.rankvra.com/services/technical-seo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "International SEO Services",
              url: "https://www.rankvra.com/services/international-seo",
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
      jobTitle: "Founder & Lead Technical Architect",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
