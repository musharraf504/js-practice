// date and time

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


const date = new Date().getDay().toString() //it gives in range of 0 -> 6, where 0 is sunday and 6 is saturday
// console.log(date);


//finding day using array
const day = new Date().getDay()
// console.log(dayNames[day]);


//redefine date and time

const date2 = new Date()
console.log(date2.toDateString());       //   -> Sun Nov 03 2024
console.log(date2.toLocaleDateString()); //   -> 11/3/2024
console.log(date2.toLocaleString());     //   -> 11/3/2024, 3:07:36 AM
console.log(date2.toTimeString());       //   -> 17:04:10 GMT+0530 (India Standard Time)


console.log(date2.getMonth());           //   -> 10 start with 0 like 10 -> november
