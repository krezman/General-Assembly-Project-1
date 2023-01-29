// Targeting HTML elements

const playingWindow = document.querySelector("#window")


// Creating the bricks that will serve as targets for the game

class Brick {
  constructor (leftCorner, rightCorner) {
    this.bottomLeft = [leftCorner + 325, rightCorner - 290];
    this.bottomRight = [leftCorner + 475, rightCorner - 290];
    this.topLeft = [leftCorner + 325, rightCorner - 320];
    this.topRight = [leftCorner + 475, rightCorner - 320]
  }
}

const theBricks = [
  new Brick(15, 520),
  new Brick(180, 520),
  new Brick(345, 520),
  new Brick(510, 520),
  new Brick(675, 520),
  new Brick (840, 520),
  new Brick (1005, 520),
  new Brick (15, 475),
  new Brick (15, 475),
  new Brick (180, 475),
  new Brick (345, 475),
  new Brick (510, 475),
  new Brick (675, 475),
  new Brick (840, 475),
  new Brick (1005, 475)
]

console.log(theBricks[1])

const brickFactory = () => {
  for (let i = 0; i < theBricks.length; i++) {
    const bricks = document.createElement("div")
    bricks.classList.add("brick")
    bricks.style.left = (theBricks[i].bottomLeft[0] - 325) + "px"
    bricks.style.bottom = (theBricks[i].bottomLeft[1] + 290) + "px"
    playingWindow.appendChild(bricks)
    console.log(bricks.getClientRects())
  }
}

brickFactory()