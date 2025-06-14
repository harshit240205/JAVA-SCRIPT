// Reduce 

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0) // 0 is the first time value of the acc (accumlator) then the value of the accumlator will be acc + currval

// console.log(myTotal);

// By Using Arrow Function

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // Add the whole array
console.log(myTotal);

// We can do the same in shopping cart as well

