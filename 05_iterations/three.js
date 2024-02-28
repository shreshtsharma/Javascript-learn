// for of
// ["","",""]
// [{},{},{}]
const arr=[1,2,3,4,5]
for (const num of arr) {
    if(num==4)continue
    console.log(num);
}
const greetings="hello world"
for(const greet of greetings){
    console.log(`each char is ${greet}`);
}

// Maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"Unites States Of America")
map.set('Fr',"France")

console.log(map);

for (const key of map)
{
    console.log(key);
}
for(const [key,value] of map)
{
    console.log(key,':-',value);
}
const myObject={
    'game1':'NFS',
    'game2':'spiderMan'
}
// objects are not iteratable using for of loop
// for (const [key,value]of myObject) {
//     console.log(key,':-',value);
// }