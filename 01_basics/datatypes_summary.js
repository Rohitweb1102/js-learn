
 /*JAVASCRIPT DATA TYPES
   ==========================================================

   Definition:
   A Data Type tells JavaScript what kind of value a variable
   is storing.

   Example:
   let age = 22;         // Number
   let name = "Rohit";   // String
   let isStudent = true; // Boolean

==========================================================
TYPES OF DATA TYPES
==========================================================

JavaScript has TWO categories of data types:

1. Primitive Data Types
2. Non-Primitive (Reference) Data Types

==========================================================
1) PRIMITIVE DATA TYPES
==========================================================

Primitive data types store a SINGLE value.

There are 7 Primitive Data Types:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

----------------------------------------------------------
1. STRING
----------------------------------------------------------

Definition:
A String is a sequence of characters enclosed inside
single quotes (''),
double quotes (""),
or backticks (``).

Example:

let name = "Rohit";
let city = 'Panipat';
let msg = `Hello`;

typeof name; // "string"

----------------------------------------------------------
2. NUMBER
----------------------------------------------------------

Definition:
Represents both integers and decimal numbers.

Example:

let age = 22;
let price = 99.99;

typeof age; // "number"

JavaScript has only ONE Number type.

Examples:

10
-5
3.14
1000

Special Number Values:

Infinity
-Infinity
NaN (Not a Number)

Example:

console.log(10/0);     // Infinity
console.log("abc"/2);  // NaN

----------------------------------------------------------
3. BOOLEAN
----------------------------------------------------------

Definition:
Represents only two values.

true
false

Used in conditions.

Example:

let isLoggedIn = true;
let isAdmin = false;

typeof isLoggedIn; // "boolean"

----------------------------------------------------------
4. UNDEFINED
----------------------------------------------------------

Definition:
A variable is declared but NOT assigned a value.

Example:

let user;

console.log(user);

Output:
undefined

typeof user; // "undefined"

----------------------------------------------------------
5. NULL
----------------------------------------------------------

Definition:
Represents an intentional empty value.

It means:
"There is no value."

Example:

let user = null;

typeof user;

Output:
"object"

NOTE:
This is a famous JavaScript bug.
Although typeof null returns "object",
null is actually a Primitive Data Type.

----------------------------------------------------------
6. BIGINT
----------------------------------------------------------

Definition:
Used to store VERY LARGE integers that Number
cannot safely store.

Create by adding n at the end.

Example:

let big = 123456789123456789123456789n;

typeof big;

Output:
"bigint"

----------------------------------------------------------
7. SYMBOL
----------------------------------------------------------

Definition:
Used to create UNIQUE values.

Mostly used while creating objects and libraries.

Example:

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);

Output:
false

Every Symbol is unique.

==========================================================
2) NON-PRIMITIVE (REFERENCE) DATA TYPES
==========================================================

These store collections of values instead of a single value.

Common Reference Data Types:

1. Object
2. Array
3. Function

----------------------------------------------------------
OBJECT
----------------------------------------------------------

Definition:
Stores data in key-value pairs.

Example:

let student = {
    name: "Rohit",
    age: 22
};

typeof student;

Output:
"object"

----------------------------------------------------------
ARRAY
----------------------------------------------------------

Definition:
Stores multiple values in one variable.

Example:

let colors = ["red", "green", "blue"];

typeof colors;

Output:
"object"

NOTE:
Array is actually a special type of Object.

----------------------------------------------------------
FUNCTION
----------------------------------------------------------

Definition:
A reusable block of code.

Example:

function greet(){
    console.log("Hello");
}

typeof greet;

Output:
"function"

==========================================================
typeof OPERATOR
==========================================================

Definition:
Used to check the data type of a value.

Syntax:

typeof value

Example:

typeof "Hello";     // string
typeof 10;          // number
typeof true;        // boolean
typeof undefined;   // undefined
typeof null;        // object (JavaScript bug)
typeof 100n;        // bigint
typeof Symbol();    // symbol
typeof {};          // object
typeof [];          // object
typeof function(){} // function

==========================================================
INTERVIEW QUESTIONS
==========================================================

Q1. How many Primitive Data Types are there?

Answer:
7

String
Number
Boolean
Undefined
Null
BigInt
Symbol

----------------------------------------------------------

Q2. How many Non-Primitive Data Types are there?

There is no fixed number.

Most common are:

Object
Array
Function

----------------------------------------------------------

Q3. Is Array a Primitive Data Type?

No.

It is a Reference (Non-Primitive) Data Type.

----------------------------------------------------------

Q4. Why does typeof null return "object"?

Because of a historical bug in JavaScript.

Remember:
null is Primitive,
but typeof null returns "object".

----------------------------------------------------------

Q5. Which data type stores large integers?

BigInt

Example:

123456789123456789n

==========================================================
PRIMITIVE vs REFERENCE
==========================================================

Primitive
---------
✔ Stores a single value
✔ Immutable
✔ Compared by value

Examples:
String
Number
Boolean
Undefined
Null
BigInt
Symbol

Reference
---------
✔ Stores collections of values
✔ Compared by reference (memory address)

Examples:
Object
Array
Function */



