let goal = "7"

// this both syntax are to check type of any variables
console.log(typeof goal); 
console.log(typeof (goal));

// this syntax is to change data type of any variables , to change we write the first letter of the datatype in capital , like for string -> String same for all.
 let goalToNum = Number(goal)
 console.log( typeof goalToNum);
 
// like if convert string "7" to number -> 7
// "7abc" to number -> NaN (not an number)
// for true -> 1 ; and for false -> 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);
 
// while converting number 1 into boolean obv it will give true and for 0 fasle 
// similary, for ""(empty string)-> false
// "shri" -> true 