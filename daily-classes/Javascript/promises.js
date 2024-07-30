let first_four_even = []

let i = 2

while(first_four_even.length < 4){
    if(i%2 === 0){
        first_four_even.push(i)
    }
    i++
}

let sum = 0

for(let k = 0; k<first_four_even.length;k++){
    sum+=first_four_even[k]
}

console.log(sum**0.5)

function findevennums(n,cb1,cb2){
    let evennums = []
    for(var i = 1;i<=n*2;i++){
        if(i%2 === 0){
            evennums.push(i)
        }
    }
    cb1(evennums,cb2)
}

const sumofevennums = (array,cb) => {
    let sum = array.reduce((acc,curr)=>acc = acc+curr,0)
    cb(sum).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})
}

const sqroot = (val) => {
    return new Promise((resolve,reject)=>{
      resolve(val**0.5)
    })
}

findevennums(4,sumofevennums,sqroot)

function mypomise(obj){
    return new Promise((resolve,reject)=>{
        if(obj.marks>=35){
            resolve(`${obj.name} passed the exam.`)
        }
        else{
            reject(`${obj.name} has failed the exam.`)
        }
    })
}

mypomise({name: "bhargav",marks: 75}).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})



// setTimeout(()=>console.log(8),4000)

// setTimeout(()=>console.log(7),2000)

// setTimeout(()=>console.log(9),1000)

// console.log([mypomise({name: "bhargav",marks: 75}).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})])

let promise1 =new Promise((resolve,reject)=>{
    setTimeout(function() {
      resolve('promise1 is resolved')
    }, 5000);
  })
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(function() {
      resolve('promise2 is resolved')
    }, 1000);
  })
let promise3 = new Promise((resolve,reject)=>{
     setTimeout(function() {
      // resolve('promise3 is resolved')
      reject('promise3 is reject')
    }, 2000);
  })
Promise.all([promise1,promise2,promise3]).then((result)=>{
  console.log('success=>',result)
}).catch((err)=>{
  console.log('err=>',err)
})
Promise.allSettled([promise1,promise2,promise3]).then((result)=>{
  console.log('success=>',result)
}).catch((err)=>{
    console.log('err=>',err)
})
Promise.race([promise1,promise2,promise3]).then((result)=>{
  console.log('success=>',result)
}).catch((err)=>{
   console.log('err=>',err)
})

x=10

console.log(x)