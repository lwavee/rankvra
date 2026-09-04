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
  title: "Rankvra | Top Digital Marketing Agency",
  description:
    "Rankvra is an elite digital marketing agency specializing in high-performance SEO, paid advertising, and conversion-focused web design. We scale ambitious brands to the top.",
  keywords: [
    "digital marketing agency",
    "SEO services",
    "paid ads agency",
    "PPC management",
    "web design agency",
    "conversion rate optimization",
    "marketing strategy",
    "lead generation",
  ],
  authors: [{ name: "Rankvra Team" }],
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
    title: "Rankvra | Top Digital Marketing Agency",
    description:
      "We turn clicks into clients. Full-service digital marketing — SEO, Paid Ads, Web Design, and Growth Strategy for ambitious brands.",
    url: "https://rankvra.com",
    siteName: "Rankvra",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://rankvra.com/og-image.jpg", // Placeholder for future OG image
        width: 1200,
        height: 630,
        alt: "Rankvra Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rankvra | Elite Digital Marketing Agency",
    description:
      "We build performance-obsessed systems that turn attention into predictable revenue. SEO, paid ads, and web design.",
    images: ["https://rankvra.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://rankvra.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#0f172a] antialiased">
        {children}
      </body>
    </html>
  );
}
