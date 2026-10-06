/** @type {import('next').NextConfig} */
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserSite = repositoryName === `${process.env.GITHUB_REPOSITORY_OWNER}.github.io`;
const basePath = process.env.GITHUB_ACTIONS === 'true' && repositoryName && !isUserSite
  ? `/${repositoryName}`
  : '';

const nextConfig = {
  // Keep production builds from overwriting a running development server's assets.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
