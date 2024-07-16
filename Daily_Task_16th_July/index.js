//  1.Multiplication Table
// Write a program that prints the multiplication table of 5 using a for loop.
//  Output should be in the format:
//  5 x 1 = 5
//  5 x 2 = 10
//  ...
//  5 x 10 = 50
console.log(` 1.Multiplication Table
Write a program that prints the multiplication table of 5 using a for loop.
 Output should be in the format:
 5 x 1 = 5
 5 x 2 = 10
 ...
 5 x 10 = 50`);

console.log();

let num = 5;
for(var i = 1; i<11; i++){
    console.log(`${num} x ${i} = ${num*i}`);
}

console.log()

// 2.Sum of Even Numbers Between 1 and 50
// Write a program that calculates and prints the sum of all even numbers between 1 and
// 50 using a for loop.
console.log(`2.Sum of Even Numbers Between 1 and 50
Write a program that calculates and prints the sum of all even numbers between 1 and
50 using a for loop.`);

console.log();

let sum = 0;
for(var i = 2; i<50; i++){
    if(i%2 === 0){
        sum += i;
    }
}
console.log(sum);

console.log();

console.log(" While Loop!!!");

console.log();

// 3. Countdown Timer
// Write a program that prints prime numbers from 2 to 20 using a while loop.
console.log(`3. Countdown Timer
Write a program that prints prime numbers from 2 to 20 using a while loop.`);

console.log();

let start = 2;
let flag = 1;
while(start<21){
    let j=2
    while(j<=start**0.5){
        if(start%j === 0){
            flag = 0;
            break;
        }
        j+=1;
    }
    if(flag === 1){
        console.log(start);
    }
    flag = 1;
    start+=1;
}

console.log();

// 4. SumofOddNumbers
// Write a program that calculates and prints the sum of all odd numbers between 1
// and 20 using a while loop.
console.log(` 4. SumofOddNumbers
 Write a program that calculates and prints the sum of all odd numbers between 1
 and 20 using a while loop.`);

 console.log();

let sum1 = 0;
let start1 = 2;
while(start1<20){
    if(start1%2!=0){
        sum1+=start1;
    }
    start1+=1;
}
console.log(sum1);

console.log();

// 5. Factorial Calculation
// Write a program that calculates and prints the factorial of a given number (e.g.,
// 5!) using a while loop.
// (Factorial of 5 is 5! = 5 x 4 x 3 x 2 x 1 = 120)
console.log(` 5. Factorial Calculation
 Write a program that calculates and prints the factorial of a given number (e.g.,
 5!) using a while loop.
 (Factorial of 5 is 5! = 5 x 4 x 3 x 2 x 1 = 120)
`);

console.log();

let fact = 5;
let result = 1;
while(fact>1){
    result *= fact;
    fact -= 1;
}
console.log(result);