// let firstName = "Fawas"
// let lastName = "Olorunnishola"

// let fullName = firstName + " " + lastName 

// console.log(fullName)

// let name = "Linda"
// let greeting = "Hi there"

// function called() {
//     console.log(greeting + " " + name)
// }


// let myPoints = 3
// function add3Points () {
//     myPoints += 3
// }

// function removePoint() {
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// removePoint()
// removePoint()

// console.log(myPoints)

// let errorParagraph = document.getElementById("error")

// console.log(errorParagraph)

// function purchase () {
//     console.log("Button clicked")
//     errorParagraph.textContent = "Something went wrong, Please try again, 5mins or so." 
// }

// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// let sumEl = document.getElementById("sum-el")

// function add() {
//     let result = num1 + num2
//     sumEl.textContent = "Sum: " + result
// }

// function substract() {
//     let result = num1 - num2
//     sumEl.textContent = "Sum: " + result
// }

// function divide() {
//     let result = num1 / num2
//     sumEl.textContent = "Sum: " + result
// }

// function multiply() {
//     let result = num1 * num2
//     sumEl.textContent = "Sum: " + result
// }




// BlackJack Practice\

// SETTING THE GAME
// const player = "Fawas"
// const opponent = "Pablo"
// const game = "Amazing Developer"

// let points = 0
// let hasWon = false

// // PLAYING THE GAME 
// points += 100
// hasWon = true

// // ANNOUNCE THE WINNER
// // TEMPLATING STRINGS
// if (hasWon) {
//     console.log(`${player} got  ${points} points and won the  ${game} game!`)
// }else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`)
// }

// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Class"]

// function logItems(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// logItems(myCourses)

// localStorage.setItem("mytraining", "htpps://pablofroder.com")
let myrecords =  localStorage.getItem("mytraining")
console.log(myrecords)