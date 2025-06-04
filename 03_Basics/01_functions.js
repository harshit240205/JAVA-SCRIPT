function addTwoNumbers(number1, number2){ //Parameters
    console.log(number1+number2);
}

addTwoNumbers(3, 4)
addTwoNumbers(3, "4") // Arguments
addTwoNumbers("3", "4")
addTwoNumbers(3, null)

function loginUserMessage(username){
    if(!username){
        console.log("PLease Enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());


// Concept of adding items in the cart

function calculateCartPrice(...num1){ // This is called Rest Operator
    return num1
}

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

