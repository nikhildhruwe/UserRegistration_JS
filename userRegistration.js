console.log("\tWelcome to user registration");

let prompt = require('prompt-sync')();
let namePattern = new RegExp("^[A-Z]{1}[A-Za-z]{2}");
let emailPattern = new RegExp("^[a-zA-Z0-9]+([.+-_]?[a-zA-Z0-9]+)*@([0-9a-zA-Z][-]?)+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$");
let mobilePAttern = new RegExp("[0-9]{2}[ |-]?[0-9]{10}$");
//First Name Validation.
while(true){
    let name = prompt("Enter First Name: ");
    if(!namePattern.test(name))
        console.log("Invalid, give proper name.");
    else{
    console.log("Saved.\n");
    break;
    }
}

//Last Name Validation.
while(true){
    let name = prompt("Enter Last Name: ");
    if(!namePattern.test(name))
        console.log("Invalid, give proper name.");
    else{
        console.log("Saved.\n");
           break;  
        }
}

//Email Validation
while(true){
    let email = prompt("Enter Email ID: ");
    if(!emailPattern.test(email))
        console.log("Invalid input.");
    else{
        console.log("Saved.\n");
           break;  
        }
}

//Mobile Validation
while(true){
    let mobile = prompt("Enter mobile number : ");
    if(!mobilePAttern.test(mobile))
        console.log("Invalid input, example : 91 9876543210");
    else{
        console.log("Saved.\n");
           break;  
        }
}