//object is a collection of key value pairs
//what are key and values
/*const user = {

    name: "Rohit",

    age: 22
} here name=key and rohit=value*/
 //methods to create objects 
 //object literal-ye singleton nhi bnata
 /*const user = {

}*/
//constructor methods-ye singleton bnata hai
// Object.create()or new Object()
//now lets create object
const JsUser={
    name: "Hitesh",

    age: 18,
//har key k baad colon aayega and har value k baad ek comma 
    location: "Jaipur",

    email: "abc@gmail.com",

    isLoggedIn: false,

    lastloginDays: ["Monday","Saturday"],//arrays can also be stored in objects
}//arrays use index while object uses key
//accessing the values in object
//++++++++++DOT NOTATION++++++++++++++++++////////
//for ex we want to access name value
console.log(JsUser.name);//ouput=hitesh
console.log(JsUser.lastloginDays);//output=['Monday','Saturday']
//+++++++++++SQUARE BRACKET NOTATION+++++++++++//
console.log(JsUser["name"]);
/*why do we need square bracket notation= for ek agr key hoti "full name" to agr hum isko
dot se access krte to error aata kyuki js full ko ek alg property smjhti and name ko ek alg property
thats why we need square bracket notation*/
//simple rule = agr key simple hai then use dot notation and if there is space between keys then use square bracket

//*************USING SYMBOL AS OBJECT KEY**************///////
const mysym = Symbol("id")//we have created a symbol 
const user={
    name:"ROHIT YADAV",
    [mysym]:12345//when symbol is used as a key it is always written in square brackets
}
//how to access this symbol
console.log(user[mysym]);//it is always been accessed by square bracket notation 
//changing value of object
//simple if we want to change the value of name then
user.name="ANUSHKA YADAV"
//now if we acess the object
console.log(user);//output of name will be anushka instead of rohit it will erase the previous value
//using freeze we can lock the values of the object then no one can change
//syntax=object.freeze()upr waale example me hi try krte hai
Object.freeze(user);
//ow if we give a command to cange name now
user.name="NEHA YADAV"
console.log(user);//output={ name: 'ANUSHKA YADAV', Symbol(id): 12345 } neha update nhi hua

//*************USING FUNCTIONS IN OBJECT****************//
const JsUser1 = {

    name: "Hitesh",

    greeting: function(){

        console.log("Hello JS User");
    }
}//here greeting is a key and function(){} is a value
//method =jab object k andar function hota hai to usko method bolte hai here greeting is a method
//JsUser1.greeting()//this is the method of running function
//if we write without ()
console.log(JsUser1.greeting)//output=[Function: greeting] 

//++++++++++++++++++USING THIS KEYWORD+++++++++++++++++++++++//
//THIS KEYWORD SIMPLY REFERS TO THE CURRENT OBJECT//
const JsUser2 = {

    name: "Hitesh",

    greetingTwo: function(){

        console.log(`Hello JS User, ${this.name}`);
    }
}
JsUser2.greetingTwo();
//this is the basic use of this keyword we will study it in detail later

