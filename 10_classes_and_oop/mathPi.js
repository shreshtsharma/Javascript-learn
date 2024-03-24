const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);
// OUTPUT 

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }


// getting the information about properties of an Object
// here we can see that writable,enumerable and configurable propertirs of pi are false
// so we cannot alter them

// now how to access these properties if you want to manage it 
const obj={
    name:"chai",
    price:250,
    hello:function (){
        console.log("hello");
    }
}
console.log(Object.getOwnPropertyDescriptor(obj,"name"));

// OUTPUT
// { value: 'chai', writable: true, enumerable: true, configurable: true }

Object.defineProperty(obj,'name',{
writable:false,
enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(obj,"name"));

// OUTPUT
// {
//     value: 'chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }
for(let [key,value] of Object.entries(obj))
{
    // now name is not iterable as we set its inumerable to false 
    if( typeof value !== 'function')
    console.log(`${key} : ${value}`);
}