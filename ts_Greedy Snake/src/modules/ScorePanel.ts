/* 积分板 */
class ScorePanel{
  static score = 0;
  static level = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  // 等级限制
  maxLevel: number;
  // 等级提升时机
  upScore: number;
  constructor( upScore: number = 10,maxLevel: number = 10){
    this.scoreEle = <HTMLElement>document.getElementsByClassName('score')[0];
    this.levelEle = <HTMLElement>document.getElementsByClassName('level')[0];
    this.maxLevel = maxLevel;
    this.upScore = upScore
  }

  /* 分数增加 */
  addScore(){
    this.scoreEle.innerHTML = ++ScorePanel.score + '';
    /* 满足条件等级提升 */
    ScorePanel.score % this.upScore === 0 ? this.levelUp() : '';
  }

  /* 等级提升 */
  levelUp(){
    ScorePanel.level < this.maxLevel ? this.levelEle.innerHTML = ++ ScorePanel.level + '' : '';
  }
}

export default ScorePanel;

// const scorePanel = new ScorePanel(2,100);
// for(let i = 0; i < 100; i++){
//   scorePanel.addScore()
// }