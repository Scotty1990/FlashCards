const nums = document.querySelectorAll(".numbers")
const cards = document.querySelectorAll(".cards")
const p1Score = document.querySelector("#p1Score")
const p2Score = document.querySelector("#p2Score")
const player1WinDisplay = document.querySelector("#player1WinDisplay")
const player2WinDisplay = document.querySelector("#player2WinDisplay")
const player2H2Display = document.querySelector("#player2H2Display")
const resetButton = document.querySelector("#reset")
const nameInput = document.querySelector("#p1Input")
const p1Name = document.querySelector("#p1Name")
const p2Name = document.querySelector("#p2Name")
const submit = document.querySelector("#submit")
const flipped = document.querySelectorAll(".flip-card")
const singlePlayerButton = document.querySelector("#singlePlayer")
const twoPlayerButton = document.querySelector("#twoPlayer")
const message = document.querySelector("#message")
const winReset = document.querySelector("#winReset")

/*
    Some bugs include not being able to display
    the winner's chosen name at the bottom when 
    they win. I really wanted to make that work
*/

let player1Pt = 0
let player2Pt = 0
let player1WinCounter = 0
let player2WinCounter = 0
let tempArray = []
let shownCardArray = []
let scoreKeep = []
let flipCounter = 0
let numArray = ["./pics/bart.png","./pics/grandpa-simpson.png","./pics/homer.png","./pics/lisa.png","./pics/maggie.png","./pics/marge.png","./pics/moe.png","./pics/ned-flanders.png","./pics/principal-skinner.png","./pics/sideshow-bob.png","./pics/bart.png","./pics/grandpa-simpson.png","./pics/homer.png","./pics/lisa.png","./pics/maggie.png","./pics/marge.png","./pics/moe.png","./pics/ned-flanders.png","./pics/principal-skinner.png","./pics/sideshow-bob.png"]
let playerCounter = 0
let turnCounter = 0
let twoPlayer = false
secondMessage = false

if (twoPlayer == true)
    message.innerText = `You're up ${p1Name.innerText}!`
else
    message.innerText = `Test your memory ${p1Name.innerText}!`

p2Name.style.visibility = "hidden"
player2H2Display.style.visibility = "hidden"
p2Score.style.visibility = "hidden"

function cardFlip() { 
    setTimeout(() => {
        /* 
            Had to change this from ".toggle" to ".add" so that cards 
            would stop flipping randomly if I pressed "reset" mid flip 
        */
        shownCardArray[0].classList.add("flipped")
        shownCardArray[1].classList.add("flipped")
        clearShownCardArray()
    }, 2000)
}

function clearTempArray() {
    tempArray.pop()
    tempArray.pop()
}

function clearShownCardArray() {
    shownCardArray.pop()
    shownCardArray.pop()
}

function shuffleNums() {
    for (let i = numArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (numArray.length))
        let temp = numArray[i]
        numArray[i] = numArray[j]
        numArray[j] = temp
    }
}

function setNumOrder() {
    nums.forEach((num, i) => {
        num.src = numArray[i]
    })
}

shuffleNums()
setNumOrder()

winReset.addEventListener("click", () => {
    player1WinCounter = 0
    player2WinCounter = 0
    player1WinDisplay.innerText = 0
    player2WinDisplay.innerText = 0
})

singlePlayerButton.addEventListener("click", () => {
    p2Name.style.visibility = "hidden"
    player2H2Display.style.visibility = "hidden"
    p2Score.style.visibility = "hidden"
    twoPlayer = false
    player1WinCounter = 0
    player1WinDisplay.innerText = " " + 0
})

twoPlayerButton.addEventListener("click", () => { 
    p2Name.style.visibility = "visible"
    player2H2Display.style.visibility = "visible"
    p2Score.style.visibility = "visible"
    twoPlayer = true
    player1WinCounter = 0
    player2WinCounter = 0
    player1WinDisplay.innerText = " " + 0
    player2WinDisplay.innerText = " " + 0
})

submit.addEventListener("click", () => {
    if (p2Name.style.visibility == "hidden") {
        p1Name.innerText = nameInput.value
        console.log("first if statement")
        message.innerText = `Test your memory ${p1Name.innerText}!`
    } else {
        if (playerCounter % 2 == 0) {           
            p1Name.innerText = nameInput.value
            playerCounter++
            message.innerText = `You're up ${p1Name.innerText}!`
            /* had two submit event listeners but that was causing
               issues then I fixed it with the single submit event
               listener with a conditional inside it
            */
        } else {
            p2Name.innerText = nameInput.value
            playerCounter++  
        }
    }
})

resetButton.addEventListener("click", () => {
    flipped.forEach((num) => {
        num.classList.add("flipped")
    })
    for (let i = scoreKeep.length - 1; i >= 0; i--) {
        scoreKeep.pop()
    }
    if (tempArray.length == 1) {
        tempArray.pop()
        flipCounter = 0
    }
    if (shownCardArray.length == 1)
        shownCardArray.pop()
    shuffleNums()
    // did a setTimeout so that the user wouldn't see the new 
    // cards before they reset
    setTimeout(() => {
        setNumOrder()
    }, 1000)
    player1Pt = 0
    player2Pt = 0
    p1Score.innerText = 0
    p2Score.innerText = 0
    message.innerText = `You're up ${p1Name.innerText}!`
    turnCounter = 0
})

flipped.forEach((card, i) => {
        card.addEventListener("click", () => {
        /* This if condition made it so that I couldn't flip a third
           card when there were two unmatching ones already
           face up. Making sure the shownCardArray[0] != card makes
           sure you can't just flip the card back over after you 
           select it. */
        if (shownCardArray.length < 2 && shownCardArray[0] != card) {
            flipped[i].classList.toggle("flipped")
            /* I had to have two separate temp arrays, shownCardArray
               shows the id's, which I believe is how the program
               knows whether you clicked on the same card twice in a
               row. tempArray uses the .src, which is how it knows it's
               matching */
            shownCardArray.push(flipped[i])
            tempArray.push(nums[i].src)
            console.log(shownCardArray[0]) // left these two console.logs in
            console.log(tempArray[0]) // to show the difference
            flipCounter++
            if (flipCounter % 2 == 0) {
                if (shownCardArray[0] == shownCardArray[1]) {
                    shownCardArray[0].classList.add("flipped")
                    clearShownCardArray()
                } else {
                    if (tempArray[0] == tempArray[1] && scoreKeep.includes(tempArray[0]) == false) { // and also here
                        if (turnCounter % 2 == 0 || twoPlayer == false) {
                            player1Pt++
                            p1Score.innerText = " " + player1Pt
                            turnCounter++
                            if (twoPlayer == true)
                                message.innerText = "Your cards match! Go again!"
                            secondMessage = true
                        }
                        else {
                            player2Pt++
                            p2Score.innerText = " " + player2Pt
                            turnCounter++
                            message.innerText = "Your cards match! Go again!"
                            secondMessage = true
                        }
                        scoreKeep.push(tempArray[0])
                        scoreKeep.push(tempArray[1])
                        clearShownCardArray()
                        if (scoreKeep.length == 20) {
                            if (player1Pt > player2Pt) {
                                player1WinCounter++
                                player1WinDisplay.innerText = " " + player1WinCounter
                                if (twoPlayer == false) {
                                    message.innerText = "You win! Congratulations!"
                                    secondMessage = true
                                }
                                else {
                                    message.innerText = `${p1Name.innerText} wins!`
                                    secondMessage = true
                                }
                            } else {
                                if (player2Pt > player1Pt) {
                                    player2WinCounter++
                                    player2WinDisplay.innerText = " " + player2WinCounter
                                    message.innerText = `${p2Name.innerText} wins!`
                                    secondMessage = true
                                } else {
                                    message.innerText = "You're both equally good!"
                                    secondMessage = true
                                }
                            }
                        }
                    } else {
                        cardFlip()
                        secondMessage = false
                    }
                }
                clearTempArray()
                turnCounter++
                if (twoPlayer == true && secondMessage == false) {
                    if (turnCounter % 2 == 0)
                        message.innerText = `You're up ${p1Name.innerText}!`
                    else
                        message.innerText = `You're up ${p2Name.innerText}!`
                }
            }
        }
    })
})
