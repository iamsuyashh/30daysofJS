// Day16Recursion.js

// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log('Task 1 - Factorial Calculation');
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(7)); // Output: 5040
console.log(factorial(10)); // Output: 3628800

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log('Task 2 - Fibonacci Calculation');
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(7)); // Output: 13
console.log(fibonacci(10)); // Output: 55

// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumArray(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sumArray(arr, n - 1) + arr[n - 1];
    }
}

console.log('Task 3 - Sum of Array Elements');
console.log(sumArray([1, 2, 3, 4, 5], 5)); // Output: 15
console.log(sumArray([10, 20, 30, 40], 4)); // Output: 100
console.log(sumArray([], 0)); // Output: 0
console.log(sumArray([7, -2, 10, 5], 4)); // Output: 20

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxArray(arr, n) {
    if (n === 1) {
        return arr[0];
    } else {
        return Math.max(arr[n - 1], maxArray(arr, n - 1));
    }
}

console.log('Task 4 - Maximum Element in Array');
console.log(maxArray([1, 5, 3, 9, 2], 5)); // Output: 9
console.log(maxArray([10, 20, 30, 5], 4)); // Output: 30
console.log(maxArray([-5, -2, -10, -1], 4)); // Output: -1

// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substring(1)) + str[0];
    }
}

console.log('Task 5 - Reverse String');
console.log(reverseString("hello")); // Output: olleh
console.log(reverseString("Recursion")); // Output: noisruceR
console.log(reverseString("")); // Output: 
console.log(reverseString("abcde")); // Output: edcba

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    } else if (str[0] !== str[str.length - 1]) {
        return false;
    } else {
        return isPalindrome(str.substring(1, str.length - 1));
    }
}

console.log('Task 6 - Palindrome Check');
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("level")); // Output: true

// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, target, left, right) {
    if (left > right) {
        return -1;
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

console.log('Task 7 - Binary Search');
console.log(binarySearch([1, 2, 3, 4, 5], 3, 0, 4)); // Output: 2
console.log(binarySearch([10, 20, 30, 40, 50], 40, 0, 4)); // Output: 3
console.log(binarySearch([5, 15, 25, 35], 25, 0, 3)); // Output: 2
console.log(binarySearch([1, 3, 5, 7, 9], 6, 0, 4)); // Output: -1

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurrences(arr, target, n) {
    if (n === 0) {
        return 0;
    } else {
        return (arr[n - 1] === target ? 1 : 0) + countOccurrences(arr, target, n - 1);
    }
}

console.log('Task 8 - Count Occurrences');
console.log(countOccurrences([1, 2, 3, 2, 4, 2, 5], 2, 7)); // Output: 3
console.log(countOccurrences([10, 20, 10, 30, 10, 40], 10, 6)); // Output: 3
console.log(countOccurrences([5, 5, 5, 5], 5, 4)); // Output: 4
console.log(countOccurrences([7, 8, 9], 6, 3)); // Output: 0

// Activity 5: Tree Traversal (Optional)

// Define a simple binary tree structure for demonstration
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Create a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);
        console.log(node.value); // Visit the node
        inOrderTraversal(node.right);
    }
}

console.log('Task 9 - In-Order Traversal');
inOrderTraversal(root); // Output: 4, 2, 5, 1, 6, 3, 7

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

function calculateDepth(node) {
    if (node === null) {
        return 0;
    } else {
        const leftDepth = calculateDepth(node.left);
        const rightDepth = calculateDepth(node.right);
        return Math.max(leftDepth, rightDepth) + 1;
    }
}

console.log('Task 10 - Binary Tree Depth');
console.log(calculateDepth(root)); // Output: 3

// Sample tree structures for testing depth calculation
const shallowTree = new TreeNode(1);
shallowTree.left = new TreeNode(2);

console.log(calculateDepth(shallowTree)); // Output: 2

const deeperTree = new TreeNode(1);
deeperTree.left = new TreeNode(2);
deeperTree.left.left = new TreeNode(3);
deeperTree.left.left.left = new TreeNode(4);

console.log(calculateDepth(deeperTree)); // Output: 4
