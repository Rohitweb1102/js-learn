//                  STRINGS IN JAVASCRIPT
// ==========================================================
/*
WHAT IS A STRING?

A String is simply a collection of characters.

Characters can be:
- Alphabets
- Numbers
- Symbols
- Spaces

Everything written inside quotes becomes a String.

Examples:
*/

let name = "Rohit";
let city = 'Delhi';
let course = "Full Stack Web Development";

/*

"Rohit"  → String
"123"    → String (NOT Number)
"Hello!" → String
*/
// ==========================================================
// HOW TO CREATE A STRING
// ==========================================================

/*

There are 3 ways to create strings.

1. Double Quotes ""

*/

let firstName = "Rohit";

/*

2. Single Quotes ''

*/

let lastName = 'Yadav';

/*

3. Backticks ``

*/

let language = `JavaScript`;


// ==========================================================
// WHY DO WE USE BACKTICKS?
// ==========================================================

/*

Backticks allow String Interpolation.

Instead of writing:

*/

let name1 = "Rohit";
let age = 22;

console.log("My name is " + name1 + " and I am " + age + " years old.");

/*

Modern JavaScript uses:

*/

console.log(`My name is ${name1} and I am ${age} years old.`);

/*

Output

My name is Rohit and I am 22 years old.

${variable}

This inserts the variable value inside the string.

*/


// ==========================================================
// STRING OBJECT
// ==========================================================

/*

There are two ways to create strings.

Method 1 (Recommended)

*/

let username = "Rohit";

/*

Method 2

*/

let username2 = new String("Rohit");

/*

This creates a String Object.

For beginners and real projects,

Always use:

let username = "Rohit";

Avoid using:

new String()

*/


// ==========================================================
// ACCESSING CHARACTERS
// ==========================================================

let user = "Rohit";

/*

Each character has an index.

 R   o   h   i   t

 0   1   2   3   4

*/

console.log(user[0]); // R
console.log(user[1]); // o
console.log(user[2]); // h
console.log(user[4]); // t


// ==========================================================
// STRING LENGTH
// ==========================================================

let company = "Google";

console.log(company.length);

/*

Output

6

Characters:

G o o g l e

1 2 3 4 5 6

Index

0 1 2 3 4 5

*/


// ==========================================================
// IMPORTANT STRING METHODS
// ==========================================================

// toUpperCase()

let cityName = "delhi";

console.log(cityName.toUpperCase());

// DELHI



// toLowerCase()

let country = "INDIA";

console.log(country.toLowerCase());

// india



// charAt()

let courseName = "JavaScript";

console.log(courseName.charAt(4));

// S



// indexOf()

console.log(courseName.indexOf("S"));

// 4



// includes()

let sentence = "I love JavaScript";

console.log(sentence.includes("JavaScript"));

// true



// startsWith()

console.log(sentence.startsWith("I"));

// true



// endsWith()

console.log(sentence.endsWith("JavaScript"));

// true



// slice()

let text = "JavaScript";

console.log(text.slice(0,4));

/*

Java

*/



// replace()

let msg = "Hello Rohit";

console.log(msg.replace("Rohit","Ankit"));

/*

Hello Ankit

*/



// trim()

let password = "   admin   ";

console.log(password.trim());

/*

admin

*/


// split()

let fruits = "Apple,Mango,Banana";

console.log(fruits.split(","));

/*

["Apple","Mango","Banana"]

*/

// ==========================================================
// STRING IMMUTABLE
// ==========================================================

/*

Strings are IMMUTABLE.

Meaning:

Original String cannot be changed.

*/

let hero = "Rohit";

hero.toUpperCase();

console.log(hero);

/*

Output

Rohit

NOT

ROHIT

Because

toUpperCase() returns a NEW string.

Correct way:

*/

hero = hero.toUpperCase();

console.log(hero);

// ROHIT



// ==========================================================
// INTERVIEW POINTS
// ==========================================================

/*

✔ String is Primitive Data Type.

✔ Strings are Immutable.

✔ Index starts from 0.

✔ Everything inside quotes is String.

✔ Use Backticks (` `) for String Interpolation.

✔ Prefer Template Literals over + concatenation.

*/