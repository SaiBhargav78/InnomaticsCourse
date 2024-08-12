// console.log("outside event")
window.addEventListener("load",()=>{
    console.log("page completely loaded")
})
// let array1 = [
//     {
//         name:"charan",
//         college:"svce",
//         email:"charan@gmail.com",
//         gender:"male"
//     },
//     {
//         name:"vamsi",
//         college:"svec",
//         email:"vamsii@gmail.com",
//         gender:"male"
//     },
//     {
//         name:"vishnu",
//         college:"svce",
//         email:"vishnu@gmail.com",
//         gender:"male"
//     },
//     {
//         name:"usha",
//         college:"svec",
//         email:"usha@gmail.com",
//         gender:"female"
//     }
// ]
document.addEventListener("DOMContentLoaded",()=>{
    console.log("inside event")
    let tbody = document.querySelector("#cardcontainer")

    fetch("https://jsonplaceholder.typicode.com/users").
    then((response)=>response.json()).
    then((data)=>populate_data(data))

    function populate_data(table_data){
        table_data.forEach((student)=>{
            let trow = document.createElement("div")
            trow.className = "card"
            trow.innerHTML = `
            <h4>${student.name}</h4>
            <h4>${student.email}</h4>
            <h4>${student.phone}</h4>
            <h4>${student.website}</h4>
            `
            tbody.appendChild(trow)
        })
    }
    
})
console.log("outside event")