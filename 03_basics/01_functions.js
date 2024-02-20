function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

// ... is rest operator here
function calculateCartPrice(val1,val2,...num)
{
    return num;
}
console.log( calculateCartPrice(200,100.300,1000,23.99));


const user={
    username:"shresht",
    total_bill:100000
}
function handleObject(anyobject)
{
    console.log(`user ${anyobject.username} and total bill is ${anyobject.total_bill}`);
}
handleObject(user)

const arr=[100,200,300,400];
function getSecondVal(vals)
{
    console.log(vals[1]);
}
getSecondVal(arr);