//                  STACK vs HEAP MEMORY (JavaScript)
// ===============================================================
/*
WHAT IS MEMORY?

Whenever we create a variable,
JavaScript stores it somewhere in memory.

JavaScript mainly uses two types of memory:

1. Stack Memory
2. Heap Memory
*/

// ===============================================================
// STACK MEMORY
// ===============================================================

/*
Used for Primitive Data Types

Primitive Data Types:
- Number
- String
- Boolean
- null
- undefined
- Symbol
- BigInt

IMPORTANT:

✔ Stack stores the ACTUAL VALUE.
✔ Whenever we assign one primitive variable to another,
  JavaScript creates a COPY.

Example:
*/

let name1 = "Rohit";
let name2 = name1;

/*

Memory

STACK

┌────────────────────┐
│ name1 = "Rohit"    │
├────────────────────┤
│ name2 = "Rohit"    │
└────────────────────┘

Both variables have DIFFERENT copies.

*/

name2 = "Ankit";

/*

Memory

STACK

┌────────────────────┐
│ name1 = "Rohit"    │
├────────────────────┤
│ name2 = "Ankit"    │
└────────────────────┘

Changing name2 DOES NOT affect name1.

Reason:
Primitive values are COPIED.

*/

console.log(name1); // Rohit
console.log(name2); // Ankit



// ===============================================================
// HEAP MEMORY
// ===============================================================

/*

Used for Non-Primitive Data Types

Non-Primitive:
- Object
- Array
- Function

IMPORTANT:

✔ Actual Object is stored inside HEAP.
✔ Stack stores only the Reference (Address).

Think of it like:

Stack = House Key 🔑
Heap  = House 🏠

*/

// Object Example

let user1 = {
    name: "Rohit"
};

/*

Memory

STACK                         HEAP

user1 --------->      ┌─────────────────┐
                      │ name : "Rohit"  │
                      └─────────────────┘

Notice:

Stack DOES NOT store the object.

It stores only the ADDRESS.

*/


let user2 = user1;

/*

Memory

STACK

user1 -----------\
                  \
                   \
                    ▼

user2 -----------/


HEAP

┌─────────────────┐
│ name : "Rohit"  │
└─────────────────┘

IMPORTANT

JavaScript DID NOT create another object.

Both variables point to SAME object.

*/


user2.name = "Ankit";/*to access any property we need to add dot before that particular 
property like name in this*/

/*

Before

HEAP

┌─────────────────┐
│ name : "Rohit"  │
└─────────────────┘

↓

After

┌─────────────────┐
│ name : "Ankit"  │
└─────────────────┘

Since user1 and user2 point to SAME object,

Both will see the updated value.

*/

console.log(user1.name); // Ankit
console.log(user2.name); // Ankit



// ===============================================================