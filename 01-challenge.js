// ***********************
// Challenge Assessment 1
// ***********************

// What is a palindrome?  A palindrome is a word that is spelled the same way, both forwards and backwards (i.e. bob, level, tacocat, racecar, etc.).  Notice that each of these words have the same spelling if you reversed the word.
// Using only JavaScript, create a function that takes in a parameter, then create a way to check if the parameter entered is in fact a palindrome.  If it is, have JavaScript console.log that their word is a palindrome; if it is not, have JavaScript console.log the opposite.



//*************** */Use Calling Function!!!!************************//

/*
The Intuitive Approach: This is mostly a direct
approach that most would follow. We split the
string into characters, reverse the array of characters,
join the characters back to form a string, and then
test the created string against what was originally received.
*/

function palindrome(text) {
// Split, reverse and join string to get reversed text
var reversedText  = text.toLowerCase()
.split('').reverse().join('');
    
    
return text === reversedText;
    console.log()
    
}

//************************************************************************

function isPalindrome(str) {
    const iter = [...str.toLowerCase()];
    for (let char of iter) {
       if (char !== iter.pop()) { return false}
    }
    return true
 }


 //************************************************* */

 function hi(){
    console.log("Hi");
    return "Hey";
}

hi;
hi();
console.log(hi);
console.log(hi());