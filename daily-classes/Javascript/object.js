let student_1 = {
    name: "Bhargav",
    age: 22,
    phn: "9xxxxxxxxx",
    male: true,
    address: {
        location: "Hyderabad,Telangana",
        pin: 500090
    }
};

let student_2 = {
    name: "Charan",
    age: 24,
    phn: "9xxxxxxxxx",
    male: true,
    address: {
        location: "Hyderabad,Telangana",
        pin: 500090
    }
};

console.log(student_1.name,student_2.name);
console.log(student_1.age,student_2.age);
console.log(student_1.phn,student_2.phn);
console.log(student_1.address.location,student_2.address.location);

let array = ["a","e","i","o","u"];
for(let i = 0;i<array.length;i++){
    console.log(array[i]);
}

array.push("v");
console.log(array);

array.unshift("z");
console.log(array);

array.splice(2,0,"j");
console.log(array);

array.splice(3,1,"p");
console.log(array);

array.splice(2,2);
console.log(array);

array.splice(0,1,"x");
console.log(array);

console.log(array.slice(2,6));