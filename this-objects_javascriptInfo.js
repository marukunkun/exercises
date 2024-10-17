// Using "this" in object literal
    // Here the function makeUser returns an object.

    // What is the result of accessing its ref? Why?

    // function makeUser() {
    //   return {
    //     name: "John",
    //     ref: this
    //   }
    // }

    // let user = makeUser()

    // alert( user.ref.name ) 
    
    // What's the result?

        /* REPONSE */ 
        // undefined
        // the 'this' is in a simple function not inside an object (method) so it's pointing to the global object ! (call without any specific context)
        // as there is no window.name it returns undefined

        /* CORRECTION */
        function makeUser() {
        return {
            name: "John",
            ref() {
                return this
            }
        }
        }

        let user = makeUser()

        alert(user.ref().name)


// Create a calculator

// Create an object calculator with three methods:

    // read() prompts for two values and saves them as object properties with names a and b respectively.
    // sum() returns the sum of saved values.
    // mul() multiplies saved values and returns the result.
    
    let calculator = {
        read() {
            this.a = +prompt('Value1')
            this.b = +prompt('Value2')
        },
        sum() {
            return this.a + this.b
        },
            mul() {
            return this.a * this.b
        }
    }
    
    calculator.read()
    console.log(calculator.sum())
    console.log(calculator.mul())


// Chaining

    // There’s a ladder object that allows you to go up and down:

    // let ladder = {
    //   step: 0,
    //   up() {
    //     this.step++
    //   },
    //   down() {
    //     this.step--
    //   },
    //   showStep: function() { // shows the current step
    //     alert( this.step )
    //   }
    // }
    // Now, if we need to make several calls in sequence, we can do it like this:


    // ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
    // Such an approach is widely used across JavaScript libraries.

    // SOLUTION
    // return the object itself at every call
    let ladder = {
        step: 0,
        up() {
          this.step++
          return this 
        },
        down() {
          this.step--
          return this
        },
        showStep: function() {
          console.log( this.step )
          return this
        }
      }
      
      ladder
        .up()
        .up()
        .down()
        .showStep() // 1
        .down()
        .showStep() // 0