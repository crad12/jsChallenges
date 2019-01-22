let form = document.querySelector('form');      //Declare the varibales//
let userid = document.querySelector('#userid');
let psw = document.querySelector('#psw');
let conpsw = document.querySelector('#conpsw');

form.addEventListener('submit', submit);        //create function when submitting info//

function submit (e) {           // create the submit function//
    e.preventDefault();         // created a preventDefault to avoid auto refreshing of form//
    if (userid.value ==='' || psw.value ==='' || conpsw.value ==='') {   //checked if field values are filled in//
        alert('Please fill in all fields');   //created message if they are empty//
    } 
    else if (psw.value !== conpsw.value) {   // compared password fields to see if they match//
        alert('Please make sure passwords match');  //created message to say passwords don't match//
    }
    else {
        alert('Login Successful');  //created message when everything is filled in and correct//
    }
}