/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['arweave.net', 'www.arweave.net', 'cloudflare-ipfs.com'],
  },
}

module.exports = nextConfig 