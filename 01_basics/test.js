const user = {

    username: "Hitesh",

    price: 199

}
function handleObject(anyObject) {

    console.log(anyObject.username);//yha hum  console.log(user.username); bhi likh skte hai valid hai

}

handleObject({

    username: "Sam",

    price: 399

});
