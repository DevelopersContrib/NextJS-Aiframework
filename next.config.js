/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.vnoc.com",
      "vnoclogos.s3-us-west-1.amazonaws.com",
      "tools.contrib.com",
      "contrib.com",
      "vnoclogos.s3-us-west-1.amazonaws.com",
      "i0.wp.com",
      "www.contrib.com",
      "s3.amazonaws.com",
      "vbot-images.s3.us-east-1.amazonaws.com",
    ],
  },
  env: {
    API1_URL: process.env.API_URL,
    API1_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
