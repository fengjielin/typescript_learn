// 函数 返回值类型
function sayHi():string{
  return 'hi~~~'
}
let res1: string = sayHi()
console.log(res1);

// 函数 形参类型
function jumpSan(cityName:string):void{
  console.log(`兄嘚，跳哪里？`);
  console.log(`当然去你心里了，${cityName}`);
}
jumpSan('P城')
// jumpSan(110)

// 可选参数 默认值 
function buyGun(gunName: string = 'M416', count:number = 1, cityName?:string):void {
  console.log(`${gunName} ${count}`);
}

buyGun()
buyGun('AK47')
buyGun('M24', 3)
buyGun(undefined, 2)

// 剩余参数
function add(x: number, y: number, ...restOfNum:number[]):void{
  let resNum: number = x + y
  for(let ele of restOfNum){
    resNum += ele
  }
  console.log(resNum);
}

add(1,2)
add(1,2,3,4,5,6,7,8,9)