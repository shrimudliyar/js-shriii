// singleton
// Object.create


// object literals

const mySym = Symbol("Key1") // declaration of symbol

const SmUser = {
    name : "Shrinivas",
    age :18,

    [mySym]:"MyKey2", // declaration of symbol

    location :"Bhiwandi",
    email : "shrinivas9@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Mon","Tue","Wed"]
}

 // to acess  object 
//  console.log(SmUser.name);
//  console.log(SmUser["name"]);
//  console.log(SmUser["age"]);
//  console.log(SmUser[mySym]);
 
// to change any value in object 
SmUser.email= "Shrimudliyargmail.com"
// console.log(SmUser.email);

// Object.freeze(SmUser) // by using freeze we can lock the object that we don't want anyone to change 
// now if we try to change the value remains same 
SmUser.email = "MudliyarShrinivas@gmail.com"
// console.log(SmUser);

SmUser.greeting = function() {
    console.log("Hello shriiiiiiiiiiiii");
}

SmUser.greetingTwo = function() {
    console.log(`Hello shrii , ${this.name}`);
}

console.log(SmUser.greeting());
console.log(SmUser.greetingTwo());
