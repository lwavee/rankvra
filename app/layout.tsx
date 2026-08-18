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
  title: "Rankvra | Digital Marketing Agency",
  description:
    "Rankvra engineers high-performance digital marketing systems — SEO, paid ads, web design, and conversion strategies that turn traffic into revenue.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Rankvra | Digital Marketing Agency",
    description:
      "We turn clicks into clients. Full-service digital marketing — SEO, Paid Ads, Web Design, and Growth Strategy for ambitious brands.",
    url: "https://rankvra.com",
    siteName: "Rankvra",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rankvra | Digital Marketing Agency",
    description:
      "We turn clicks into clients. Full-service digital marketing for ambitious brands.",
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
