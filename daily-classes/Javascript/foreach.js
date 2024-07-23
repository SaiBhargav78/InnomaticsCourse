let students = [
    {
        name:'Bhargav',
        gender:'Male',
        phone:1236547890,
        address:{pincode:500090,landmark:'Nizampet'

        },
        supply:['Eng Draw','Eng Draw','Eng Draw']
    },
    {
        name:'Sai',
        gender:'Male',
        phone:1234567890,
        address:{pincode:500090,landmark:'Nizampet-Village'

        },
        supply:['Eng Draw','Eng Draw','Eng Draw']

    },
    {
        name:'SAI Nath',
        gender:'Male',
        phone:1236549870,
        address:{pincode:500090,landmark:'Grampachayat'

        },
        supply:['Eng Draw','Eng Draw','Eng Draw']

    },
    {
        name:'Shruti',
        gender:'Female',
        phone:2136547890,
        address:{pincode:500090,landmark:'Nizampet-Center'

        },
        supply:['Eng Draw','Eng Draw','Eng Draw']

    },
    {
        name:'Laksmi',
        gender:'Female',
        phone:3126547890,
        address:{
            pincode:500090,landmark:'Nizampet-west'
        },
        supply:['Eng Draw','Eng Draw','Eng Draw']

    }
]

students.forEach((itrtr,index)=>{
    console.log(`At index ${index} we have ${JSON.stringify(itrtr)}`);
})

console.log()

students.forEach((itrtr,index)=>{
    console.log(`At index ${index} we have ${itrtr.name}`);
})

console.log()

students.forEach((itrtr,index)=>{
    console.log(`At index ${index} we have ${itrtr.phone}`);
})

console.log()

console.log(students)

console.log()

// students.forEach((itrtr,index)=>{
//     console.log(`At index ${index} we have ${itrtr.address.pincode}`);
//     if(index === 0){
//         itrtr.supply.push('TT')
//     }
//     if(index === 1){
//         itrtr.supply.unshift('Web Tech')
//     }
//     if(index === 2){
//         itrtr.supply.splice(1,0,'ISA')
//     }
//     if(index === 3){
//         itrtr.supply.splice(1,1,'DM')
//     }
//     if(index === 4){
//         itrtr.supply.shift()
//         itrtr.supply.pop()
//     }
// })

// console.log()

// console.log(students)

let updated_students = students.map((itrtr,index)=>{
    let updateditr = {...itrtr}
    console.log(`At index ${index} we have ${itrtr.address.pincode}`);
    if(index === 0){
        itrtr.supply.push('TT')
    }
    if(index === 1){
        itrtr.supply.unshift('Web Tech')
    }
    if(index === 2){
        itrtr.supply.splice(1,0,'ISA')
    }
    if(index === 3){
        itrtr.supply.splice(1,1,'DM')
    }
    if(index === 4){
        itrtr.supply.shift()
        itrtr.supply.pop()
    }
    return updateditr
})

console.log(students)