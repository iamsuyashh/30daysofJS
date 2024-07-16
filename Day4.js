// # Day 4: Loops

// ## Tasks/Activities:

// ### Activity 1: For Loop

// - **Task 1:** Write a program to print numbers from 1 to 10 using a for loop.

function printNumbers(n) {
    for (let i = 0 ; i<n ; i++) {
        console.log(i)
}
}
printNumbers(10)
// - **Task 2:** Write a program to print the multiplication table of 5 using a for loop.

function printTable(n) {
    for (let i = 1 ; i<=10 ; i++) {
        console.log(i*n)
    }
}
printTable(5)

// ### Activity 2: While Loop

// - **Task 3:** Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

function printSum(n) {
    let sum = 0
    let i = 1
    while (i<=n) {
        sum = sum + i
        i++
    }
    console.log("The sum of the numbers from 1 to "+n+" is "+sum)
}

printSum(10)
// - **Task 4:** Write a program to print numbers from 10 to 1 using a while loop.

function printReverse(n) {
    let i = 10
    while (i>=1) {
        console.log(i)
        i--
    }
}
printReverse(10)

// ### Activity 3: Do...While Loop

// - **Task 5:** Write a program to print numbers from 1 to 5 using a do...while loop.
function printNumbers(n) {
    let i = 1
    do{
        console.log(i)
        i++
    } while (i<=n)
    
}
printNumbers(5)
// - **Task 6:** Write a program to calculate the factorial of a number using a do...while loop.

function printFactorial(n) {
    let fact = 1
    let i = 1
    do{
        fact = fact * i
        i++
    } while (i<=n)
    console.log("The factorial of "+n+" is "+fact)
}

printFactorial(5)

// ### Activity 4: Nested Loops

// - **Task 7:** Write a program to print a pattern using nested for loops:
//   ```
//   *
//   * *
//   * * *
//   * * * *
//   * * * * *
//   ```


let n = 5;

for (let row = 1; row <= n; row++) {
    let pattern = '';

    for (let col = 1; col <= row; col++) {
        pattern += '* ';
    }
    
    console.log(pattern);
}


// ### Activity 5: Loop Control Statements

// - **Task 8:** Write a program to print numbers from 1 to 10, but skip the number 5 using the `continue` statement.
for (let i = 1; i <= 10; i++) {
    
    if (i === 5) {
        continue;
    }

    console.log(i);
}


// - **Task 9:** Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the `break` statement.


for (let i = 1; i <= 10; i++) {

    if (i === 7) {
        break;
    }

    console.log(i);
}
// ## Feature Request:

// 1. **Number Printing Script:** Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
// 2. **Multiplication Table Script:** Create a script that prints the multiplication table of 5 using a for loop.
// 3. **Pattern Printing Script:** Write a script that prints a pattern of stars using nested loops.
// 4. **Sum Calculation Script:** Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
// 5. **Factorial Calculation Script:** Create a script that calculates the factorial of a number using a do...while loop.

// ## Achievement:

// By the end of these activities, students will:

// - Understand and use for loops to iterate over a sequence of numbers.
// - Utilize while loops for iteration based on a condition.
// - Apply do...while loops to ensure the loop body is executed at least once.
// - Implement nested loops to solve more complex problems.
// - Use loop control statements (`break` and `continue`) to control the flow of loops.