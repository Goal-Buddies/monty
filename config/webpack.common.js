// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const paths = require('./paths')

module.exports = {
  entry: {
    main: `${paths.src}/index.js`,
  },

  output: {
    path: paths.dist,
    filename: 'index.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@': paths.src,
      // '@main': paths.srcMain,
      // '@screens': paths.srcScreens,
      // '@layouts': paths.srcLayouts,
      // '@components': paths.srcComponents,
      // '@styles': paths.styles,
      // '@assets': paths.assets,
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          { loader: 'css-loader' },
        ],
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: paths.images,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({
      /* options */
    }),

    new HtmlWebpackPlugin({
      title: 'Monty',
      // template: paths.templates.index,
      cache: false,
      alwaysWriteToDisk: true,
    }),

    // new CopyPlugin([
    //   { from: `${paths.assets}/favicon.ico`, to: './' },
    // ]),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
}
