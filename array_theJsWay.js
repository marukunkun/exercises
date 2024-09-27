// Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

// Musketeers
// Write a program that:

    // Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
let musketeers = ['Athos', 'Porthos', 'Aramis']

    // Shows each array element using a for loop.
for(let i = 0; i < musketeers.length; i++) {
	console.log(musketeers[i])
}

    // Adds the "D'Artagnan" value to the array.
musketeers.push('D\'Artagnan')

    // Shows each array element using the forEach() method.
musketeers.forEach(el => console.log(el))

    // Remove poor Aramis.
musketeers.splice(2, 1)

    // Shows each array element using a for-of loop.
for(let musketeer of musketeers) {
	console.log(musketeer)
}

// Sum of values
    // Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
let values = [3, 11, 7, 2, 9, 10]
console.log(values.reduce((acc, curr) => acc + curr, 0))

// Array maximum
    // Write a program that creates the following array, then calculates and shows the array's maximum value.
const val = [3, 11, 7, 2, 9, 10];
console.log(Math.max(...val))

// List of words
// Write a program that asks the user for a word until the user types "stop". 
// The program then shows each of these words, except "stop".
let stopUser
while(stopUser !== 'stop') {
	stopUser = prompt('Tell me to stop!') 
  if(stopUser !== 'stop') {
  	console.log(`${stopUser} was not the password`)
  }
}