const marvel_heroes = ["Thor", "Ironman", "Spiderman"]

const dc_heroes = ["Superman", "Flash", "Batman"]
//if we want to merge these two arrays 
//***BY push- is method ko use krenge to ye jo bhi value hai usko elemnt ki trh push krega jse value hmne array dedi to ye array ko bhi element ki trh hi treat krega
//marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);//outupt=[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
//now if we access any element of this array
console.log(marvel_heroes[3]);//output=[ 'Superman', 'Flash', 'Batman' ]
//if we want to access flash
//console.log(marvel_heroes[3][1]);//output=flash
//***BY concat-ye ek naya array return krta hai orignal array me koi change nhi krta and saare elements ko khol deta hai
//isliye concat k liye ek naya array define krna jruri hai
//const myN1=marvel_heroes.concat(dc_heroes);//yha kia hmne new array define and concat use kiya
//console.log(myN1);//OUTPUT=[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
//***BY spread - ye bilkul concat ki trh hai but modern hai and concat sirf 2 array ko jod skta hai isse kitne bhi judva lo
const all_heros=[...marvel_heroes,...dc_heroes];
console.log(all_heros);//output=[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
//flat- ye agr arrays k andar array ho us situation ko solve krta hai lets see an exapmle
let myN2=[0,1,1,[3,4,4,5],[5,5,4,[3,3,5]]]
const result=myN2.flat(Infinity);//yha humne level define kiye hai kis depth tak flat krna hai infinity se jitne hote hai sbko kr deta hai
console.log(result);
//***Array.isArray()
const name="ROHIT";
console.log(Array.isArray("ROHIT"));//output IS FALSE COZ IT IS A STRING
console.log(Array.isArray(dc_heroes));//true bcoz dc_heros is a array
//Array.from()this is used to convert string to array
console.log(Array.from(name));//output=[ 'R', 'O', 'H', 'I', 'T' ] converted to array
//confusion part
console.log(Array.from({
    name: "Rohit"
}));//here javascript gets confuse and sochegi ki object ko kis basis pr array bnau values ya fir key
//so thats why javascript returns the empty array as the output ////
//later on we will discuss in depth about tis for now leave this 
//Array.of()-ye diffrent vlues ko combine krke array bnata hai lets see
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//output=[ 100, 200, 300 ]









