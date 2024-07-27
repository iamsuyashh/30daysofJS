// Importing third-party modules
import _ from 'lodash';
import axios from 'axios';

// Task 1: Default Export - Add Function
function add(a, b) {
    return a + b;
}


// Import the add function
console.log('Task 1 - Add Function');
console.log(add(2, 3)); // Output: 5

// Task 2: Default Export - Person Object
const person = {
    name: 'John Doe',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
};


// Import the person object
console.log('Task 2 - Person Object');
console.log(person.name); // Output: John Doe
person.greet(); // Output: Hello, my name is John Doe and I am 30 years old.

// Task 3: Named Exports - Math Functions
export function addNumbers(a, b) {
    return a + b;
}

export function subtractNumbers(a, b) {
    return a - b;
}

// Import named exports
console.log('Task 3 - Named Exports');
console.log(addNumbers(5, 3)); // Output: 8
console.log(subtractNumbers(5, 3)); // Output: 2

// Task 4: Default Export - Multiply Function
function multiply(a, b) {
    return a * b;
}

export default multiply;

// Import the multiply function
console.log('Task 4 - Multiply Function');
console.log(multiply(4, 5)); // Output: 20

// Task 5: Importing Entire Module as Object
const PI = 3.14159;

export function circleArea(radius) {
    return PI * radius * radius;
}

export function circumference(radius) {
    return 2 * PI * radius;
}

// Importing all module components
import * as utils from './Day13scripts.js';

console.log('Task 5 - Import Entire Module');
console.log(utils.PI); // Output: 3.14159
console.log(utils.circleArea(5)); // Output: 78.53975
console.log(utils.circumference(5)); // Output: 31.4159

// Task 6: Using Lodash for Array Manipulation
const array = [1, 2, 3, 4, 5];
const reversedArray = _.reverse(array.slice());

console.log('Task 6 - Lodash Reverse Function');
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

// Task 7: Making a Network Request with Axios
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Task 7 - Axios Network Request');
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Task 8: Using Webpack or Parcel (Optional)
// Since Webpack or Parcel would require additional setup, let's assume this step is just a demonstration of how to bundle multiple files.
