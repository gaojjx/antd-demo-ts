/* craco.config.js */
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  style: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        ...(process.env.NODE_ENV === 'production'
          ? [require('cssnano')]
          : []),
      ],
    },
  },
  webpack: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    configure: (webpackConfig) => {
      webpackConfig.optimization.splitChunks = {
        ...webpackConfig.optimization.splitChunks,
        cacheGroups: {
          ...webpackConfig.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name(module, chunks, cacheGroupKey) {
              const moduleFileName = module
                .identifier()
                .split('/')
                .reduceRight(item => item);
              const allChunksNames = chunks.map((item) => item.name).join('~');
              return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
            },
            chunks: 'all',
          },
        },
      };

      return webpackConfig;
    },
  },
};
