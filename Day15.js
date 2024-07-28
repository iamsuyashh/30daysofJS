// Day15Closures.js

// Activity 1: Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction() {
    const outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      return `Accessing outer variable: ${outerVariable}`;
    }
  
    return innerFunction;
  }
  
  console.log('Task 1 - Closure Access');
  const innerFunc = outerFunction();
  console.log(innerFunc()); // Output: Accessing outer variable: I am from the outer function
  
  // Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
  
  function createCounter() {
    let count = 0;
  
    return {
      increment() {
        count++;
      },
      getValue() {
        return count;
      },
    };
  }
  
  console.log('Task 2 - Private Counter');
  const counter = createCounter();
  counter.increment();
  counter.increment();
  console.log(counter.getValue()); // Output: 2
  
  // Activity 2: Practical Closures
  
  // Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
  
  function uniqueIdGenerator() {
    let lastId = 0;
  
    return function() {
      lastId++;
      return `id_${lastId}`;
    };
  }
  
  console.log('Task 3 - Unique ID Generator');
  const generateId = uniqueIdGenerator();
  console.log(generateId()); // Output: id_1
  console.log(generateId()); // Output: id_2
  console.log(generateId()); // Output: id_3
  
  // Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
  
  function greetUser(name) {
    return function() {
      console.log(`Hello, ${name}!`);
    };
  }
  
  console.log('Task 4 - Greeting Closure');
  const greetJohn = greetUser('John');
  const greetJane = greetUser('Jane');
  greetJohn(); // Output: Hello, John!
  greetJane(); // Output: Hello, Jane!
  
  // Activity 3: Closures in Loops
  
  // Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
  
  function createFunctionArray() {
    const functionArray = [];
  
    for (let i = 0; i < 5; i++) {
      functionArray.push(
        (function(index) {
          return function() {
            console.log(`Function at index ${index}`);
          };
        })(i)
      );
    }
  
    return functionArray;
  }
  
  console.log('Task 5 - Closures in Loops');
  const functions = createFunctionArray();
  functions[0](); // Output: Function at index 0
  functions[1](); // Output: Function at index 1
  functions[2](); // Output: Function at index 2
  functions[3](); // Output: Function at index 3
  functions[4](); // Output: Function at index 4
  
  // Activity 4: Module Pattern
  
  // Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
  
  const itemCollectionModule = (function() {
    const items = [];
  
    return {
      addItem(item) {
        items.push(item);
        console.log(`Item added: ${item}`);
      },
      removeItem(item) {
        const index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1);
          console.log(`Item removed: ${item}`);
        } else {
          console.log(`Item not found: ${item}`);
        }
      },
      listItems() {
        console.log('Listing all items:');
        items.forEach((item, index) => {
          console.log(`${index + 1}: ${item}`);
        });
      },
    };
  })();
  
  console.log('Task 6 - Module Pattern');
  itemCollectionModule.addItem('Apple');
  itemCollectionModule.addItem('Banana');
  itemCollectionModule.listItems(); // Output: 1: Apple, 2: Banana
  itemCollectionModule.removeItem('Apple');
  itemCollectionModule.listItems(); // Output: 1: Banana
  
  // Activity 5: Memoization
  
  // Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
  
  function memoize(fn) {
    const cache = {};
  
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        console.log('Returning cached result for:', args);
        return cache[key];
      } else {
        console.log('Calculating result for:', args);
        const result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  console.log('Task 7 - Memoization');
  
  const slowSquare = memoize(function(n) {
    for (let i = 0; i < 1000000000; i++) {} // Simulate heavy computation
    return n * n;
  });
  
  console.log(slowSquare(5)); // Output: 25 (Calculation)
  console.log(slowSquare(5)); // Output: 25 (Cached result)
  console.log(slowSquare(6)); // Output: 36 (Calculation)
  
  // Task 8: Create a memoized version of a function that calculates the factorial of a number.
  
  const factorial = memoize(function(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  });
  
  console.log('Task 8 - Memoized Factorial');
  
  console.log(factorial(5)); // Output: 120 (Calculation)
  console.log(factorial(5)); // Output: 120 (Cached result)
  console.log(factorial(6)); // Output: 720 (Calculation)
  console.log(factorial(6)); // Output: 720 (Cached result)
  