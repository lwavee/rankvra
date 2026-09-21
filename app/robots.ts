import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/thank-you", "/radhe-radhe-admin/"],
    },
    sitemap: "https://www.rankvra.com/sitemap.xml",
  };
}
