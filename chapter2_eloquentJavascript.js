// Each exercise starts with a problem description. 
// Read this description and try to solve the exercise. 
// If you run into problems, consider reading the hints after the exercise. 
// You can find full solutions to the exercises online at https://eloquentjavascript.net/code. 
// If you want to learn something from the exercises, I recommend looking at the solutions only after you’ve solved the exercise, 
// or at least after you’ve attacked it long and hard enough to have a slight headache.

// Looping a triangle
    // Write a loop that makes seven calls to console.log to output the following triangle:

    /*
    #
    ##
    ###
    ####
    #####
    ######
    #######
    */

    let octothorpe = '#'
    for(let i = 0; i < 7; i++) {
    	console.log(octothorpe)
    	octothorpe += '#'
    }

    // It may be useful to know that you can find the length of a string by writing .length after it.
    // let abc = "abc";
    // console.log(abc.length); → 3

    // Most exercises contain a piece of code that you can modify to solve the exercise. 
    // Remember that you can click code blocks to edit them.


// FizzBuzz
    // Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
    // For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

    // When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

    // (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. 
    // So if you solved it, your labor market value just went up.)

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

// Chessboard
    // Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. 
    // The characters should form a chessboard.

    // Passing this string to console.log should show something like this:

    /*
     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # #
    */


let size = 8
let chessboard = ''
for(let i = 0; i <= size; i++) {
	if(i < size) {
  	chessboard += '\n'
    for(let j = 1; j <= size; j++) {
  		if(i % 2 === 0) {
  			chessboard += '# '
    	} else {
    		chessboard += ' #'
    	}
  	}
  } else {
  	chessboard += '\n'
  }
}
console.log(chessboard)


    // When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.