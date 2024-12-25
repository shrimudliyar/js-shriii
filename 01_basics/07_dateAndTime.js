// Dates

let  myDate = new Date ()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);

// let myCreatedate = new Date(2024 , 11 , 23)
// let myCreatedate = new Date(2024 , 11 , 23 , 5, 16 )
// let myCreatedate = new Date("01-14-2024")
let myCreatedate = new Date("2024-01-14")
// console.log(myCreatedate.toLocaleString());

let myTimeStamp = Date.now()

// default time in milisecond 

// console.log(myTimeStamp); 
// console.log(myCreatedate.getTime()); 
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date () 
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getDay());
// console.log(newDate.getDate());

// `${newDate.getDay()} and the time is ${newDate.getTime()}`

console.log(newDate.toLocaleString('default',{
    // weekday:"long",
    // timeZone: for this google 
}));
