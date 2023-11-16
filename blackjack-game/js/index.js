let firstCard = 10
let secondCard = 11
let hasBlackJack = false
let sum = firstCard + secondCard + 4
let isAlive = true
let message = ""

if (sum < 21) {
    message = ("Do you to draw new card")
} else if (sum === 21) {
    message = ("Wohoo! You have blackjack")
    hasBlackJack = true
}else if (sum > 21) {
    message = ("You 're out of the game")
    isAlive = false
}

console.log(message)




































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