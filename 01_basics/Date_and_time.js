let myDate = new Date();

console.log(myDate);
console.log(typeof(myDate))// Date is a type of object

console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON())
console.log(myDate.getDate(),myDate.getMonth(),myDate.getTime());

// syntax of specifying your own date
// syntax 1:
let myCreatedDate1=new Date(1990,0,6,12,45);
//syntax 2;
// yyyy-mm-dd
let myCreatedDate2=new Date("2022-06-07")
// syntax 3;
// mm-dd-yyyy
let myCreatedDate3=new Date("11-06-2002")
//in js months start from 0 so year,month,date
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate3.getTime())
// converting to seconds
console.log(Math.floor(myTimeStamp/1000));

let newDate=myDate.toLocaleString('default',{
    weekday:"long",
    month:"long",
})
console.log(newDate);
