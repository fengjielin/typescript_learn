使用webpage打包ts代码

1. 安装依赖包

```shell
npm init -y
npm i -D webpack webpack-cli typescript ts-loader
```

2. 编写webpack配置文件 __ webpack.config.js
3. 编写typescript配置文件 __ tsconfig.json
4. package.json文件 ---> 添加打包命令 ---> "dev": "webpack --mode development", "build": "webpack --mode production"

```shell
# 自动生成html文件的插件，并插入js
npm i -D html-webpack-plugin
# webpack开发服务器
npm i -D webpack-dev-server
# 打包前清空之前的打包文件
npm i -D clean-webpack-plugin
# 安装babel 实现兼容
npm i -D @babel/core @babel/preset-env babel-loader core-js
# 处理css文件
npm i -D less less-loader css-loader style-loader
# 处理css兼容问题
npm i -D postcss postcss-loader postcss-preset-env
```