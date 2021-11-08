const nums = document.querySelectorAll(".numbers")
const cards = document.querySelectorAll(".cards")
const p1Score = document.querySelector("#p1Score")
const winDisplay = document.querySelector("#winDisplay")
const resetButton = document.querySelector("#reset")
const p1NameInput = document.querySelector("#p1Input")
const p1Name = document.querySelector("#p1Name")
const submit = document.querySelector("#submit")

let playerPt = 0
let winCounter = 0
let tempArray = []
let shownCardArray = []
let scoreKeep = []
let counter = 0
let numArray = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]

nums.forEach(num => {
    num.style.visibility = "hidden"
})

function cardFlip() {
    setTimeout(() => {
        shownCardArray[0].style.visibility = "hidden"
        shownCardArray[1].style.visibility = "hidden"
        clearShownCardArray()
    }, 3000)
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
        let j = Math.floor(Math.random() * (i + 1))
        let temp = numArray[i]
        numArray[i] = numArray[j]
        numArray[j] = temp
    }
}
// const newImg = document.createElement("img")
// newImg.src = "/Users/scottmacleod/Desktop/GA/sandbox/projects/FlashCards/bart"
// nums[1].appendChild(newImg)

function setNumOrder() {
    nums.forEach((num, i) => {
        num.innerText = numArray[i]
    })
}

shuffleNums()
setNumOrder()

submit.addEventListener("click", () => {
    p1Name.innerText = p1NameInput.value + ":"
})

resetButton.addEventListener("click", () => {
    nums.forEach((num) => {
        if (num.style.visibility == "visible")
            num.style.visibility = "hidden"
    })
    for (let i = scoreKeep.length - 1; i >= 0; i--) {
        scoreKeep.pop()
    }
    if (tempArray.length == 1) {
        tempArray.pop()
        counter = 0
    }
    if (shownCardArray.length == 1)
        shownCardArray.pop()
    shuffleNums()
    setNumOrder()
    playerPt = 0
    p1Score.innerText = 0
})

cards.forEach((card, i) => {
    card.addEventListener("click", () => {    
        nums[i].style.visibility = "visible"
        tempArray.push(nums[i].innerText)
        shownCardArray.push(nums[i])
        counter++
        if (counter % 2 == 0) {
            if (shownCardArray[0] == shownCardArray[1]) {
                nums[i].style.visibility = "hidden"
                clearShownCardArray()
            } else {
                if (tempArray[0] == tempArray[1] && scoreKeep.includes(tempArray[0]) == false) { // and also here
                    playerPt++
                    p1Score.innerText = " " + playerPt
                    scoreKeep.push(tempArray[0])
                    scoreKeep.push(tempArray[1])
                    clearShownCardArray()
                    if (playerPt == 10) {
                        winCounter++
                        winDisplay.innerText = " " + winCounter
                    }
                } else {
                    cardFlip()
                }
            }
            clearTempArray()
        }
    })
})
