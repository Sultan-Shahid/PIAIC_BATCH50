"use strict";
// Assignment NO#1
//Q1   -- Print a message like "Hey Abu Hurairah, I have started learning TYPESCRIPT."
console.log(" Hey Muhammad Sultan, I have started learning TYPESCRIPT. ");
console.log("\n"); //for new line
//Q2   -- Store your name in a variable and print it.
var myname = "Muhammad Sultan Shahid";
console.log(myname);
//Q3    -- Store 10 numbers in different variables.     
var num1 = 10;
var num2 = 12;
var num3 = 13;
var num4 = 14;
var num5 = 15;
var num6 = 16;
var num7 = 17;
var num8 = 18;
var num9 = 19;
var num10 = 20;
//Q4     -- Add all of them and print the SUM.
var Sum = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
console.log("The Sum Is : " + Sum);
// Q5     -- Print the Difference (subtraction).
var Sub = num1 - num2 - num3 - num4 - num5 - num6 - num7 - num8 - num9 - num10;
console.log("The Subtraction Is : " + Sub);
// Q6  --Print the result after multiplying all.
var Mul = num1 * num2 * num3 * num4 * num5 * num6 * num7 * num8 * num9 * num10;
console.log("The Multiplication Is : " + Mul);
//Q7  -- Take two numbers and print the division result.
var Div = num10 / num1;
console.log("The Division Is : " + Div);
//Q8    --- Now, perform all four operations with the given numbers, print the results, and observe the order in which the operations take place.
var result = num1 + num2 * num3 + num4 / num5 + num6 + num7 + num8 + num9 + num10; // In this answer given according its precedence
console.log("The Result Is : " + result);
