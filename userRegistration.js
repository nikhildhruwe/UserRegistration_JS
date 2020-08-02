console.log("\tWelcome to user registration");

let prompt = require('prompt-sync')();
let firstNamePattern = new RegExp("^[A-Z]{1}[A-Za-z]{2}");
let lastNamePattern = new RegExp("^[A-Z][a-z]{2,}$");

//First Name Validation.
while(true){
    let name = prompt("Enter First Name: ");
    if(!firstNamePattern.test(name))
        console.log("Invalid, give proper name.");
    else{
    console.log("Saved.\n");
    break;
    }
}

//Last Name Validation.
while(true){
    let name = prompt("Enter Last Name: ");
    if(!lastNamePattern.test(name))
        console.log("Invalid, give proper name.");
    else{
        console.log("Saved.\n");
           break;  
        }
}