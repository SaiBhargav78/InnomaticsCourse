// Using Fetch API
// Write a function named fetchData that uses the Fetch API to get data from a public API of your choice.
// Sample Api Doc For Your Reference:Fake Json Api
// Inside the function, print the response data to the console.
// Call the fetchData function to ensure it works as expected.

// Handling Promises with Async and Await
// Convert the fetchData function to an asynchronous function using async and await.
// Ensure the function waits for the response and then prints the data to the console.
// Call the modified fetchData function to demonstrate its functionality.

// Fetch with Parameters
// Write a function to fetch the data from any api of your Choice.
// Use the Fetch API to get data from the API endpoint.
// Display the Api Data in the Table Using javascript dom.

// Error Handling in Asynchronous Code
// Modify the fetchData function to include error handling using try and catch.
// Inside the catch block, print an error message to the console.
// Simulate an error by calling the fetchData function with an invalid URL and observe the error handling in action.

// Combining Fetch with Async/Await and Error Handling
// Write a function named fetchPosts that fetches posts from a public API.
// Use async and await to handle the asynchronous operation.
// Include error handling using try and catch.
// Print the fetched posts to the console if successful, otherwise print an error message.
// Call the fetchPosts function to ensure it works as expected.

async function fetchData(abc){
    try{
        await fetch("https://jsonplaceholder.typicode.com/users"). //invalid url: https://jsonplaceholder.typicode.com/
        then((response)=>response.json()).then((data)=>abc(data))
    }catch(err){
        console.log("Couldn't Fetch the data")
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    console.log("inside event")
    let tbody = document.querySelector("#table1 tbody")

    fetchData(populate_data)

    function populate_data(table_data){
        table_data.forEach((student)=>{
            let trow = document.createElement("tr")
            trow.innerHTML = `
            <tr>
             <td>${student.name}</td>
             <td>${student.email}</td>
             <td>${student.phone}</td>
             <td>${student.website}</td>
            </tr>
            `
            tbody.appendChild(trow)
         })
    }
    
})
