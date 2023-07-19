/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.giphy.com']
    },
    distDir: 'docs',
    output: 'export',
    assetPrefix: 'https://thyenigmatic.github.io'
}

module.exports = nextConfig
