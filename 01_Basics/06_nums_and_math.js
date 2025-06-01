const score = 400;
console.log(score);

const balance = new Number(100) //specify the type here 
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));  //For Precision Value (100.0).We can use this mainly in the e-commerce application.

const otherNumber = 23.85461856;
console.log(otherNumber.toPrecision(2)); //For Precision Value (24)



//++++++++++++++++++++++++++++++++++++++++++  MATHS ++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));

console.log(Math.random());
console.log((Math.random()*10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random values in range



