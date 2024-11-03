// Dogs
    // Complete the following program to add the definition of the Dog class.

    // Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

    // TODO: define the Dog class here

    class Dog {
        constructor(name, species, size) {
            this.name = name
            this.species = species
            this.size = size
        }
        bark() {
            return this.size > 60 ? "Grrr! Grrr!" : "Woof! Woof!"
        }
    }

    const fang = new Dog("Fang", "boarhound", 75);
    console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
    console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

    const snowy = new Dog("Snowy", "terrier", 22);
    console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
    console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);
    

// Character inventory
    // Improve the example RPG to add character inventory management according to the following rules:
    // A character's inventory contains a number of gold and a number of keys.
    // Each character begins with 10 gold and 1 key.
    // The character description must show the inventory state.
    // When a character slays another character, the victim's inventory goes to its vanquisher.
    
    class Character {
        constructor(name, health, strength) {
            this.name = name
            this.health = health
            this.strength = strength
            this.xp = 0
            this.gold = 10
            this.key = 1
            this.bonusXP = 10
        }        
        
        attack(target) {
        	if(target.health > 0) {
          	    target.health -= this.strength
                console.log(`${this.name} attacks ${target.name} and causes ${this.strength} damage points`)
                if(target.health > 0) {
	          	    console.log(`${target.name} has ${target.health} health points left`)
                } else {
            	    this.xp += target.bonusXP
            	this.gold += 10
                    this.key += 1
            	    console.log(`${this.name} eliminated ${target.name} and wins ${target.bonusXP} experience points, ${target.gold} gold and ${target.key} key(s)`)
                }        		
            } else {
  				console.log(`${target} is defeated no need to continue attacking him`)
          }
        }
        description() {
            return `${this.name} has ${this.health} health point, ${this.strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s)`
        }			
    }

    let aurora = new Character('Aurora', 150, 25)
    let glacius = new Character('Glacius', 130, 30)

    console.log("Welcome to the adventure! Here are our heroes:")
    console.log(aurora.description())
    console.log(glacius.description())
    
    let spike = new Character('Spike', 40, 20)
    console.log(`A wild monster has appeared: it's named ${spike.name}`)
    
    spike.attack(aurora)
    spike.attack(glacius)
    aurora.attack(spike)
    glacius.attack(spike)
    console.log(aurora.description())
    console.log(glacius.description())
    

// Account list
    // Let's build upon a previous account object exercise. A bank account is still defined by:

    // A name property.
    // A balance property, initially set to 0.
    // A credit method adding the value passed as an argument to the account balance.
    // A describe method returning the account description.
    // Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges.
    // These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

    class Account {
        constructor(name, balance = 0) {
            this.name = name
            this.balance = balance
        }
        credit(value) {
            this.balance += value
        }
        describe() {
            return `owner: ${this.name}, balance: ${this.balance}`
        }
    }
    
    const accountList = [new Account('Sean'), new Account('Brad'), new Account('Georges')]
    
    accountList.forEach(item => {
        item.credit(Number(1000))
        console.log(item.describe())
    })