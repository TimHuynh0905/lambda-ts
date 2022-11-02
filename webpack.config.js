const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  target: "node14",

  context: __dirname,

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  plugins: [new CleanWebpackPlugin()],
};
