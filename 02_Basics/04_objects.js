const tinderser = new Object() // This is the singalton object
const tinderser1 = {} // This is the non-singalton object

// The above both are empty objects.

tinderser1.id = "773"
tinderser1.name = "Harshit"
tinderser1.isLoggedin = false

console.log(tinderser1);

const regularUser = {
    email: "harshit@gmail.com",
    fullname: {
        firstname : "Harshit",
        lastname : "Parmar"
    }
}
console.log(regularUser.fullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} // It cause the problem like similar to array (object inside the object)
 
const obj3 = Object.assign({}, obj1, obj2) // This will work fine

const obj = {...obj1, ...obj2}
console.log(obj3);

const user = [   // That's how the data will come from the databses
    {
        id: 1,
        email: "test@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "p@gmail.com"
    }
]

user[1].email
console.log(tinderser1);

console.log(Object.keys(tinderser1)); // This will store the keys of the object into the arrays 
console.log(Object.values(tinderser1));  // This will store the values into the arrays
console.log(Object.entries(tinderser1));  // Give the individual array of Key & value pair


const course = {
    coursename : "Introduction to JavaScript",
    courseInstructor: "Harshit",
    price: 999
}

const {courseInstructor: instructor} = course // Destructuring of the object
console.log(instructor)

// {
//     "name": "harshit",
//     "coursename": "Introduction to JavaScript",  // That's how the data will come from the API in the form of JSON
//     "price": "free"
// }

// Sometimes the result is also come in the form of Array
[
    {},
    {},
    {}
]


