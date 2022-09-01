// Assignment code here
var passwordCriteria = {
  length: "",
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C, 'D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  number: [1, 2 , 3, 4, 5, 6, 7, 8, 9, 0],  
  symbol: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'],
}
var enter;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



var chooseCriteria  = function() {
  passwordCriteria.lowerCase = window.prompt("Do you want lower cases in your password? Yes or No?");
  passwordCriteria.lowerCase = passwordCriteria.lowerCase.toLowerCase();
  if (passwordCriteria.lowerCase === "yes") {
    alert("You will have lower case.");
    passwordCriteria.lowerCase = true;
  } else if (passwordCriteria.lowerCase === "no") {
    alert("No lower case.")
    passwordCriteria.lowerCase = false;
  }
  passwordCriteria.upperCase = window.prompt("Do you want upper cases in your password? Yes or No?");
  passwordCriteria.upperCase = passwordCriteria.upperCase.toLowerCase();
  if (passwordCriteria.upperCase === "yes") {
    alert("You will have upper case.")
    passwordCriteria.upperCase = true;
  } else if (passwordCriteria.upperCase === "no") {
    alert("No upper case.")
    passwordCriteria.upperCase = false;
  }
  passwordCriteria.number = window.prompt("Do you want number in your password? Yes or No?");
  passwordCriteria.number = passwordCriteria.number.toLowerCase();
  if (passwordCriteria.number === "yes") {
    alert("You will have number.")
    passwordCriteria.number = true;
  } else if (passwordCriteria.number === "no") {
    alert("No number.")
    passwordCriteria.number = false;
  }
  passwordCriteria.symbol = window.prompt("Do you want symbol in your password? Yes or No?");
  passwordCriteria.symbol = passwordCriteria.symbol.toLowerCase();
  if (passwordCriteria.symbol === "yes") {
    alert("You will have symbols.")
    passwordCriteria.symbol = true;
  } else if (passwordCriteria.symbol === "no") {
    alert("No symbols.")
    passwordCriteria.symbol = false;
  } 
  if (!passwordCriteria.lowerCase && !passwordCriteria.upperCase && !passwordCriteria.number && !passwordCriteria.symbol) {
    alert("Please enter at least one character.");
    chooseCriteria();
  }
}; 

var generatePassword = function() {
  enter = parseInt(window.prompt("How many characters? Choose from 8 to 128"));
  if (!enter) {
    alert("Please enter a number.");
  } else  if (enter < 8 || enter > 128) {
    alert("Please  choose from 8 to 128");
  } else { 
    alert("Valid choice!")
   }
   alert("Please choose Criterias.");
   chooseCriteria();
   alert("Making password...");

var makePassword = function() {
  let allCharacters = "";
  if (passwordCriteria.lowerCase === true) {
    allCharacters = lowerCase;
  } if (passwordCriteria.lowerCase === true && passwordCriteria.upperCase === true) {
    allCharacters = lowerCase + upperCase;
  } if (passwordCriteria.lowerCase === true && passwordCriteria.upperCase === true && passwordCriteria.number === true) {
    allCharacters = lowerCase + upperCase + number;
  } if (passwordCriteria.lowerCase === true && passwordCriteria.upperCase === true && passwordCriteria.number === true && passwordCriteria.symbol === true) {
    allCharacters = lowerCase + upperCase + number + symbol;
  } 
  var result = "";
  for (var i = 0, n = allCharacters.length; i < passwordCriteria.length; i++) {
    result += allCharacters.charAt(Math.floor(Math.random() * n));
  }
  alert("You password is " + result);
  return result;
}
makePassword();
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 