/* 蛇 */
class Snake {
  element: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;
  constructor() {
    this.element = <HTMLElement>document.getElementsByClassName('snake')[0];
    this.head = document.querySelector('.snake>div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }
  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value) {
    if (this.X === value) {
      return
    }

    // 限制移动方向，不能向反方向移动
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      if (value > this.X) {
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }

    // 蛇移出边界了
    if (value < 0 || value > 290) {
      throw new Error('撞墙')
    }

    this.moveBody();
    this.head.style.left = value + 'px';
    this.checkHeadBody();
  }

  set Y(value) {
    if (this.Y === value) {
      return;
    }



    // 限制移动方向，不能向反方向移动
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }

    // 蛇移出边界了
    if (value < 0 || value > 290) {
      throw new Error('撞墙')
    }

    this.moveBody();
    this.head.style.top = value + 'px';
    this.checkHeadBody();
  }

  /* 蛇 成长 */
  addBody() {
    // this.element.insertAdjacentHTML('beforeend', '<div></div>');
    this.element.appendChild(document.createElement('div'))
  }

  /* 身体 移动 */
  moveBody() {
    // 后节坐标 == 前节坐标
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  // 蛇头是否碰撞上身体
  checkHeadBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error("撞自己")
      }
    }
  }
}

export default Snake;