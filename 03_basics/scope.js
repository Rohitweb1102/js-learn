
// Scope

// Scope defines where a variable can be accessed.

// ==========================================
// Variables
// ==========================================

let a = 10;

const b = 20;

var c = 30;


// let  ->follow Block Scope

// const ->follow Block Scope

// var -> Does NOT follow Block Scope


// ==========================================
// Curly Braces {}
// ==========================================

// Curly braces create a Block Scope
// when used with:

// Function
// if
// for
// while
// switch


// Example

if(true){

}


// NOTE:*********IMP**********

// Object also uses { }

// But object declaration
// is NOT Block Scope.


// ==========================================
// Block Scope
// ==========================================

if(true){

    let x = 100;

    console.log(x);

}

// x is available only
// inside this block.


// ==========================================
// Global Scope
// ==========================================

let score = 95;

if(true){

    console.log(score);

}
//((((((((((((output= 95))))))))))
// Global variables can be accessed inside block scope.


// ==========================================
// var Problem
// ==========================================


// let

if(true){

    let a = 10;

}

// console.log(a);

// ReferenceError


// const

if(true){

    const b = 20;

}

// console.log(b);

// ReferenceError


// var

if(true){

    var c = 30;

}

console.log(c);

// Output:
// 30


// let and const follow Block Scope.

// var does NOT follow Block Scope.


// Because of this,var can create unexpected bugs in large projects.


// Modern JavaScript prefers:

// const
// let

// Avoid var in new code.


// ==========================================
// Block Scope vs Global Scope
// ==========================================

let city = "Delhi";

if(true){

    let city = "Mumbai";

    console.log(city);

}

console.log(city);


// Output:

// Mumbai
// Delhi


// Inside Block
// city = "Mumbai"

// Outside Block
// city = "Delhi"


// Same variable name is allowed.

// Both variables are DIFFERENT.

// Both have different memory locations.


// After block ends,
// block variable is destroyed.




// Scope= Boundary of a Variable

// Global Scope= Accessible throughout the program.

// Block Scope = Accessible only inside { }

// ==========================================
// Part 1 : Nested Scope (Functions)
// ==========================================

// Nested Scope

// Nested means
// one block/function inside another.


// Parent Function

function one(){

    const username = "Hitesh";

    function two(){

        const website = "YouTube";

    }

}


// Child Function

// Child function can access parent's variables.


// Example

function one(){

    const username = "Hitesh";

    function two(){

        console.log(username);

    }

}


// Parent Function

// Parent CANNOT access child's variables.


// Example

function one(){

    function two(){

        const website = "YouTube";

    }

    // console.log(website);

    // ReferenceError

}


// Function Declaration

// Creating a function does NOT execute it.


// Function Call

// Function executes only when it is called.


// Example

function one(){

    function two(){

        console.log("Hello");

    }

    two();

}

one();

// Ice Cream Rule

// Child
// -> Can access Parent's variables.

// Parent
// -> Cannot access Child's variables.

// ==========================================
// Part 2 : Nested Scope (if Blocks)
// ==========================================


// Outer Block

if(true){

    const username = "Hitesh";

    // Inner Block

    if(username === "Hitesh"){

        const website = "YouTube";

        console.log(username + website);

    }

}


// Output:
// HiteshYouTube


// Inner block can access outer block variables.


// ==========================================
// Error Example 1
// ==========================================

if(true){

    const username = "Hitesh";

    if(true){

        const website = "YouTube";

    }

    // console.log(website);

    // ReferenceError

}


// ==========================================
// Error Example 2
// ==========================================

if(true){

    const username = "Hitesh";

}

// console.log(username);

// ReferenceError


// ==========================================
// Rule
// ==========================================

// Inner Block
// -> Can access Outer Block variables.

// Outer Block
// -> Cannot access Inner Block variables.

// Global Scope
// -> Cannot access Block variables.

// ==========================================
//  Function Declaration & Expression
// ==========================================


// Function Declaration

function addOne(num){

    return num + 1;

}


// Function Call

addOne(5);


// ==========================================


// Function Expression

const addTwo = function(num){

    return num + 2;

}


addTwo(5);


// ==========================================
// Return
// ==========================================

// return sends a value back.

// It does NOT print the value.


// Print using

// console.log(addOne(5));


// ==========================================
// Difference
// ==========================================


// Function Declaration

addOne(5);

function addOne(num){

    return num + 1;

}

// Works


// ==========================================


// Function Expression

// addTwo(5);

const addTwo = function(num){

    return num + 2;

}

// Error if called before declaration.


// ==========================================
// Lecture Note
// ==========================================

// This behavior is because of
// Hoisting.

// Detailed Hoisting will be covered in upcoming lectures.