/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devServer: {
    https: true,
  }
}

module.exports = nextConfig
