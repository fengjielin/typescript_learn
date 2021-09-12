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

### 自动编译

> 自动编译：就是省去程序员敲击命令编译文件，由工具来自动完成

设置 VSCode 进行自动编译

1. 运行 tsc --init，创建 tsconfig.json 文件
2. 修改 tsconfig.json 文件，设置编译后 js 的文件夹："outDir":"./js"
3. 设置 vscode 监视任务 终端 --> 运行任务 --> tsc: 监视


## TypeScript 变量与数据类型

### 变量

> let 变量名: 变量类型 = 值

在 TS 中，为变量指定了类型，就只能给这个变量设置相同类型的值

### 数据类型

---

*JS原有数据类型*

---
> string、number、boolean、undefined、null

**数组**

数组与 js 的不同之处在于：ts需要在声明时指定 数组 中元素的类型

- 语法：

1. let 数组名: 类型[] = [值1，值2]
> let arrHearps: string[] = ['安琪拉', '大乔']

2. let 数组名: Array<类型> = [值1，值2]
> let arrHearps: Array<string> = ['安琪拉', '大乔']

- 特点：

元素类型 固定

数组长度不限制  

---

*TS新增数据类型*

---

**元组(tuple)**

- 概念：一个规定了元素数量 和 元素类型的"数组"，而每个元素的类型，可以不相同
- 语法：
let 元组名: [类型1, 类型2, 类型3] = [值1,值2, 值3]
> let tup1: [string, number, boolean] = ['讨厌~~', 18, true]

- 为什么要有元组？

TS中数组元素类型必须一致，如需要不同元素，这时可以用 元组 

- 特点：

声明时，要指定元素的个数

声明时，要为每个元素指定 类型

**枚举**

- 问题：性别标识

男：1，女：2，未知：3

```typescript
// 声明性别枚举
enum Gender {
  Boy = 1,
  Girl = 2,
  Unknown = 3
}
// 创建 用户性别变量
let userSex: Gender = Gender.Boy
// 判断 变量中的用户性别是否为 Boy
if(userSex == Gender.Boy){
  console.log(userSex); // 1
}else{
  console.log(userSex); // 2 or 3
}
```

- 声明语法：

一般, *枚举项* 用英文或数字, *枚举值* 用整型数字

```typescript
enum 枚举名{
  枚举项1 = 枚举值1,
  枚举项2 = 枚举值2,
  ...     = ...
}

// e.g
enum GunType {
  M416 = 1,
  AK47 = 2,
  Goza = 3
}
```

- 默认枚举值

*枚举值* 将自动生成 从 0 开始的 数值

```typescript
enum 枚举名{
  枚举项1,
  枚举项2,
  ...    
}

// e.g
enum GunType {
  M416, // -> 0
  AK47, // -> 1
  Goza  // -> 2
}
```

**any**

- 概念：any 代表任意类型，一般在获取 dom 时使用

> 在接收用户输入 或者 第三方代码库时， 还不确定会返回声明类型的值，这时就可以使用 any 类型

- 示例：

```typescript
let txtName: any = document.getElementById('txtN')
```

**void**

- 概念： void 代表没有类型，一般用在无返回值的函数
- 语法：

```typescript
function sayH11():string {
  return 'Hi,你好呀~~'
}
let re1 = sayHi1()

function syaHi2():void {
  console.log('hi,你个死人头')
}
sayHi2()
```

**never**

- 概念：never 代表不存在的值的类型，常用作为 抛出异常 或者 无限循环 的函数返回类型
- 语法：

```typescript
function test():never {
  while(true){

  }
}

function test2():never{
  throw new Error('讨厌~~~')
}
```

- 补充：never类型 是ts中的底部类型，所有类型 都是 never类型的 父类，所以 never类型值 可以 赋值给 任意类型 的变量

```typescript
let x: never = test()
let y: string = test()
```

### 类型推断

- 概念：如果变量的声明和初始化时在同一行，可以省略掉变量类型的声明

```typescript
let 变量名 = 值

||
相当于
||

let 变量名: 变量类型 = 值
```

- 验证：

```typescript
let age = 18 // age:number
age = '18' // 报错，不能赋值string类型的值
```

### 联合类型

- 概念：表示取值可以为多种类型中的一种

```typescript
let 变量名: 变量类型1 | 变量类型2 = 值
```

- eg. 接收 prompt 函数的返回值

```typescript
let dName: string | null = prompt('请输入小狗狗的名字')
console.log('hello' + dName)
```

## TypeScript 函数

### 返回值和参数

- 函数 返回值类型

如果函数没有返回值，则定义为 void
接收函数返回值的变量，它的变量类型需要与函数返回值的类型一致

```typescript
function 函数名(): 返回值类型{

}
let 变量名: 变量类型 = 函数名()
```

- 函数 形参类型

特点：实参 和 形参 的*类型和数量*要一致 

```typescript
function 函数名(形参1: 类型, 形参2: 类型): 返回值类型{

}
let 变量名: 变量类型 = 函数名(实参1, 实参2)
```

- 可选参数

可选参数的实参可传，也可不传

```typescript
function 函数名(形参1?: 类型): 返回值类型{

}
// 调用
函数名()        // 可以不传递实参
函数名(实参值)  // 也可以传递实参
```

- 参数 默认值

带默认值的参数，本身也是可选参数

```typescript
function 函数名(形参1: 类型 = 默认值1, 形参2: 类型 = 默认值2): 返回值类型{

}
// 调用
函数名()                  // 不传递实参
函数名(实参1)             // 传1个实参
函数名(实参1, 实参2)      // 传2个实参
函数名(undefined, 实参2)  // 只传第2个实参
```

- 剩余参数

特点：

剩余参数 只能 定义有一个

剩余参数 只能 定义为数组

剩余参数 只能 定义在 形参列表 最后

```typescript
function 函数名(形参1: 类型, 形参2: 类型, ...形参3: 类型): 返回值类型{
  console.log(a + b)
}
// 调用
函数名(1，2)  // 传递2个实参
函数名(1，2, 4)  // 传递3个实参
函数名(1，2, 4, 5, 6, 7)  // 传递2+个实参
```

## 类

面向对象

封装  继承 多态

### 类 - 批量创建对象

- 创建对象(构造函数 + new)

```js
function City(cName, cLevel){
  this.cname = cName;
  this.clevel = cLevel;
}
City.prototype.about = function(){
  console.log(`${this.cname} ${this.clevel}`)
}

// 调用
let c1 = new City('P城', 1)
console.log(c1.name)
c1.about()

let c2 = new City('G港', 5)
console.log(c2.name)
c2.about()
```

- 创建对象(类class - TS)

```ts
class City{
  // 成员变量
  cname: string;
  clevel: namber;
  // 构造函数 变量的初始化
  constructor(cName: string, cLevel: number){
    this.cname = cName;
    this.clevel = cLevel;
  }
  // 成员方法
  about(){
    console.log(`${this.cname} ${this.clevel}`)
  }
}
// 调用
let c1 = new City('P城', 1)
console.log(c1.name)
c1.about()
```

## 数据类

### LocalStorage

- loaclstorage 用于 在浏览器端 持久化保存 键值对 数据

> 浏览器 -- window对象 --- localStorage对象 <----> 写入/读取 <----> 硬盘 -- 数据（字符串）

- loaclstorage 特点
  - 大小限制：5M（chrome） 更大数据可以使用 浏览器本地数据库（indexDB 或 webSql）
  - 受同源访问限制，不允许跨域访问
  - 在浏览器 隐私模式 下无法使用
  - 因为在本地保存，不会发送数据，所有网络爬虫无法抓取
  - 只能存放字符串，当然想要存放对象的话，可以转成 json 格式


- loaclstorage 基本语法

| 方法名 | 作用 |
| :-:|:-:|
| loaclStorage.setItem('key','value') | 存放 键值对 数据 |
| loaclStorage.getItem('key') | 根据 key 查询 value 值， 没有则返回 null|
| loaclstorage.removeItem('key') | 根据 key 删除 对应键值对 |
| loaclstorage.clear() | 清空所有 键值对 数据 |

- loaclstorage 读写 对象

保存：

```ts
// 1.先将 对象 转为JSON字符串，然后再保存
let strJson: string = JSON.stringify(对象);

// 2.保存json字符串到本地
loaclStorage.setItem('key',strJson)
```

读取：

```ts
// 1.取出 json 字符串
let strJson: string | null = localStorage.getItem('key');

// 2.将 json字符串 转为 对象
let obj = JSON.parse(strJson as string)
```

### 数据类实现




