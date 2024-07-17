// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration

// • Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkOddEven(n){
    if (n % 2 === 0) {
        console.log(`${n} is even number`)
    } else {
        console.log(`${n} is odd number`)
    }
}

checkOddEven(5)
// • Task 2: Write a function to calculate the square of a number and return the result.
// Activity 2: Function Expression
function square(n) {
     return n * n
}

console.log(square(5))

// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function maximum(a, b) {
    if (a > b) {
        console.log(`${a} is maximum`)
    } else {
        console.log(`${b} is maximum`)
    }
}

maximum(5, 10)
// • Task 4: Write a function expression to concatenate two strings and return the result.


function concatenate(a, b) {
    console.log(`${a} ${b}`)
}

concatenate("Hello", "World")


// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const add = () => {
    let a = 5
    let b = 10
    console.log(a + b)
}
add()
// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const check = () => {
    let str = "Hello World"
    let char = "o"
    console.log(str.includes(char))
}

check()
// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function parameter(a, b = 5) {
    console.log(a * b)
}

parameter(5)
// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greeting(name, age = 18) {
    console.log(`Hello ${name}! You are ${age} years old.`)
}

greeting("Anmol")
// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function higherOrderFunction(func, num) {
    for (let i = 0; i < num; i++) {
        
        func()
        console.log(i)
    }

}

function print() {
    console.log("Hello")
}

higherOrderFunction(print, 5)


// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function
// to the result.

function higherOrderFunction(func1, func2, num) {
    for (let i = 0; i < num; i++) {
        let result = func1(num) + func2(num)
        console.log(result)
    }

}

function add1(a) {
    return a + 5
}

function multiply(a) {
    return a * 5
}

higherOrderFunction(add, multiply, 5)