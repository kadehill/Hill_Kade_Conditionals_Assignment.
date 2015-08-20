
//Kade Hill
//8/18/15
//SDI 1508 - Section 01
//Conditionals Assignment


//We will be calculating if the user is reaching their exercise goals per week.

//Variables
var days;        //The number of days per week user exercises
var hoursPerDay; //The number of hours per day user spends exercising
var personalGoal; //The user's personal exercise goal
var total;

//Prompts
personalGoal = prompt("We are calculating if you've reached your fitness goal. \nHow many hours per week do you strive to exercise?");
hoursPerDay = prompt("Enter how many hours you exercise per day.");
days = prompt("How many days do you exercise per week?");

//Equation determines how many hours short user is from reaching their goal.
total = Number(personalGoal) - Number(hoursPerDay) * Number(days);
console.log("You are" + " " +total + " " + "hours short of reaching your goal");
console.log("Your goal was" + " "+ personalGoal + " " + "hours per week.");

//outputs
if(personalGoal > total && total == 0){
    console.log("You reached your goal!");
}else{
    console.log("Sorry, you did not reach your goal.");
}


