/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['google.com', 'i.imgur.com']
  }
  
}



module.exports = nextConfig
