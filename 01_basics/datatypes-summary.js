// there are primarily two types 
// 1. primitive data type 
// 2.non primitive data type / reference type
// These types are divided on the basis of how data is being stored and accesed in memory.

/********** all primitive data types are call by value**********/


/*************
 
primitive data types / call by value
7 types:string,number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scorevalue=100.3
const isLoggedIn=false
let userEmail

non primitive data types/ reference type
Array,objects,functions

javascript is a dynamically typed language as  
the interpreter assigns variables a type at runtime based on the variable's value at the time.

***************/

// symbol data type used to make a vlaue unique

const id=Symbol('123')
const id2=Symbol('123')
// they seem to be same but symbol makes them unique
console.log(id===id2)


// Array
const heros=['shaktimaan','spidey','batman'];

// object

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// all non primitive data types have a typeof 'object' and null also object in typeof
console.log(typeof heros); // object
console.log(typeof myFunction); //function object
console.log(typeof myObj); // object