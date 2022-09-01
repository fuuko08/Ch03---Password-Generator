// Assignment Code Here
var criterias = {
  length: "",
  lowerCase: "",
  upperCase: "",
  number: "",
  symbol: "",
}

var dataList = {
  dataLowerCase: "abcdefghijklmnopqrstuvwxyz",
  dataUpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  dataNumber: "0123456789",
  dataSymbol: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
}
var enter;
var generateBtn = document.querySelector("#generate");
var allCharacters = "";
var result = "";
var myLength = 0;

// Function to choose Criterias

var chooseCriteria = function() {
  criterias.lowerCase = prompt("Do you want lower cases in your password? Answer Yes or No.");
  if  (criterias.lowerCase === "yes") {
    alert("You will have lower cases in  your password");
    criterias.lowerCase = true;
    allCharacters = dataList.dataLowerCase;
  } else if (criterias.lowerCase === "no") {
    alert("No lower case choosen.");
    criterias.lowerCase = false;
  }

  criterias.upperCase = prompt("Do you want upper cases in your password? Answer Yes or No.");
  if (criterias.upperCase === "yes") {
    alert("You will have upper cases in your password");
    criterias.upperCase = true;
    allCharacters = allCharacters + dataList.upperCase;
  } else if (criterias.upperCase === "no") {
    alert("No upper cases choosen.");
    criterias.upperCase = false;
  }

  criterias.number = prompt("Do you want numbers in your password? Answer Yes or No.");
  if (criterias.number === "yes") {
    alert("You will have numbers in your password");
    criterias.number = true;
    allCharacters = allCharacters + dataList.number;
  } else if (criterias.number === "no") {
    alert("No numbers choosen.");
    criterias.number = false;
  }

  criterias.symbol = prompt("Do you want symbols in your password? Answer Yes or No.");
  if (criterias.symbol === "yes") {
    alert("You will have symbols in your password");
    criterias.symbol = true;
    allCharacters = allCharacters + dataList.symbol;
  } else if (criterias.symbol === "no") {
    alert("No symbol choosen.");
    criterias.symbol = false;
  }

  if (!criterias.lowerCase && !criterias.upperCase && !criterias.number && !criterias.symbol) {
    alert("Please choose yes to at least one criteria");
  }
console.log ("first function" + chooseCriteria);
}

function findResult() {
  for (var i = 0, n = allCharacters.length; i < myLength; i++) {
  result += allCharacters.charAt(Math.floor(Math.random() * n)); 
}
console.log ("find result" + result); 
}


// function to enter password length

var generatePassword = function() {
  enter = parseInt(prompt("Please choose from 8 to 128 characters."));
  if (!enter) {
    alert("Please enter a number.");
  } else if (enter < 8 || enter > 128) {
    alert("Please choose a number from 8 to 128");
  } else {
    alert("Valid choice! Thank you!");
    myLength = enter;
    console.log("enter value: " + enter);
  }
    alert("Please choose password criterias.");
    chooseCriteria();
    console.log ("test " + chooseCriteria);
    alert("Generating your password...");
    findResult();
    console.log ("what is my result " + findResult());
    alert ("Your password is " + result);
    return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 