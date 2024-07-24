// 1. Using forEach
// Create an array of numbers.
// Write a function that uses the forEach method to print each number in the array to the console.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});

// 2. Using map
// Create an array of numbers.
// Write a function that uses the map method to create a new array where each number is doubled.
// Print the new array to the console.

let originalNumbers = [1, 2, 3, 4, 5];

let doubledNumbers = originalNumbers.map((number) => number * 2);

console.log(doubledNumbers);

// 3. Using filter
// Create an array of numbers.
// Write a function that uses the filter method to create a new array with only the even numbers.
// Print the new array to the console.

let numbers_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers_1.filter((number) => number % 2 === 0);

console.log(evenNumbers);

// 4. Using reduce
// Create an array of numbers.
// Write a function that uses the reduce method to calculate the sum of all numbers in the array.
// Print the sum to the console.

let numbers_3 = [1, 2, 3, 4, 5];

let sum = numbers_3.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// 5. Using find
// Create an array of objects representing people with properties name and age.
// Write a function that uses the find method to locate the first person in the array who is older than 25.
// Print the person's name to the console.

let people = [
    { name: 'Bhargav', age: 22 },
    { name: 'Raj', age: 30 },
];

let olderThan25 = people.find((person) => person.age > 25);

if (olderThan25) {
    console.log(olderThan25.name);
} else {
    console.log('No person older than 25 found.');
}

// 6. Using findIndex
// Create an array of objects representing people with properties name and age.
// Write a function that uses the findIndex method to locate the index of the first person in the array who is younger than 18.
// Print the index to the console.

let people_1 = [
    { name: 'Bhargav', age: 16 },
    { name: 'Raj', age: 20 },
];

let indexYoungerThan18 = people_1.findIndex((person) => person.age < 18);

console.log(indexYoungerThan18);