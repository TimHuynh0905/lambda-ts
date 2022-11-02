const { merge } = require("webpack-merge");
const base = require("./webpack.config");
const path = require("path");

module.exports = (env) => {
  const entry = env.ENTRY;

  const output = {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: "commonjs2",
  };

  return merge(base, {
    mode: "production",

    entry: entry,

    output: output,

    externals: ["aws-sdk"],
  });
};
