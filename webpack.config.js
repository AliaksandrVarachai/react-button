const path = require('path');

module.exports = function(env, argv) {
  const isProduction = argv.mode === 'production';

  return {
    entry: isProduction
      ? './src/index.js'
      : './resources/test-script.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },

    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',

    module: {
      rules: [
        {
          test: /\.css/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'resources'),
          ],
          use: [
            {
              loader: 'style-loader'
            }, {
              loader: 'css-loader',
              options: {
                sourceMap: isProduction,
                modules: true,
                localIdentName: '[name]--[local]--[hash:base64:5]'
              }
            }
          ]
        },
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'resources')
          ],
          use: ['babel-loader']
        },
        {
          test: /\.html$/,
          include: path.resolve(__dirname, 'resources'),
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        }
      ]
    },

    plugins: [],

    externals: isProduction
      ? {
        'react': 'React',
        'react-dom': 'ReactDOM'
      }
      : {},

    devServer: {
      port: 8080,
      contentBase: path.resolve(__dirname, 'dist')
    }
  }
};