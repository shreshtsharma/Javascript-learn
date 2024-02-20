var c=200
let a=40
if(true)
{
    let a=50
    const b=90
    var c=10
}
console.log(a);
// console.log(b);
console.log(c);


// nested scope
function one(){
    const username="shresht"
    function two(){
        const id=123
        console.log(username)
    }
    two()
    // console.log(id)
}
one()

// +++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++++
// calling a function before definition works fine if we declare it as this
console.log(addone(3));

function addone(num)
{
    return num+1;
}
console.log(addone(3));


// this will give error as we cannot access the function stored in a variable  before its declaration
// console.log(addtwo(5));

const addtwo=function(num)
{
    return num+2;
}
console.log(addtwo(5));