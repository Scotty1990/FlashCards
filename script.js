const numbers = document.querySelector(".numbers")
const cards = document.querySelector(".cards")
const card1 = document.querySelector("#one")
const card2 = document.querySelector("#two")
const card3 = document.querySelector("#three")
const card4 = document.querySelector("#four")
const card5 = document.querySelector("#five")
const card6 = document.querySelector("#six")
const card7 = document.querySelector("#seven")
const card8 = document.querySelector("#eight")
const card9 = document.querySelector("#nine")
const card10 = document.querySelector("#ten")
const card1Match = document.querySelector("#oneMatch")
const card2Match = document.querySelector("#twoMatch")
const card3Match = document.querySelector("#threeMatch")
const card4Match = document.querySelector("#fourMatch")
const card5Match = document.querySelector("#fiveMatch")
const card6Match = document.querySelector("#sixMatch")
const card7Match = document.querySelector("#sevenMatch")
const card8Match = document.querySelector("#eightMatch")
const card9Match = document.querySelector("#nineMatch")
const card10Match = document.querySelector("#tenMatch")
const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const num3 = document.querySelector("#num3")
const num4 = document.querySelector("#num4")
const num5 = document.querySelector("#num5")
const num6 = document.querySelector("#num6")
const num7 = document.querySelector("#num7")
const num8 = document.querySelector("#num8")
const num9 = document.querySelector("#num9")
const num10 = document.querySelector("#num10")
const num1Match = document.querySelector("#num1Match")
const num2Match = document.querySelector("#num2Match")
const num3Match = document.querySelector("#num3Match")
const num4Match = document.querySelector("#num4Match")
const num5Match = document.querySelector("#num5Match")
const num6Match = document.querySelector("#num6Match")
const num7Match = document.querySelector("#num7Match")
const num8Match = document.querySelector("#num8Match")
const num9Match = document.querySelector("#num9Match")
const num10Match = document.querySelector("#num10Match")
const flipCard = document.querySelector(".flipCard")

const cardArray = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card1Match, card2Match, card3Match, card4Match, card5Match, card6Match, card7Match, card8Match, card9Match, card10Match]
const numArray = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num1Match, num2Match, num3Match, num4Match, num5Match, num6Match, num7Match, num8Match, num9Match, num10Match] 

// card1.addEventListener("click", () => {
//     num1.classList.toggle("flipCard")
//     if(num1.style.display = "none") {
//         num1.style.display = "block"
//         console.log("it worked")
//     }
// })
// flipCard.addEventListener("click", () => {
//     if (num1.style.display = "block") {
//         num1.style.display = "none"
//         console.log("this is working too")
//     }
// })
// function flipCard() {
//     card1.classList.toggle("flipCard")
//     if (num1.style.display = "none") {
//         num1.style.display = "block"
//         console.log("it worked")
//     }
// }

function scoreCheck() {
    cardArray.forEach((card) => {
        if (cardArray[0].innerText == `1` && cardArray[10].innerText == `1`)
            console.log("you scored!")
        if (cardArray[1].innerText == `2` && cardArray[11].innerText == `2`)
            console.log("you scored!")
        if (cardArray[2].innerText == `3` && cardArray[12].innerText == `3`)
            console.log("you scored!")
        if (cardArray[3].innerText == `4` && cardArray[13].innerText == `4`)
            console.log("you scored!")
        if (cardArray[4].innerText == `5` && cardArray[14].innerText == `5`)
            console.log("you scored!")
        if (cardArray[5].innerText == `6` && cardArray[15].innerText == `6`)
            console.log("you scored!")
        if (cardArray[6].innerText == `7` && cardArray[16].innerText == `7`)
            console.log("you scored!")
        if (cardArray[7].innerText == `8` && cardArray[17].innerText == `8`)
            console.log("you scored!")
        if (cardArray[8].innerText == `9` && cardArray[18].innerText == `9`)
            console.log("you scored!")
        if (cardArray[9].innerText == `10` && cardArray[19].innerText == `10`)
            console.log("you scored!")
    })
    
}
// let counter = 0
// cardArray.forEach((card, num) => {
//     card.addEventListener("click", () => {    
//         if (counter % 2 == 0) {
//             numArray[num].style.display = "block"
//             console.log("you clicked me")
//             counter++
          
//         } else if (counter % 2 == 1){
//             numArray[num].style.display = "none"
//             console.log("now it's hidden")
//             counter++
//         }
//            scoreCheck()   
        
//     })
// })

// cardArray.forEach((card, num) => {
//     card.addEventListener("click", () => {    
//         if (numArray[num].style.display = "none") {
//             numArray[num].style.display = "block"
//             console.log("you clicked me")
//             scoreCheck() 
          
//         } 
             
        
//     })
//     cardArray.forEach((card, num) => {
//         card.addEventListener("click", () => {
//             if (numArray[num].style.display = "block") {
//                 numArray[num].style.display = "none"
//                 console.log("this is the second one")
//                 scoreCheck() 
//             }
//         })
//     })
// })


// for (let i = 0; i < cardArray.length; i++) {
//     cardArray[i].addEventListener('click', () => {
//         if (numArray[i].style.display = 'none'){
//             numArray[i].style.display = 'block'
//             console.log('changed to block')
//             scoreCheck()
//         } else {
//             numArray[i].style.display = 'none'
//             console.log("trying to hide")
//         }
//     })
// }