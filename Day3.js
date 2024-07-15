// # Day 3: Control Structures

// ## Tasks/Activities:

// ### Activity 1: If-Else Statements
// - **Task 1:** Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let a = 5
if (a > 0) {
    console.log(`${a} is positive`)
} else if (a < 0) {
    console.log(`${a} is negative`)
} else {
    console.log(`${a} is zero`)
}


// - **Task 2:** Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let b = 29;
if (a >= 18) {
    console.log(`${a} is eligible to vote`)
} else {
    console.log(`${a} is not eligible to vote`)
}


// ### Activity 2: Nested If-Else Statements
// - **Task 3:** Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 10;
let num2 = 20;
let num3 = 30;
if (num1 > num2) {
    if (num1 > num3) {
        console.log(`${num1} is the largest number`)
    } else {
        console.log(`${num3} is the largest number`)
    }
} else {
    if (num2 > num3) {
        console.log(`${num2} is the largest number`)
    } else {
        console.log(`${num3} is the largest number`)
    }
}



// ### Activity 3: Switch Case
// - **Task 4:** Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let dayNumber = 4;

// Print the day name based on the day number using a switch case
switch (dayNumber) {
    case 1: // If the day number is 1, then print "Monday"
        console.log("Monday");
        break;
    case 2: // If the day number is 2, then print "Tuesday"
        console.log("Tuesday");
        break;
    case 3: // If the day number is 3, then print "Wednesday"
        console.log("Wednesday");
        break;
    case 4: // If the day number is 4, then print "Thursday"
        console.log("Thursday");
        break;
    case 5: // If the day number is 5, then print "Friday"
        console.log("Friday");
        break;
    case 6: // If the day number is 6, then print "Saturday"
        console.log("Saturday");
        break;
    case 7: // If the day number is 7, then print "Sunday"
        console.log("Sunday");
        break;
    default: // If the day number is not between 1 and 7, then print an error message
        console.log("Invalid day number. Please enter a number between 1 and 7.");
}


// - **Task 5:** Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 65;


switch (true) {
    case score >= 90: // If the score is greater than or equal to 90, then print grade 'A'
        console.log("Grade: A");
        break;
    case score >= 80: // If the score is greater than or equal to 80, then print grade 'B'
        console.log("Grade: B");
        break;
    case score >= 70: // If the score is greater than or equal to 70, then print grade 'C'
        console.log("Grade: C");
        break;
    case score >= 60: // If the score is greater than or equal to 60, then print grade 'D'
        console.log("Grade: D");
        break;
    default: // If the score is less than 60, then print grade 'F'
        console.log("Grade: F");
}


// ### Activity 4: Conditional (Ternary) Operator
// - **Task 6:** Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let d = 5;
console.log(a % 2 === 0 ? `${a} is an even number` : `${a} is an odd number`)



// ### Activity 5: Combining Conditions
// - **Task 7:** Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2020;

// Check if the year is a leap year based on the conditions
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) { // If the year is divisible by 4, but not by 100 unless also divisible by 400, then it is a leap year
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}



// ## Feature Request:
// 1. **Number Check Script:** Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// 2. **Voting Eligibility Script:** Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. **Day of the Week Script:** Write a script that uses a switch case to determine the day of the week based on a number (1-7) and log the day name.
// 4. **Grade Assignment Script:** Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. **Leap Year Check Script:** Write a script that checks if a year is a leap year using multiple conditions and logs the result.

// ## Achievement:
// By the end of these activities, students will:
// - Implement and understand basic if-else control flow.
// - Use nested if-else statements to handle multiple conditions.
// - Utilize switch cases for control flow based on specific values.
// - Apply the ternary operator for concise condition checking.
// - Combine multiple conditions to solve more complex problems.