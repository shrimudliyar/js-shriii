// # Primitive Datatype

// 7 types : STring, Number , Boolean , Null , undifined , Symbol , bigint ;

// javascript  is dynamic 

// Reference (Non primitive )

// Array , Objects , Functions

const arrayy = ["spiderman" , "ironman" , "Thorr"]

let myObj = {
    name : "Shrinivas",
    age : 18,
}

const myFunction = function(){
    console.log("Hey Shriiii !!!!");    
}

// console.log(typeof myFunction);


//   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Memory 
// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "shrimudliyardotcom"

let anotherName = myYoutubeName 
anotherName = "Shrinivasdotcom"

console.log(anotherName);
console.log(myYoutubeName);

let userOne ={
    email: "shrimudliyar90@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ShriniMudliyar"

console.log(userOne);
console.log(userTwo);

