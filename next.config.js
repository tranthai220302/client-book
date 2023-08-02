const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);

    return config;
  },
  images: {
    domains: ['images.pexels.com', 'www.google.com', 'encrypted-tbn0.gstatic.com', 'thietkekhainguyen.com']
  },
};