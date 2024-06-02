const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  resolve: {
    fallback: {
      "path": false,
      "os": false,
      "crypto": false,
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new Dotenv()
  ],
};
