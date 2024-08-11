let myname = "John Wick"

let contractCount = 100

console.log(myname + " " + contractCount)

//advanced form will be like this - ` type your string here and to insert variables, use ${}`

console.log(`My Name is  ${myname} and my contract count is ${contractCount}`)

//declaration using objects

let myName = new String('Sakai Jin')

console.log(myName)

//using this would lead to easy access of key pair values of the string

//some methods of string
//these methods can be used without converting it into a prototype to access the methods


console.log(myname.length)

console.log(myName.toUpperCase())
//charAt, indexOf

console.log(myname.substring(0,3))

console.log(myname.slice(0,5))

let spacedString = " this is a spaced  //////   string "

console.log(spacedString.trim())

console.log(spacedString.replaceAll('/','-'))

console.log(spacedString.includes('tsushima'))
console.log(spacedString)

console.log(spacedString.split('/'))

console.log(spacedString.split('/', 5))

