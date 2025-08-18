import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.clthub.com.pl";
  const now = new Date();
  return [
    { url: `${base}/`,   lastModified: now },
    { url: `${base}/pl`, lastModified: now }
  ];
}
