const userEmail="shresht.ai"
if(userEmail)
{
    console.log("email found");
}
else{
    console.log("not found");
}

// falsy values
// false,0,-0, BigInt 0n,"",null,undefined,NaN

// truthy values 
// "0",'false'," ",[],{},function(){}

// how to check if array or object is empty or not

const arr=new Array()
if(arr.length===0)
{
    console.log("array is empty");
}
const myObj={}
if(Object.keys(myObj).length===0)
{
    console.log("myObj is empty");
}

// Nullish Coalescing Operator (??): null undefined
let val1
// val1=5 ?? 10
// val1=null ?? 5
// val1=undefined ?? 10

// Ternary Operator

// condition ? true:false

9>4 ? console.log("yes"):console.log("no")
