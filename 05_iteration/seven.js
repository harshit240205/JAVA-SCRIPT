const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10) // Use of Map
// console.log(newNums);

// // You can do the similar with for each as well


// Concept of chaining

const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num > 40)
console.log(newNums);
