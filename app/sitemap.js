import { abs } from "@/lib/seo";

/** Four pages, so the sitemap is written out rather than crawled for. */
const routes = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" }
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((r) => ({
    url: abs(r.path),
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority
  }));
}
