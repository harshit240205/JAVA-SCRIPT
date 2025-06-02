// There are two ways of declaring object one through litrals & consructor.
// Singalton : When we declare the object through constructor then sigalton will become.
// object.create
// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Harshit",
    age: 22,
    [mySym]: "mykey1", // To represent symbol
    location: "Kanpur",
    email: "harshit.parmar_cs22@gla.ac.in",
    isLoggedIn: false,
}

console.log(JsUser.email);
console.log(JsUser["email"]); // Another 
console.log(JsUser[mySym]); // To access the symbol

JsUser.email = "test@gamil.com" // that's how you can change this
// Object.freeze(JsUser) //You will never edit after this 
JsUser.email = "parmar@gamil.com"

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

