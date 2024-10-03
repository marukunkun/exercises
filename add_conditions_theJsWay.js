// Here are a few pieces of advice about these exercises:
// Keep on choosing your variable names wisely, and respect indentation when creating code blocks associated to if, else and switch statements.
// Try to find alternative solutions. 
// For example, one using an if and another using a switch.
// Test your programs thoroughly, without fear of finding mistakes. 
// It's a very important skill.

// Following day
    // Write a program that accepts a day name from the user, then shows the name of the following day. 
    // Incorrect inputs must be taken into account.

let day = prompt('Which day are we?')
let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    
switch (day === null || day === '') {
    case true:
      console.log('That\'s not a day of the week')
      break
  default:
      day = day.toLowerCase()
      days.includes(day) ? console.log(`We are ${day} today!`) : console.log('That\'s not a day of the week')
}


// Number comparison
    // Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

let number1 = prompt('Give one number, please.') 
let number2 = prompt('Give a second number, please.') 

if((number1 === null || number2 === null) || (number1 === '' || number2 === '')) {
    console.log('One of the value you added is not a numbers')
} else if(number1 === number2) {
    console.log('Numbers are equals')
} else if(number1 > number2) {
    console.log('Number 1 is the biggest number')
} else {
    console.log('Number 2 is the biggest number')
}


// Final values
    // Take a look at the following program.

let nb1 = Number(prompt("Enter nb1:")) // 1
let nb2 = Number(prompt("Enter nb2:")) // 2
let nb3 = Number(prompt("Enter nb3:")) // 3

if (nb1 > nb2) {
  nb1 = nb3 * 2
} else {
  nb1++ // 2
  if (nb2 > nb3) {
    nb1 += nb3 * 3
  } else {
    nb1 = 0 // 
    nb3 = nb3 * 2 + nb2
  }
}
console.log(nb1, nb2, nb3)

// Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.

nb1 = 4, nb2 = 4, nb3 = 4           
    /* result:  nb1 = 0
                nb2 = 4
                nb3 = 12
    */
nb1 = 4, nb2 = 3, nb3 = 2
	/* result:  nb1 = 4
                nb2 = 3
                nb3 = 2
    */
nb1 = 2, nb2 = 4, nb3 = 0
    /* result:  nb1 = 3
                nb2 = 4
                nb3 = 0
    */

// Number of days in a month
    // Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month.
    // Leap years are excluded.
    // Incorrect inputs must be taken into account.

let number = Number(prompt('Enter a month\'s number'))
let months = {
    1 : 'January',
    2 : 'February',
    3 : 'Mars',
    4 : 'April',
    5 : 'May',
    6 : 'June',
    7 : 'July',
    8 : 'August',
    9 : 'September',
    10 : 'October',
    11 : 'November',
    12 : 'December'
}

if(number > 0 && number <= 12 ) {
    console.log(`Is it ${months[number]} ?`)
} else {
    console.log('Not month found with this number, sorry.')
}

// Following second
    // Write a program that asks for a time under the form of three information (hours, minutes, seconds).
    // The program calculates and shows the time one second after.
    // Incorrect inputs must be taken into account.

let time = prompt('What time is it?\n Replace the letters by numbers "h/m/s"')
// check for inputs
if(time === null || time === '') {
    console.log('Not input entered')
    
// check for wrongs inputs
} else if(time.split('/').length === 3) {

    let timeSplit = time.split('/')    
    
// check for a good range
        if(timeSplit[0] >= 0  && timeSplit[0] <= 23 &&
             timeSplit[1] >= 0  && timeSplit[1] <= 59 &&
            timeSplit[2] >= 0  && timeSplit[2] <= 59) {
       
// Inputs are good 
// Then we
// Calculate second(s) + 1
                    if(Number(timeSplit[2]) + 1 > 59) {
              timeSplit[2] = 0
                
            if(Number(timeSplit[1]) + 1 > 59) {
                timeSplit[1] = 0
              
              if(Number(timeSplit[0]) + 1 > 23) {
                  console.log('0h0m0s')
                } else {
                    console.log(`${Number(timeSplit[0]) + 1}h0m0s`)	
                }
                
            } else {
                console.log(`${Number(timeSplit[0]) + 1}h${Number(timeSplit[1]) + 1}m0s`)
            }
          } else {
                   console.log(`${timeSplit[0]}h${timeSplit[1]}m${Number(timeSplit[2]) + 1}s`)
          }

// Range
       } else {
           console.log('Range of time is not correct')
       }
} else {
    console.log('Wrong inputs')
}

    // This is not as simple as it seems... Look at the following results to see for yourself:

    // 14h17m59s should give 14h18m0s
    // 6h59m59s should give 7h0m0s
    // 23h59m59s should give 0h0m0s (midnight)