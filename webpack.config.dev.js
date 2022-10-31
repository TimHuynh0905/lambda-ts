const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const base = require("./webpack.config");
const path = require("path");

module.exports = merge(base, {
  mode: "development",

  entry: {
    functionA: "./src/functions/FunctionA/index.ts",
    functionB: "./src/functions/FunctionB/index.ts",
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: "commonjs2",
  },

  devtool: "inline-source-map",

  plugins: [
    new CopyPlugin({
      patterns: [path.resolve(__dirname, "package.json")],
    }),
  ],
});
