//Q2--Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,would you like to learn some Python today?”
console.log();
var Person_Name:string="Abdullah Bhatti";
console.log(`"${Person_Name},would you like to learn some Python today?"`);


console.log();
//q3-- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log();

var Person_Name:string="sultan Shahid";

const Lower_Case:string=Person_Name.toLocaleLowerCase();
console.log("In Lower Case : ",Lower_Case);

const Upper_Case:string=Person_Name.toUpperCase();
console.log("In Upper Case : ",Upper_Case);

//The code of title case 


let Captalize_Word=(str:string)=>
{
const first_char=str.charAt(0).toUpperCase();
const Sub_string=str.substring(1);
const Rmaining_String=Sub_string.toLocaleLowerCase(); // to convert lower case
const Full= first_char+Rmaining_String;
return Full;


}

let titlecase=(str:string)=>
{
//give array like ['some','like']
var Array:string[]=str.split(" ");


 var upgrade:string[]=Array.map((word)=>
{
    return Captalize_Word(word)
    

})
const result:string=upgrade.join(" ");
return result;
}
var val:string="suLtan sHahid";
const title_Case=titlecase(val);//Give value and then gie title case
console.log("In TitleCase  : ",title_Case);

console.log();
//q4--. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log();

console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);

console.log();
//q5--Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

var Famous_Person="Albert Einstein ";
console.log(`${Famous_Person} once said, “A person who never made a mistake never tried anything new.”
`);
console.log();
/*Q6--. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/ 

const Person_Name_whiteSpaces="\t\n  Muhammad Ali  \t\n";
console.log("Name With WhiteSpaces :",Person_Name_whiteSpaces);


const Stripped=Person_Name_whiteSpaces.trim();
console.log("Stripping Name :",Stripped);

console.log();

//Q7-- Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
console.log();
const additionResult = 5 + 3;
console.log("Addition Of 5+3 : ",additionResult);

const subtractionResult = 10 - 2;
console.log("Subtraction Of 10-2 : ",subtractionResult);

const multiplicationResult = 4 * 2;
console.log("Multiplication Of 2*4 : ",multiplicationResult);

const divisionResult = 16 / 2;
console.log("Division Of 16/2 : ",divisionResult);
console.log();
/* Q8-You should create four lines that look like this:

_____________________________________________

console.log(5 + 3)

_____________________________________________

Your output should simply be four lines with the number 8 appearing once on each line.*/
console.log();

console.log(5 + 3);
console.log(2 * 4);
console.log(10 - 2);
console.log(16 / 2);
console.log();

//Q9-- Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log();
var Favourite_Number:number=18;
var Message:string=`My Favourite Number Is : ${Favourite_Number}`;
console.log(Message);

console.log();
/*Q10-- Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
describing what the program does.*/
console.log();
/*Name : M.Sultan
Date   : 15/09/2023
Describing :  In this program I only store name in variable or print it*/ 

var Person_Name:string="Abdullah Bhatti"; //Program 1
console.log(`"${Person_Name},would you like to learn some Python today?"`);


/*Name : M.Sultan
Date   : 15/09/2023
Describing :  In this program I only store name in variable or then i small all character of variable*/ 
var Person_Name:string="sultan Shahid";//program 2
const lower_Case:string=Person_Name.toLocaleLowerCase();
console.log("In Lower Case : ",Lower_Case);

console.log();

//Q11 --Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log();
var Names_Friend:string[]=["Ali","Ahmad","wali","Anus"]

for (let index = 0; index < Names_Friend.length; index++) {
    console.log(  Names_Friend[index]);
   
    
}
console.log();

//Q 12-- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each messageshould be the same, but each message should be personalized with the person’s name.
console.log();
var Names_Friend:string[]=["Ali","Ahmad","wali","Anus"]
var Greetings="Hello, ";
for (let index = 0; index < Names_Friend.length; index++) {
    console.log(Greetings,Names_Friend[index]);
   
    
}
console.log();


/*Q--13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
console.log();
var transportation:string[]=["Car","MotorCycle","HeavyBike","Train","AeroPlane"];
for (let index = 0; index < transportation.length; index++) {
    console.log(`“I would like to own a ${transportation[index]} motorcycle.”`);
   
    
}

console.log();

/*Q14--. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/

console.log();
var Guest_List:string[]=["Abdullah","Saad","Umer"];

for (let index = 0; index < Guest_List.length; index++) {
    console.log(`Dear ${Guest_List[index]}, I would like to invite you to dinner. Please join me for a wonderful evening`);
   
    
}
console.log();

/* 
Q--15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.*/
console.log();
var Guest_List:string[]=["Abdullah","Saad","Umer"];
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
var Guest_Not_Come="Saad";
console.log(`\nUnfortunately, ${Guest_Not_Come} can't make it to the event.`);



// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

var new_guest:string="Usaid";
Guest_List.splice(1,1,new_guest);

// • Print a second set of invitation messages, one for each person who is still
// in your list.
// */



for (let index = 0; index < Guest_List.length; index++) {
    console.log(`Dear ${Guest_List[index]}, I would like to invite you to dinner. Please join me for a wonderful evening`);
   
    
}
console.log();

/*Q--16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.*/
console.log();
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
for (let index = 0; index < Guest_List.length; index++) {
    console.log(`Dear ${Guest_List[index]}, I would like to invite you to dinner. Please join me for a wonderful evening`);
   
    
}
console.log("\nGood news! We found a bigger dinner table.");

// • Add one new guest to the beginning of your array.
Guest_List.unshift("Habib");

// • Add one new guest to the middle of your array.
Guest_List.splice(1,0,"Subhan");

// • Use append() to add one new guest to the end of your list.
Guest_List.push("Zeeshan");
// • Print a new set of invitation messages, one for each person in your list.
Guest_List.forEach((element)=>{console.log(element);
})
console.log();

/*Q--17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.*/

console.log();
for (let index = 0; index < Guest_List.length; index++) {
    console.log( `${Guest_List[index]}`);
   
    
}
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("\nSorry, we can invite only two people for dinner.");

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
while(Guest_List.length>2)
{
    var removed=Guest_List.pop();
   console.log(`\nSorry, ${removed}, we can't invite you to dinner.`);
}


// • Print a message to each of the two people still on your list, letting them know they’re still invited.

for (let index = 0; index < Guest_List.length; index++) {
    console.log( `${Guest_List[index]}`);
   
    
}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

Guest_List.splice(0,2);

for (let index = 0; index < Guest_List.length; index++) {
    console.log( `${Guest_List[index]}`);
   
}

console.log();

/*Q18-- Seeing the World: Think of at least five places in the world you’d like to visit.*/

// • Store the locations in a array. Make sure the array is not in alphabetical order.
console.log();
var plcaeToVisit:string[]=["paris","karachi","lahore","Islamabad"]
// • Print your array in its original order.

plcaeToVisit.forEach((elem)=>{console.log(elem);
})

// • Print your array in alphabetical order without modifying the actual list.
console.log([...plcaeToVisit].sort());



// • Show that your array is still in its original order by printing it.

console.log(plcaeToVisit);

// • Print your array in reverse alphabetical order without changing the order of the original list.

console.log([...plcaeToVisit].sort().reverse());

// • Show that your array is still in its original order by printing it again.

console.log(plcaeToVisit);


// • Reverse the order of your list. Print the array to show that its
// order has changed.
plcaeToVisit.reverse();
console.log(plcaeToVisit);


// • Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log(plcaeToVisit.reverse());

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(plcaeToVisit.sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
plcaeToVisit.sort((a, b) => b.localeCompare(a));

console.log();
//Q19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log();
console.log("people you are inviting to dinner",Guest_List.length);
console.log();
/*
Q20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
else you’d like. Write a program that creates a list containing these items.
*/
console.log();
var country:string[]=["UK","pakistan","India"];

console.log("List of Countries ",country);

console.log();
//Q21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log();
type country={name:string,populationn:number}
let Countries:country[]=[{name:"Uk",populationn:23456778},{name:"pakistan",populationn:22000332},{name:"India",populationn:70442344}]

console.log("Object : " , Countries);


console.log();


/*22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program.*/ 
console.log();
var nm:number[]=[12,13,14];
var value:number=nm[6];
console.log(value);

console.log();
/*Q23. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
console.log();

let number = 5;
let string = "hello";
let booleanTrue = true;
let booleanFalse = false;

// Test 1
console.log("Is number equal to 5? I predict True.");
console.log(number === 5);

// Test 2
console.log("Is string equal to 'hello'? I predict True.");
console.log(string === 'hello');

// Test 3
console.log("Is number not equal to 7? I predict True.");
console.log(number !== 7);

// Test 4
console.log("Is booleanTrue equal to true? I predict True.");
console.log(booleanTrue === true);

// Test 5
console.log("Is booleanFalse equal to false? I predict True.");
console.log(booleanFalse === false);

// Test 6
console.log("Is number greater than 10? I predict False .");
console.log(number > 10);

// Test 7
console.log("Is string  equal to 'world'? I predict False.");
console.log(string == 'world');

// Test 8
console.log("Is booleanTrue and booleanFalse true? I predict False.");
console.log(booleanTrue && booleanFalse);

// Test 9
console.log("Is number less than or equal to 4? I predict False.");
console.log(number <= 4);

// Test 10
console.log("Is booleanTrue and booleanFalse true? I predict False.");
console.log(booleanTrue && booleanFalse);

console.log();


/*
Q 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:*/

//let string = "hello";
console.log();
// • Tests for equality and inequality with strings
console.log("Is string equal to 'hello'? I predict True.");
console.log(string ==='hello');

console.log("Is string not equal to 'hello'? I predict True.");
console.log(string !=='Bob');


// • Tests using the lower case function
let text = "Hello, World";

console.log("Is text in lowercase equal to 'hello, world'? I predict True.");
console.log(text.toLowerCase() === 'hello, world');

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 5;

console.log("Is num1 equal to num2? I predict False.");
console.log(num1 === num2);

console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 !== num2);

console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);

console.log("Is num1 less than num2? I predict False.");
console.log(num1 < num2);

console.log("Is num1 greater than or equal to num2? I predict True.");
console.log(num1 >= num2);

console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);

// • Tests using "and" and "or" operators
console.log("Is num1 not equal to num2 Or num1 not equal to num2   ? I predict True.");
console.log(num1 !== num2 || num1==num2);

console.log("Is num1 greater equal to num2 And num1 not equal to num2   ? I predict True.");
console.log(num1 != num2 && num1>num2);
// • Test whether an item is in a array
var fruit:string[]=["Apple","banana","Graps"]
for (let index = 0; index < fruit.length; index++) {
    if("apple"==fruit[index]) 
    {
        console.log("Is item in array'? I predict True.");  
  
    
}
}
// • Test whether an item is not in a array
for (let index = 0; index < fruit.length; index++) {
    if("date"==fruit[index]) 
    {
        console.log("Is item in array'? I predict False.");  
  
    
}
}

console.log();
 //Q25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

var alien_color:string="red";
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
if(alien_color=="green")
{
    console.log(" the player just earned 5 points");
    
}

console.log();
// Q26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
console.log();
alien_color="green";//Version No.1

if(alien_color=="green")
{
    console.log("The player just earned 5 points for shooting the alien");
    
}
else
{
   console.log("The player just earned 10 points");
    
}

//Version Number 2

alien_color="red";

if(alien_color=="green")
{
    console.log("The player just earned 5 points for shooting the alien");
    
}
else
{
   console.log("The player just earned 10 points");
    
}

console.log();

//Q27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
console.log();
//Version No.1
alien_color="green";

if(alien_color=="green")
{
    console.log("The player just earned 5 points for shooting the alien");  
}
else if(alien_color=="yellow")
{
 console.log("the player earned 10 points.");
    
}
else
{
    console.log("the player earned 15 points.");
}

//Version No.2
alien_color="yellow";

if(alien_color=="green")
{
    console.log("The player just earned 5 points for shooting the alien");  
}
else if(alien_color=="yellow")
{
 console.log("the player earned 10 points.");
    
}
else
{
    console.log("the player earned 15 points.");
}

//Version No.3
alien_color="red";

if(alien_color=="green")
{
    console.log("The player just earned 5 points for shooting the alien");  
}
else if(alien_color=="yellow")
{
 console.log("the player earned 10 points.");
    
}
else
{
    console.log("the player earned 15 points.");
}

console.log();

//Q28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
console.log();
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

var Person_Age:number=18;

if(Person_Age<2)
{
    console.log("The Person Is baby");
    
}
else if(Person_Age>=2 && Person_Age<4)
{
console.log("The Person Is Toddler");

}
else if(Person_Age>=4 && Person_Age<13)
{
console.log("The Person Is Kid");

}
else if(Person_Age>=13 && Person_Age<20)
{
console.log("The Person Is Teenager");

}
else if(Person_Age>=20 && Person_Age<65)
{
console.log("The Person Is Adult");

}
else
{
    console.log("The Person Is Older");
   
}
console.log();

/*Q29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!*/ 
console.log();
var favorite_fruits:string[]=["Apple","Mango","Graps"];

if(favorite_fruits.includes("Apple"))
{
    console.log("You Really Like Apple");
    
}
if(favorite_fruits.includes("Mango"))
{
    console.log("You Really Like Mango");
    
}
if(favorite_fruits.includes("Graps"))
{
    console.log("You Really Like Graps");
    
}
if(favorite_fruits.includes("Orange"))
{
    console.log("You Really Like Graps");
}
else
{
    console.log("Ornage is not in your favourite list");
    
}
if(favorite_fruits.includes("Pineapple"))
{
    console.log("You Really Like Pineapple");
}
else
{
    console.log("Pineapple is not in your favourite list");
    
}

console.log();
/*Q30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/ 
console.log();
var username:string[]=["Ali","wali","ahmad","admin","Eric"]
for (let index = 0; index < username.length; index++) {
    if(username[index]=="admin" ||username[index]=="Admin") 
    {
      console.log(`Hello ${username[index]}, would you like to see a status report?`);
        
    }  
    else
    {
        console.log(`Hello ${username[index]}, thank you for logging in again`)
    }

    }
    console.log();
/*Q31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/ 

console.log();
var username:string[]=["Ali","wali","ahmad","admin","Eric"]
//Remove all user 
username=[];

if(username.length>0)
{
    for (let index = 0; index < username.length; index++) {
        if(username[index]=="admin" ||username[index]=="Admin") 
        {
          console.log(`Hello ${username[index]}, would you like to see a status report?`);
            
        }  
        else
        {
            console.log(`Hello ${username[index]}, thank you for logging in again`)
        }
    
        }
  
    
}
else
{
    console.log("list is empty, We need to find some users!");
}

console.log();
/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
console.log();
var current_username:string[]=["Ali","wali","ahmad","abdullah","Eric"]
var new_username:string[]=["Sultan","ramish","ahmad","Faizan","Usman"];


// Step 2: Loop through the new users list
for (const new_user of new_username) {
    // Step 3: Check if the new username exists in current users (case-insensitive)
    const usernameExists = current_username.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase());

    // Step 4: Print the result message
    if (usernameExists) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}




console.log();

/*33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
7th 8th 9th", and each result should be on a separate line.
*/
console.log();
var arr:number[]=[1,2,3,4,5,6,7,8,9]
for (let i = 0; i < arr.length; i++) {
    if(arr[i]==1)
    {
        console.log(arr[i],"st");
        
    }
    else if(arr[i]==2)
    {
        console.log(arr[i],"nd");
        
    }
    else if(arr[i]==3)
    {
        console.log(arr[i],"rd");
        
    }
    else if(arr[i]==4)
    {
        console.log(arr[i],"th");
        
    }
    else if(arr[i]==5)
    {
        console.log(arr[i],"th");
        
    }
    else if(arr[i]==6)
    {
        console.log(arr[i],"th");
        
    }
    else if(arr[i]==7)
    {
        console.log(arr[i],"th");
        
    }
    else if(arr[i]==8)
    {
        console.log(arr[i],"th");
        
    }
    else if(arr[i]==9 )
    {
        console.log(arr[i],"th");
        
    }
}

console.log();

/*
34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.
*/
const favorite_pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
console.log();
for (let index = 0; index < favorite_pizzas.length; index++) {
   console.log(`I like ${favorite_pizzas[index]}`);
    
    
}
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
console.log("\n I really love pizza!");

console.log();

/*35. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!
*/
console.log();
const common_characteristic = "would make a great pet.";

const animals: string[] = ["Dog", "Cat", "Rabbit"];

for (let index = 0; index < animals.length; index++) {
    console.log(animals[index]);
    
    
}

for (let index = 0; index < animals.length; index++) {
    console.log(`${animals[index]} ${common_characteristic}`);
    
    
}

console.log("These animal have common",common_characteristic);

console.log();

/* 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.*/
console.log();
function makeshirt(size:string,text:string)
{
console.log(`The Size of Shirt is : ${size} and The Message on it : ${text}`);

}

makeshirt("Small","Hot Boy");
console.log();
/*
37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.*/ 
console.log();
function make_shirt(size:string="Large",text:string=" I love TypeScript")
{
console.log(`The Size of Shirt is : ${size} and The Message on it : ${text}`);
}

make_shirt();

make_shirt("Medium");

make_shirt("Small","Gucci");

console.log();

/*
38. Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.
*/
console.log();
function describe_city(city:string,country:string="Unknown") 
{
console.log(`${city} In ${country}`);

}

describe_city("Lahore","Pakistan");
describe_city("Multan","Pakistan");
describe_city("Sydney");
/*39. City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value
that’s returned.
 */
console.log();
function city_country(city:string,country:string):string
{
return `"${city}, ${country }"`
}

console.log(city_country("Paris","France"));
console.log(city_country("London","UK"));
console.log(city_country("Delhi","India"));

console.log();

/*40. Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.
Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.*/ 
console.log();
function make_album(artist_name:string,album_title:string,Nm_Track?:number)
{

    let music_album=
    {
        artist_name:artist_name,
        album_title:album_title,
        Nm_Track:Nm_Track
    }
    if (Nm_Track == undefined) {
        music_album.Nm_Track=0;
    }

return music_album;
}

console.log(make_album("Arjit Singh","Tum hi ho"));
console.log(make_album("Neha Kakar ","Mile ho tum hum ko",15));
console.log(make_album("Yoyo Honey","Love dose"));

console.log();
/*
41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.*/
console.log();

var Magician_Name:string[]=["Shahid","Wahad","Moiz"];

function Print(array:string[])
{
for (let index = 0; index < array.length; index++) {
   console.log( array[index]);
  
    
}
}
console.log("Name Of MAgician \n ");

Print(Magician_Name);

console.log();
/*
42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/
var Magician:string[]=["Mahad","Ali","Rahat"];
var newarray:string[]=[];
function make_Greattt(Magician:string[])
{
    for (let index = 0; index < Magician.length; index++) {
        newarray.push(`The Great ${ Magician[index]}`)
       
        
    }
}

function show(array:string[])
{
    for (let index = 0; index < array.length; index++) {
         console.log(array[index]);
         
       
        
    }
}

make_Greattt(Magician);
show(newarray);
console.log();


/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/

var Magician:string[]=["Mahad","Ali","Rahat"];
var newarray:string[]=[];
function make_Great(Magician:string[])
{
    for (let index = 0; index < Magician.length; index++) {
        newarray.push(`The Great ${ Magician[index]}`)
       
        
    }
    return  newarray;
}
const great_array=make_Great(Magician);
console.log("Original Magican Name ");
show(Magician);

console.log("Magican Name with great");
show(newarray);

console.log();


/*
44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.
*/
function item_On_SandWich(...arrray:string[])
{

    
    for (let index = 0; index < arrray.length; index++) {
        console.log( arrray[index]);
       
        
    }
   
}
console.log("Item Of Sandwich");

item_On_SandWich("Tomato","Salad");
item_On_SandWich("Cheese","Salad","egg");
item_On_SandWich("Mayo");

console.log();

/*45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature. 
Print the Object that’s returned to make sure all the information was
stored correctly.
*/ 

function info_Car(manufacturer:string,model_name:string,color?:string,price?:any)
{

    let car=
    {
        manufacturer:manufacturer,
        model_name:model_name,
        color:color,
        price:price
    }
    if(car.color==undefined)
    {
       car. color="Unknown";
    }
    if(car.price=undefined)
    {
        car.price="Unknown";
    }

    return car;
}



console.log(info_Car("Honda","HDD-1234"));
console.log(info_Car("Suzuki","Skk-244","red"));
console.log(info_Car("Lantra","LT-08","white","200,0000"));    


