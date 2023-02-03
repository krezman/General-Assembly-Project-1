// Targeting HTML elements

const playingWindow = document.querySelector("#window")
const user = document.querySelector("#user")
const ball = document.querySelector(".playBall")
const scoreNumber = document.querySelector("#scoreNum")
const ballNumber = document.querySelector("#ballsNum")
const launchBtn = document.querySelector("#newBall")
const beginBtn = document.querySelector("#Begin")

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
  new Brick (15, 475),
  new Brick (180, 475),
  new Brick (345, 475),
  new Brick (510, 475),
  new Brick (675, 475),
  new Brick (840, 475),
  new Brick (1005, 475)
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

// createBall = () => {
//   console.log("creat ball")
//   ball.style.left = currentPositionBall[0] + "px"
//   ball.style.bottom = currentPositionBall[1] + "px"
// }


const ballBegin = [495, 40]
let currentPositionBall = ballBegin

// createBall()




// Ball movement pattern

let ballHorizontal = 5
let ballVertical= 4


let attempt 

const ballMovement = () => {
  console.log("movement")
  ball.style.left = currentPositionBall[0] + "px"
  ball.style.bottom = currentPositionBall[1] + "px"
  currentPositionBall[0] += ballHorizontal
  currentPositionBall[1] += ballVertical
  contactDetection()
  //wallsReact()
  //userDefense()
}


//// attempt = setInterval(ballMovement, 15)

// Ball physics


const ballDiameter = 25

const contactDetection = () => {

/// Checking for brick contact and removal

  for (let i = 0; i < theBricks.length; i++) {
       if (((currentPositionBall[0] + ballDiameter) > theBricks[i].bottomLeft[0] && (currentPositionBall[0] + ballDiameter) < theBricks[i].bottomRight[0]) &&
          ((currentPositionBall[1] + ballDiameter) > theBricks[i].bottomLeft[1] && (currentPositionBall[1] + ballDiameter) < theBricks[i].topLeft[1])) {
          const allBricks = Array.from(document.querySelectorAll(".brick"))
          allBricks[i].classList.remove("brick")
          let brickCemetry = theBricks.splice(i, 1)
          bounce()
          pointsGained()
        }
      }
      if ((currentPositionBall[0] >= 1145) || 
          (currentPositionBall[1] >= 575)  ||
          (currentPositionBall[0] <= 0)) {
        bounce()
      }
      if ((currentPositionBall[0] > currentPosition[0] && currentPositionBall[0] < currentPosition[0] + 200) &&
      (currentPositionBall[1] > currentPosition[1] && currentPositionBall[1] < currentPosition[1] + 16)) {
      bounce()
  }

}

// const wallsReact = () => {
//   if ((currentPositionBall[0] >= 1145) || 
//   (currentPositionBall[1] >= 575)  ||
//   (currentPositionBall[0] <= 0)) {
// bounce()
// }
// }

// const userDefense = () => {
//   if ((currentPositionBall[0] > currentPosition[0] && currentPositionBall[0] < currentPosition[0] + 200) &&
//       (currentPositionBall[1] > currentPosition[1] && currentPositionBall[1] < currentPosition[1] + 16)) {
//       bounce()
//   }
// }


// Ball makes contact with surface response

const bounce = () => {
  if ((ballHorizontal === 5 && ballVertical === 4)) {
        ballVertical *= -1
        return
  }
  if ((ballHorizontal === 5 && ballVertical === -4)) {
        ballHorizontal *= -1
        return
  }
  if ((ballHorizontal === -5 && ballVertical === -4)) {
        ballVertical *= -1
        return
  }
  if ((ballHorizontal === -5 && ballVertical === 4)) {
        ballHorizontal *= -1
        return
  }
}


// Response to the ball going be low the user's platform


ballNumber.innerHTML = 2
ballsLeft = 2

let losing


const loseBall = () => {
  console.log("lose ball")
  if (currentPositionBall[1] < 0) {
    ballHorizontal = 0
    ballVertical = 0
    clearInterval(losing)
    clearInterval(attempt)
    ball.classList.remove("playBall")
  }
  if (currentPositionBall[1] < 0 && ballsLeft === 0) {
    alert("You lose!")
  }
}

losing = setInterval(loseBall, 250)



// Adding points to the board
score = 0

const pointsGained = () => {
  score += 100
  scoreNumber.innerHTML = score
  if (score === 1400) {
    console.log("You win!")
    brickFactory()
  }
}


// Player class

class Player  {
  constructor (number, score, balls) {
    this.number = number;
    this.score = 0;
    this.balls = 3
  }
}

// Starting the game

const startGame = () => {
  attempt = setInterval(ballMovement, 15)
  beginBtn.style.display = "none"
  launchBtn.style.display = "block"
}

beginBtn.addEventListener("click", startGame)




// Restarting the Ball 


const resetBall = () => {
  console.log("reset ball")
  ballHorizontal = 5
  ballVertical = 4
  ball.classList.add("playBall")
  currentPosition = [485, 20]
    currentPositionBall = [495, 50]
    attempt = setInterval(ballMovement, 15)
    losing = setInterval(loseBall, 250)
    ballsLeft--
    ballNumber.innerHTML = ballsLeft
}


launchBtn.addEventListener("click", resetBall)


