let obj = {}
console.log(obj.__proto__)
console.log(Object.prototype)
console.log(Object.prototype === obj.__proto__)


function person(name,disabled){
    this.name = name
    this.disabled = disabled
}

let bhargav = new person("bhargav",false)
console.log(bhargav)
console.log(bhargav.__proto__)

let satya = new person("satya",false)
console.log(satya)
console.log(satya.__proto__)

person.prototype.walks = function(){
    console.log(`${this.name} is ${this.disabled? 'disable':'not disabled'}`)
}

satya.walks()

let personObj = {
    greet(){
        console.log(`Hi ${this.name}`)
    }
}

console.log(personObj)
personObj.greet.call({name:"bhargav"})

let personone = Object.create(personObj)
console.log(personone)

xyz = {}
console.log(xyz.__proto__)
xyz.__proto__ = personObj
console.log(xyz.__proto__)

xyz.name = "Howard"

xyz.greet()

function father(){}

console.log(father.prototype)

console.log(personObj.prototype)

