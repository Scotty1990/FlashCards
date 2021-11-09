const nums = document.querySelectorAll(".numbers")
const cards = document.querySelectorAll(".cards")
const p1Score = document.querySelector("#p1Score")
const winDisplay = document.querySelector("#winDisplay")
const resetButton = document.querySelector("#reset")
const p1NameInput = document.querySelector("#p1Input")
const p1Name = document.querySelector("#p1Name")
const submit = document.querySelector("#submit")
const flipped = document.querySelectorAll(".flip-card")
const flipCardInner = document.querySelectorAll(".flip-card-inner")

let playerPt = 0
let winCounter = 0
let tempArray = []
let shownCardArray = []
let scoreKeep = []
let counter = 0
let numArray = ["./pics/bart.png","./pics/grandpa-simpson.png","./pics/homer.png","./pics/lisa.png","./pics/maggie.jpeg","./pics/marge.png","./pics/moe.png","./pics/ned-flanders.jpeg","./pics/principal-skinner.png","./pics/sideshow-bob.png","./pics/bart.png","./pics/grandpa-simpson.png","./pics/homer.png","./pics/lisa.png","./pics/maggie.jpeg","./pics/marge.png","./pics/moe.png","./pics/ned-flanders.jpeg","./pics/principal-skinner.png","./pics/sideshow-bob.png"]
// let flipArray = []

function cardFlip(i, j) {
    setTimeout(() => {
        // flipArray[0].classList.toggle("flipped")
        // flipArray[1].classList.toggle("flipped")
        shownCardArray[0].classList.toggle("flipped")
        shownCardArray[1].classList.toggle("flipped")
        clearShownCardArray()
    }, 3000)
}

// function cardFlip() {
//     setTimeout(() => {
//         shownCardArray[0].style.visibility = "hidden"
//         shownCardArray[1].style.visibility = "hidden"
//         clearShownCardArray()
//     }, 3000)
// }

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

function setNumOrder() {
    nums.forEach((num, i) => {
        num.src = numArray[i]
    })
}

shuffleNums()
setNumOrder()

submit.addEventListener("click", () => {
    p1Name.innerText = p1NameInput.value + ":"
})

resetButton.addEventListener("click", () => {
    flipped.forEach((num) => {
        num.classList.add("flipped")
    })
    // nums[i].style.visibility = "hidden"
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

flipped.forEach((card, i) => {
        card.addEventListener("click", () => {
        flipped[i].classList.toggle("flipped")
        nums[i].style.visibility = "visible"
        shownCardArray.push(flipped[i])
        tempArray.push(nums[i].src)
        // shownCardArray.push(nums[i])
        counter++
        if (counter % 2 == 0) {
            if (shownCardArray[0] == shownCardArray[1]) {
                shownCardArray[0].classList.toggle("flipped")
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

// cards.forEach((card, i, j) => {
//     card.addEventListener("click", () => {  
//         flipped[j].classList.toggle("flipped")  
//         // nums[i].style.visibility = "visible"
//         tempArray.push(nums[i].src)
//         shownCardArray.push(nums[i])
//         counter++
//         if (counter % 2 == 0) {
//             if (shownCardArray[0] == shownCardArray[1]) {
//                 nums[i].style.visibility = "hidden"
//                 clearShownCardArray()
//             } else {
//                 if (tempArray[0] == tempArray[1] && scoreKeep.includes(tempArray[0]) == false) { // and also here
//                     playerPt++
//                     p1Score.innerText = " " + playerPt
//                     scoreKeep.push(tempArray[0])
//                     scoreKeep.push(tempArray[1])
//                     clearShownCardArray()
//                     if (playerPt == 10) {
//                         winCounter++
//                         winDisplay.innerText = " " + winCounter
//                     }
//                 } else {
//                     cardFlip()
//                 }
//             }
//             clearTempArray()
//         }
//     })
// })
