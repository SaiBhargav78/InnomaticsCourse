let arr = [1,2,3,4,5,6,7,8,9,10];

let sum = arr.reduce((acc,curr)=>{
    return acc += curr;
},0);

console.log(sum);


let array = new Array(30).fill(1).map((itr,index)=>{return index+1});

console.log(array);
let evensum = array.reduce((acc,curr)=>{
    if(curr%2===0){
        acc+=curr
    }
    return acc
},0)

console.log(evensum);

let Bhargav = [
    {
        subject: "DSA",
        mark: 90
    },
    {
        subject: "ISAA",
        mark: 70
    },
    {
        subject: "ML",
        mark: 85
    },
    {
        subject: "TT",
        mark: 95
    },
    {
        subject: "ISA",
        mark: 69
    }
]

let total = Bhargav.reduce((acc,curr)=>{
    return acc+=curr.mark
},0)

console.log(total)

let Raju = [
    {
        subject: "DSA",
        mark: 85
    },
    {
        subject: "ISAA",
        mark: 69
    },
    {
        subject: "ML",
        mark: 96
    },
    {
        subject: "TT",
        mark: 58
    },
    {
        subject: "ISA",
        mark: 86
    }
]

let students = [{"Bhargav":[...Bhargav]},{"Raju":[...Raju]}]

console.log(JSON.stringify(students))

let result = students.map((itr,index)=>{
    if(index === 0){
        return {bhargav_total: itr["Bhargav"].reduce((acc,curr)=>acc+=curr.mark,0)}
    }
    if(index === 1){
        return {Raju_total: itr["Raju"].reduce((acc,curr)=>acc+=curr.mark,0)}
    }
})

console.log(result)

let classes = [{name:"Bhargav",section:"A"},{name:"Kiran",section:"A"},{name:"Shanu",section:"A"},{name:"Hitesh",section:"A"}
    ,{name:"Baron",section:"B"},{name:"Karen",section:"B"},{name:"Laren",section:"B"},{name:"Sophia",section:"C"}
    ,{name:"Orion",section:"C"},{name:"Renalto",section:"D"}
]

let A_section = classes.filter((student)=>{
    if(student.section === "A"){
        return student
    }
})

let B_section = classes.filter((student)=>{
    if(student.section === "B"){
        return student
    }
})
let C_section = classes.filter((student)=>{
    if(student.section === "C"){
        return student
    }
})
let D_section = classes.filter((student)=>{
    if(student.section === "D"){
        return student
    }
})

let A_and_B = [...A_section,...B_section]

console.log(A_and_B)

console.log(classes.findIndex((student)=>student.name === "Baron"))