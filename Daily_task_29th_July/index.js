function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Creating Promises:
// Create a function asyncTask(name, delay, shouldReject) that returns a promise.
// The promise should resolve after a specified delay (in milliseconds) with a message "Task [name] completed", or reject if shouldReject is true with a message "Task [name] failed".

function asyncTask(name,delay,shouldReject){
    return new Promise((resolve,reject)=>{
        if(shouldReject){
            reject(`Task ${name} failed`)
        }
        else{
            setTimeout(()=>resolve(`Task ${name} completed`),delay)
        }
    })
}

asyncTask("Bhargav",2000,false).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})

// Using Promises:
// Create three different async tasks using the asyncTask function:
// Task 1: name = 'Task 1', delay = 1000, shouldReject = false
// Task 2: name = 'Task 2', delay = 2000, shouldReject = false
// Task 3: name = 'Task 3', delay = 3000, shouldReject = true

asyncTask("Task1",getRndInteger(1,3)*1000,false).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})

asyncTask("Task 2",getRndInteger(1,3)*1000,false).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})

asyncTask("Task 3",getRndInteger(1,3)*1000,false).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})

// Promise.all:
// Use the Promise.all method to run all three tasks simultaneously.
// Log the results when all promises have been resolved. If any of the promises are rejected, catch the error and log an appropriate error message.
// Error Handling:
// Add proper error handling in both the asyncTask function and the Promise.all implementation.

let promise1 = asyncTask("Task1",getRndInteger(1,3)*1000,false)
let promise2 = asyncTask("Task 2",getRndInteger(1,3)*1000,false)
let promise3 = asyncTask("Task 3",getRndInteger(1,3)*1000,true)
Promise.all([promise1,promise2,promise3]).then((result)=>{
  console.log('success=>',result)
}).catch((err)=>{
    console.log('err=>',err)
  })

// Promise.allSettled:
// Use the Promise.allSettled method to run all three tasks simultaneously.
// Log the results of all promises, regardless of whether they were fulfilled or rejected.

Promise.allSettled([promise1,promise2,promise3]).then((result)=>{
  console.log('success=>',result)
})

Promise.race([promise1,promise2,promise3]).then((result)=>{
  console.log('success=>',result)
}).catch((err)=>{
   console.log('err=>',err)
})