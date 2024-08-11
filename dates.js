//Dates

let myDate = new Date()

console.log(myDate)

//methods - toString(), toLocaleString, toDateString, Date.now(), getTime(), getMonth, getYear, getDay etc., 

console.log(myDate.toString())
console.log(myDate.toLocaleString())

console.log(myDate.toDateString())


let createdDate = new Date(2023, 2,14, 5, 30)
console.log(createdDate)
console.log(createdDate.toString())
console.log(createdDate.toDateString())

let secondDate = new Date("2024-04-04")

console.log(secondDate.toString())

console.log(myDate.getTime())

console.log(Date.now())
console.log(Math.floor(myDate / 1000))

console.log(myDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    
}))

