// Day 12: Error Handling

// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function divideByTwo(n) {
    try {
        if (n === 0) {
            // Throw an error if the input is zero
            throw new Error('Error: Division by zero');
        } else {
            // Return the result if the input is valid
            return n / 2;
        }
    } catch (error) {
        // Log the error message to the console
        console.log(error.message);
    }
}

// Calling the function with zero to trigger the error
divideByTwo(0); // Output: Error: Division by zero

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divideNumbers(m, n) {
    try {
        if (n === 0) {
            // Throw an error if the denominator is zero
            throw new Error('Error: Division by zero');
        } else {
            // Return the result of the division
            return m / n;
        }
    } catch (error) {
        // Log the error message to the console
        console.log(error.message);
    }
}

// Calling the function with zero as the denominator to trigger the error
divideNumbers(10, 0); // Output: Error: Division by zero

// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function demonstrateFinallyBlock() {
    try {
        console.log('Inside try block');
        // Intentionally throw an error
        throw new Error('Something went wrong!');
    } catch (error) {
        // Log error message
        console.log('Inside catch block: ' + error.message);
    } finally {
        // Log a message indicating that the finally block has executed
        console.log('Inside finally block');
    }
}

// Calling the function to observe the flow
demonstrateFinallyBlock(); 
// Output:
// Inside try block
// Inside catch block: Something went wrong!
// Inside finally block

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

function throwCustomError() {
    try {
        // Throw an instance of CustomError
        throw new CustomError('This is a custom error!');
    } catch (error) {
        // Log the custom error message
        console.log(`${error.name}: ${error.message}`);
    }
}

// Calling the function to trigger the custom error
throwCustomError(); 
// Output: CustomError: This is a custom error!

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
function validateInput(input) {
    try {
        if (input.trim() === '') {
            // Throw a custom error if input is empty
            throw new CustomError('Input cannot be empty');
        }
        console.log('Input is valid:', input);
    } catch (error) {
        // Log the custom error message
        console.log(`${error.name}: ${error.message}`);
    }
}

// Calling the function with invalid input to trigger the custom error
validateInput(''); // Output: CustomError: Input cannot be empty
validateInput('Valid input'); // Output: Input is valid: Valid input

// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console.
function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
            resolve('Promise resolved successfully!');
        } else {
            reject(new Error('Promise rejected!'));
        }
    });
}

// Handling the promise
randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log('Error:', error.message);
    });

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handleRandomPromise() {
    try {
        const result = await randomPromise();
        console.log('Async function:', result);
    } catch (error) {
        console.log('Async function error:', error.message);
    }
}

// Calling the async function
handleRandomPromise();

// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch('https://invalidurl.com/api')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        console.log('Data:', data);
    })
    .catch((error) => {
        console.log('Fetch error:', error.message);
    });

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
    try {
        const response = await fetch('https://invalidurl.com/api');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Async fetch data:', data);
    } catch (error) {
        console.log('Async fetch error:', error.message);
    }
}

// Calling the async fetch function
fetchData();
