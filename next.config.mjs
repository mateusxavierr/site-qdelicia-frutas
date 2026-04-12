/** @type {import('next').NextConfig} */
const nextConfig = {
  // `output: 'export'` só no build de produção — com `next dev`, manter modo normal evita 404 em /_next/static/*
  ...(process.env.NODE_ENV === "production" ? { output: "export" } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
