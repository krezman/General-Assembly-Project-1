// Targeting HTML elements

const playingWindow = document.querySelector("#window")


// Creating the blocks that will serve as targets for the game

class Brick {
  constructor (leftValue, rightValue) {
    this.bottomLeft = [leftValue, rightValue];
    this.bottomRight = [leftValue + 100, rightValue];
    this.topLeft = [leftValue, rightValue + 20];
    this.topRight = [leftValue + 100, rightValue + 20]
  }
}