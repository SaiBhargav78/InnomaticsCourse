// // impure function
// function mathcal(){
//     let a = 10;
//     let b = 20;

//     let sum = a+b;
//     let sub = a-b;
//     let mul = a*b;
//     let div = a/b;

//     console.log("Sum:",sum,"Sub:",sub,"Mul:",mul,"Div:",div);
// }

// // pure functions
// function add(a,b){
//     console.log(a+b);
// }
// function sub(a,b){
//     console.log(a-b);
// }
// function mul(a,b){
//     console.log(a*b);
// }
// function div(a,b){
//     console.log(a/b);
// }

// print subsstring till the end of the space.
let nam = "Immani Sai Bhargav";
function findsubstring(name){
    for(var i=0;i<name.length;i++){
        if(name[i].charCodeAt() === 32){
            console.log(name.substring(0,i));
            break;
        }
    }
    let space_index = name.indexOf(" ");
    console.log(name.substring(0,space_index));
}

findsubstring("Padimanta pavan");  

for(var k = 0;k<5;k++){
}
console.log(k);