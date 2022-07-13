/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "." : undefined,
  env: {
    apiAws: "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/",
  },
};

module.exports = nextConfig;
