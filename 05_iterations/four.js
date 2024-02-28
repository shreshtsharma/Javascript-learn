const myobj={
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift :"swift by apple"
}
for (const key in myobj) {
    console.log(key + ':-' +myobj[key]);
}
const nums=[1,2,3,4,5]
for (const key in nums) {
    console.log(`key is ${key} and value is ${nums[key]}`);
}

// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"Unites States Of America")
// map.set('Fr',"France")

// for (const key in map)
// {
//     console.log(key);
// }