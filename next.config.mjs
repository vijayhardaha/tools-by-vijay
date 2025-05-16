/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.qrserver.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "barcode.tec-it.com",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
