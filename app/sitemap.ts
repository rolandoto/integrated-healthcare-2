import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://integratedhealthcare.group";

const routes = [
  "",
  "/our-team",
  "/services",
  "/telemedicine",
  "/insurance",
  "/locations",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
