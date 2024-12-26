// array 

const myArr = [0,1,2,3,4,5,]
const myHeros = ["Spiderman", "Ironman","Thor"]
const myArr2 = new Array (1,2,3,4,5)
//  to acess the array 
// console.log(myArr[0]);

// Array methods 
myArr.push(6)
// // console.log(myArr);//-> for printing all elements present in array
// // console.log(myArr[6]);//-> for printing any specific elements present in array

// myArr.pop() // it deletes the last elemnet in array 


// myArr.unshift(8) // it adds the element in 1st slot
// myArr.shift() // deletes the 1st element

// console.log(myArr.includes(9));//->false
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr); //-> type is string 

// slice , splice

console.log("A" , myArr);

const myn1 = myArr.slice(1 ,3)
console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C" , myArr);



