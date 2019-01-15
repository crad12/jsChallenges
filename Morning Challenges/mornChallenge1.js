/*
Challenge (Arrays):
Color List:

Create a function that can take in arrays.
Create an array of colors
Create an array of suffixes for placement (i.e. st (for 1st), nd (for 2nd), rd (for 3rd), etc)

In the function, filter through both arrays and print out the placement and the color for each individual colors (i.e. 1st is green, 2nd is blue, 3rd is red, 4th is orange, etc) until all of the colors are listed out with the appropriate placement.

Not to make it too hard on yourself, you can stop the count at ten
*/

// My working answers //

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArray=arr.filter(x=>arr.indexOf(x)%2==1);
console.log(evenArray);

let colors = [blue, red, grey, pink, teal, orange, purple, yellow, brown, black];
let listArray=arr.filter(x=arr.listArray==0);
console.log(colors);

let color = [blue, red, grey, pink, teal, orange, purple, yellow, brown, black];

for (let x = 0; x <= 10; x++) {
   color.push(x);
}
console.log(color);


// Correct answer //

let colors = ["red", "blue", "green", "orange", "yellow", "coral", "pink", "purple", "grey", "lightblue"];
let suffix = ["st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th"];

function mixArrays(arr1, arr2) {
   // let msg = " is ";
   for (var i = 0; i < arr2.length; i++) {
       let msg = arr1[i] + " is " + arr2[i];
       console.log((i + 1) + msg);
   }
}
mixArrays(suffix, colors);

// Almost correct answer //

let color = [ 'blue', 'red', 'green', 'yellow', 'pink', 'purple', 'black', 'gray', 'white', 'brown' ]
let place = [ '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th']

for (let i= 0; i < color.length; i++) {
console.log(`${(color[i])} is ${(place[i])}` )
}



