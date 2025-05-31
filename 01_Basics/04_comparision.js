console.log(1 < 2)
console.log(2 == 1);
console.log(2 >= 2);
console.log(2 <= 2);
console.log(2 != 2);

console.log("2" > 1); //During comparision the string will convert into number and then give us True.
// Make sure that during comparision the datatype must be same, it will increase the readability

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

// In JavaScript the equality check == and comparision >, <, >=, <= works differently.
// Comparison convert null to an number.Treating it as 0.
// Undefined will give flase in all the 3 case.

// === strictly check (Both number and datatype)

// How datatypes has been stored and access from the memory on that basis they have classified into two types
// Primitive: 7 TYpes (String, Number, Boolean, null, undefined, Symbol, BigInt)
// Reference or Non-Primitive: Array, Objects, Functions

// JavaScript is Dynamically Typed

const heros = ["Krishna", "Thakur ji", "Lala"]  // Array defined
let myobj = {
    name: "Harshit",   // Objects has been defined in the key value pair
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
    
}

// Typeof of null is : object

