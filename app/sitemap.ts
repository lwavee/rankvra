import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/app/blogs/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rankvra.com";
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/web-development",
    "/services/seo",
    "/services/local-seo",
    "/services/digital-marketing",
    "/services/google-ads",
    "/services/ai-automation",
    "/industries/hotels",
    "/industries/manufacturers",
    "/industries/exporters",
    "/industries/clinics",
    "/locations/india",
    "/locations/udaipur",
    "/locations/rajasthan",
    "/b2b-lead-generation",
    "/international-seo",
    "/free-growth-audit",
    "/portfolio",
    "/blogs",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date || lastModified),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const mainRoutes = staticRoutes.map((route) => {
    let priority = 0.8;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route.startsWith("/services") || route === "/free-growth-audit") {
      priority = 0.9;
    } else if (route.startsWith("/industries") || route.startsWith("/locations")) {
      priority = 0.85;
    } else if (route === "/privacy-policy" || route === "/terms-and-conditions") {
      priority = 0.3;
      changeFrequency = "monthly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });

  return [...mainRoutes, ...blogRoutes];
}
