import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/app/blogs/data";
import { CASE_STUDIES } from "@/app/case-studies/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rankvra.com";
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/web-development",
    "/services/website-design",
    "/services/website-redesign",
    "/services/web-application-development",
    "/services/technical-seo",
    "/services/international-seo",
    "/services/conversion-optimization",
    "/services/ecommerce-development",
    "/services/landing-page-development",
    "/services/seo",
    "/services/local-seo",
    "/services/digital-marketing",
    "/services/google-ads",
    "/services/ai-automation",
    "/industries/insurance",
    "/industries/hotels",
    "/industries/manufacturers",
    "/industries/exporters",
    "/industries/clinics",
    "/markets",
    "/markets/usa",
    "/markets/uk",
    "/markets/canada",
    "/markets/india",
    "/markets/delhi-ncr",
    "/b2b-lead-generation",
    "/international-seo",
    "/free-website-audit",
    "/free-growth-audit",
    "/case-studies",
    "/portfolio",
    "/blogs",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const portfolioProjects = ["AMS-project", "sarala-ai", "CRM"];

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date || lastModified),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const caseStudyRoutes = CASE_STUDIES.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(study.publishedDate || lastModified),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const portfolioRoutes = portfolioProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const mainRoutes = staticRoutes.map((route) => {
    let priority = 0.8;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (
      route.startsWith("/services") ||
      route.startsWith("/markets") ||
      route === "/industries/insurance" ||
      route === "/free-website-audit" ||
      route === "/case-studies"
    ) {
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

  return [...mainRoutes, ...caseStudyRoutes, ...blogRoutes, ...portfolioRoutes];
}
