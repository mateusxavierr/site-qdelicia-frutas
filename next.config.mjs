/** @type {import('next').NextConfig} */
// BASE_PATH: use "/nome-do-repo" no build para GitHub Pages (site em user.github.io/repo/).
// Em dev não definir — evita 404 em assets. .nojekyll em /public evita o Jekyll ignorar /_next.
const basePath = process.env.BASE_PATH || "";

const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // CI: garante export estático mesmo se NODE_ENV estiver estranho no runner
  ...(process.env.NODE_ENV === "production" || process.env.CI === "true"
    ? { output: "export" }
    : {}),
  ...(basePath ? { basePath, trailingSlash: false } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
