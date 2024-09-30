// Adding character experience
    // Improve our example RPG program to add an experience property named xp to the character. 
    // Its initial value is 0. 
    // Experience must appear in character description.

    // TODO: create the character object here

    let aurora = {
        name : 'Aurora',
        health : 100,
        strength: 0,
        xp : 0,

        describe() {
            return `${this.name} has ${this.health} PV, ${this.strength} in Strength and has ${this.xp} XP`
        }
    }

    // Aurora is harmed by an arrow
    aurora.health -= 20

    // Aurora equips a strength necklace
    aurora.strength += 10

    // Aurora learn a new skill
    aurora.xp += 15

    console.log(aurora.describe())


// Modeling a dog
// Complete the following program to add the dog object definition.

    // TODO: create the dog object here
    let dog = {
        name : 'Boris',
        species : 'Labrador',
        size : '50',

        bark() {
            return 'Woof Woof'
        }
    }

    console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`)
    console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`)


// Modeling a circle
// Complete the following program to add the circle object definition
// Its radius value is input by the user.

    const r = Number(prompt("Enter the circle radius:"))

    // TODO: create the circle object here
    let circle = {
        circumference() {
            return 2 * Math.PI * r
        },
        area() {
            return (r**2) * Math.PI
        }
    }

    console.log(`Its circumference is ${circle.circumference()}`);
    console.log(`Its area is ${circle.area()}`);


// Modeling a bank account
// Write a program that creates an account object with the following characteristics:

let bankAccount = {
    name : 'Alex',
    balance : 0,

    credit(val) {
        this.balance += val
    },
    describe() {
        return `owner: ${this.name}, balance ${this.balance}`
    }

}
// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.
// owner: Alex, balance 0'
// owner: Alex, balance 170'

    console.log(bankAccount.describe())
    bankAccount.credit(250)
    bankAccount.credit(-80)
    console.log(bankAccount.describe())