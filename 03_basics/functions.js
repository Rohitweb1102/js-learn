// Functions 
// ==========================================

// Function
// A Function is a package of reusable code.

// Why use Functions?
// ✔ Avoid repeating code.
// ✔ Improve code reusability.
// ✔ Make code cleaner.


// Syntax

function functionName() {

    // Code

}


// Example

function sayMyName() {

    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");

}


// Function Definition==The code written inside the function.


// Function Reference= yha sirf function ko refer kiya hai

sayMyName;


// Function Execution= yha function ko execute kiya hai 

sayMyName();/*output=
R
O
H
I
T */

// Rule

// functionName  -> Reference

// functionName() -> Execution

//===========================================
// Parameters & Arguments
// ==========================================

// Function with Parameters

function addTwoNumbers(num1, num2) {

    return num1 + num2;

}//num1 and num2 are not actual values they are just placeholders 


// How Function Call??

addTwoNumbers(3, 4);


// Parameters Variables written in function definition.(num1 and num2 are parameters)

// Arguments
// Actual values passed during function call.(3 and 4 are arguments)


// If string values are passed

addTwoNumbers("3", "4");

// Output:
// "34"


// JavaScript does not automatically validate that inputs are numbers.

// ==========================================================
// console.log() vs return
// ==========================================================
// 1. console.log() only prints the value.
// ----------------------------------------------------------

function addTwoNumbers(num1, num2) {

    console.log(num1 + num2);

}

addTwoNumbers(3, 5);

// Output:
// 8

// console.log() only displays the value on the console.
// It DOES NOT return the value.


// ----------------------------------------------------------
// 2. Storing function result
// ----------------------------------------------------------

const result = addTwoNumbers(3, 5);

console.log(result);

// Output:
// 8
// undefined

// Why undefined?

// Because the function printed the value,
// but did not RETURN anything.


// ----------------------------------------------------------
// 3. Returning a value
// ----------------------------------------------------------

function addTwoNumbers(num1, num2) {

    return num1 + num2;

}

const result2 = addTwoNumbers(3, 5);

console.log(result2);

// Output:
// 8

// return sends the value back to the caller.


// ----------------------------------------------------------
// 4. Another valid way
// ----------------------------------------------------------

function addTwoNumbers(num1, num2) {

    const result = num1 + num2;

    return result;

}

// Both ways are correct.


// ----------------------------------------------------------
// 5. return ends the function
// ----------------------------------------------------------

function demo() {

    console.log("A");

    return 10;

    console.log("B"); // Never executes

}

console.log(demo());

// Output:
// A
// 10


// ----------------------------------------------------------
// Difference
// ----------------------------------------------------------

/*

console.log()

✔ Prints value on the console.
✔ Does NOT return anything.


return

✔ Sends value back to the caller.
✔ Value can be stored in a variable.
✔ Ends function execution immediately.

*/

// ----------------------------------------------------------
// Golden Rule
// ----------------------------------------------------------

/*

Every function returns a value.

If you write:

return value;

→ That value is returned.

If you don't write return,

→ JavaScript automatically returns undefined.

*/
//Now let us see if we writes any other function other than addition 
function loginusermessage(username){
    if(username===undefined){//or we can also write (!username)
        console.log("Please enter Username");
        return
        
    }
    return `${username} just logged in`
}
//+++++loginusermessage(ROHIT);++++++//if we only write this then there will be no output as there is no command for printing
//so we have to give console.log()for printing the value of the function
console.log(loginusermessage("ROHIT"));
//console.log(loginusermessage())++++/output=undefined just logged in //// if we dont pass any value to the argument 
//console.log(loginusermessage(""))++++/output= just logged in // if we pass empty string as the values
//to conquer this problem we introduce *****if***** 
//ab jo output aayega vo aayega
/*Please enter a Username
undefined just logged in */ //this is the output beacuse [[[return `${username} just logged in`]]] is also running 
//by adding return in if we eliminated the functioning of [[[return `${username} just logged in`]]]

//suppose hume if condition use hi nhi krni then we have a another way to resolve this issue
function loginusermessage(username="sam"){
   
    return `${username} just logged in`
}
console.log(loginusermessage());//output=sam just logged in 
//ab isse ky hoga ki agr hum undefined argument pass krenge to vo directly sam return kr dega to humne tnsn lene ki jrurt nhi hai


//===========================================
// Rest Parameter (...)
// ==========================================


// Problem:
// We don't know how many arguments will be passed to the function.


// Normal Function

function calculateCartPrice(price) {

    return price;

}

console.log(calculateCartPrice(200));

// Output:
// 200


// Rest Parameter

function calculateCartPrice(...prices) {

    return prices;

}

console.log(calculateCartPrice(200, 400, 500));

// Output:
// [200, 400, 500]


// Rest Parameter collects all
// remaining arguments into an array.


// Rest + Normal Parameters

function calculateCartPrice(val1, val2, ...prices) {

    return prices;

}

console.log(calculateCartPrice(200, 400, 500, 700));

// Output:
// [500, 700]


// val1 = 200
// val2 = 400
// prices = [500, 700]


// ==========================================
// Passing Objects to Functions
// ==========================================

const user = {

    username: "Hitesh",

    price: 199

};

function handleObject(anyObject) {

    console.log(
        `Username is ${anyObject.username} and price is ${anyObject.price}`
    );

}

handleObject(user);

// Output:
// Username is Hitesh and price is 199


// Direct Object Passing

handleObject({

    username: "Sam",

    price: 399

});

// Output:
// Username is Sam and price is 399


// Dot Notation

// anyObject.username
// anyObject.price


// Wrong Property

// anyObject.prices

// Output:
// undefined

//==========================================
// Passing Arrays to Functions
// ==========================================

// Array

const myNewArray = [200, 400, 600, 800];


// Function

function returnSecondValue(getArray) {

    return getArray[1];

}


// Calling Function

console.log(returnSecondValue(myNewArray));

// Output:
// 400


// Direct Array Passing

console.log(

    returnSecondValue([10, 20, 30])

);

// Output:
// 20


// Array values are accessed using index.

// Index starts from 0.

// array[0] → First Value

// array[1] → Second Value

// array[2] → Third Value