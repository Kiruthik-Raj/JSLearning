let customer_age = "23"

console.log(typeof(customer_age))

let numinVal = Number(customer_age)

console.log(typeof(numinVal))

let cost = "6167vp"

let costinnum = Number(cost)

console.log(typeof(costinnum))

console.log(costinnum)

//NaN ->  Not a number

//conflict with data type conversion is that if you convert a string to a number, it will get converted to a number but you cannot print the value as it will give NaN as output

let PaymentConfirmed = 0
let addedtoCart = 1

let boolpayment = Boolean(PaymentConfirmed)

let boolcart = Boolean(addedtoCart)

console.table([boolpayment, boolcart])

//instead of 0 and 1, you can use empty string and a small string so that when it gets converted it returns false for empty and true for string