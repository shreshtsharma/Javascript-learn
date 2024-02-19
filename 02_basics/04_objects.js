const instaUser=new Object();
//singleton object
instaUser.id="shre_";
instaUser.name="shresht";
instaUser.isLoggedIn=false;
instaUser.address={
    city:"dehradun",
    state:"uttarakhand",
    pin:248001
}
console.log(instaUser);

const regularUser={
    email:"shresht@google.com",
    fullname:{
        username:{
            firstName:"shresht",
            lastName:"sharma"
        }
    }
}
console.log(regularUser.fullname.username.firstName);
console.log(regularUser["fullname"]["username"]["firstName"]);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3=Object.assign(obj1,obj2); //object.assign(target,source) here obj1 is target so it also gets changed
// rather we should use this syntax 
const obj3=Object.assign({},obj1,obj2);  // here target is empty object and this return a copy of that to obj3
console.log(obj3);
console.log(obj1);

// here's one more way which most of th time we use : using spread operator
const obj4={...obj1,...obj2};
console.log(obj4);


// when we extract information from database we mostly get the array of objects
const users=[
    {
        id:1,
        mail:"random@gmail.com"
    },
    {
        id:2,
        mail:"random@gmail.com"
    },
    {
        id:3,
        mail:"random@gmail.com"
    }
]
console.log(users[0].id);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));

// destructuring objects
const course={
    courseName:"javascript",
    courFee:999,
    courseInstructor:'Hitesh'
}
// console.log(course.courseInstructor);
const {courseInstructor:instructor}=course;
console.log(instructor);

// json format 
// {
//     "name":"shresht",
//     "id":"1",
//     "fees":"free"
// }

// [
//     {},
//     {},
//     {}
// ]