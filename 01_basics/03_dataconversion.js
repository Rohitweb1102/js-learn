"use strict"
//ab hum conversion of datatypes pdhenge mtlb ek datatype agr vo na bhi ho to use kaise usme convert kre
let score="4335abcnod"
let valueinnumber=Number(score)
//yha Number ek conversion function hai means jo bhi score me ho usko number bnane ki kosis kro
console.log(valueinnumber);
//ab score me value no. nhi hai to output aaya NaN(NOT A NUMBER) but data type value in no. ka ab bhi number hi rhega
console.log(typeof valueinnumber);
//ase hi ab ek example boolean ka dekhte hai
let isloggedin="rohit"
let booleanisloggedin=Boolean(isloggedin)
console.log(booleanisloggedin);
//yha ab isloggedin me kch bhi value do aayegi boolean hi 
// string denge to true ayegi " " empty string denge to false aayegi



//----------*******operations in javascript********---------------//
let value=3
let negvalue=-value//isse hme jo output milega vo -ve of value milega
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);//means 2 raise to the power 2
console.log(2/3);
console.log(2%3);//it gives remainder
//do strings ko bhi jod skte hai
let str1="Rohit";
let str2=" Hitesh";
let str3=str1+str2;
console.log(str3);//output Rohit Hitesh 
//now lets see some more conversions
console.log("2"+3+4);//yha string ist hai to baad waale sbka string me conversion ho jyega output=234
console.log(2+3+"6"); //yha string baad me hai to phle waalo pr operation ho jyega and then string me convert honge output=56
console.log(true);//in this case output is true
console.log(+true);//here output=1 coz +is a unerary operator internally it does console.log(number(true))
/* ==========================================================
   PREFIX vs POSTFIX INCREMENT (++)
   ==========================================================

   ++ means "increase the value by 1".

   There are two ways to use it:

   1. Prefix  -> ++variable
   2. Postfix -> variable++

==========================================================
1) PREFIX INCREMENT (++x)
==========================================================

Rule:
- First increase the value.
- Then use the updated value.

Example:

let x = 5;
let y = ++x;

Step 1: x becomes 6
Step 2: y gets 6

Final Output:
x = 6
y = 6

Memory Trick:
"Prefix = Increment First, Use Later"

==========================================================
2) POSTFIX INCREMENT (x++)
==========================================================

Rule:
- First use the current value.
- Then increase it.

Example:

let x = 5;
let y = x++;

Step 1: y gets 5
Step 2: x becomes 6

Final Output:
x = 6
y = 5

Memory Trick:
"Postfix = Use First, Increment Later"

==========================================================
COMPARISON
==========================================================

Prefix (++x)

Initial:
x = 5

let y = ++x;

Output:
x = 6
y = 6


Postfix (x++)

Initial:
x = 5

let y = x++;

Output:
x = 6
y = 5

==========================================================
EASY EXAMPLE
==========================================================

let a = 10;

console.log(++a);

Step:
a becomes 11
Prints 11

Output:
11


let b = 10;

console.log(b++);

Step:
Print 10
Then b becomes 11

Output:
10

==========================================================
AFTER PRINTING
==========================================================

let b = 10;

console.log(b++); // 10
console.log(b);   // 11

Reason:
First statement uses old value.
After that, b is incremented.

==========================================================
IMPORTANT INTERVIEW POINT
==========================================================

Prefix:
++x
Increment happens BEFORE the value is used.

Postfix:
x++
Increment happens AFTER the value is used.

==========================================================*/












