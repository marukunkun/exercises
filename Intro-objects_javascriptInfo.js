// Hello, object
    // Write the code, one line for each action:

    // Create an empty object user.
    // Add the property name with the value John.
    // Add the property surname with the value Smith.
    // Change the value of the name to Pete.
    // Remove the property name from the object.

    let user = {}
    user.name = 'John'
    user.surname = 'Smith'
    user.name = 'Pete'
    delete user.name


// Check for emptiness
    // Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

    function isEmpty(obj) {
        return obj && Object.keys(obj).length === 0 && obj.constructor === Object
    }
    
    let schedule = {}
    console.log(isEmpty(schedule)) // true
    
    schedule["8:30"] = "get up"
    console.log(isEmpty(schedule)) // false


// Sum object properties

    // We have an object storing salaries of our team:
    // Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
    // If salaries is empty, then the result must be 0.

    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
      
    let sum = Object.values(salaries).reduce((a,c) => a + c, 0)
    console.log(sum)

// Multiply numeric property values by 2

    // Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
    // Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
    // P.S. Use typeof to check for a number here.

    function multiplyNumeric(obj) {
        for(let number in obj) {
                if(typeof obj[number] === 'number') {
                obj[number] = obj[number] * 2
            }
        }
      console.log(obj)
    }
    
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    }
    
    multiplyNumeric(menu)