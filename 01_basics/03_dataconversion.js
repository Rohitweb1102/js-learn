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
console.log(str3);
//now lets see some more conversions
console.log("2"+3+4);//yha string ist hai to baad waale sbka string me conversion ho jyega output=234
console.log(2+3+"6"); //yha string baad me hai to phle waalo pr operation ho jyega and then string me convert honge output=56
console.log(true);//in this case output is true
console.log(+true);//here output=1 coz +is a unerary operator internally it does console.log(number(true))












