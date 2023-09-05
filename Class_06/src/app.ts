// Type Casting

// Here we are doing type casting : telling that is coming from html.

// const input = document.getElementById("Input") as HTMLInputElement
// const input2 = <HTMLInputElement>document.getElementById("Input"); // recommended way


// Generics
// to give types to promise for avoiding errors

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Task performed Successfully!");
//     }, 2000);
// })

// // if dont define promise type then it will give error on split method.
// promise.then((data) => {
//     console.log(data.split(" "));
// })

// type User = {
//     name: string;
//     class: number
// }

// const promise: Promise<User> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             name: 'Samad',
//             class: 10
//         });
//     }, 2000);
// })


// promise.then((data) => {
//     console.log(data.name);
// })

function merge<T extends {}, U extends {}>(objA: T, objB: U) {
    return { ...objA, objB };
}

const merged = merge({ name: 'Samad' }, { id: 123 });
console.log(merged.name)