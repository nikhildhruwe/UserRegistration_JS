console.log("\tWelcome to user registration");

let prompt = require('prompt-sync')();
let firstNamePattern = new RegExp("^[A-Z]{1}[A-Za-z]{2}");

let name = prompt("Enter First Name: ");
if(firstNamePattern.test(name))
    console.log("saved.");
else
    console.log("Enter Valid Name");