const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    /**
     * This entry point is used for the main app on /core and also included in /data-explorer pages
     */
    app: [path.resolve(__dirname, "./app.js")]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};
