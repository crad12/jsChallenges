// ***********************
// Challenge Assessment 1
// ***********************

// What is a palindrome?  A palindrome is a word that is spelled the same way, both forwards and backwards (i.e. bob, level, tacocat, racecar, etc.).  Notice that each of these words have the same spelling if you reversed the word.
// Using only JavaScript, create a function that takes in a parameter, then create a way to check if the parameter entered is in fact a palindrome.  If it is, have JavaScript console.log that their word is a palindrome; if it is not, have JavaScript console.log the opposite.

//*********** This one works below **************************/



function palindrome(name) {
    let words = name.split('').reverse().join('');
    if (words.toUpperCase() === name.toUpperCase()) {
        console.log('This is a palindrome.');
        return true;
    } else {
        console.log('This is not a palindrome.');
        return false;
    }
}

palindrome('level');


//************ The one above works**********************8*** */  

//Write a function that tells us if all characters in a string are unique//

Tools:
1. Function with a parameter
2. if else or (for Of loops can be used)
3. conditional (to check the letters against each other)
4. Split
5. 


let x = "String";
let y = "racecar";

let check = (z) => {
  let unique = true;
  let broken = z.split("");
  for (i in broken) {
    for (m in broken) {
      if (i !== m && broken[i] === broken[m]) {
        unique = false;
      }
    }
  }
  if(unique){
    console.log(`${z} is unique!`);
  } else {
    console.log(`${z} is not unique!`);
  }
}

check(x);
check(y);

//*************** */Use Calling Function!!!!************************//

/*
The Intuitive Approach: This is mostly a direct
approach that most would follow. We split the
string into characters, reverse the array of characters,
join the characters back to form a string, and then
test the created string against what was originally received.
*/
// Split, reverse and join string to get reversed text

var text = "level";

function palindrome() {
var text = text.toLowerCase();
var text = text.reversedText();
    text.split(text).reverse(text).join('text');
    
    
    return text == reversedText();
    console.log("This is a ${palindrome}");
    
}
palindrome('level');