// Day 6: Arrays
// Tasks/Activities:
// Activity 1: Array Creation and Access
// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

const arr = [1,2,3,4,5]
console.log(arr);


// • Task 2: Access the first and last elements of the array and log them to the console.
console.log(arr[0],arr.length);

// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.
const arr1 = [1,2,3,4,5]
arr1.push(6)
console.log(arr1) 

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr1.pop();
console.log(arr1)

// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr1.shift();
console.log(arr1)


// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

arr1.unshift(0)
console.log(arr1)

// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const arr2 = [1,2,3,4,5]
arr2.map((n)=>console.log(n*2))

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.

arr2.filter((n)=>console.log(n%2===0))
// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

arr2.reduce((a,b)=>console.log(a+b))

// Activity 4: Array Iteration
// • Task 10: Use a for loop to iterate over the array and log each element to the console.
function iterate(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}

iterate(arr)

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.

function iterate(arr){
    arr.forEach((n)=>console.log(n))
}   
iterate(arr)

// Activity 5: Multi-dimensional Arrays
// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

function twoDimArray(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push([])
        for (let j = 0; j < n; j++) {
            arr[i].push(j)
        }
    }
    console.log(arr)
}
// • Task 13: Access and log a specific element from the two-dimensional array.


// Feature Request:
// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and
// unshift methods.
// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.
// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.
// Achievement:
// By the end of these activities, students will:
// • Create and manipulate arrays using various methods.
// • Transform and aggregate array data using map, filter, and reduce.
// • Iterate over arrays using loops and iteration methods.
// • Understand and work with multi-dimensional arrays.