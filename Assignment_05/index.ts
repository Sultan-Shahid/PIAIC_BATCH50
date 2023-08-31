// Q1 --Write a program that uses filter to remove all negative numbers from an array of numbers

let Array_OF_Numbers:number[]=[1,2,3,-4,6,-7]

let updateArray=Array_OF_Numbers.filter((element)=>
{  
if(element>0)
{
   return element
}

});
console.log("-------Q1 Solution--------");
console.log();

console.log("After Remove Negative number : "+updateArray);

console.log();

//Q2 --Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

let Array_Number:number[]=[1,2,3,4,5];

let New_Array=Array_Number.map((data)=>
{return data*2;
});

 
//Q3--Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

let Array_Of_String:string[]=["apple", "banana", "cherry", "date", "grape"];

let update=Array_Of_String.filter((data)=>
{
   if(data.length>5)
   return true;
});

console.log("-------Q3 Solution--------");
console.log();


console.log("More than 5 length of Fruit : "+ update);

console.log();
//Q4--Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.

var Arr:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even_number=Arr.filter((value)=>
{
if(value%2==0)
{
   return true;
}
});

let square_even=even_number.map((data)=>
{
return data*data;
});
console.log("-------Q4 Solution--------");
console.log();

for(var i=0;i<even_number.length;i++)
{
   console.log(" Square of "+even_number[i]+ " -> "+square_even[i])
}
console.log();


//Q5--Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

let Array_Temp_In_Celsius:number[]=[0, 10, 20, 30, 40];

let Temp_In_Fahrenheit=Array_Temp_In_Celsius.map((value)=>
{

   return (value * 9/5)+32;

});
console.log("-------Q5 Solution--------");
console.log();

console.log("Array Convert Celsius To Fahrenheit : "+ Temp_In_Fahrenheit);

console.log();

//Q6 --Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let Random_Array:number[]=[3,6,9,12,15,18]

let odd_number=Random_Array.filter((value)=>
{
if(value%2!=0)
{
   return true;
}
});

let Double_odd=odd_number.map((data)=>
{
return data+data;
});


console.log("-------Q6 Solution--------");
console.log();

for(var i=0;i<odd_number.length;i++)
{
   console.log("Double of "+odd_number[i]+ " -> "+Double_odd[i])
}

console.log();







//Q7--Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

let Array_Of_Name:string[]= ["Alice", "Bob", "Charlie", "David", "Emily"];


console.log("-------Q7 Solution--------");
console.log();
Array_Of_Name.forEach((val)=>
{
console.log(val+"!");

});
console.log();

