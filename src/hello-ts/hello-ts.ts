// /**
//  * http://ts.xcatliu.com/
//  * TypeScript 入门教程
//  */

// // function sayHello(person: string){
// //   if(typeof person === 'string'){
// //     return `Hello ${person}`
// //   }else{
// //     throw new Error('person is not a string')
// //   }
// // }

// // let user: string = 'FengJieLin'
// // // let user = [0,1,2]
// // console.log(sayHello(user));

// // interface XiaoJiejie{
// //   name:string,
// //   age:number
// // }

// // const xiaohong:XiaoJiejie = {
// //   name:'小红',
// //   age:18
// // }

// // console.log(xiaohong.age);

// // 类型约束
// // 类型推论

// /* 基础 */

// /* 布尔值 boolean */
// let isDone: boolean = false

// /* 数值 number */
// let decLiteral: number = 6

// /* 字符串 string */
// let myName: string = 'FengJieLin'

// /* 空值 void */
// function alertName(): void {
//   alert("My name is Tom")
// }

// /* null undefined */
// let u: undefined = undefined
// let n: null = null
// // 与 void 的区别是，undefined 和 null 是所有类型的子类型。

// // let num_nu: number = null //不能将类型“null”分配给类型“number”。
// // let num_un: number = undefined //不能将类型“undefined”分配给类型“number”。

// // let nu: void = null //不能将类型“null”分配给类型“void”。
// let un: void = undefined
// // 报错原因 tsconfig.json配置文件 设置了严格校验类型
// // "strict": true, /* Enable all strict type-checking options. */
// // 默认是严格校验类型的。

// /* 任意值 (Any) */
// let myFavoriteNumber: any = 'seven'
// myFavoriteNumber = 7
// // console.log(myFavoriteNumber.name); // 不会报错，输出undefined
// // myFavoriteNumber.setName('Jerry') 严格模式下报错
// /* 在声明时如未指定类型，则默认设置为任意值类型 */

// /* 类型推论 Type Inference */
// // TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。
// // 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查

// /* 联合类型 Union Types*/
// // 取值可以为多种类型中的一种
// let num: string | number
// num = 'seven'
// num = 7
// // num = true //不能将类型“boolean”分配给类型“string | number”。

// // 访问联合类型中共有的属性和方法
// function getString(something: string | number): string {
//   return something.toString();
// }
// // 为什么还是返回类型为number时会报错，而string是正常呢？
// // console.log(getString(123));

// /* 接口（Interface）对象的类型 */
// // 对行为的抽象，使用类（classes）去实现（implement）
// interface Person {
//   name: string
//   age: number
// }
// let tom: Person = {
//   name: 'Tom',
//   age: 18
// }
// // 赋值的时候，变量的形状必须和接口的形状保持一致。也就是属性要一致。

// // 可选属性 这时就可以什么变量时少添加一些变量，但不能比接口多
// interface Person2 {
//   name: string
//   ag?: number // 可选
// }
// let tom2: Person2 = {
//   name: 'Tom',
//   // gender:'male' //报错，不能添加未定义的属性
// }

// /* 任意类型 */
// interface Person3 {
//   name: string
//   age?: number
//   [propName: string]: any
//   // [propName: string]: string | number 
//   // 文档里说：一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型；
//   // 但是在我这里会报错？
//   // 类型“number | undefined”的属性“age”不能赋给“string”索引类型“string | number”。
// }
// let tom3: Person3 = {
//   name: 'Tom',
//   age: 18,
//   gender: 'male',
//   a: 'a'
// }

// /* 只读属性 readonly*/
// // 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
// interface Person4 {
//   readonly id: number
//   name: string
//   age?: number
//   [propName: string]: any
// }
// let tom4: Person4 = {
//   id: 123,
//   name: 'Tom',
//   gender: 'Male',
// }
// // tom4.id = 258 // 报错，无法分配到"id"，因为它是只读属性。

// /**
//  * 对接口的总结：
//  * 接口里定义了基础属性，可选属性，任意属性，只读属性。
//  * 基础属性约束了形状；
//  * 可选属性在属性后加问号，表示可选;
//  * 任意属性采用中括号进行定义string类型的属性；
//  * 只读属性在属性前加readonly，不能被写
//  */

// /* 数组的类型 */
// // 类型 []
// let fibonacci: number[] = [1, 1, 2, 3, 5]

// // let fibonacci2: number[] = [1,'1',2,3,5] // 报错， 不能将类型“string”分配给类型“number”。
// // fibonacci.push('9') // 报错，类型“string”的参数不能赋给类型“number”的参数。
// // 类型约束

// /* 数组泛型（Array Generic） */
// let fibonacci3: Array<number> = [1, 1, 2, 3, 5]

// /* 接口描述数组 */
// interface NumberArray {
//   [index: number]: number
// }
// let fibonacci4: NumberArray = [1, 1, 2, 3, 5]

// /* 类数组（Array-like Object） */
// function sum() {
//   // let args:number[] = arguments //报错，类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 15 项。
//   let args: {
//     [index: number]: number
//     length: number
//     callee: Function
//   } = arguments
//   let args2: IArguments = arguments // 内置的接口对象
// }

// /* any 在数组中的应用 */
// let list: any[] = ['xiaobai', 23, { adds: '文华新大街' }]

// /* 函数的类型 */
// // 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到

// // 函数声明 Function Declartion
// function sum2(x: number, y: number): number {
//   return x + y
// }
// sum2(1, 2)
// // sum2(1,2,3) //报错, 应有 2 个参数，但获得 3 个。
// // sum2(1) //报错, 应有 2 个参数，但获得 1 个。

// // 函数表达式 Function Expression
// let mySum = function (x: number, y: number): number {
//   return x + y
// }
// // 通过赋值操作进行类型推论而推断
// // 手动添加类型
// let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
//   return x + y
// }
// // 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

// /* 接口描述函数 */
// // 对等号左侧进行类型限制
// interface SearchFunc {
//   (source: string, subString: string): boolean
// }
// let mySearch: SearchFunc
// mySearch = function (source: string, subString: string) {
//   return source.search(subString) !== -1
//   // search() 方法用于检索字符串中指定的子字符串，
//   // 或检索与正则表达式相匹配的子字符串。
// }

// /* 可选参数 */
// // 可选参数必须接在必需参数后面
// function buildName(firstName: string, lastName?: string) {
//   if (lastName) {
//     return firstName + ' ' + lastName
//   } else {
//     return firstName
//   }
// }
// console.log(buildName('Feng', 'Jielin'));
// console.log(buildName('Feng'));

// /* 参数默认值 */
// // TypeScript 会将添加了默认值的参数识别为可选参数
// // 可以给任意的参数添加默认值，不受可选参数必须在必选参数后面的限制
// // 但是如果为前面的参数添加默认值，而在传参时，不给值，需要传undefined
// function stringJoin(firstStr: string, lastStr: string = 'TypeScript') {
//   return firstStr + ' ' + lastStr
// }
// function stringJoin2(firstStr: string = 'TypeScript', lastStr: string) {
//   return firstStr + ' ' + lastStr
// }
// console.log(stringJoin('Hello', 'TypeScript'));
// console.log(stringJoin2(undefined, 'Hello'));

// /* 剩余参数 ...rest*/
// function push(array: any[], ...items: any[]) {
//   items.forEach((item) => {
//     array.push(item)
//   })
// }
// let a: any[] = [] //严格模式下，不进行类型约束会报错，变量“a”在某些无法确定其类型的位置处隐式具有类型“any[]”。
// push(a, 1, 2, 3)
// console.log('将剩余参数push进a中:', a);

// /* 重载 */
// // 一个函数接受不同数量或类型的参数时，作出不同的处理。
// function reverse(x: number): number
// function reverse(x: string): string
// function reverse(x: number | string): number | string | void {
//   if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''))
//   } else if (typeof x === 'string') {
//     return x.split('').reverse().join('')
//   }
// }
// console.log('字符串翻转:', reverse('FengJielin'));
// console.log('数值翻转:', reverse(20210905));

// // override和overload
// // TS中的重载是create different function of the same name with different signature.

// /* 类型断言（Type Assertion） */
// // 用来手动指定一个值的类型。
// // 值 as 类型（推荐） 或者 <类型>值

// // 1.将一个联合类型断言为其中一个类型
// interface Cat {
//   name: string
//   run(): void
// }
// interface Fish {
//   name: string
//   swim(): void
// }
// function isFish(animal: Cat | Fish): boolean {
//   if (typeof (animal as Fish).swim === 'function') {
//     return true
//   }
//   return false
// }
// const tom1: Cat = {
//   name: 'Tom',
//   run: () => { console.log('run'); }
// }
// console.log(isFish(tom1));
// /**
//  * 类型断言只能够「欺骗」TypeScript 编译器，
//  * 无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误
//  */

// // 2.将一个父类断言为更加具体的子类
// interface ApiErrowr extends Error {
//   code: number
// }
// interface HttpError extends Error {
//   statusCode: number
// }
// function isApiError(error: Error){
//   if(typeof (error as ApiErrowr).code === 'number'){
//     return true
//   }
//   return false
// }

// // 3.将任何一个类型断言为 any
// // window.foo = 1 // 报错， 类型“Window & typeof globalThis”上不存在属性“foo”。
// (globalThis as any).foo = 1

// // 4.将 any 断言为一个具体的类型
// function getCacheData(key: string): any {
//   // console.log(globalThis);
//   // return (window as any).cache[key]; // node的环境下有问题，没有window
//   return {key:'tom5',run(){
//     console.log('tom5');
//   }}
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// const tom5 = getCacheData('tom5') as Cat;
// tom5.run()

// /**
//  * 类型断言的总结：
//  * 
//  * 联合类型可以被断言为其中一个类型
//  * 父类可以被断言为子类
//  * 任何类型都可以被断言为 any
//  * any 可以被断言为任何类型
//  * 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可
//  */

// /* 双重断言 */
// // as any as Foo
// // 除非迫不得已，千万别用双重断言。

// /* 类型断言 vs 类型转换 */

// /* 类型断言 vs 类型声明 */

// /* 类型断言 vs 泛型 */

// /* 声明文件 .d.ts */
// // 声明语句 ---> 声明文件
// // https://www.typescriptlang.org/dt/search?search= 搜索需要的声明文件

// // 自动生成声明文件
// // 如果库的源码本身就是由 ts 写的，
// // 那么在使用 tsc 脚本将 ts 编译为 js 的时候，添加 declaration 选项（简写 -d），
// // 就可以同时也生成 .d.ts 声明文件了。