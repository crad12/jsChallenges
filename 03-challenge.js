// ***********************
// Challenge Assessment 3
// ***********************

// Using only JS, take an object with various properties.  Then create a new object that switches the keys and values.
// Example:
// Input:
// originalObject = {
//  age: 19,
//  name: 'Luke Skywalker',
//  eyeColor: 'blue',
//  isJedi: true
// };
// Output:
// newObject = {
//  19: 'age',
//  'Luke Skywalker': 'name',
//  blue: 'eyeColor',
//  true: 'isJedi'
// };


// originalObject = {

// }

// let orignalObject = [19, 'Luke Skywalker', 'blue', true] {

// }

// function originalObject(19, Luke Skywalker, blue, true) {}
    
// function x; ('19','Luke Skywalker','blue','true');
//     let x = (`${19} ',' ${LukeSkywalker}',' ${blue}',' ${true}',');
//         console.log(old);
// }


var data = ({19 : age, LukeSkywalker : name, blue : eyeColor, true : isJedi}) 
var newData = Object.keys(data).reduce(function(obj,key){
   obj[ data[key] ] = key;
   return obj;
}
console.log(newData);





let arr = ['19', 'Luke Skywalker', 'blue', 'true'];         // This is the variable (let) //
//function arr() {                                    // This is a function //
    for (item in arr) {                              // This is a "For Of" statement //
        console.log(item(item));
    }
}

arr('age', 'name', 'eyeColor', 'isJedi');
