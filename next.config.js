/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiAws: "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/",
  },
};

module.exports = nextConfig;
