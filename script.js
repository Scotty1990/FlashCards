const nums = document.querySelectorAll(".numbers")
const cards = document.querySelectorAll(".cards")
const p1Score = document.querySelector("#p1Score")
const winDisplay = document.querySelector("#winDisplay")
let playerPt = 0
/* function resetPair() {
    if ()
}
*/

let tempArray = []
let arr = []
let scoreKeep = []
let counter = 0
let numArray = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]

// I found out that the program doesn't stop at a setTimeout, it
// keeps running the program and runs setTimeout a little later
function cardFlip() {
    setTimeout(() => {
        arr[0].classList.toggle("numberToggle")
        arr[1].classList.toggle("numberToggle")
        clearArr()
    }, 3000)
}

function magnitude() {
    tempArray.pop()
    tempArray.pop()
}

function clearArr() {
    arr.pop()
    arr.pop()
}

function shuffleNums() {
    for (let i = numArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = numArray[i]
        console.log(numArray)
        numArray[i] = numArray[j]
        console.log(numArray)
        numArray[j] = temp
        console.log(numArray)
    }
}
// change newNum to nums maybe? still playing with this, remember that there are no numbers in HTML document right now
function setNumOrder() {
    nums.forEach((num, i) => {
        num.innerText = numArray[i]
    })
}
shuffleNums()
setNumOrder()

cards.forEach((card, i) => {
    card.addEventListener("click", () => {    
        nums[i].classList.toggle("numberToggle")
        tempArray.push(nums[i].innerText)
        arr.push(nums[i])
        counter++
        if (counter % 2 == 0) {
            if (tempArray[0] == tempArray[1] && (scoreKeep.includes(tempArray[0]) == false && scoreKeep.includes(tempArray[1]) == false)) { // and also here
                playerPt++
                p1Score.innerText = " " + playerPt
                scoreKeep.push(tempArray[0])
                scoreKeep.push(tempArray[1])
                clearArr()
                if (playerPt == 10) {
                    winDisplay.innerText = " " + 1
                }
            } else {
                cardFlip()
            }
            magnitude()
        }
    })
})
