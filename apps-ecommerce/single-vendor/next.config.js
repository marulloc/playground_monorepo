module.exports = {
  reactStrictMode: false,
  transpilePackages: ['ui'],

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    return config;
  },

  images: {
    domains: ['cdn.shopify.com'],
  },
};
