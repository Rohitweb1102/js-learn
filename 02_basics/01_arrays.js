//arrays-Array is a special object that stores multiple values in a single variable.
//array is a collection of elements
//array always written in [ ]

//methods of creating arrays

//method 1 let students=["ROHIT", "ANKIT","VISHAL"]

//method 2 let students = new Array("Rohit","Ankit","Mohit"); isme square brackets ki jrurt nhi pdti

//we can store anything inside an array like numbers, string, boolean, mixed
//index in arrays //
let fruits =  ["Apple","Mango","Banana","Orange"]
//memory me ase store hota hai Index
//this is called 0 based indexing

/*0 → Apple
1 → Mango
2 → Banana
3 → Orange */
//kisi element ko access krna
//suppose i want to access mango index value of mango=1 so
console.log(fruits[1]);
//arrays are resizable we can resize the array with diffrent methods
//==================ARRAY METHODS===========================//
//***push- this method adds elements in the end of the array lets see
const myArr=[0,1,2,3,4,5];
myArr.push(6);
console.log(myArr);//new array =[0,1,2,3,4,5,6]
myArr.push(100);
console.log(myArr);//new array=[0,1,2,3,4,5,6,100]
//***pop-isme argument dene ki jrurt ni padti ye hmesha last element ko eliminate krta hai
myArr.pop();
console.log(myArr);//output=[0,1,2,3,4,5,6]
//***unshift- this method adds element in the begining of the array
myArr.unshift(9);
console.log(myArr);//output=[9,0,1,2,3,4,5,6]
//***shift- ye method element ko starting se remove krta hai no need to give argument
myArr.shift();
console.log(myArr);//output=[0,1,2,3,4,5,6]
//***includes- ye method check krne ke kaaam aata hai wheter the value exists in array or not
//the output of includes is always boolean
console.log(myArr.includes(6));//output=true
console.log(myArr.includes(1000));//outut=false
//***indexof-ye kisi value ka array k andar index check krne k kaam aata hai
console.log(myArr.indexOf(4));//output=4
//agr maan lo humne kisi aese no. ka index check kr liya jo array me hai hi nhi to output aayega -1
//which means element not found in array
//***join-this method converts array into strings
const newArr=myArr.join();
console.log(newArr);//output=0,1,2,3,4,5,6
console.log(typeof newArr);//string
//***slice-is method me hum index range dete hai jha se jha tk hume array chaiye
//syntax myArr.slice(start,end)
const myN1=myArr.slice(1,4);
console.log(myN1);//output=[1,2,3]last waala add nhi hota hai
//orignal array ka kch nhi bigadta vo same hi rhta hai
console.log(myArr);//output=[0,1,2,3,4,5,6]as it is as before
//***splice- ye jo range daalte hai usko puri ko leta ha bina exclude kre
const myN2=myArr.splice(1,4);
console.log(myN2);//output=[1,2,3,4,] 4th index bhi include hai 
//now surprise is that ki splice k andar humne jo bhi index daale hai ye un index ko orignal array se remove kr deta hai
console.log(myArr);//output=[0,5,6]orignal array is changed





 






