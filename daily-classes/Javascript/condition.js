// Check which are even and odd number between certain range.
// for(var i = 0;i<=10;i++){
//     if(i%2 === 0){
//         console.log(i,"- even");
//     }
//     else{
//         console.log(i,"- odd");
//     }
// }


// check if numbers between certain range are prime or not.
// flag = 1;
// for(var i = 1;i<=26;i++){
//     for(var j = 2;j<=i**0.5;j++){
//         if(i%j === 0){
//             console.log(i,"- Not prime");
//             flag = 0;
//             break;
//         }
//     }
//     if(flag === 1){
//         console.log(i,"- prime");
//     }
//     else{
//         flag=1;
//     }


// check if number is between 5 and 9.
// let num = 3;

// if(num<9 && num>5){
//     console.log(num,"is in btw 5 and 9");
// }
// else{
//     console.log(num,"is not in btw 5 and 9");
// }

// check if character is a vowel or not.
// let char1 = "a";
// let char2 = "h";

// if(char1==="a" ||char1==="e" ||char1==="i" ||char1==="o" ||char1==="u"){
//     console.log(char1,"is a vowel.");
// }
// else{
//     console.log(char1,"is not a vowel.");
// }

// if(char2==="a" ||char2==="e" ||char2==="i" ||char2==="o" ||char2==="u"){
//     console.log(char2,"is a vowel.");
// }
// else{
//     console.log(char2,"is not a vowel.");
// }

let inputnumber = 6;

if(1<inputnumber && inputnumber<10){
    console.log(inputnumber,"is in btw 1 to 10");
}
else if(-10<inputnumber && inputnumber<-1){
    console.log(inputnumber,"is in btw -10 to -1");
}
else if(200<inputnumber && inputnumber<300){
    console.log(inputnumber,"is in btw 200 to 300");
}
else{
    console.log(inputnumber,"doesnt fall in any range");
}


switch(true){
    case 1<inputnumber && inputnumber<10:
        console.log(inputnumber,"is in btw 1 to 10");
        break;
    case -10<inputnumber && inputnumber<-1:
        console.log(inputnumber,"is in btw -10 to -1");
        break;
    case 200<inputnumber && inputnumber<300:
        console.log(inputnumber,"is in btw 200 to 300");
        break;
    default:
        console.log(inputnumber,"doesnt fall in any range");
        break;
}
