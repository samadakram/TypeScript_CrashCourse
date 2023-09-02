// Tuples 

// fixed length array
// If we that we have an array with limited elements we use tuples for that.

// let gender: [string, string] = ["Male", "Female"];
// there is issue in that if we add something with "push" method it will allow new values to add.
// gender.push("asd");

// let admin: [number, string] = [1, "Admin"];
// let error: [number, string] = [404, "Not Found"];

// tsc --watch for continue changes tracking of file for compilation

// Class

// readonly : we can only read property but can not re assign it, but can add new values in array.

class Student {
    private skills: string[] = []; // we can not access private property outside of class for updating values
    constructor(public name: string, public readonly rollNo: number) {
    }

    addSkill(skill: string) {
        this.skills.push(skill);
    }

}

let student = new Student("Hamza", 420);
let student1 = new Student("Nadir", 421);
student.addSkill("TypeScript");
student1.addSkill("JavaScript");
console.log(student, student1);