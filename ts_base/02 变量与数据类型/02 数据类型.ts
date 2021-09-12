// 1.字符串类型
let aName: string = '貂蝉'

// 2.数组类型
let aAge: number = 18
aAge = 18.13
aAge = -18

// 3.布尔值类型
let isSingleDog: boolean = true
isSingleDog = false
// isSingleDog = 0 // ts中0，1 并不识别为真与假

// 4.undefined 和 null
let undef: undefined = undefined
let nul: null = null

// 5. 数组
let arrJs = [1, 'a', true, [], {}]
let arrHero: string[] = ['貂蝉', '安琪拉', '大乔']
let arrHeroAge: number[] = [18, 24, 27]
let arrHeroAge2: Array<number> = [18, 24, 27]

// 6. 元组（tuple）
let tup1: [string, number, boolean] = ['讨厌~~', 18, true]
tup1 = ['死鬼~~', 28, false]
// console.log(tup1[0]);
// console.log(tup1.length);

// 7. 枚举（enum）
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
  console.log(userSex);
}else{
  console.log(userSex);
}
