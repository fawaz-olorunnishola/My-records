let firstCard = 10
let secondCard = 3
let hasBlackJack = false
let sum = firstCard + secondCard 
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cadrEl  = document.getElementById("card-el")

function startGame () {
    renderGame()
}

function renderGame() {
    cadrEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
        message = "Do you to draw new card"
    } else if (sum === 21) {
        message = "You 've got blackjack"
        hasBlackJack = true
    } else {
        message = "You 're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newcard() {
    let card = 6
    sum += card
    renderGame()
}





































// let firstCard = 6
// let secondCard = 40 
// let hasBlackJack = false

// let isAlive = true
// let sum = firstCard + secondCard  

// if (sum < 21) {
//     console.log("Do you to draw new card")
// } else if (sum === 21) {
//     console.log("Wohoo! You have blackjack")
//     hasBlackJack = true
// }else if (sum > 21) {
//     console.log("You 're out of the game")
//     isAlive = false
// }


// console.log(sum)


// let age = 6 


// if (age < 21) {
//     console.log("You cannot enter the club")
// } else if (age === 22) {
//     console.log("You 're Welcome")
// } 


// let age = 146 

// if (age < 100) {
//     console.log("Not eligible")
// }
// else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not eligible, you have already gotten one")
// }