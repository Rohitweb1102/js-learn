const mySym = Symbol("id");
const mysym2= Symbol("election sign")

const user = {

    name: "Rohit",

    [mySym]: "123",
    [mysym2]:"lotus"
};
console.log(user[mySym]);
console.log(user[mysym2]);

