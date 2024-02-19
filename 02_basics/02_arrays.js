const marvel_heros=["Thor","IronMan","Hulk"];
const dc_heros=["Superman","Flash","Batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// expected outcome the whole array got pushed in the marvel heros array
// [ 'Thor', 'IronMan', 'Hulk', [ 'Superman', 'Flash', 'Batman' ] ]

const all_Heros=marvel_heros.concat(dc_heros)
console.log(all_Heros);
// expected outcome
// [ 'Thor', 'IronMan', 'Hulk', 'Superman', 'Flash', 'Batman' ]

// another way to do it is spread operator 
//    ... => spread operator     pov: just think of it like you dropped a glass and it broke into parts 
//    similarly it breaks the array into elements
//************important operator********************* */
const allheros=[...marvel_heros,...dc_heros];
console.log(allheros);
// expected outcome
// [ 'Thor', 'IronMan', 'Hulk', 'Superman', 'Flash', 'Batman' ]

const nums=[1,2,3,[4,5,6],7,[8,9,[10,11]]];
// this will flatten the array till infinity depth and you can also specify a depth till which you want to flatten
const usable_nums=nums.flat(Infinity)
console.log(usable_nums);

console.log(Array.isArray("shresht"));
console.log(Array.from("shresht"))
// this will not work
// console.log(Array.from("shresht","sharma"))

console.log(Array.of("shresht","sharma"))

console.log(Array.from({name:"shresht"})) //interesting