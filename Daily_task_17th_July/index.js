// Functions without Parameters
// 1. Write a function named `greet` that prints "Hello, World!" to the console.
// 2. Call the `greet` function to ensure it works as expected.

function greet(){
    console.log("Hello, World!");
}

greet(); // Output: Hello World!

console.log()
// Functions with Parameters
// 1. Write a function named `addNumbers` that takes two parameters, `a` and `b`.
// 2. Inside the function, print the sum of `a` and `b`.
// 3. Call the `addNumbers` function with different sets of numbers to demonstrate its
// functionality.

function addNumbers(a,b){
    console.log(a+b);
}

addNumbers(5,6); //Output: 11
addNumbers(24,5); //Output: 29

console.log()

// Functions with Return Statements
//  1. Write a function named `multiply` that takes two parameters, `x` and `y`.
//  2. Inside the function, return the product of `x` and `y`.
//  3. Store the returned value in a variable and print it to the console to ensure the function
//  works as expected.

function multiply(x,y){
    return x*y;
}

let multiple = multiply(5,6); // multiple = 30
console.log(multiple); //Output: 30

console.log()

// Combining Functions
//  1. Write a function named `calculateRectangleArea` that takes two parameters, `length`
//  and `width`.
//  2. Inside the function, use the `multiply` function from the previous task to calculate the
//  area of the rectangle and return the result.
//  3. Call the `calculateRectangleArea` function and print the result to the console.

function calculateRectangleArea(length,width){
    return multiply(length,width);
}

let rectanglearea = calculateRectangleArea(10,5); //rectanglearea = 50
console.log(rectanglearea); //Output: 50

console.log()

// Default Parameters
//  1. Write a function named `greetUser` that takes one parameter, `name`, with a default
//  value of "Guest".
//  2. Inside the function, print a message saying "Hello, [name]!".
//  3. Call the `greetUser` function with and without passing an argument to demonstrate
//  the default parameter functionality.

function greetUser(name = "Guest"){
    console.log(`Hello, ${name}`);
}

greetUser("Sai Bhargav");
greetUser();

console.log();