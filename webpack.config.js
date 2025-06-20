// webpack.config.js → 改为 ESM 语法
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { server } from "typescript";
import { fileURLToPath } from "url";

// 获取 __dirname 的 ESM 写法
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash:4].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    server:'https', // 使用 HTTPS 协议
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true, // 关键配置
    compress: true,
    port: 3000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My React App",
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
