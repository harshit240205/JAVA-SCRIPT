
const user = {
    username: "harshit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`); // this keyword is use to refer the current context
        console.log(this); // This will print the 
        
    }

}

user.welcomeMessage() // This will print the entire object
user.username = "sam" // Change the value of the username
user.welcomeMessage() // This will print the entire updated object

console.log(this); // this will refer to the empty object

// But when you do this on the console it will return the window object becasue in the browser the global object is Window object

// const chai = function chai(){
//     let username = "harshit"
//     console.log(this.username); // you are not able to use this inside the function
// }

chai()

const chai = chai => {
    let username = "harshit"
    console.log(this.username); // undefined
    console.log(this); //{}
    
}

const addTwo = (num1, num2) => {
    return num1 + num2
}

// const addTwo1 = (num1, num2) => num1 + num2 // Implicit arrow function

const addTwo1 = (num1, num2) => (num1 + num2) // We have to use the return keyword while using curly braces {}





