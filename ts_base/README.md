# TypeScript基础

## TypeScript环境安装与运行

### 安装

1. 安装node.js和npm

- https://nodejs.org
> node 是独立于浏览器运行的 js 环境
>
> npm 会随着 node 一起被安装
>
> node -v 检验是否安装成功

- https://npmjs.com

> npm 是 nodejs的 包管理器
>
> 通过 npm 可以安装各类工具，尤其是前端开发工具
>
> npm -v 检验是否安装成功

2. 全局安装 TypeScript

```shell
npm install -g typescript
```

> tsc -v 校验 typescript 是否安装成功

> tsc: 负责将ts代码转为浏览器 和 nodejs 可以识别的 js 代码

### 运行

1. 在后缀名为 .ts的文件中书写 typescript 代码
2. 使用 tsc 将 typescript 代码编译成 js 代码
3. 在浏览器或者 nodejs 中执行 js 代码

> .ts -- tsc --> .js -- script标签 --> .html 