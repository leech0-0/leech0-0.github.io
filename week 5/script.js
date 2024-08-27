console.log("Welcome to Interactive Media");

//CODING COMMENT - one line

//prompt command - getting information from someone

// let count = 10;
// console.log(count);
// const name = prompt("What is your name?");
// console.log("Hello", name);

/* camelCase = lowercase first word, next words following all capitals = myClassStudents */

// const myName = "C";
// const myCity = "Melbourne";
// console.log(myName, " lives in", myCity);

/* Brackets 

() = used in functions or conditions
[] = used for arrays 
 {} = used to define the scope; used in functions */

/* Core JS Concepts 
 1. Variables
 - placements to store values 
- 2 kinds of variables 
    - constant = storing data that does not change
    - let = storing data that can change
- Code block = bound by curly brackets - allows scopes 
- scopes = not available outside of the brackets, hidden stuff - useful for functions
- keep variable names simple - easy to remember, read and use. use camelCase and add comment at the start to define each one

- variable types:
    - string (text) `  - backtick for HTML code
    - number 
    - object (let myDetails = {name: "rohit", id: 1}; // myDetails.name)
    - boolean (true or false)
    - null
    -undefined

 2. Data Types

 3. Loops
 4. Conditionals
 5. Functions
 6. Event handlebars */

// let isItRaining = false;
// console.log(isItRaining);
// let isitIMClass = true;
// console.log(isitIMClass);

// const studentRecord = {
//   name: "C",
//   id: 1234,
//   class: "IM1013",
//   amIScienceStudent: false,
//   amIDesignStudent: true,
// };

// console.log(studentRecord.name);

// let studentNames = ["Robert", "alice", "Frank", "Jenny"];
// console.log(studentNames);

/* IF ELSE STATEMENTS

if (classStrength > 15){
    // start lecture
}
else {
    // wait 5 minutes} */

/* example
    let myGrade = 90;
    if (myGrade > 80) {
    console.log("High Distinction");}
    else {
    console.log("you missed a high distinction");}
    */

/* Comparison operators
== equal to 
=== equal value and equal type 'x === 5 true, x === '5' false'
!= not equal
!==not equal or equal value */

// && and
// || or
// != not

/* LOOPS */

let names = ["Jamie", "Alice", "James", "Belinda", "Giselle", "Bella", "Bill"];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("Hello ", names[i]);
}

let shoppingCart = [
  { name: "T-shirt", price: 30 },
  { name: "jeans", price: 50 },
  { name: "sneakers", price: 30 },
  { name: "backpack", price: 90 },
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;

let sum = 0;
for (let i = 0; i < 4; i++) {
  sum = sum + shoppingCart[i].price;
  console.log("Sub total:", sum);
}

console.log("My shopping cart:", sum);
