// Targeting HTML elements

const playingWindow = document.querySelector("#window")
const user = document.querySelector("#user")
const ball = document.querySelector(".playBall")
const playerNumber = document.querySelector("#playerNum")
const scoreNumber = document.querySelector("#scoreNum")
const ballNumber = document.querySelector("#ballsNum")
const launchBtn = document.querySelector("#newBall")
const beginBtn = document.querySelector("#Begin")

let newName = prompt("Who is playing?")
playerNumber.innerHTML = newName

alert("Welcome to BRICK BREAKER " + newName + "! You can use the left and right arrow keys to move your platform at the bottom of the screen from left to right in order to prevent the ball from going below it. You will have a total of 3 balls to beat the game, GOODLUCK!")

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


const ballBegin = [495, 40]
let currentPositionBall = ballBegin



// Ball movement pattern No. 1

let ballHorizontal = 5
let ballVertical= 4


let attempt 

let attempt2

const ballMovement = () => {
  console.log("Level 1 movement")
  ball.style.left = currentPositionBall[0] + "px"
  ball.style.bottom = currentPositionBall[1] + "px"
  currentPositionBall[0] += ballHorizontal
  currentPositionBall[1] += ballVertical
  contactDetection()
}



// Ball physics No. 1


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



ballNumber.innerHTML = 2
ballsLeft = 2


// Adding points to the board
score = 0




// Player class

class Player  {
  constructor (number, score, balls) {
    this.number = number;
    this.score = 0;
    this.balls = 3
  }
}



// Restarting the Ball 


const resetBall = () => {
    console.log("reset ball")
  if (theBricks.length > 1) {
    launchBtn.style.display = "none"
    ballHorizontal = 5
    ballVertical = 4
    ball.classList.add("playBall")
    currentPosition = [485, 20]
    currentPositionBall = [495, 50]
    attempt = setInterval(ballMovement, 15)
    losing = setInterval(loseBall, 250)
    ballsLeft--
    ballNumber.innerHTML = ballsLeft
  } else if (theBricks.length === 0) {
    launchBtn.style.display = "none"
      ballHorizontal = 5
      ballVertical = 4
      ball.classList.add("playBall")
      currentPosition = [485, 20]
      currentPositionBall = [495, 50]
      attempt2 = setInterval(ballMovement2, 15)
      losing = setInterval(loseBall, 250)
      ballsLeft--
      ballNumber.innerHTML = ballsLeft
    }
}

launchBtn.addEventListener("click", resetBall)


/// LEVEL 2

const theBricks2 = [
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
  new Brick (1005, 475),
  new Brick (15, 430),
  new Brick (180, 430),
  new Brick (345, 430),
  new Brick (510, 430),
  new Brick (675, 430),
  new Brick (840, 430),
  new Brick (1005, 430)
]


const brickFactory2 = () => {
  for (let i = 0; i < theBricks2.length; i++) {
    const bricks = document.createElement("div")
    bricks.classList.add("brick")
    bricks.style.left = theBricks2[i].bottomLeft[0] + "px"
    bricks.style.bottom = theBricks2[i].bottomLeft[1] + "px"
    playingWindow.appendChild(bricks)
    // console.log(bricks.getClientRects())
  }
}

const pointsGained = () => {
  console.log("points")
  score += 100
  scoreNumber.innerHTML = score
  if (score === 1400) {
    // console.log("====================")
    clearInterval(attempt)
    ball.classList.remove("playBall")
    brickFactory2()
    levelTwo()
  }
  if (score === 3500) {
    alert("You did it " + newName + ", You beat the game!!")
    ball.classList.remove("playBall")
  }
}

const contactDetection2 = () => {

  /// Checking for brick contact and removal
  
    for (let i = 0; i < theBricks2.length; i++) {
         if (((currentPositionBall[0] + ballDiameter) > theBricks2[i].bottomLeft[0] && (currentPositionBall[0] + ballDiameter) < theBricks2[i].bottomRight[0]) &&
            ((currentPositionBall[1] + ballDiameter) > theBricks2[i].bottomLeft[1] && (currentPositionBall[1] + ballDiameter) < theBricks2[i].topLeft[1])) {
            const allBricks = Array.from(document.querySelectorAll(".brick"))
            allBricks[i].classList.remove("brick")
            let brickCemetry2 = theBricks2.splice(i, 1)
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

  const ballMovement2 = () => {
    console.log("level 2 movement")
    ball.style.left = currentPositionBall[0] + "px"
    ball.style.bottom = currentPositionBall[1] + "px"
    currentPositionBall[0] += ballHorizontal
    currentPositionBall[1] += ballVertical
    contactDetection2()
  }


  const levelTwo = () => {
    ballHorizontal = 5
  ballVertical = 4
  ball.classList.add("playBall")
  currentPosition = [485, 20]
    currentPositionBall = [495, 50]
    attempt2 = setInterval(ballMovement2, 15)
  }



  

  // Response to the ball going be low the user's platform

  let losing


const loseBall = () => {
  console.log("lose ball")
  if (currentPositionBall[1] < 0 && ballsLeft === 0 && theBricks.length > 0) {
    clearInterval(attempt)
    clearInterval(losing)
    ball.classList.remove("playBall")
    alert("You lose at level 1 " + newName + "!")

  } else if (currentPositionBall[1] < 0 && ballsLeft === 0) {
    clearInterval(attempt2)
    clearInterval(losing)
    ball.classList.remove("playBall")
    alert("You lose at level 2 " + newName + "!")


  } else if (currentPositionBall[1] < 0 && theBricks.length > 0) {
    launchBtn.style.display = "block"
    ballHorizontal = 0
    ballVertical = 0
    clearInterval(losing)
    clearInterval(attempt)
    ball.classList.remove("playBall")


  } else if (currentPositionBall[1] < 0 && theBricks.length === 0) {
    launchBtn.style.display = "block"
    ballHorizontal = 0
    ballVertical = 0
    clearInterval(losing)
    clearInterval(attempt2)
    ball.classList.remove("playBall")
  } 

}





// Starting the game


const startGame = () => {
  attempt = setInterval(ballMovement, 15)
  losing = setInterval(loseBall, 250)
  beginBtn.style.display = "none"
}

beginBtn.addEventListener("click", startGame)
