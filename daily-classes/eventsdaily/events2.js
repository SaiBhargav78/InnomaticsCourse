// 1. localStorage: Setting and Getting Data
// Write JavaScript code to set a key-value pair in localStorage.
// Retrieve and print the value from localStorage using the key.

localStorage.setItem("name","Bhargav")
console.log(localStorage["name"])

// sessionStorage: Setting and Getting Data
// Write JavaScript code to set a key-value pair in sessionStorage.
// Retrieve and print the value from sessionStorage using the key.

sessionStorage.setItem("name","Bhargav")
console.log(sessionStorage["name"])

// Removing Items from Storage
// Write JavaScript code to remove a specific item from localStorage and sessionStorage.
// Verify the item has been removed by attempting to retrieve it.

localStorage.setItem("name1","Sai Bhargav")

localStorage.removeItem("name")
sessionStorage.removeItem("name")

console.log(localStorage["name"])
console.log(sessionStorage["name"])

// JSON Storage
// Write JavaScript code to store a JavaScript object in localStorage and sessionStorage using JSON.stringify.
// Retrieve and parse the JSON object from storage using JSON.parse.

const obj = {name:"Peter",age:45}

localStorage.setItem("object",JSON.stringify(obj))
sessionStorage.setItem("object",JSON.stringify(obj))

console.log(JSON.parse(localStorage.getItem("object")),JSON.parse(sessionStorage.getItem("object")))

// Clearing Storage
// Write JavaScript code to clear all items from localStorage and sessionStorage.
// Verify that the storage is empty by attempting to retrieve any item.

localStorage.clear()
sessionStorage.clear()

console.log(localStorage,sessionStorage)