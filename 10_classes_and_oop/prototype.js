let myName="shresht     "
console.log(myName.length);
// console.log(myName.trim().length)
console.log(myName.trueLength);

let myHeros=["thor","spiderman"]

let heropower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
// adding a method to the object
Object.prototype.shresht=function(){
    console.log(`shresht was present in all javascript lectures`);
}
// now object has this function 
heropower.shresht();
// object has this function so array and string should also have these functions
// because they inherit objects let's see?
myHeros.shresht();
myName.shresht()
// adding a property 

Object.prototype.surname="sharma"
 console.log(heropower.surname);

Array.prototype.hey=function(){
    console.log("hello world");
}
const user={
    name:"chai"
}
myHeros.hey()
myHeros.shresht()
// heropower.hey()

// inheritance
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvalilable:false,
}
const Ta={
    makeassignment:'Js Assignment',
    fullTime:true,
    __proto__ : TeachingSupport
}

Teacher.__proto__=user

// modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)
// TeachingSupport will inherit properties and methods from Teacher
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()


// The code Object.setPrototypeOf(TeachingSupport, Teacher) in JavaScript sets the prototype of the TeachingSupport object to be the Teacher object.

// In JavaScript, every object has a prototype, which is another object that it inherits properties and methods from. By using Object.setPrototypeOf, you can explicitly set the prototype of an object to another object.

// So, in this case, TeachingSupport will inherit properties and methods from Teacher, meaning that any properties or methods defined on Teacher will be accessible on TeachingSupport. This can be useful for creating inheritance relationships or sharing behavior between objects.




