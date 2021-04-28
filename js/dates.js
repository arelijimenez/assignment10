//STEP 1
//Create an application that gets the number of days in a month. Display that result within the console 
//window.

// let getDaysInMonth = function(month, year) {
//     return new Date(year, month, 0).getDate();
// };
// console.log(getDaysInMonth(5,2021));


//STEP 2
//Create an application that gets the month name from a particular date. Display that result within the 
//console window.

// let monthNames = [
//     "January", "February", "March", "April","May","June", "July", 
//     "August", "September", "October", "November", "December"
// ];
// let d = new Date();
// let theMonth = d.getMonth();
// console.log(monthNames[theMonth]);


//STEP 3  
//Create an application that tests whether a date is a weekend. Display that result within the conso
//window

// let day = new Date();
// console.log(day.getDay());
// if (day.getDay() === 6 || day.getDay() === 0) {
//     console.log("Weekend");
// } else {
//     console.log("Weekday");
// }


//STEP 4
//Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the
//console window should display Monday.

// let today     = new Date();
// let yesterday = new Date(today);
// yesterday.setDate(yesterday.getDate() -1);

// let days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
// let d = new Date(yesterday);
// let dayName  = days[d.getDay()];
// console.log(dayName);


//STEP 5
//Create an application that gets the current day of the week. The twist here is that I want only the 
//first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.

let today     = new Date();
let dateString = new Date();
let days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
let d = new Date(dateString);
let dayName  = d.toString()[0];
console.log("Today is: " + dayName);

