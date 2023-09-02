// // Object Types

// type Person = {
//     name: string;
//     rollNo: number;
//     hobbies: string[];
//     emailAdd?: string;      // ? This means that property is optional
// };

// let person: Person = {
//     name: "Samad",
//     rollNo: 405,
//     hobbies: ["Video Games"],
// };

// person.emailAdd = 'test@gmail.com'

// const persons: Person[] = [];
// persons.push({
//     name: "Ameen",
//     rollNo: 406,
//     hobbies: ["Cricket"],
//     emailAdd: 'test2@gmail.com'
// });

// Functions Types

// const add = function (val1: number, val2: number, cb: (x: string) => void): number {
//     cb("Samad");
//     return val1 + val2;
// }

// let func: (x: number, y: number, z: (x: string) => void) => number;

// func = add;


// Type literals
// to get specific values as a parameter in function

type Calc = "add" | "subtract" | "+" | "-";

const add = function (val1: number, val2: number, calc: Calc) {
    if (calc === "add" || calc === "+") {
        return val1 + val2;
    } else if (calc === "subtract" || calc === "-") {
        return val1 - val2;
    }
}

console.log(add(10, 5, "add"));