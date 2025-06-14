const Arr = [0, 1, 2, 3, 4, 5]
console.log(Arr[1]);

const myArr = new Array(0, 1, 3, 5)
console.log(myArr[2]);

// We can put any form of data in the array like numbers, String, boolean
// The size of the array is Dynamic in the JavaScript

// Array Methods

myArr.push(6) // To add the value in the array at last
console.log(myArr);
myArr.pop() // Remove the last value

myArr.unshift(0) // To add the element in the start
myArr.shift() // To remove the element from the start
console.log(myArr);

console.log(myArr.includes(9)); // it will give the result in boolean weather the number is present in the array or not.
console.log(myArr.indexOf(4)); // it will give the index of the particular value

const newArr = myArr.join() // This will convert the array into String
console.log(myArr);
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1); // This will print the array without including last element
console.log("B ", myArr); // There will be no change in the myArr

const myn2 = myArr.splice(1,3) 
console.log("C ", myArr);    // This will change the original array by excluding the splice part
console.log(myn2);  // This will print the array including last element














