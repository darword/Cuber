/* eslint-disable */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: {
      index: "./src/index.ts",
    },
    devtool: isProduction ? false : "eval-cheap-module-source-map",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
      globalObject: "this",
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(html|svg)$/,
          loader: "text-loader",
        },
        {
          test: /\.(png|woff2?|eot|ttf)$/,
          type: "asset/inline",
        },
      ],
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
      },
      extensions: [".js", ".ts", ".json", "*"],
    },
    performance: {
      hints: false,
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
          parallel: true,
        }),
      ],
      splitChunks: {
        chunks: "all", // Optimize for all chunks instead of just initial chunks
        name: "vendor",
      },
    },
    plugins: [
      new CleanWebpackPlugin({
        dry: !isProduction,
      }),
      new HtmlWebpackPlugin({
        favicon: "./resource/icon.png",
        filename: "index.html",
        template: "./resource/index.html",
        minify: isProduction
          ? {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
            }
          : false,
      }),
    ],
  };
};
