import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // next/image rasmlarni AVIF/WebP'ga o'tkazadi — eng zamonaviy, eng yengil format
    formats: ["image/avif", "image/webp"],
    // mobil-birinchi: kichik ekranlar uchun kichik o'lcham yuboriladi
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 kun keshlash
  },
};

export default nextConfig;
