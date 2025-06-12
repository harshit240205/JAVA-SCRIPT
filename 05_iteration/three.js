// For of

// ["", "", ""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings){
    // console.log(`Each char is ${greet}`);
}


// Maps

const map = new Map() // In map the values are unique and are in same order

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for(const [key, value] of map){
    console.log(key, ':-', value);
}

// We can cannot iterate in the object through for of loop

