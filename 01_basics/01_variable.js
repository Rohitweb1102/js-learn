const accountId=144332
//this is the only way to declare constant
let accountemail="rohit@google.com"
var accountpassword="12345"
//variable ko define krne k ye 2 trike hai
accountcity="JAIPUR"
/* jis trike se hmne account city likha hai vo ekdum bkwas trika hai kchvariable value likhne ka 
to hmesha let krke likhennge*/
let accountstate;
//jo bhi humne upr kiya hai vo bs ek memory space bnane k liye kiya hai

//accountId=2 not allowed because accountid is constant 
//we will not use var beacause var has issue in block scope and functional scope
//so everytime for variable value we will use "let"
//now let us give value to all the fields we create in memory
accountemail="rohit@yahoo.com"
accountpassword="23456"
accountstate="rajasthan"
accountcity="bengluru"
console.log(accountId);
console.log(accountcity);
// ab ase hum har ek vaiable k liye alg alg console na likh k simple likhenge table jisse data tabular form m milega
console.table([accountId,accountemail,accountpassword,accountstate,accountcity]);



