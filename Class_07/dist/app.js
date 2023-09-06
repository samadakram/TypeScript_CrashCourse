"use strict";
// Decorators
// Additional function / benefit of typescript
// Always Used with Class
// like normal function
// First letter capital
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
    else {
        throw new Error("Type can not match");
    }
}
const value = add("Hello", "World");
const value2 = add(5, 7);
console.log(value2.toFixed());
console.log(value.split(""));
//# sourceMappingURL=app.js.map