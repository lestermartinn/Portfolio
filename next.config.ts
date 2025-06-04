// next.config.ts
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
}

module.exports = withMDX(nextConfig)

