import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snakes";

/* 控制器 */
class GameControl {
  food: Food;
  scorePanel: ScorePanel;
  snake: Snake;
  /* 移动方向 */
  direction: string = 'ArrowRight';
  /* 游戏是否结束 */
  isLive: boolean = true;
  constructor() {
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.snake = new Snake();
    this.init();
  }

  /* 初始化 */
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    this.run();
  }

  /* 键盘响应回调 */
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key;
  }

  /* 移动 */
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;
    
    switch (this.direction) {
      case 'ArrowUp': case 'Up': case 'W': case 'w': Y -= 10;
        break;
      case 'ArrowRight': case 'Right': case 'D': case 'd':  X += 10;
        break;
      case 'ArrowDown': case 'Down': case 'S': case 's': Y += 10;  
        break;
      case 'ArrowLeft': case 'Left': case 'A': case 'a':  X -= 10; 
        break;
    }

    

    // 是否吃到食物
    this.checkEat(X, Y)

    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error) {
      alert(error);
      this.isLive = false;
    }
    this.isLive && setTimeout(this.run.bind(this), 300 - (ScorePanel.level - 1) * 30);
  }

  /* 蛇吃到食物 */
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change();
      for(let i = 0; i < this.snake.bodies.length; i++){
        let snakeIX = (this.snake.bodies[i] as HTMLElement).offsetLeft;
        let snakeIY = (this.snake.bodies[i] as HTMLElement).offsetTop;
        if(snakeIX === this.food.X && snakeIY === this.food.Y){
          this.food.change();
        }
      }
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }
}

export default GameControl;