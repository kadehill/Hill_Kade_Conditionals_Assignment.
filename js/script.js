
//Kade Hill
//8/18/15
//SDI 1508 - Section 01
//Conditionals Assignment


//We will be calculating if the user is reaching their exercise goals per week.

//Variables
var days;        //The number of days per week user exercises.
var hoursPerDay; //The number of hours per day user spends exercising.
var personalGoal; //The user's personal exercise goal.
var total; //The number of hours that the user is short of reaching the goal.


//Prompts
personalGoal = prompt("We are calculating if you've reached your fitness goal. \nHow many hours per week do you strive to exercise?"); //defining the variable
if(personalGoal == ""){ //If user does not enter a value. System prompts them to try again.
    personalGoal = prompt("Yikes! You forgot to set a workout goal. \nPlease do so now.")
}
hoursPerDay = prompt("Enter how many hours you exercise per day."); //defining the variable
if(hoursPerDay == ""){ //If user does not enter a value. System prompts them to try again.
    hoursPerDay = prompt("Oh No! You forgot to enter how many hours you exercise per day. \nPlease enter now.")
}
days = prompt("How many days do you exercise per week?"); //defining the variable
if (days == ""){ //If user does not enter a value. System prompts them to try again.
    days = prompt("Oops! You forgot to enter how many days you exercise per week. \nPlease enter now.");
}

//Equation determines how many hours short user is from reaching their goal.
total = Number(personalGoal) - Number(hoursPerDay) * Number(days);
console.log("You are" + " " +total + " " + "hours short of reaching your weekly goal."); //This log will display total hours short of reaching goal.
console.log("Your goal was" + " "+ personalGoal + " " + "hours per week."); //this log will confirm user's goal.

//outputs, Logical Operator
if(personalGoal > total && total == 0){
    console.log("Congratulations! You reached your goal!"); //Congratulates user for reaching their goal.
}else{
    console.log("Sorry, you did not reach your goal."); //Advises user that they did not reach their goal
}

//Ternary conditional statement
//Workout reminder if user has not reached weekly goal
(personalGoal > total || !personalGoal)? console.log("No need to work out today.") : console.log("Don't forget to workout for" + " "+ hoursPerDay + " " + "hours today.");