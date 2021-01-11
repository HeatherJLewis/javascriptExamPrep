// Objects

// includes: Properties; methods; instantiation;

// Instantiation:

let myObject = {
    name: "Heather",
    pet: "Tigger",
};

let myObject2 = new Object ();
myObject2.name = "Heather";
myObject2.pet = "Tigger";

// Booleans, Numbers and Strings can be objects if defined with the new keyword

// Objects are mutable:

let x = myObject2; // does not create a copy of myObject2 - they are the same object so changing x will change myObject2:

x.name = "Evie"

console.log(myObject2); // output -> { name: "Evie", pet: "Tigger"}

// object.assign() copies enumerable properties from one or more soure objects to a target object:

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// object.keys() method returns an array of a given object's own enumrable property names:

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };

  console.log(Object.keys(object1));
  // expected output: Array ["a", "b", "c"]

// object.create() creates a new objects using an existing object as a prototype:

const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };

  const me = Object.create(person);

  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten

  me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"