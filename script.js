const nums = document.querySelectorAll(".numbers")
const cards = document.querySelectorAll(".cards")
const p1Score = document.querySelector("#p1Score")
const winDisplay = document.querySelector("#winDisplay")
let playerPt = 0
/* function resetPair() {
    if ()
}
*/

let magnitude = []
let arr = []
let scoreKeep = []
let counter = 0

cards.forEach((card, i) => {
    card.addEventListener("click", () => {    
        nums[i].classList.toggle("numberToggle")
        magnitude.push(nums[i].innerText)
        arr.push(nums[i])
        counter++
        if (counter % 2 == 0) {
            if (magnitude[0] == magnitude[1] && scoreKeep.includes(arr[0]) == false && scoreKeep.includes(arr[1] == false)) { // and also here
                playerPt++
                p1Score.innerText = " " + playerPt
                scoreKeep.push(arr[0].innerText) // work with these two lines
                scoreKeep.push(arr[1].innerText) // here
                console.log("it's getting here")
            }
            magnitude.pop()
            magnitude.pop()
            setTimeout(() => {
                arr[0].classList.toggle("numberToggle")
                arr[1].classList.toggle("numberToggle")
                arr.pop()
                arr.pop()
            }, 3000)
            console.log(scoreKeep)
        }
    })
})
