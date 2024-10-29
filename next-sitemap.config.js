/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.stoicquotes.ca",
  generateRobotsTxt: true,
  defaultChangeFreq: 'weekly',
};
