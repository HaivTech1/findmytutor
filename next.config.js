
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const TerserPlugin = require("terser-webpack-plugin");

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.paystack.co https://js.paystack.co https://sdk.monnify.com https://checkout.flutterwave.com;
  style-src 'self' 'unsafe-inline' *.paystack.co paystack.com;
  script-src-elem 'self' *.paystack.co https://js.paystack.co https://sdk.monnify.com https://checkout.flutterwave.com;
  img-src * blob: data:;
  media-src 'none';
  connect-src * https://sdk.monnify.com https://checkout.flutterwave.com https://checkout-v3-ui-prod.f4b-flutterwave.com;
  font-src 'self' data:; 
  frame-src *.paystack.co checkout.paystack.com https://js.paystack.co https://sdk.monnify.com https://checkout.flutterwave.com https://checkout-v3-ui-prod.f4b-flutterwave.com sandbox.sdk.monnify.com;
  child-src *.paystack.co https://js.paystack.co;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "ALLOW",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  transpilePackages: ["next-auth"],
  env: {
    LIVE_BASE_URL: process.env.LIVE_BASE_URL,
    TEST_BASE_URL: process.env.TEST_BASE_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  images: {
    remotePatterns: [
      {
        hostname: "findmytutor.haivtech.com.ng",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "md", "mdx"],
  eslint: {
    dirs: ["pages", "components", "utils", "context", "layouts", "scripts"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
      }
    );

    if (!isServer) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: true,
            mangle: true,
            output: {
              comments: false,
            },
          },
          extractComments: false,
        })
      );
    }

    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
});
