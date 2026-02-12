/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Kalau nanti lo ambil gambar dari tempat lain, tambahin di bawahnya
    ],
  },
};

export default nextConfig;