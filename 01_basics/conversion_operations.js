// data types conversion in javascript

let score="";

let num=Boolean(score)
console.log(typeof num);
console.log(num);

// when score = "50"
// and we convert it to a number we get a number 50

// when score="50a"
// and we convert it to a number it gets converted but the value we get is Nan => not a number

// when score=null;
// and we convert it to a number it gets converted but the value we get is 0 

// when score=undefined
// and we convert it to a number it gets converted but the value we get is Nan => not a number

// when score=true/false
// and we convert it to a number it gets converted but the value we get is 1/0

// when score=70
// and we convert it to a string then it gets converted to a string and we get a value of "70"

// when score = null / undefined
// and we convert it to a string we get string with value null / undefined

// when score = "hello"
// and we convert it to boolean then we get true

// when score = "" i.e., empty string
// and we convert it to boolean then we get false 

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
