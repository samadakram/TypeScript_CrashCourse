"use strict";
// getters and setters
// class Product {
//     constructor(
//         private _id: number,
//         private _name: string,
//         private _price: number) {
//     }
//     get Id(): number {
//         return this._id;
//     }
//     get name(): string {
//         return this._name;
//     }
//     set name(newName: string) {
//         if (!newName) {
//             throw new Error("Name can not be Empty!");
//         }
//         this._name = newName;
//     }
//     get price(): number {
//         return this._price;
//     }
// }
// let product1 = new Product(1, "Cup", 120);
// product1.name = "Apple";
// console.log(product1.name);
// // Inheritance
// class ClothingProduct extends Product {
//     constructor(
//         id: number,
//         name: string,
//         price: number,
//         private _color: string,
//         private _size: "S" | "M" | "L" | "XL",
//     ) {
//         super(id, name, price);
//     }
// }
// class ElectronicProduct extends Product {
//     constructor(
//         id: number,
//         name: string,
//         price: number,
//         private _brand: string,
//         private _model: string,
//     ) {
//         super(id, name, price);
//     }
// }
// const tshirt = new ClothingProduct(2, "T-Shirt", 1000, "Purple", "M");
// console.log(tshirt);
// Abstract : set rules
// Derived class should have required method from base class
// abstract class Product {
//     constructor(
//         private _id: number,
//         private _name: string,
//         private _price: number) {
//     }
//     get Id(): number {
//         return this._id;
//     }
//     get name(): string {
//         return this._name;
//     }
//     set name(newName: string) {
//         if (!newName) {
//             throw new Error("Name can not be Empty!");
//         }
//         this._name = newName;
//     }
//     get price(): number {
//         return this._price;
//     }
//     abstract getDiscount(): number;
// }
// // Inheritance
// class ClothingProduct extends Product {
//     constructor(
//         id: number,
//         name: string,
//         price: number,
//         private _color: string,
//         private _size: "S" | "M" | "L" | "XL",
//     ) {
//         super(id, name, price);
//     }
//     getDiscount(): number {
//         return this.price + 0.5;
//     }
// }
// class ElectronicProduct extends Product {
//     constructor(
//         id: number,
//         name: string,
//         price: number,
//         private _brand: string,
//         private _model: string,
//     ) {
//         super(id, name, price);
//     }
//     getDiscount(): number {
//         return this.price - 0.5;
//     }
// }
// const tshirt = new ClothingProduct(2, "T-Shirt", 1000, "Purple", "M");
// console.log(tshirt);
// Singletons
// The class from which we can create only one instance/object.
class Util {
    constructor() {
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Util();
        }
        return this.instance;
    }
}
const utilInstance = Util.getInstance();
const utilInstance2 = Util.getInstance();
//# sourceMappingURL=app.js.map