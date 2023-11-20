let player = {
    name: "Pablo",
    chips: 200
}
let cards = [] // array - ordered list of items.
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl  = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// playerEl.textContent = player.name + ": 5" + player.chips


function getRandomCard() {

    let randomnumber =   Math.floor(Math.random()*20) + 1
    if (randomnumber > 10) {
        return 10
    } else if (randomnumber === 1) {
        return 11
    } else {
        return randomnumber
    }
}

function startGame () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i <cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
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
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
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