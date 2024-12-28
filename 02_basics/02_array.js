const marvel_heros = ["thor","ironman","Spiderman"]
const dc_heros = ["superman","Flash","batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros); // [ 'thor', 'ironman', 'Spiderman', [ 'superman', 'Flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// by using spread operator
const all_new_heros = [...marvel_heros , ...dc_heros]
// console.log(all_new_heros);

const an_array = [1,2,3,[4,5,6],7,[8,[9]]]
const new_an_array = an_array.flat(Infinity)
// console.log(new_an_array);
    
    
    
    
    
console.log(Array.isArray("Shriii"));
console.log(Array.from("Shriii"));
console.log(Array.from({name:"Shriiiii"}))


let scor1 = 10
let scor2 = 20
let scor3 = 30

console.log(Array.of(scor1,scor2,scor3));
