//stack and heap memory

//Stack - Primitive , Heap - Reference

//in Stack you ge ta copy of the data stored, while the heap memory gives a reference of the data stored

let naem = "abs"

let nametwo = naem

console.log(nametwo)

console.log(naem)

nametwo = "ebd"

console.log(nametwo)

//in primitive datatypes, when two variable are assigned a same value, the value of the variable is copied to another variable, which is stored in the stack

let myObj = {
    firstName : "John",
    lastName : "Doe",
}

let name2 = myObj

console.log(myObj)

console.log(name2)

//in case of reference types, the variable names are stored in stack, but when the variables are printed, the reference to the heap is called and the value in heap printed , and this reference is same for both variable since one's value is assigned to the other in this case

