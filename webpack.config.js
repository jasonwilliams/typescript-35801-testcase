const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: [path.resolve(__dirname, "./app.js")]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};
