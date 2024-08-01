let oldData = {
    name: "Bhargav",
    age: 22,
    phn: ["9xxxxxxxxx","9xxxxxxxxx"],
    male: true,
    address: {
        location: ["Hyderabad","Telangana","world"],
        pin: 500090
    },
    occupation:"Data Engineer"
};

let newData = {
    name: "Immani sai Bhargav",
    age: 25,
    phn: ["9xxxxxxxxx"],
    male: true,
    address: {
        location: ["Vizag","Andhra Pradesh"],
        pin: 500072
    }
};

console.log(newData.occupation === undefined)
console.log(oldData)
let keys = Object.keys(oldData)
console.log(keys)
function merge(obj1,obj2){
    let keys = Object.keys(obj1)
    for(let i = 0;i<keys.length;i++){
        if(obj2[keys[i]] === undefined){
            obj2[keys[i]] = obj1[keys[i]]
        }
        else if(typeof obj1[keys[i]] === "object" && obj1[keys[i]] !== null){
            merge(obj1[keys[i]],obj2[keys[i]])
        }else{
            continue
        }
    }
    return obj2
}

console.log(merge(oldData,newData))

// print max sum of sub array of size K

let arr = [1,2,3,4,5]
let res = 0
for(let k = 0;k<=arr.length-4;k++){
    let range = [[k,k+4]]
    let res1 = range.reduce((acc,range)=>{
        for(let c = range[0];c<range[1];c++){
            acc+=arr[c]
        }
        return acc
    },0)
    if(res1>=res){
        res = res1
    }
}

console.log(res)