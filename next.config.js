// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['cdn.sanity.io'],
//   },
  
// }

// const pdfWebPack ={
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.node/,
//       use: 'raw-loader',
//     });
 
//     return config;
//   },
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
};

const pdfWebPack = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: 'raw-loader',
    });

    return config;
  },
};

// Merge the two configuration objects
const mergedConfig = {
  ...nextConfig,
  ...pdfWebPack,
};

module.exports = mergedConfig;
