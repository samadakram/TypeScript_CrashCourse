// Decorators
// Additional function / benefit of typescript
// Always Used with Class
// like normal function
// First letter capital

// Decorator
// function Logger(message: string) { // Decorator Factory
//     return function (constructor: Function) { // Decorator
//         console.log("Logging");
//         console.log(message);
//         console.log(constructor);
//     }
// }

// function FillHTML(template: string, elemId: string) {
//     return function (constructor: any) {
//         console.log(constructor);
//         const elem = document.getElementById(elemId);
//         const person = new constructor();
//         if (elem) {
//             elem.innerHTML = template;
//             elem.querySelector("h1")!.innerText = person.name;
//         }
//     }
// }


//as long as class loads the decorater will be called

// @Logger("Calling from Person")
// @FillHTML("<h1>Hello</h1>", "app")
// class Person {
//     name = "Samad";

//     constructor() { }
// }

// @Logger("Calling from Animal")
// class Animal {
//     name = "Cat";

//     constructor() { }
// }

// Functions overloading
// to make multiple implementations of function to use in different situation.

type Combined = string | number;

function add(x: string, y: string): string
function add(x: number, y: number): number
function add(x: Combined, y: Combined) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    } else if (typeof x === "string" && typeof y === "string") {
        return x + y;
    } else {
        throw new Error("Type can not match");
    }
}

const value = add("Hello", "World");
const value2 = add(5, 7);
console.log(value2.toFixed());
console.log(value.split(""));