/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/cordovez/image/upload/v1/PlantUrbanus/**",
      },
    ],
  },
};

module.exports = nextConfig;
