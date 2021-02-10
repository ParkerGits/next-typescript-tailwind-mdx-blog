const withPlugins = require('next-compose-plugins')
const withMDX = require('next-mdx-frontmatter')({
  MDXOptions: {
    rehypePlugins: [
      require('mdx-prism'),
      require('rehype-slug'),
      [require('rehype-autolink-headings'), {behavior: 'append'}],
    ],
  },
})

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return []
  },
}

module.exports = withPlugins(
  [
    withMDX({
      pageExtensions: ['ts', 'tsx', 'mdx'],
    }),
  ],
  nextConfig,
)
