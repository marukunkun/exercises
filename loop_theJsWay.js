// Coding time!
// Try to code each exercise twice, once with a while loop and the other with a for, to see for yourself which one is the most appropriate.


// 1. Carousel
    // Write a program that launches a carousel for 10 turns, showing the turn number each time.

    /// 'While loop' answer
let turn = 1
while(turn <= 10) {
    console.log(`Carousel turn number ${turn}`)
    turn++
}   

    /// 'For loop' answer
for(i = 1; i <= 10; i++) {
    console.log(`Carousel turn number ${i}`)
}

    // When it's done, improve it so that the number of turns is given by the user. 

    /// 'While loop' answer
let t = prompt('turn number ?')  
while(t <= 10) {
    console.log(`Carousel turn number ${t}`)
    t++
}   

    /// 'For loop' answer
for(t; t <= 10; t++) {
    console.log(`Carousel turn number ${t}`)
}


// 2. Parity
    // Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}

    // This program uses the modulo operator %, which calculates the remainder after division of one number by another. 
    // It's often used to assess number parity.

    // console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
    // console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
    // console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
    // console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
    // console.log(20 % 3); // 2 because 20 = 3 * 6 + 2

    // Improve the program so that it also shows odd numbers.
    // !!! info
    // This program must show exactly 10 numbers including the first one, not 11 numbers!

    /// 'For loop' answer
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`)
  } else {
    console.log(`${i} is odd`)
  }
}

    /// 'While loop' answer
let oddOrEven = 1
while(oddOrEven <= 10) {
	if (oddOrEven % 2 === 0) {
    console.log(`${oddOrEven} is even`)
  } else {
    console.log(`${oddOrEven} is odd`)
  }
  oddOrEven++
}

    //  Improve it again to replace the initial number 1 by a number given by the user.

    /// 'For loop' answer
let n = prompt('number ?')

for (n ; n <= 10; n++) {
  if (n % 2 === 0) {
    console.log(`${n} is even`)
  } else {
    console.log(`${n} is odd`)
  }
}

    /// 'While loop' answer
n = prompt('number ?')
while(n <= 10) {
	if (n % 2 === 0) {
    console.log(`${n} is even`)
  } else {
    console.log(`${n} is odd`)
  }
  n++
}

// 3. Input validation
    // Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

    /// 'While loop' answer
let number = 101  
while(number > 100) {
	number = prompt('give a lesser than or equal to 100')
}

    /// 'For loop' answer
for(let n, number = 101 ; number > 100; n++) {
	number = prompt('give a lesser than or equal to 100')
}  

    // When you are done with the above, improve the program so that the terminating number is between 50 and 100.

    /// 'While loop' answer
number = 1
while(number < 50 || number > 100 ) {
	number = prompt('give a number between 50 and 100')
}

    /// 'For loop' answer
for(let n, number = 1 ; number < 50 || number > 100; n++) {
	number = prompt('give a number between 50 and 100')
}


// 4. Multiplication table
    // Write a program that asks the user for a number, then shows the multiplication table for this number.

    /// 'For loop' answer
let num = prompt('enter a number ?')

for(let i = 1; i <= 10; i++) {
	console.log(`${num}x${i}=${num*i}`)
}

    /// 'While loop' answer
let i = 1
while(i <= 10) {
		console.log(`${num}x${i}=${num*i}`)
    i++
}

    // When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

    /// 'For loop' answer 
let numb = 1

while(numb < 2 || numb > 9) {
	numb = prompt('enter a number ?')
}

for(let i = 1; i <= 10; i++) {
	console.log(`${numb}x${i}=${numb*i}`)
}

    /// 'While loop' answer
while(numb < 2 || numb > 9) {
	numb = prompt('enter a number ?')
}

let j = 1
while(j <= 10) {
		console.log(`${numb}x${j}=${numb*j}`)
    j++
}

// 5. Neither yes nor no
    // Write a program that plays "neither yes, nor no" with the user.
    // Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.

    /// 'While loop' answer
let yesOrNo = 1

while(yesOrNo !== 'yes' && yesOrNo !== 'no') {
	yesOrNo	= prompt('Do you like ice cream ?')
}

    /// 'For loop' answer
for(let n, yesOrNo; yesOrNo !== 'yes' && yesOrNo !== 'no'; n++) {
	yesOrNo = prompt('Do you like ice cream ?')
}

// 6. FizzBuzz
    // Write a program that shows all numbers between 1 and 100 with the following exceptions:
    // It shows "Fizz" instead if the number is divisible by 3.
    // It shows "Buzz" instead if the number is divisible by 5 and not by 3.
    // When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

    /// 'For loop' answer
for(let i = 1; i <= 100; i++) {
	if(i % 3 === 0 && i % 5 === 0) {
  	console.log('FizzBuzz')
  } else if(i % 3 === 0) {
  	console.log('Fizz')
  } else if(i % 5 === 0) {
  	console.log('Buzz')
  } else {
  	console.log(i)
  }
}

    /// 'While loop' answer
let fizzBuzz = 1

while(fizzBuzz <= 100) {
	if(fizzBuzz % 3 === 0 && fizzBuzz % 5 === 0) {
  	console.log('FizzBuzz')
  } else if(fizzBuzz % 3 === 0) {
  	console.log('Fizz')
  } else if(fizzBuzz % 5 === 0) {
  	console.log('Buzz')
  } else {
  	console.log(fizzBuzz)
  }
  fizzBuzz++
}

        // exercises taken from thejsway github