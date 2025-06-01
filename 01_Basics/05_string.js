const name = "Harshit"
const repoCount = 50

console.log(`My name is ${name} and my repo count is ${repoCount}`) // This is the mordern way of Printing String and it is called String Interpolation

const gameName = new String("pubg")

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(`${gameName}`);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-4, 2)
console.log(anotherString);

const newStringone = "       Harshit        "
console.log(newStringone);
console.log(newStringone.trim());

const url = "http://harshit&20parmar.info"
console.log(url.replace('%20', '-'));

console.log(url.includes('harshit'));

console.log(url.split(' '));

// We have covered all the basic functions of the string you can use mdn and console for more






