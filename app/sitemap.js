const SITE_URL = "https://coachsandeep.com";

const ROUTES = [
  { path: "", priority: 1.0 },
  { path: "/about", priority: 0.8 },
  { path: "/framework", priority: 0.8 },
  { path: "/programs", priority: 0.8 },
  { path: "/test-prep", priority: 0.7 },
  { path: "/universities", priority: 0.7 },
  { path: "/stories", priority: 0.7 },
  { path: "/assessment", priority: 0.7 },
  { path: "/contact", priority: 0.9 },
  { path: "/resources", priority: 0.6 },
  { path: "/tools", priority: 0.5 },
  { path: "/events", priority: 0.6 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    priority: r.priority,
  }));
}
