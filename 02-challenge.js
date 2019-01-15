// ***********************
// Challenge Assessment 2
// ***********************

// Using JS only, take an array of numbers (i.e. an array that lists numbers between 1 and 10).  Create two arrays from this original one, where one array list all of the even numbers, and the second lists all of the odd.
// Example:
// Input:
// originalArray = [1,2,3,4];
// Output:
// evenArray = [2,4];
// oddArray = [1,3];

// Way number 1 //

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArray=arr.filter(x=>arr.indexOf(x)%2==1);
console.log(evenArray);


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddArray=arr.filter(x=>arr.indexOf(x)%2==0);
console.log(oddArray);

// Way number 2 //

var arr = [1,2,3,4,5,6,7,8,9,10];

function even(x){
  return x.filter(x=>arr.indexOf (x)%2===1);
}
console.log(even(arr));


var arr = [1,2,3,4,5,6,7,8,9,10];

function odd(x){
  return x.filter(x=>arr.indexOf (x)%2===0);
}
console.log(odd(arr));





