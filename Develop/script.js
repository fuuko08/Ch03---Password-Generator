// Assignment code here
LowerCase = /[a-z]/g;
UpperCase = /[A-Z]/g;
number = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 0];
Symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  enter = parseInt(promt("How many letters? Choose from 8 to 128"));
  if (!enter) {
    alert("Please enter a number");
  } else if (enter < 8 || enter > 128) {
    alert("Please choose from 8 to 128");
  } else {
var confirmNumber = confirm("Do you want numbers in your password?");
var confirmSymbol = confirm ("Do you want symbols in your password?");
var confirmUpperCase = confirm("Do you want upper cases in your password?");
var confirmLowerCase = confirm("Do you want lower cases in your password?");

  };

  if (!confirmNumber && !confirmUpperCase && !confirmLowerCase && !confirmSymbol) {
    alert("Please choose something!");
  } else if (confirmNumber && confirmUpperCase && confirmLowerCase && confirmSymbol)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 



generateBtn.onfocus = function() {
  document.getElementsByClassName('criteria').style.display = 'block';
}

generateBtn.onblur = function() {
  document.getElementsByClassName('criteria').style.display = 'none';
}

