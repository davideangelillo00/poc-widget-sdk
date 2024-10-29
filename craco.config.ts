import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {
  webpack: {
    configure: {
      entry: './src/index.tsx',
      output: {
        filename: 'index.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'index.css',
      }),
    ],
  },
};