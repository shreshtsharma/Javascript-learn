// there are two types of memory: stack and heap 
// primitive data types gets memory in stack and non primitive data types gets memory in heap

// difference is a copy of value is given in stack memory allocation
// while a reference to the memory is provided in heap memory allocation

// example:

let name1="shresht";
let name2=name1;

name2="hitesh";
console.log("name1 = "+name1);
console.log("name2 = "+name2);
// output
// name1 = shresht
// name2 = hitesh   here we can see that both have different values ;

let user1={
    email : "shresht@gmail.com"
}
let user2=user1;

user2.email = "hitesh@gmail.com"
console.log(`user1.email = ${user1.email}`);
console.log(`user2.email = ${user2.email}`);
// output
// user1.email = hitesh@gmail.com
// user2.email = hitesh@gmail.com   

// here we can see that we only changes the value of email in user2 object but value also changed
// in user1 object that's because both objects are pointing to the same memory in heap