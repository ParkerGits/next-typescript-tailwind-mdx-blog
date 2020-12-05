const withPlugins = require('next-compose-plugins')
const withMdxFm = require('next-mdx-frontmatter')()
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return []
  },
}

module.exports = withPlugins(
  [
    withMdxFm({
      pageExtensions: ['ts', 'tsx', 'mdx'],
      remarkPlugins: [
        require('remark-slug'),
        require('remark-footnotes'),
        require('remark-code-titles'),
      ],
      rehypePlugins: [require('mdx-prism')],
    }),
  ],
  nextConfig,
)
