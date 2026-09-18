const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? "/portfolio" : "",
  assetPrefix: isProduction ? "/portfolio/" : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? "/portfolio" : "",
  },
};

export default nextConfig;
