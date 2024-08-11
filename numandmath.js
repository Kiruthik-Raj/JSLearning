const score = 8090

//methods - toPrecision, toFixed,toString, length, toLocaleString('en-Country code in two lettters (eg: 'IN','US')

console.log(score)

let balance = new Number(1000)

console.log(balance)

console.log(balance.toString().length)

console.log(balance.toFixed(1))

let decValue = 524.582

console.log(decValue.toPrecision(3))

let totBalance = 10000000

console.log(totBalance.toLocaleString('en-US'))

//Number.MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER etc.,

//Maths - default livrary in JS

//Methods - abs, sqrt, fllor, ceil, round, pow etc.,

console.log(Math.sqrt(4))
console.log(Math.abs(-5))
console.log(Math.round(2.563))
console.log(Math.floor(2.6))
console.log(Math.pow(2,3))
console.log(Math.ceil(5.2))
console.log(Math.max(1,2,3,4));
console.log(Math.min(1,2,3,4))
console.log(Math.round(Math.random()*100))

//similar method to print natural random numbers


const min = 10

const max = 20

console.log(Math.floor(Math.random() *  (max - min + 1) + min))
