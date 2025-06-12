// for

for(let i = 0; i<10; i++){
    const element = i;
    // console.log(element);
}

for(let i = 0; i<10; i++){
    for(let j = 0; j<10; j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        }
}

let myArray = ["Harshit", "Agraj", "Harsh Mittal"]
for(let index = 0; index <myArray.length; index++){
    const element = myArray[index];
    // console.log(element);
}

// break and continue

for(let index = 1; index <= 20; index++){
    if(index == 5){
        // console.log(`Detected 5`);
        continue // In the continue that particular iteration will be terminated rest then continiues
    }
    // console.log(`value of i is ${index}`);

}

// break: The whole loop will get terminated

// While loop

let i = 0
while(i < 10){
    // console.log(`value is ${i}`);
    i = i+2
}

// Do while 

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while(score <= 10)

