"use strict";
// Q1  - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
var Celsius = 32;
var Fahrenheit = 45;
var Result_C_TO_F = (Celsius * 9 / 5) + 32;
var Result_F_TO_C = (Fahrenheit - 32) * 5 / 9;
console.log("Temperature in Celsius To Fahrenheit : " + Result_C_TO_F);
console.log("Temperature in Fahrenheit To Celsius : " + Result_F_TO_C);
console.log("\n");
// Q2  - Write a program that calculates the percentage.
var Total_Marks = 1100;
var Obtain_Marks = 971;
var per = Obtain_Marks * 100 / Total_Marks;
console.log("Percentage of Matric Marks : " + per);
console.log("\n");
// Q3  - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var GivenDays = 17;
var ResultWeek = Math.floor(GivenDays / 7);
var ResultDay = GivenDays % 7;
console.log(ResultWeek, " week and  ", ResultDay, " Days ");
console.log("\n");
//Q4 --- Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var Price_Of_Product = 120;
var discount10 = Price_Of_Product - (Price_Of_Product * 10 / 100);
var discount5 = Price_Of_Product - (Price_Of_Product * 5 / 100);
if (Price_Of_Product > 100) {
    console.log("Your Actual Price " + Price_Of_Product);
    console.log("Your Actual Price After 10% Discount : " + discount10);
}
else {
    console.log("Your Actual Price :  " + Price_Of_Product);
    console.log("Your Actual Price After 5% Discount : " + discount5);
}
console.log("\n");
//  - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var Age = 20;
if (Age >= 0 && Age <= 12) {
    console.log(`You Are "Child". `);
}
else if (Age >= 13 && Age <= 19) {
    console.log(`You Are "Teenager". `);
}
else {
    console.log(`You Are "Adult".`);
}
// - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var Weather = -1;
if (Weather <= 20) {
    console.log("Kindly! Wear Warm Clothes ,Because Temperature Low."); // cold
}
else if (Weather >= 21 && Weather <= 30) {
    console.log("Kindly! Wear Normal Clothes ,Because Temperature Normal."); //spring
}
else {
    console.log("Kindly! Wear Light  Clothes ,Because Temperature high."); //summer
}
//  - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var input = 15;
if (input % 3 == 0 && input % 5 == 0) {
    console.log(input, " Is Divisible By Both 3 or 5.");
}
else if (input % 3 == 0) {
    console.log(input, " Is Divisible By Only 3.");
}
else if (input % 5 == 0) {
    console.log(input, " Is Divisible By Only 5.");
}
else {
    console.log(input, " Is Not Divisible By Only 5.");
}
//  - Write a program that checks if the given year is leap year or not.
var Year = 1990;
if (Year % 4 == 0) {
    console.log(Year, " Is Leap Year.");
}
else {
    console.log(Year, " Is Not Leap Year .");
}
// - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var day = 8;
if (day >= 1 && day <= 7) {
    if (day == 1) {
        console.log("Sunday");
    }
    if (day == 2) {
        console.log("Monday");
    }
    if (day == 3) {
        console.log("Tuesday");
    }
    if (day == 4) {
        console.log("Wednesday");
    }
    if (day == 5) {
        console.log("Thurday");
    }
    if (day == 6) {
        console.log("Friday");
    }
    if (day == 7) {
        console.log("Saturday");
    }
}
else {
    console.log("Please Enter Day Between 1 to 7");
}
//-- - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
//Where the tax amount will be calculated by the amount of bill
var Consumed_Units = 120;
var Tax100 = Consumed_Units + (Consumed_Units * 10 / 100);
var Tax200 = Consumed_Units + (Consumed_Units * 15 / 100);
var Tax500 = Consumed_Units + (Consumed_Units * 500 / 100);
if (Consumed_Units <= 100) {
    console.log("Your Actual Consumed Units " + Consumed_Units);
    console.log("Your Actual Units After Add 0% Tax : " + Consumed_Units);
}
else if (Consumed_Units > 100 || Consumed_Units <= 200) {
    console.log("Your Actual Consumed Units " + Consumed_Units);
    console.log("Your Actual Units After Add 10% Tax : " + Tax100);
}
else if (Consumed_Units > 200 || Consumed_Units <= 500) {
    console.log("Your Actual Consumed Units " + Consumed_Units);
    console.log("Your Actual Units After Add 15% Tax  : " + Tax200);
}
else {
    console.log("Your Actual Consumed Units " + Consumed_Units);
    console.log("Your Actual Units After Add 25% Units : " + Tax500);
}
