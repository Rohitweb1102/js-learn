// ==========================
// Creating Objects
// ==========================

// Object Literal
const user1 = {};

// Constructor
const user2 = new Object();

// Adding properties///in this method object is created first and values are added later
user2.id = "123abc";
user2.name = "Sam";
user2.isLoggedIn = false;

console.log(user2);



// ==========================
// Nested Objects
// ==========================

const regularUser = {

    email: "abc@gmail.com",

    fullname: {

        userfullname: {

            firstname: "Hitesh",

            lastname: "Choudhary"
        }
    }
};

// how to Access nested values

console.log(
    regularUser.fullname.userfullname.firstname
);

/*Optional Chaining=ye question mark ka sign hi option chaining hai maan lo humne full name aceesing me 
daal diya but full name exist hi nhi krta to agr optional chaining use nhi krenge to error aayega ab agr
optional chaining use kr li hai to ye check krega aur hoga to thik aur nhi hoga to error nhi dega simply 
undefined return kr dega*/ 

console.log(
    regularUser.fullcaste?.userfullname
);
// ==========================
// Merge Objects
// ==========================

const obj1 = {

    1: "a",

    2: "b"
};

const obj2 = {

    3: "c",

    4: "d"
};

// Method 1

const obj3 = Object.assign({}, obj1, obj2);/*Humne empty object {} kyu diya?

Hitesh sir ne bataya ki ye target object hai. Isme saare source objects ki properties copy hongi. 
Is tarah hume ek naya merged object mil jata hai.agr ye na dete to object2 ki saari values obj1 m 
chli jaati nd obj1 modify ho jaata {}ye dene se ky hua ki ab obj1 aur obj2 dono unmodified hai*/

// Method 2 (Modern)=spread method

const obj4 = {

    ...obj1,

    ...obj2
};
// =======================================================
// 1. ARRAY OF OBJECTS
// =======================================================

// Database ya API se data aksar Array of Objects ke form me aata hai.

// Structure

const users = [

    {
        id: 1,
        email: "rohit@gmail.com"
    },

    {
        id: 2,
        email: "aman@gmail.com"
    },

    {
        id: 3,
        email: "rahul@gmail.com"
    }

];

// Outer []  -> Array
// Inner {}  -> Objects

// Array contains multiple user objects.

// -------------------------------------------------------
// Accessing Data
// -------------------------------------------------------

// Syntax

// array[index].property

console.log(users[0].email);   // rohit@gmail.com
console.log(users[1].email);   // aman@gmail.com
console.log(users[2].id);      // 3

// Rule:
// First access Array using index.
// Then access Object using dot notation.


// =======================================================
// 2. Object.keys()
// =======================================================

// Returns all KEYS of an object.

// Syntax

Object.keys(objectName);

// Example

const user = {

    id: "123",

    name: "Sam",

    isLoggedIn: false

};

console.log(Object.keys(user));

/*
Output

[
    "id",
    "name",
    "isLoggedIn"
]
*/

// IMPORTANT

// ✔ Returns an ARRAY
// ✔ NOT an Object

// Since it returns an Array,
// Array methods (length, forEach, map etc.) can be used.

console.log(Object.keys(user).length);



// =======================================================
// 3. Object.values()
// =======================================================

// Returns all VALUES of an object.

// Syntax

Object.values(objectName);

// Example

console.log(Object.values(user));

/*
Output

[
    "123",
    "Sam",
    false
]
*/

// Again...

// ✔ Returns an ARRAY


// =======================================================
// 4. Object.entries()
// =======================================================

// Converts every Key-Value pair into a small Array.

// Syntax

Object.entries(objectName);

// Example

console.log(Object.entries(user));

/*
Output

[
    ["id","123"],

    ["name","Sam"],

    ["isLoggedIn",false]
]
*/

// Every element of returned Array
// is itself an Array.

// Structure

[
   [key,value],

   [key,value],

   [key,value]
]

// Useful in looping (later).



// =======================================================
// 5. hasOwnProperty()
// =======================================================

// Checks whether a property exists inside an object.

// Syntax

objectName.hasOwnProperty("propertyName");

// Example

console.log(user.hasOwnProperty("name"));

// true

console.log(user.hasOwnProperty("age"));

// false

// Return Type

// ✔ Boolean

// true  -> Property exists
// false -> Property does not exist





// ===========================
// Object Destructuring=Object se kisi property ko nikaal kar ek alag variable bana lena.
// ===========================

const course = {

    courseName: "JavaScript",

    price: 999,

    courseInstructor: "Hitesh"
};

// Without Destructuring

console.log(course.courseInstructor);

// --------------------------------

// Destructuring

const { courseInstructor } = course;

console.log(courseInstructor);

// --------------------------------

// Alias=naam ko aur chota kr dena 

const { courseInstructor: instructor } = course;

console.log(instructor);





// ============================================================
// API (Application Programming Interface)
// ============================================================

/*Simple Meaning

// API ek medium (Messenger) hai jo Client aur Server ke beech communication karwati hai*/


// Flow

/*

Client

↓

Request

↓

API

↓

Server

↓

Response

↓

Client

*/
/* User ko sirf Response chahiye. Backend me kya process hua  uski tension lene ki zarurat nahi.*/

// ============================================================
// RESTAURANT EXAMPLE
// ============================================================

/*

Customer

↓

Waiter

↓

Kitchen

↓

Food

↓

Customer

*/

/*
// Waiter = API
 Customer directly kitchen me nahi jata. Waiter order lekar kitchen me jata hai.
Kitchen food banati hai.Waiter food customer tak lekar aata hai.Customer ko sirf final food milta hai.
 Exactly isi tarah API kaam karti hai.
*/

// ============================================================
// JSON
// ============================================================

// JSON Full Form=JavaScript Object Notation

/*JSON ka use= Client aur Server ke beech data transfer karne ke liye.


// Basic JSON Example

{

    "name": "Hitesh",

    "courseName": "JavaScript",

    "price": "999"

}


// Notice

// ✔ Keys double quotes ("") me hoti hain.

// ✔ Data key-value pair ke form me hota hai.


// ============================================================
// WHY JSON ?
// ============================================================

/* Jab API response bhejti hai,to data mostly JSON format me hota hai.

 JavaScript us data ko read karke use karti hai.*/

 
// API Response & JSON Formatter
// =====================================================

// API response can be

// 1. Object

{

    "id":1,

    "name":"Rohit"

}


// OR

// 2. Array of Objects

[

    {

        "id":1,

        "name":"Rohit"

    },

    {

        "id":2,

        "name":"Aman"

    }

];


/* ================================================
// Access Rule
// ================================================

// Array

↓

Index

↓

Object

↓

Property

// Example

users[0].name; */


// ================================================
// JSON Formatter

//Large JSON responses are difficult to read. JSON Formatter converts them into a clean Tree Structure.



