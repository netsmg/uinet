export default defineSitemapEventHandler(async (e) => {
  const posts = await Promise.all([
    {
      _path: '/blog/the-nexus-of-tomorrow',
      modifiedAt: new Date(),
    },
    {
      _path: '/blog/future-of-quantum-computing',
      modifiedAt: new Date(),
    },
    {
      _path: '/blog/10-reasons-i-stick-to-django',
      modifiedAt: new Date(),
    },
    {
      _path: '/blog/5g-vs-4g',
      modifiedAt: new Date(),
    },
    {
      _path: '/blog/rise-of-ai',
      modifiedAt: new Date(),
    },
    {
      _path: '/blog/blockchain-beyond-bitcoin',
      modifiedAt: new Date(),
    },
    {
      _path: '/blog/impact-of-ict-on-education',
      modifiedAt: new Date(),
    },
    {
      _path: '/blog/emerging-trends-in-cybersecurity',
      modifiedAt: new Date(),
    },
    {
      _path: '/blog/future-of-quantum-computings',
      modifiedAt: new Date(),
    },
  ]);

  return posts.map((p) => ({
    loc: p._path,
    lastmod: p.modifiedAt,
  }));
});
