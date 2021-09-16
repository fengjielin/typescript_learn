class DataHelper {
  dataKey: string;
  constructor(dataKey: string) {
    this.dataKey = dataKey;
  }

  /* 读取 localStorage */
  readData(): Object[] {
    let strData: string | null = localStorage.getItem(this.dataKey);
    let arrData: Array<Object> = [];
    if(strData != null){
      arrData = JSON.parse(strData);
    }
    return arrData;
  }

  /* 新增评论 */
  addData(conStr: string) {
    let arrData: Array<Object> = this.readData();
    let obj: Object = {
      id:1,
      content: conStr,
    }
    
    // 存放id的数组
    let idArr:number[] = []
    arrData.forEach(item => {
      // idArr.push(item[this.primaryKey])
    })
    return obj
  }

  /* 存储 localStorage */
  saveData(arrData: Array<Object>) {
    localStorage.setItem(this.dataKey, JSON.stringify(arrData));
  }

  removeDataById() {

  }
}

// ts 中怎么访问对象中的属性
// interface Content {
//   content: string;
//   [id:string]: number;
// }

let dhData: Object[] = [{id:1,content:'忆年十五心尚孩,健如黄犊走复来。'}]
localStorage.setItem('dhData', JSON.stringify(dhData))
let dh = new DataHelper('dhData');
console.log(dh.readData());
console.dir(dh.addData('人生璀璨'));
