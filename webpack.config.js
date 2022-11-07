const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = (env, arg) => {
  const mode = arg.mode === "development" ? "development" : "production";

  return {
    target: "node14",

    mode: mode,

    context: __dirname,

    entry: "./src/index.ts",

    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "build"),
      libraryTarget: "commonjs2",
    },

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

    devtool: mode === "development" ? "inline-source-map" : "source-map",

    externals: mode === "development" ? [] : ["aws-sdk"],

    plugins: [new CleanWebpackPlugin()],
  };
};
