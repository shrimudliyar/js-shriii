const name = "Shrinivas"
const age = 18
 
// this method is not readable and not modern
// console.log(name + " age is " + age); -> Shrinivas age is 18


// should use this method 
// console.log(`Hello my name is ${name} and my age is ${age}`);

// Declaring string 
const gameName = new String ('ShrinivasMudliyar') // -> its an object now
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(12));
// console.log(gameName.indexOf('d'));

const newStr = gameName.substring(0,4)
// console.log(newStr);

 const anotherStr = gameName.slice(-7 , 2)
//  console.log(anotherStr);
 
 const againStr = "             Shriiiiii          "
 console.log(againStr);
 console.log(againStr.trim ()); // trim's the space present in the string 

 const url = "https://shrimudliyar90.com/mudliyar57u"
  console.log(url.replace('shri', 'Shrinivas'));
  console.log(url);
  console.log(url.replace('mudliyar', 'Shrinivas') );
  console.log(url.includes('shri')); // ->true
  console.log(url.includes('crazyshit')); // ->false
  
  