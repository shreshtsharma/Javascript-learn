const name="shresht";
const age=21;

console.log(name + " " + age);// old way of wrting

console.log(`my name is ${name} and age is ${age}`)// new way

let game=new String('cricket');// this will give string in the form of key value pairs and it comes with many string methods which we can use 
console.log(game[0]);
console.log(game.toUpperCase());
let game2=game;
game2="football";
console.log(game);
console.log(game2);
console.log(game.charAt('3'));
console.log(game.indexOf('k'));

let gameName="football"

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

// game.