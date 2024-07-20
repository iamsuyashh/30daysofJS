// Day 8: ES6+ Features
// Tasks/Activities:
// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const name = "John"
const age = 30
console.log(`My name is ${name} and I am ${age} years old.`)


// • Task 2: Create a multi-line string using template literals and log it to the console.

const multiLineString = `
  This is a multi-line string.
  It spans multiple lines.
  Template literals make it easy to include variables and expressions.
`;

console.log(multiLineString);


// Activity 2: Destructuring
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const array = [1,2,3,4,5]

const [first, second] = array
console.log(first, second)

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const  book ={
    name:"Harry Potter",
    title:"Lol"
}

const {author,title} = book
console.log(author,title) 

// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to
// the console.

const arr = [1,2,3,4,5]

const arr1 = [...arr,6,7,8,9]
console.log(arr1)


// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.


function sum(...args) {
    let sum = 0
    for (let i = 0; i < args.length; i++) {
      sum += args[i]
    }
    return sum
  }
  
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// Activity 4: Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of
// calling this function with and without the second parameter.

function defaultParameter(a, b = 1) {
    console.log(a * b)
}

defaultParameter(5)

// Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const obj = {
    name: "John",
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
  }
  
  console.log(obj)

// • Task 9: Create an object with computed property names based on variables and log the object to the console.


const obj1 = {
    name: "John",
    age: 30,
    [`${obj.name} is ${obj.age} years old`]: true
  }