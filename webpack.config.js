const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // mode: 'development',
  mode: 'production',
  // 指定入口
  entry: "./src/index.ts",
  // 指定出口
  output: {
    // 指定打包文件所在的目录
    path: path.resolve(__dirname, 'dist'),
    // 指定打包好后的文件的名称
    filename: "bundle.js",
    environment:{
      // 告诉webpack不适用箭头函数
      arrowFunction:false,
      const:false
    }
  },
  // 指定webpack打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        test: /\.ts$/,
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            options:{
              // 设置预定义的环境
              presets:[
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets:{
                      "chrome":88
                    },
                    "corejs":"3",
                    // 使用corejs的方式"usage" 表示按需加载
                    "useBuiltIns":"usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'],
        exclude: /node-modules/
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader:"postcss-loader",
            options: {
              postcssOptions:{
                plugins:[
                  [
                    "postcss-preset-env",
                    {
                      browsers:"last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  // 配置Webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title:''
      template: './src/index.html'
    })
  ],
  // 设置引用模块
  resolve:{
    extensions:['.ts','.js']
  }
}