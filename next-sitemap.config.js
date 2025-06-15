/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://heliusdev.in',  // ✅ <-- replace with your real domain
  generateRobotsTxt: true,
  sitemapSize: 5000,  // optional, default is fine
  changefreq: 'daily',
  priority: 0.7,
  generateIndexSitemap: true,  // optional for large site
  exclude: [],   // you can exclude any route here
};
