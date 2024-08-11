//primitive datatypes - Number, BigInt, String, Boolean, null, undefined, Symbol

//reference types / non-primitive - arrays, objects, functions

const id = Symbol('324')

const id2 = Symbol('765')

console.table([id, id2])

let Bignumber = 284759837587239472839847826n

//Arrays

let heroes = ["Batman", "Superman", "Iron Man"]

let myData = {
    name : "John Wick",
    designation: "Assassin",
}

const myFUnction = () => {
    console.log("My Function called using arrow function")
}

const myFunction = function(){
    console.log("My function called using curly brackets")
}

console.log(typeof heroes) // returns object

myFUnction() // if checked types, returns function

myFunction()

console.log(typeof myFunction)