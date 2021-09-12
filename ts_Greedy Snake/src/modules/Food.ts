/* 食物 */
class Food{
  element: HTMLElement;
  constructor(){
    this.element = <HTMLElement>document.getElementsByClassName('food')[0];
    this.change();
  }

  get X(){
    return this.element.offsetLeft;
  }

  get Y(){
    return this.element.offsetTop;
  }
  
  /* 改变食物的坐标 */
  change(){
    let left = Math.round(Math.random()*29) * 10;
    let top = Math.round(Math.random()*29) * 10;
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}

export default Food;

// const food = new Food();
// console.log(food.X,food.Y);
// food.change()
// console.log(food.X,food.Y);
