// Copying Objects and Arrays

//  1. Shallow Copy
//  ○ Write a program that initializes an object with nested properties.
//  ○ Create a shallow copy of the object using Object.assign and the
//  spread operator (...).
//  ○ Modify a nested property in the copied object and print both the original
//  and copied objects to observe the effects.

let student_1 = {
    name: "Bhargav",
    age: 22,
    phn: "9xxxxxxxxx",
    male: true,
    address: {
        location: "Hyderabad,Telangana",
        pin: 500090
    }
};

console.log("Object Assign")
let shallow_copy_1 = Object.assign(student_1);
shallow_copy_1.address.pin = 500072;

console.log("Original:",student_1);
console.log("Copied:",shallow_copy_1);

console.log();

console.log("Spread Operator")
let shallow_copy_2 = {...student_1};
shallow_copy_2.address.pin = 500036;

console.log("Original:",student_1);
console.log("Copied:",shallow_copy_2);

console.log();

// 2. Deep Copy
//  ○ Write a program that initializes an object with nested properties.
//  ○ Create a deep copy of the object using
//  JSON.parse(JSON.stringify(obj)).
//  ○ Modify a nested property in the deep copied object and print both the
//  original and copied objects to observe the effects.

let student_2 = {
    name: "Bhargav",
    age: 22,
    phn: "9xxxxxxxxx",
    male: true,
    address: {
        location: "Hyderabad,Telangana",
        pin: 500090
    }
};

let deep_copy_1 = JSON.parse(JSON.stringify(student_2));
deep_copy_1.address.pin = 500072;

console.log("Deep Copy");
console.log("Original:",student_2);
console.log("Copied:",deep_copy_1);

console.log();

// Using Spread Operator

//  1. Spread in Arrays
//  ○ Write a program that initializes two arrays.
//  ○ Create a new array that combines the elements of both arrays using the
//  spread operator.
//  ○ Print the new array to the console.

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

let combined = [...arr1,...arr2];

console.log("combined array:",combined);

console.log()

// 2. Spread in Objects
// ○ Write a program that initializes two objects.
// ○ Create a new object that combines the properties of both objects using the
// spread operator.
// ○ Print the new object to the console.

let obj_1 = {
    name:'Bhargav',
    gender:'Male',
    phone:1236547890,
    address:{pincode:500090,landmark:'Nizampet'},
    supply:['Eng Draw','Mech Draw','Struct Draw']
};

let obj_2 = {
    passedout: 2024
};

let combined_obj = {...obj_1,...obj_2};

console.log("combined objects:",combined_obj);

console.log();

// Using Rest Operator

// 1. Rest in Functions
// ○ Write a function named sum that takes any number of arguments and
// returns their sum.
// ○ Usetherest operator to handle the function arguments.
// ○ Print the result of calling sum with different numbers of arguments.

function sum(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sum(1,5,9));
console.log(sum(21,12));
console.log(sum(15,2,65,9,5,6));

console.log();

// 2. Rest in Array Destructuring
// ○ Write a program that initializes an array with at least five elements.
// ○ Usearray destructuring and the rest operator to assign the first two
// elements to variables and the remaining elements to another array.
// ○ Print the variables and the new array to the console.

let original_array = [10, 20, 30, 40, 50]

let [first_element, second_element, ...rest_elements] = original_array;

console.log("First element:", first_element);
console.log("Second element:", second_element);
console.log("Remaining elements:", rest_elements);

console.log()