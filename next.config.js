/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@manskuy/breakpoints','@manskuy/row']);
const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.themealdb.com'],
  }
})

module.exports = nextConfig
