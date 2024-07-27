// Day13Activities.js

// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message.

class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    // Method to return a greeting message
    greet() {
      return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
  
    // Task 2: Add a method to update the age property and log the updated age
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  
    // Task 7: Add a getter method to return the full name
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Task 8: Add a setter method to update the name properties
    set fullName(newName) {
      const nameParts = newName.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
  
    // Task 5: Add a static method to return a generic greeting message
    static genericGreeting() {
      return 'Hello, welcome to the Person class!';
    }
  }
  
  // Creating an instance of Person and logging the greeting message
  const person1 = new Person('John', 'Doe', 30);
  console.log('Task 1 - Person Greeting Message');
  console.log(person1.greet()); // Output: Hello, my name is John Doe and I am 30 years old.
  
  // Updating age and logging the updated age
  console.log('Task 2 - Update Age');
  person1.updateAge(31); // Output: Updated age: 31
  
  // Activity 2: Class Inheritance
  
  // Task 3: Define a class Student that extends the Person class
  
  class Student extends Person {
    constructor(firstName, lastName, age, studentId) {
      super(firstName, lastName, age); // Call the constructor of the parent class
      this.studentId = studentId;
  
      // Task 6: Increment the student count in the constructor
      Student.studentCount += 1;
    }
  
    // Method to return the student ID
    getStudentId() {
      return `Student ID: ${this.studentId}`;
    }
  
    // Task 4: Override the greeting method to include the student ID
    greet() {
      return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  
    // Task 6: Static property to track the number of students created
    static studentCount = 0;
  }
  
  // Creating an instance of Student and logging the student ID
  const student1 = new Student('Alice', 'Smith', 20, 'S12345');
  console.log('Task 3 - Student ID');
  console.log(student1.getStudentId()); // Output: Student ID: S12345
  
  // Logging the overridden greeting message
  console.log('Task 4 - Student Greeting Message');
  console.log(student1.greet()); // Output: Hello, my name is Alice Smith, I am 20 years old, and my student ID is S12345.
  
  // Calling the static method without creating an instance of the class
  console.log('Task 5 - Static Generic Greeting');
  console.log(Person.genericGreeting()); // Output: Hello, welcome to the Person class!
  
  // Logging the total number of students
  console.log('Task 6 - Total Number of Students');
  console.log(`Total Students: ${Student.studentCount}`); // Output: Total Students: 1
  
  // Activity 4: Getters and Setters
  
  // Using the getter to log the full name
  console.log('Task 7 - Full Name Getter');
  console.log(person1.fullName); // Output: John Doe
  
  // Using the setter to update the name and log the updated full name
  console.log('Task 8 - Full Name Setter');
  person1.fullName = 'Jane Smith';
  console.log(person1.fullName); // Output: Jane Smith
  
  // Activity 5: Private Fields (Optional)
  
  // Task 9: Define a class Account with private fields for balance
  class Account {
    #balance; // Private field for balance
  
    constructor(initialBalance = 0) {
      this.#balance = initialBalance;
    }
  
    // Method to deposit money
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.#balance}.`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    }
  
    // Method to withdraw money
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.#balance}.`);
      } else {
        console.log('Insufficient funds or invalid amount.');
      }
    }
  
    // Method to get current balance
    getBalance() {
      return `Current balance: $${this.#balance}.`;
    }
  }
  
  // Task 10: Create an instance of the Account class and test the deposit and withdraw methods
  console.log('Task 9 & 10 - Account Class');
  const myAccount = new Account(100);
  
  myAccount.deposit(50); // Deposited: $50. New balance: $150.
  myAccount.withdraw(20); // Withdrew: $20. New balance: $130.
  myAccount.withdraw(200); // Insufficient funds or invalid amount.
  console.log(myAccount.getBalance()); // Current balance: $130.  