const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros); // This will add array inside array

const all_heros = marvel_heros.concat(dc_heros) // This will forma an new array without modifying the original one 
console.log(all_heros); // all the elements will be added in new array

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);  // Another method to concat using spread

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // combine all the sub arrays into single array
console.log(real_another_array);

console.log(Array.from("Harshit")); // convert this into array ["H", "a", "r", "s", "h", "i", "t"]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Array of set of elements








