// Build a habit of choosing good variable names in all exercises, starting with these ones.

// Improved hello
    // Write a program that asks the user for his first name and his last name. 
    // The program then displays them in one sentence.

let firstName = prompt('What\'s your first name?')
let lastName = prompt('What\'s your last name?')
console.log(`Your name is ${firstName} and you're ${lastName} years old.`)

// Final values
    // Observe the following program and try to predict the final values of its variables.

let a = 2
a -= 1 // 2 - 1 = 1
a++ // 2
let b = 8
b += 2 // 8 + 2 = 10
const c = a + b * b // 2 + 100 = 102
const d = a * b + b // 20 + 10 = 30
const e = a * (b + b) // 2 * 20 = 40
const f = a * b / a // 20 / 2 = 10
const g = b / a * a // 5 / 2 = 10
console.log(a, b, c, d, e, f, g) // 2, 10, 102, 30, 40, 10, 10

// VAT calculation
    // Write a program that asks the user for a raw price.
    // After that, it calculates the corresponding final price using a VAT rate of 20.6%.

let rawPrice = +prompt('How much for this item?')
let finalPrice = rawPrice / 100 * 20.6 + rawPrice
console.log(finalPrice)

// From Celsius to Fahrenheit degrees
    // Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
let temp = +prompt('What temperature is it today in Bruxelles?')
console.log(`Wow, is it really ${temp* 9/5 + 32} Fahrenheit over there?`)

// Variable swapping
    // Observe the following program.

let number1 = 5;
let number2 = 3;

// Solution 1
let number3 = number1
number1 = number2
number2 = number3

console.log(number1) // Should show 3
console.log(number2) // Should show 5

// Add the necessary code to swap the values of variables number1 and number2.

// Tip
// This exercise has several valid solutions. You may use more than two variables to solve it.