// const coding = ["js", "ruby", "java", "pyhton", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item  
// })

// console.log(values); // for each loop donot return any value


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Filter Function

// const newNums = myNums.filter((num) => num > 4) // Basic use of filter, this will return the num > 4
// console.log(newNums);

// const newNums = myNums.filter((num) => {
//     return num > 4
// }) // This will not work Properly because {} donot return you need to write return for that
// console.log(newNums);


// By Using For Each for same

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
  { title: "The Silent Forest", genre: "Mystery", publishYear: 2012 },
  { title: "Code of Shadows", genre: "Tech Thriller", publishYear: 2018 },
  { title: "Echoes of the Past", genre: "Historical Fiction", publishYear: 2005 },
  { title: "Beyond the Horizon", genre: "Science Fiction", publishYear: 2021 },
  { title: "Love in Times Square", genre: "Romance", publishYear: 2010 },
  { title: "The Last Kingdom", genre: "Fantasy", publishYear: 2001 },
  { title: "Into the Data Abyss", genre: "Non-Fiction", publishYear: 2019 },
  { title: "Whispers in the Library", genre: "Horror", publishYear: 2015 },
  { title: "Startup Fever", genre: "Business", publishYear: 2022 },
  { title: "Waves of Change", genre: "Self-Help", publishYear: 2016 }
];

// const userBooks =  books.filter( (bk) => bk.genre === 'Historical Fiction')
const userBooks = books.filter( (bk) => bk.publishYear > 2000)
console.log(userBooks);



