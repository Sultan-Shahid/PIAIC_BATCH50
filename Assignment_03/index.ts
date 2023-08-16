// --Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
 
var Names:string[]=["Ali","Ahmad","Wali"];

function Modified_Array(Names:string[],index:number,New_Name:string):string[]
{

    Names.splice(index,0,New_Name);

return Names;
}

var Arraay:string[]=Modified_Array(Names,1,"Sultan");

console.log(Arraay);

console.log();// For New Line 

//-- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

var Shopping_Cart:string[]=["2-Lux Soap","1kg-Rice","2_Dozen-Egg"];

function Add_Item(Shopping_Cart:string[],index:number,New_Thing:string)
{
    if(index>=0 && index<Shopping_Cart.length)
    {
    Shopping_Cart.splice(index,0,New_Thing);
    console.log(Shopping_Cart);
    }
    else
    {
        console.log("Invalid Index")
    }
}
function Remove_Item(Shopping_Cart:string[],index:number)
{
    if(index>=0 && index<Shopping_Cart.length)
    {
        Shopping_Cart.splice(index,1);
        console.log(Shopping_Cart);
    }
    else
    {
        console.log("Invalid Index")
    }
}
function Update_Item(Shopping_Cart:string[],index:number,New_Thing:string)
{
    if(index>=0 && index<Shopping_Cart.length)
    {
    Shopping_Cart.splice(index,1,New_Thing);
    console.log(Shopping_Cart);
    }
    else
    {
        console.log("Invalid Index")
    }
    
}


// Test Function 
Add_Item(Shopping_Cart,0,"Tooth Paste");
Remove_Item(Shopping_Cart,1);
Update_Item(Shopping_Cart,2,"1_Dozen-Egg");


console.log();// For New Line 

// - Write a program that uses a while loop to print the first 25 integers.

var count:number=1;
while(count<=25)
{
    console.log(count);
count++;
}

console.log();// For New Line 

//-- - Write a program that uses a while loop to print the first 10 even numbers.
var i:number=1;
var count:number=0;
while(i<=50)
{
    if(i%2==0 )
    {
       
        count++;
        console.log(count+" Even Number-> "+i);
        if(count==10)
        {
            break;
        }
    }
i++;
}

console.log();// For New Line 


//--- Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

function Calculate_Factorial(Value:number)
{
if(Value>=0)
{
var i:number=1;
var fact:number=1;
while(i<=Value)
{
fact=fact*i;
i++;
}
return fact
}
else
{
   return -1;
}
}

var result:number=Calculate_Factorial(5);

if(result>=0)
{
    console.log("Your Answer Of Factorial Is : "+result)
}
else
{
    console.log("Kindly Enter Positive Number!.")
}

console.log();// For New Line 

//-- Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

var Array_Marks:number[]=[12,13,-2,12,-3,31];
var SizeofArray =Array_Marks.length;
var i:number=0;
while(i<SizeofArray)
{
if(Array_Marks[i]<0)
{
    Array_Marks.splice(i,1);
}
i++; 
 
}
console.log("Your Answer After Removing Negative Number : "+Array_Marks);

console.log();// For New Line 

//-- - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array

var array:number[]=[1,2,3,4,5];

function Sum_of_Array(array:number[]):number
{
var i:number=0;
var sum:number=0;
var sizearray:number=array.length;
while(i<sizearray)
{
sum=sum+array[i];
i+=1;
}
return sum
}

var TotalSum:number=Sum_of_Array(array);
console.log("Sum Of Array "+TotalSum);


console.log();// For New Line 

//-- - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature

var Temp_In_Celcius:number[]=[40,38,39,30,25];
var Temp_In_Fahrenheit:number[]=[];

var i:number=0;
while(i<Temp_In_Celcius.length)
{
    Temp_In_Fahrenheit[i]= (Temp_In_Celcius[i] * 9/5) + 32 ;
    i++;
}
console.log("Array Of Temp in Celcius "+Temp_In_Celcius);
console.log("Array Of Temp in Cel To Fahrenheit "+Temp_In_Fahrenheit);

console.log();// For New Line 