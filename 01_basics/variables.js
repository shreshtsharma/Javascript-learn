const accountId=1245;
let accountEmail="sharmashresht7@gmail.com";
var accountName="shresht";
accountCity="dehradun";

// we cannot change the value of  a constant (const) variable
// accountId=345;

let accountHolder;  // we haven't assigned a value to it so it has the value undefined;

/*
Prefer not to use var
because of issue in block scope and functional scope
var does not support scope instead use let
*/

console.table([accountId , accountEmail, accountName,accountCity,accountHolder]);