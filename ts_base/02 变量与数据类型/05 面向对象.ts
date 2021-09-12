// 类 class
class City{
  // 成员变量
  cName: string;
  cLevel: number;
  // 构造函数   
  constructor(name: string, level: number){
    this.cName = name;
    this.cLevel = level;
  }
  // 成员方法
  about(){
    console.log(`${this.cName} ${ this.cLevel}`);
  }
}

let c1 = new City('P城',1);
console.log(c1.cName);
c1.about();