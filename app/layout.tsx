import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rankvra.com"),
  title: "RankVRA | Web Development, SEO & Digital Growth Agency — India & Worldwide",
  description:
    "RankVRA helps ambitious businesses across India and worldwide scale with high-speed custom websites, technical Google SEO, and high-converting performance marketing. Founded by Naveen Panchal (lw_avee).",
  keywords: [
    "web development agency in india",
    "best digital marketing agency in india",
    "seo agency in india",
    "b2b lead generation agency india",
    "custom web development company",
    "technical seo consultant india",
    "international web development agency",
    "google ads agency in india",
    "best web development agency in udaipur",
    "digital marketing agency in rajasthan",
    "naveen panchal",
    "lw_avee",
    "learn with avee",
  ],
  authors: [{ name: "Naveen Panchal (lw_avee)" }, { name: "RankVRA Team" }],
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
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "RankVRA | Web Development, SEO & Growth Agency — India & Worldwide",
    description:
      "High-speed custom Next.js websites, technical SEO architectures, and B2B growth funnels for ambitious brands across India and global markets. Led by Naveen Panchal (lw_avee).",
    url: "https://rankvra.com",
    siteName: "RankVRA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "RankVRA - Web Development & Digital Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RankVRA | Web Development & Digital Growth Agency — India & Worldwide",
    description:
      "High-speed websites, technical SEO, and performance ads for businesses across India and global markets.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://rankvra.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://rankvra.com/#organization",
      name: "RankVRA - Web Development & Digital Growth Agency",
      alternateName: ["RankVRA", "RankVRA Technologies"],
      url: "https://rankvra.com",
      telephone: "+917297875798",
      email: "info@rankvra.com",
      priceRange: "₹₹ - ₹₹₹",
      image: "https://rankvra.com/logo.png",
      founder: {
        "@type": "Person",
        name: "Naveen Panchal",
        alternateName: "lw_avee",
        jobTitle: "Founder & Technical Architect",
        sameAs: [
          "https://www.instagram.com/lw_avee/?__pwa=1",
          "https://www.youtube.com/@Lw_avee",
          "https://www.facebook.com/lwavee?locale=hi_IN",
        ],
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
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Bengaluru" },
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Jaipur" },
        { "@type": "City", name: "Udaipur" },
      ],
      description:
        "RankVRA is a premier web development and digital growth agency operating across India and serving international clients in the US, UK, and UAE. We engineer ultra-fast websites, technical SEO systems, and B2B growth pipelines.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Agency Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Development & Website Design in Udaipur",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Local SEO & Google My Business Optimization in Udaipur",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing & Performance Paid Advertising (Meta & Google Ads)",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Marketing & Brand Strategy in Rajasthan",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0f172a] antialiased">
        {children}
      </body>
    </html>
  );
}
