// Targeting HTML elements

const playingWindow = document.querySelector("#window")
const user = document.querySelector("#user")
const ball = document.querySelector("#playBall")

// Creating the bricks that will serve as targets for the game

class Brick {
  constructor (leftCorner, rightCorner) {
    this.bottomLeft = [leftCorner, rightCorner];
    this.bottomRight = [leftCorner + 150, rightCorner];
    this.topLeft = [leftCorner, rightCorner + 30];
    this.topRight = [leftCorner + 150, rightCorner + 30]
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
  // new Brick (15, 475),
  // new Brick (180, 475),
  // new Brick (345, 475),
  // new Brick (510, 475),
  // new Brick (675, 475),
  // new Brick (840, 475),
  // new Brick (1005, 475)
]


const brickFactory = () => {
  for (let i = 0; i < theBricks.length; i++) {
    const bricks = document.createElement("div")
    bricks.classList.add("brick")
    bricks.style.left = theBricks[i].bottomLeft[0] + "px"
    bricks.style.bottom = theBricks[i].bottomLeft[1] + "px"
    playingWindow.appendChild(bricks)
    // console.log(bricks.getClientRects())
  }
}

brickFactory()


// Adding the user's platform

const userPosition = [485,20]
let currentPosition = userPosition

const createUser = () => {
  user.style.left = currentPosition[0] + "px"
  user.style.bottom = currentPosition[1] +"px"
}
createUser()

// Moving the users platform


const moveUser = (e) => {
    switch(e.key) {
      case "ArrowLeft":
        if (currentPosition[0] > 0) {
        currentPosition[0] -= 18
        createUser()
        }
        break;
      case "ArrowRight":
        if (currentPosition[0] < 970) {
          currentPosition[0] += 18
          createUser()
        }
    }
}

document.addEventListener("keydown", moveUser)

// Ball positioning and movement

createBall = () => {
  ball.style.left = currentPositionBall[0] + "px"
  ball.style.bottom = currentPositionBall[1] + "px"
}

const ballBegin = [495, 35]
let currentPositionBall = ballBegin


createBall()


// Ball movement pattern

let ballHorizontal = 7
let ballVertical= 6

const ballMovement = () => {
  currentPositionBall[0] += ballHorizontal
  currentPositionBall[1] += ballVertical
  createBall()
  contactDetection()
}

setInterval(ballMovement, 25)

// Ball physics

const ballDiameter = 25

const contactDetection = () => {
  for (let i = 0; i < theBricks.length; i++) {
    if (((currentPositionBall[0] + ballDiameter) > theBricks[i].bottomLeft[0] && (currentPositionBall[0] + ballDiameter) < theBricks[i].bottomRight[0]) &&
        ((currentPositionBall[1] + ballDiameter) > theBricks[i].bottomLeft[1] && (currentPositionBall[1] + ballDiameter) < theBricks[i].topLeft[1])) {
          const allBricks = Array.from(document.querySelectorAll(".brick"))
          console.log(allBricks)
        }
      }


  if ((currentPositionBall[0] >= 1145) || 
      (currentPositionBall[1] >= 575)  ||
      (currentPositionBall[0] <= 0))
  {
    bounce()
  }
}


// Ball makes contact with surface response

const bounce = () => {
  if (ballHorizontal === 7 && ballVertical === 6) {
        ballVertical = -6
        return
  }
  if (ballHorizontal === 7 && ballVertical === -6) {
        ballHorizontal = -7
        return
  }
  if (ballHorizontal === -7 && ballVertical === -6) {
        ballVertical === 6
        return
  }
  if (ballHorizontal === -7 && ballVertical === 6) {
        ballHorizontal = 7
        return
  }
}


// Response to the ball going be low the user's platform


const loseBall = () => {
  if (currentPositionBall[1] < 0) {
      clearInterval(attemptInterval)
      //ADD SOME WAY SCORE GETS UPDATED
      alert("You lost a ball!")
  }
}

attemptInterval = setInterval(loseBall, 25)

// Checking to see if we can detect the bricks



