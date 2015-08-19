
//Kade Hill
//8/18/15
//SDI 1508 - Section 01
//Conditionals Assignment


//We will be calculating if the user is reaching their exercise goals per week.

//Variables
var totalHoursPerWeek = 168; //total hours in a week
var totalHoursPerDay = 24;
var days;        //The number of days per week user exercises
var hoursPerDay; //The number of hours per day user spends exercising
var personalGoal; //The user's personal exercise goal

//Prompts
personalGoal = prompt("We are calculating if you've reached your fitness goal. \nHow many hours per week do you strive to exercise?");
hoursPerDay = prompt("Enter how many hours you exercise per day.");
days = prompt("How many days do you exercise per week?");


var total = Number(personalGoal) - Number(hoursPerDay) * Number(days);
console.log(total);

//outputs

