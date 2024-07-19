// Using Array Methods

// 1. Push and Pop
// ○ Write a program that initializes an empty array.
// ○ Use the push method to add the numbers 1, 2, and 3 to the array.
// ○ Use the pop method to remove the last element from the array.
// ○ Print the final array to the console.

let numbers = [];

numbers.push(1);
numbers.push(2);
numbers.push(3);

numbers.pop();

console.log(numbers); // output: [1,2]

// 2. Shift and Unshift
// ○ Write a program that initializes an array with the elements "a", "b", and "c".
// ○ Use the shift method to remove the first element from the array.
// ○ Use the unshift method to add the string "z" to the beginning of the
// array.
// ○ Print the final array to the console.

let abc = ["a","b","c"];

abc.shift();

abc.unshift("z");

console.log(abc); //output: ['z','b','c']

// 3. Slice
// ○ Write a program that initializes an array with the elements 1, 2, 3, 4, and 5.
// ○ Use the slice method to create a new array that contains elements from
// index 1 to 3 (inclusive).
// ○ Print the new array to the console.

let num = [1,2,3,4,5];

let sliced_num = num.slice(1,4);

console.log(sliced_num); //output: [ 2, 3, 4 ]

// 4. Splice
// ○ Write a program that initializes an array with the elements "red", "green",
// "blue", "yellow".
// ○ Use the splice method to remove the element at index 2 and insert
// "purple" and "orange" at the same index.
// ○ Print the final array to the console.

let color = ["red","green","blue","yellow"];

color.splice(2,1,"orange");
color.splice(2,0,"purple");

console.log(color); //Output: [ 'red', 'green', 'purple', 'orange', 'yellow' ]

// Creating and Manipulating Objects

// 1. Object Creation
// ○ Write a program that creates an object representing a car with the
// properties make, model, and year.
// ○ Print the car object to the console.

let car = {
    make: "Toyota",
    model: "Innova Crysta",
    year: 2016
};

console.log(car); //Output: { make: 'Toyota', model: 'Innova Crysta', year: 2016 }

// 2. Property Deletion
//  ○ Write a program that deletes the year property from the car object
//  created in the previous task.
//  ○ Print the modified car object to the console.

delete car.year;

console.log(car); //Output: { make: 'Toyota', model: 'Innova Crysta' }

// 3. Nested Objects
//  ○ Write a program that creates an object representing a person. This object
//  should have properties for name (string), age (number), and address
//  (object with properties street, city, and zipcode).
//  ○ Print the person object to the console.

let person = {
    name : "Bhargav",
    age: 22,
    address:{
        street: "RJD school road",
        city: "Hyderabad",
        zipcode: 500090
    }
};

console.log(person); //Output: {name: 'Bhargav',age: 22,address: { street: 'RJD school road', city: 'Hyderabad', zipcode: 500090 }}

// 4. Accessing Object Properties
// ○ Write a program that accesses and prints the city property of the
// address object within the person object created in the previous task.

console.log(person.address.city); //Output: Hyderabad

// Using Arrow Functions
//  1. Basic Arrow Function
//  ○ Write an arrow function named greet that takes a name as an argument
//  and returns the string "Hello, [name]!".
//  ○ Print the result of calling greet with your name.

let greet = (name) => {
    return `Hello ${name}`;
}

console.log(greet("bhargav")); //Output: Hello bhargav