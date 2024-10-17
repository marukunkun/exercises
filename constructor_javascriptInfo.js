// Two functions – one object

    // Is it possible to create functions A and B so that new A() == new B()?

    // function A() { ... }
    // function B() { ... }

    // let a = new A()
    // let b = new B()

    // alert( a == b ) // true
    // If it is, then provide an example of their code.

    let obj = {}

    function A() { return obj }
    function B() { return obj }

    let a = new A()
    let b = new B()

    console.log( new A() === new B() )

// Create new Calculator

    // Create a constructor function Calculator that creates objects with 3 methods:

    // read() prompts for two values and saves them as object properties with names a and b respectively.
    // sum() returns the sum of these properties.
    // mul() returns the multiplication product of these properties.
    // For instance:

    function Calculator() {
	    this.read = function() {
  	        this.a = +prompt('a?')
            this.b = +prompt('b?')
        }
        this.sum = function() {
        	return this.a + this.b
        }
        this.mul = function() {
        	return this.a * this.b
        }
    }

    let calculator = new Calculator()
    calculator.read()

    console.log("Sum=" + calculator.sum())
    console.log("Mul=" + calculator.mul())



// Create new Accumulator

    // Create a constructor function Accumulator(startingValue).

    // Object that it creates should:

    // Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
    // The read() method should use prompt to read a new number and add it to value.
    // In other words, the value property is the sum of all user-entered values with the initial value startingValue.

    function Accumulator(startingValue) {
        this.value = startingValue
      this.read = function() {
          this.value += +prompt('value')
      }
    }
    
    let accumulator = new Accumulator(1)
    
    accumulator.read() 
    accumulator.read() 
    
    console.log(accumulator.value)

