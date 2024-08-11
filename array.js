//Arrays in JS
//indexing - arr[x] - where x is the position of item in te array

let myarr = [1,2,3,4,5,6,7,8,9]

console.log(myarr)

//another array declaration method

let secondarr = new Array(1,2,3,4,5)

console.log("\n", secondarr)

secondarr.push(7)

console.log(secondarr)


//array.unshift(value) - time consuming process due to insertion at start
//array.shift() - removes value from start
secondarr.pop()

console.log(secondarr)

secondarr.shift()

console.log(secondarr)

console.log(myarr.includes(9))
console.log(secondarr.indexOf(2))

let stringarr = secondarr.join()

console.log(secondarr)
console.log(stringarr)
console.log(typeof stringarr)

let slicedarr = myarr.slice(0,4)
console.log(slicedarr)
console.log(myarr)

let splicedarr = myarr.splice(0,4)

console.log(splicedarr)

console.log(myarr)

//splice manipulates tha original array while slice gives a copy of the array with slice operation performed