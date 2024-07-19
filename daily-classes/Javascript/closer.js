function getcounter(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

console.log(getcounter())
console.log(getcounter()())


let thecounter = getcounter();
console.log(thecounter())
console.log(thecounter())

setTimeout(function(){
    console.log(23);
},6000);

// var vs let
for(var i = 0;i<5;i++){
    setTimeout(function(){
        console.log(i)
    },1000)
}

for(let i = 0;i<5;i++){
    setTimeout(function(){
        console.log(i)
    },1000)
}

// normal functions vs Anonymous/arrow functions

// abc(); normal function is hoisted with definition
// cnd(); arrow function is not hoisted with definition

function abc(){
    console.log("Hello");
}

var cnd = ()=>{
    console.log("hello");
}

abc();
cnd();

