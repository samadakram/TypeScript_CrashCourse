// string | number -- union operators
// we can define 2 type of variable using |.

// type Combine = string | number | boolean;

// let abc: Combine  = "Apple";
// abc = true;

// custom type

// type Animal = {
//     name: string;
//     runningSpeed: number
// }

// type Bird = {
//     name: string;
//     flyingSpeed: number
// }

// we have assigned Animal and Bird type to Creature Type means
// Creature will contain both either Animal type or Bird type

// type Creature = Animal | Bird; // union types


// const tiger: Creature = {
//     name: "Tiger",
//     runningSpeed: 300
// }

// Intersection types
// Both types properties should be available

// type Creature = Animal & Bird; // Intersection types

// const cockRoach: Creature = {
//     name: "CockRoach",
//     runningSpeed: 100,
//     flyingSpeed: 300
// }

// Interfaces
// In TypeScript "Interfaces" are also important; The thing we
// we are doing with "Types" can als0 be done uisng "Interfaces".

// The main benefit of Interfaces is it can be implemented with classes too.

// interface Animal {
//     name: string;
//     runningSpeed: number
// }

// interface Bird {
//     name: string;
//     flyingSpeed: number;
// }

// Here we are giving Creature a type of Animal and Bird
// interface Creature extends Animal, Bird { }

// const tiger: Creature = {
//     name: "Tiger",
//     runningSpeed: 300,
//     flyingSpeed: 10
// };

// interface Animal {
//     name: string;
//     runningSpeed: number;
//     eat(food: string): void
// }

// class Tiger implements Animal {
//     constructor(public name: string, public runningSpeed: number) { }

//     eat(food: string) {
//         return "Eating food";
//     }
// }


// Type Guards
// When we are working with union types these type guards become handy.

type Bird = {
    name: string;
    flyingSpeed: number
}

type Animal = {
    name: string;
    runningSpeed: number
}

type Creature = Animal | Bird;

function log(creature: Creature) {
    if ("runningSpeed" in creature) { // type guard : If "property" is available in given parameter.
        console.log(creature.runningSpeed);
    }
}

const sparrow: Creature = {
    name: "Sparrow",
    flyingSpeed: 123,
}


log(sparrow);
// here we re passing sparrow to log which has type guard for runningSpeed
// the running speed is not defined in sparrow so that's why we applied
// type guard.s