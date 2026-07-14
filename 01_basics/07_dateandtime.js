let myDate= new Date();//new ka mtlb hai ek naya date object bnao
console.log(myDate);//2026-07-14T06:12:23.640Z this is ISO format date
console.log(myDate.toString());// this is to get the date in readable format
console.log(myDate.toDateString());//this gives only date
console.log(myDate.toLocaleString());//this gives date according to country
console.log(typeof myDate);// type of myDate is object so date is a object
//for making custom dates
let d= new Date(2026,0,23)
console.log(d.toDateString());
//in javascript      month    number
//                   jan         0
  //                 feb.        1
     //              march       2
//agr hum date k saath time bhi de to
let newDate= new Date(2023,0,23,5,3);
console.log(Date.toLocaleString());//1/23/2023, 5:03:00 AM output
//if we want date in any particular format
let anotherdate= new Date("2023-01-03");//yha humne string se date bnayi hai to yha month 01 se hi start honge
console.log(anotherdate);
console.log(Date.now());//output=1784012017453 ye miliseconds hai 1 january 1970 se
console.log(Date.now()/1000);// this 1000 will convert miliseconds to seconds
console.log(d.getMonth()+1);//ye one add kiya gya hai readable bnane k liye ab hum uss 0 waale jhanjhat se bach gye hai
//in the same way days ki maping bhi same hi hoti hai 0-sunday 1-monday 2-tuesday and so on
console.log(d.getDay());
console.log(d.toLocaleString('default',{
    weekday:"long",

    month:"long",

    year:"numeric",

    hour:"2-digit",

    minute:"2-digit",

    second:"2-digit"


}

));
// =========================
// toLocaleString()
// =========================

// Converts Date object into a human-readable string.

// Syntax
date.toLocaleString(locale, options);

// locale
// "default" -> Uses system locale
// "en-IN"   -> India format
// "en-US"   -> US format

// options -> Object used to customize output

// Weekday
weekday: "long";    // Tuesday
weekday: "short";   // Tue
weekday: "narrow";  // T

// Month
month: "long";      // July
month: "short";     // Jul
month: "numeric";   // 7
month: "2-digit";   // 07

// Day
day: "numeric";     // 5
day: "2-digit";     // 05

// Year
year: "numeric";    // 2026
year: "2-digit";    // 26

// Time
hour: "2-digit";
minute: "2-digit";
second: "2-digit";

// Example
console.log(new Date().toLocaleString("default", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
}));





                     





