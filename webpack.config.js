var path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/index.bs.js"], // 在 index 檔案後的 .js 副檔名是可選的
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
};
