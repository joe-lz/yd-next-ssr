
module.exports = {
  siteUrl: 'http://www.incapital.cn/next-ssr',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: [
    // '/protected-page', '/awesome/secret-page',
  ],
  alternateRefs: [
    // {
    //   href: 'https://es.zhiyou.work',
    //   hreflang: 'es',
    // },
    // {
    //   href: 'https://fr.zhiyou.work',
    //   hreflang: 'fr',
    // },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  // additionalPaths: async (config) => [
  //   await config.transform(config, '/additional-page'),
  // ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      // {
      //   userAgent: 'test-bot',
      //   allow: ['/path', '/path-2'],
      // },
      // {
      //   userAgent: 'black-listed-bot',
      //   disallow: ['/sub-path-1', '/path-2'],
      // },
    ],
    additionalSitemaps: [
      // 'https://zhiyou.work/my-custom-sitemap-1.xml',
      // 'https://zhiyou.work/my-custom-sitemap-2.xml',
      // 'https://zhiyou.work/my-custom-sitemap-3.xml',
    ],
  },
}