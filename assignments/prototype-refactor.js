/* Prototype-Refactor - Take existing code and make it modern 

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/

// Prototype-Refactor (prototype holding all of the methods)
// Each class has unique properties and methods that are defined in their block comments below: 

// Class is not hoisted
// "use strict"
// Methods are special syntax
// A constructor function is visible now

class GameObject {
  constructor(attributes) { // constructor function
    this.createdAt = attributes.createdAt; // newly constructed values
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  // Methods
  destroy() {
    return `${this.name} was removed from the game.`;
  }
} // Parent

// Build next Constructor with class
class CharacterStats extends GameObject { // extends tells super where to go
  constructor(charAttrs) {
    super(charAttrs); // Replaces Parent.call - super keywords is used to access and call functions on an object's parent
    this.healthPoints = charAttrs.healthPoints;
  }
  // Method for this Constructor
  takeDamage() {
    return `${this.name} took damage.`;
  }
} // Child

// Build Next Constructor
class Humanoid extends CharacterStats {
  constructor(humanAttrs) {
    super(humanAttrs);
    this.team = humanAttrs.team;
    this.weapons = humanAttrs.weapons;
    this.language = humanAttrs.language;
  }

//Humanoid  Method Here
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

// New Constructor
class Villain extends Humanoid {
  constructor(villainAttrs) {
  super(villainAttrs);
  this.badBreath = villainAttrs.badBreath;
  this.opponentHealth = villainAttrs.opponentHealth;
}
  // Method
  evilLaugh() {
    return `The villain ${this.name} lets out an evil laugh and says "You will fail because I have ${this.weapons}!"`;
  }
}

// New Constructor
class Hero extends Humanoid {
  constructor(heroAttrs) {
  super(heroAttrs);
  this.goodLooks = heroAttrs.goodLooks;
  this.opponentHealth = heroAttrs.opponentHealth;
}
  // Methods
    codeHard() {
      this.opponentHealth -= 1;
      return `The hero ${this.name} codes hard.`;
  }
    workHard() {
      this.opponentHealth -= 5;
      return `The hero ${this.name} works hard.`;
  }

    victory() {
      this.opponentHealth -= 10;
      return `The hero learns to code using her weapons ${this.weapons}... defeats the villain.`;
  }
}

// Objects
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 2,
      height: 4,
    },
    healthPoints: 20,
    name: 'Brutal',
    team: 'Hell',
    weapons: [
      'fire',
      'low self-esteem'
    ],
    language: 'Devil Tongue',
    badBreath: 'funky breath',
    opponentHealth: 10
  });

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 3,
      height: 5,
    },
    healthPoints: 20,
    name: 'Cat',
    team: 'Forest Kingdom',
    weapons: [
      'Giant Sword',
      ' Shield',
      ' Dragons',
      ' grit' 
    ],
    language: 'JavaScript',
    opponentHealth: 10,
  });


  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log("A new battle is about to begin!");
console.log(`The match ${hero.name} vs ${villain.name} has begun.`);
console.log(`The villain has the following weapons: ${villain.weapons} `);
console.log(`The hero has the following weapons ${hero.weapons} `);
console.log(`The villain has the following extra attribute: ${villain.badBreath} `);
console.log(`The villain speaks the following language: ${villain.language} `);
console.log(`The hero speaks the following language: ${hero.language} `);
console.log(villain.evilLaugh());
console.log(`${hero.name} has been reduced, ${hero.name} now has ${villain.opponentHealth} less health points.`);
console.log(hero.codeHard());
console.log(`${villain.name} has been reduced, ${villain.name} now has ${hero.opponentHealth} less health points`);
console.log(hero.victory());
console.log(`${villain.name} has been reduced ${hero.opponentHealth} health points, now only has ${hero.opponentHealth} hp.`)
console.log(`${hero.name} WINS AND GETS A NEW JOB WITH HIGHER PAY!`);