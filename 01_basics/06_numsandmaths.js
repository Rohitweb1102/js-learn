//              NUMBERS IN JAVASCRIPT
// ==========================================================
/*
Numbers are Primitive Data Types.
Example

let score = 400;

JavaScript stores it as a Number.

*/

const score = 400;

console.log(score);      // 400

// ==========================================================
// NUMBER OBJECT
// ==========================================================
/*

There are two ways to create a number.

1. Primitive Number (Recommended)

let score = 400;

------------------------------------

2. Number Object

const balance = new Number(100);

This creates a Number Object.

It contains

✔ Value
✔ Properties
✔ Methods

Example Methods

toString()
toFixed()
toPrecision()
toLocaleString()

Real projects generally use Primitive Numbers.

new Number() is mainly used for learning and understanding methods.

*/

const balance = new Number(100);

console.log(balance);

// ==========================================================
// toString()
// ==========================================================
/*
Converts Number into String.

Syntax

number.toString()

Why use it?

Because String methods can now be used.

Example

100

↓

"100"

*/

console.log(balance.toString());

console.log(typeof balance.toString());

/*

Output

100

string

*/
// ==========================================================
// length
// ==========================================================

/*

Numbers DO NOT have length.

Only Strings have length.

Therefore,

Convert Number into String first.

Example

100

↓

"100"

↓

Length

3

*/

console.log(balance.toString().length);

// Output

// 3
// ==========================================================
// toFixed()
// ==========================================================

/*

Used to fix the number of digits
AFTER the decimal point.

Syntax

number.toFixed(decimalPlaces)

Returns a STRING.
---------------------------------
Example

100

toFixed(1)

↓

100.0
---------------------------------
Example

23.8966

toFixed(2)

↓

23.90
---------------------------------
Example

23.8966

toFixed(3)

↓

23.897

(Last digit is rounded.)

*/

console.log(balance.toFixed(1));

console.log((23.8966).toFixed(2));

console.log((23.8966).toFixed(3));

// toPrecision() Rounding Rule
// ==========================================================

/*

Step 1:
Count the required significant digits.

Step 2:
Look at the NEXT digit.

Step 3:

Next digit = 0,1,2,3,4
→ Round Down
→ Keep the last significant digit SAME.

Example

444.49

↓

444
--------------------------------

Next digit = 5,6,7,8,9
→ Round Up
→ Increase the last significant digit by 1.

Example

444.59

↓

445

IMPORTANT
Round Down DOES NOT mean subtract 1.

It simply means:
"Do not increase the last kept digit."
*/
// ==========================================================
// toLocaleString()
// ==========================================================
/*

Formats numbers according
to a country's numbering system.

Syntax

number.toLocaleString()

---------------------------------

US Format

1000000

↓

1,000,000

*/

const hundreds = 1000000;

console.log(hundreds.toLocaleString());
/*

Indian Format

1000000

↓

10,00,000

*/

console.log(hundreds.toLocaleString('en-IN'));
// ==========================================================
// INTERVIEW POINTS
// ==========================================================
/*

✔ Number is Primitive Data Type.

✔ new Number() creates Number Object.

✔ toString() returns String.

✔ toFixed() returns String.

✔ toPrecision() returns String.

✔ toLocaleString() returns formatted String.
*/
