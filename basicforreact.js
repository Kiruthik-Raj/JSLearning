// export default function doSomething(){
//     console.log("Export default function")
// }

// //callback functions or arrow functions - use const which is standard

// export const doThings = ()=> {}

// //anonymous functions

// <button onClick = {() => {console.log("Anonymous Function")}}></button>

// //ternary operator

// let result = true

// let message = result ? "true" :  "false"

// console.log(message)

// //use this ternary operator in conditional rendering

// //objects

// let name = "Goku Black"

// let man = {
//     name,
//     age: 36,
//     isMarried : true,
//     spouse: "Chichi",
//     son : "Son Gohan",
// };

// console.log(man.name);


// //spread operator

// let man2 = {...man, son : "Trunks"}

// console.log(man2.son)

// //map, filter

// let names = ["Son Goku",  "Vegeta", "Gohan", "Trunks"];
// //map function

// names.map((name)=> {console.log(name)});

// //filter

// names.filter((name) => {
//     return name !== "Vegeta"
// });

// //async await fetch

// async function myFetchApi()

// //for just returning the data without any manipulation
// {
//     return (await fetch('https://jsonplaceholder.typicode.com/posts')).json();

//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//     const data = await response.json();

//     console.log(data);
// }

// let showData = async () => {

//     let postData = [];
//     try{
//         postData = await myFetchApi();
//     }
//     catch (e) {
//         console.log(e.message);
//     }
// }


console.log("JS is working!!")

