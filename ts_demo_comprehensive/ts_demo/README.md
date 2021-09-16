# ts_demo

## vue + ts 项目搭建

```shell
# 安装 vue/cli
npm i -g @vue/cli
# 创建 vue项目
vue create ts_demo
# 安装 vue/typescript
vue add @vue/typescript
# 安装 vuex
npm i -S vuex
# 安装 vue-router
npm i vue-router
# 安装 axios
npm i axios
```

关闭eslint对未使用变量的检查

```json
// package.json
"rules": {
    "no-unused-vars": 0
  }
```




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
