// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

const book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
}
console.log(book);

// • Task 2: Access and log the title and author properties of the book object.

console.log(book.title, book.author);


// Activity 2: Object Methods
    // • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.


const book1 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
}

function bookInfo() {
    console.log(`${book1.title} by ${book1.author}`)
}

bookInfo()

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.


const book2 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
}

function updateYear(year) {
    book2.year = year
    console.log(book2)
}

updateYear(2000)

// Activity 3: Nested Objects
// console.
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console

const library = {
    name: "Harry Potter",
    books: [{
        title: "Harry Potter",
        author: "J.K. Rowling",
        year: 1997
    }]

}

console.log(library)

// • Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.books[0].title)
console.log(library.name)

// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this
// method.


const book3 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
}

function bookInfo1() {
    console.log(`${book3.title} was written in the year ${book3.year}`)
}

bookInfo1()

// Activity 5: Object Iteration
// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.


const book4 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
}

for (let key in book4) {
    console.log(key, book4[key])
}

// • Task 9: Use Object. keys and Object.values methods to log all the keys and values of the book object.


const book5 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
}

console.log(Object.keys(book5))

console.log(Object.values(book5))
