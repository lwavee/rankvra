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
  title: "Best Web Development & Digital Marketing Agency in Udaipur, Rajasthan | Rankvra",
  description:
    "Looking for the best web development agency in Udaipur or top digital marketing company in Rajasthan? Rankvra, founded by Naveen Panchal (lw_avee), builds fast custom websites, Google Page 1 SEO, and high-ROI ad campaigns that generate real local leads.",
  keywords: [
    "best web development agency in udaipur",
    "best digital marketing agency in udaipur",
    "web development company in udaipur",
    "website design in udaipur",
    "seo agency in udaipur",
    "best seo company in udaipur",
    "digital marketing company in udaipur",
    "digital marketing agency in rajasthan",
    "web development agency in rajasthan",
    "social media marketing in udaipur",
    "google ads agency in udaipur",
    "naveen panchal",
    "lw_avee",
    "learn with avee",
  ],
  authors: [{ name: "Naveen Panchal (lw_avee)" }, { name: "Rankvra Team" }],
  creator: "Rankvra",
  publisher: "Rankvra",
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
    title: "Best Web Development & Digital Marketing Agency in Udaipur | Rankvra",
    description:
      "Rankvra builds ultra-fast custom websites and high-ROI digital marketing campaigns for businesses in Udaipur and all over Rajasthan. Led by Naveen Panchal (lw_avee).",
    url: "https://rankvra.com",
    siteName: "Rankvra",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rankvra - Best Web Development & Digital Marketing Agency in Udaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Development & Digital Marketing Agency in Udaipur | Rankvra",
    description:
      "High-speed websites, Google Page 1 SEO, and performance ads for businesses in Udaipur and across Rajasthan.",
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
      "@type": "LocalBusiness",
      "@id": "https://rankvra.com/#localbusiness",
      name: "Rankvra - Best Web Development & Digital Marketing Agency in Udaipur",
      alternateName: ["Rankvra Digital", "Rankvra Udaipur"],
      url: "https://rankvra.com",
      telephone: "+917297875798",
      email: "info@rankvra.com",
      priceRange: "₹₹",
      image: "https://rankvra.com/logo.png",
      founder: {
        "@type": "Person",
        name: "Naveen Panchal",
        alternateName: "lw_avee",
        jobTitle: "Founder & CEO",
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
        { "@type": "City", name: "Udaipur" },
        { "@type": "State", name: "Rajasthan" },
        { "@type": "City", name: "Jaipur" },
        { "@type": "City", name: "Jodhpur" },
        { "@type": "City", name: "Kota" },
        { "@type": "City", name: "Bhilwara" },
        { "@type": "Country", name: "India" },
      ],
      description:
        "Rankvra is the premier web development and digital marketing agency based in Udaipur, Rajasthan. We offer custom website design, local SEO, Google Ads, Meta Ads, and AI automations to help local businesses scale.",
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
