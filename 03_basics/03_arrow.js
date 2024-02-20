const user={
    username:"shresht",
    price:999,
    welcome_msg:function(){
        console.log(`${this.username} welcome to our site`);
        console.log(this);
    }
}

user.welcome_msg()
user.username="mohit"
user.welcome_msg()
// in browser this is contexed to window global object
// but because we are in node environment so it's giving a empty object
console.log(this);

function chai1(){
    let username="shresht"
    // console.log(this);
    // we cannot use this inside a function it works in object only
    console.log(this.username);
}
chai1()

const chai2=function(){
    let username="shresht"
    console.log(this.username);
    // console.log(this);
}

chai2()
// +++++++++++++++ ARROW FUNCTION ++++++++++++++++++++

const chai3=()=>{
    let username="shresht"
    console.log(this.username);
    console.log(this);
}
chai3()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// implicit return 
// const addTwo=(num1,num2)=>(num1+num2)
const addTwo = (num1,num2) => num1+num2
console.log(addTwo(3,4));

