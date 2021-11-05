const nums = document.querySelectorAll(".numbers")
const cards = document.querySelectorAll(".cards")
const p1Score = document.querySelector("#p1Score")
const winDisplay = document.querySelector("#winDisplay")
let playerPt = 0
/* function resetPair() {
    if ()
}
*/
let counter = 0

function resetPair() {
    for (let k = 0; k < 20; k++) {
        for(let j = 0; j < 20; j++) {
            if(nums[k] != nums[j]) {
                nums[k].classList.toggle("numberToggle")
                nums[j].classList.toggle("numberToggle")
            }
        }
    }
}

function scoreCheck() {
    for (let i = 0; i < 10; i++) {
        if (cards[i].innerText == `${i + 1}` && cards[i + 10].innerText == `${i + 1}`) {
            playerPt++
            p1Score.innerText = " " + playerPt
        }
        if (playerPt == 10) {
            console.log("You win!")
            winDisplay.innerText = " " + 1
        }
        if (counter % 2 == 1){
            resetPair()
            console.log(counter)
        }
    }
}

cards.forEach((card, i) => {
    card.addEventListener("click", () => {    
        nums[i].classList.toggle("numberToggle")
        scoreCheck()
        counter++   
    })
})

