// Array
// read this documentation to know more :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const arr=[1,2,3,4]
let myarr=["shresht",1,2,"sharma"]
const nums=new Array(1,2,3,6)
// console.log(arr[0]);
// console.log(myarr[3])
// console.log(typeof nums)
nums.push(4);
nums.push(10)
nums[2]=6
nums.pop()
console.log(nums);

nums.unshift(5)
console.log(nums);
nums.shift()
console.log(nums);

// console.log(nums.includes(7));
// console.log(nums.indexOf(6));
const newArr=nums.join();
console.log(typeof nums);
console.log(typeof newArr);
console.log(newArr);
console.log(newArr.length);

// slice splice
const myArr=[0,1,2,3,4,5,6]
console.log("A ",myArr);

// slice does not manipulate the original array it just returns a copy of the selected portion
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

// splice manipulates the original array and cuts the portion of it 
const myn2 = myArr.splice(4, 3)
console.log("C ", myArr);
console.log(myn2);