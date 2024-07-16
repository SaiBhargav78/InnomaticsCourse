// let k = 0;
// for(let i = 1;i<=10;i++){
//     k+=i;
// }
// console.log(k)

// Check which are even and odd number between certain range.
// for(var i = 0;i<=30;i++){
//     if(i%2 === 0){
//         console.log(i,"- even");
//     }
//     else{
//         console.log(i,"- odd");
//     }
// }

// Print Vowels in a-z, character.charCodeAt() = Ascii value, String.fromCharCode(ascii) == character
// for(var i = 97;i<=122;i++){
//     var k = String.fromCharCode(i);
//     if(k==="a"||k==="e"||k==="i"||k==="o"||k==="u"){
//         console.log(k);
//     }
// }

// string is palindrome or not
// let input = "ARARARARARA";

// let output = "";

// for(var i = input.length; i>-1;i--){
//     output += input.charAt(i);
//     if(i===0){
//         if(output === input){
//             console.log("Palindrome");
//         }
//         else{
//             console.log("Not palindrome");
//         }
//     }
// }

// Print duplicates
let input = "The quick brown fox jumps over the lazy dog";
let no_dups = ""

for(var i = 0; i< input.length;i++){
    if(no_dups.indexOf(input.charAt(i)) === -1){
        no_dups += input.charAt(i);
    }
}

console.log(no_dups);

// print Panagram or not

no_dups = no_dups.toLocaleLowerCase()

let counter = 0;

for(var i = 97;i<123;i++){
    if(no_dups.indexOf(String.fromCharCode(i) != -1)){
        counter+=1;
    }
}

if(counter===26){
    console.log("Panagram");
}
else{
    console.log("Not panagram");
}