// singleton
// Object.create
// when we make objects using literals object will not be singleton
// if we make it using constructor then the object will be singleton



// use a symbol in a object and print it 

const sym=Symbol("key1");

// object literals
const user= {
    name:"shresht",
    age:21,
    "full name": "shresht sharma", //now we can't access this property using dot operator
    email:"shresht@gmail.com",
    [sym]:"mykey", // syntax to declare a symbol
    sym:"mykey", //wrong syntax it will act as a string
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"],
    location:"dehradun"
}

console.log(user.email);
console.log(user["email"]);

// console.log(user."full name"); this will not work
console.log(user["full name"]);
console.log(user[sym]);

/*
user.email="sharma@google.com";
Object.freeze(user) // this will freeze the object and values cannot be changed
user.email="sharma@youtube.com";
console.log(user);
Object.
console.log(Object.isFrozen(user) );
*/
user.greeting=function(){
    console.log("hello user");
}
user.greetingTwo=function(){
    console.log(`hello user name is ${this.name}`);
}
console.log(user.greeting);
console.log(user.greeting());
user.greetingTwo();