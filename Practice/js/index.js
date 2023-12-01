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

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

// localStorage.setItem("mytraining", "htpps://pablofroder.com")

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}