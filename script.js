// Assignment Code Here
var dataList = {
  length: 0,
  dataLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  dataUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  dataNumber: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  dataSymbol: ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"],
}
var generateBtn = document.querySelector("#generate");
var allCharacters = [];

// Function to generate Password
var generatePassword = function () {
  var result = prompt("Please choose from 8 to 128 characters.");
  dataList.length = parseInt(result);
  if (result < 8 || result > 128) {
    alert("Not a valid choice. Please choose from 8 to 128 characters.")
    return generatePassword();
  } else {
    return characterTypes();
  }
};

function characterTypes() {
  var lowercase = confirm("Do you want lower cases in your password?");
  console.log("lowercase? " + lowercase);
  if (lowercase) {
    alert("Your password will have lower cases.")
    allCharacters = allCharacters.concat(dataList.dataLowerCase);
  } else {
    dataList.dataLowerCase = false;
  }

  var uppercase = confirm("Do you want upper cases in your password?");
  console.log("uppercase? " + uppercase);
  if (uppercase) {
    alert("Your password will have upper cases.")
    allCharacters = allCharacters.concat(dataList.dataUpperCase);
  } else {
    dataList.dataUpperCase = false;
  }

  var number = confirm("Do you want numbers in your password?");
  console.log("number? "+ number);
  if (number) {
    alert("Your password will have numbers.")
    allCharacters = allCharacters.concat(dataList.dataNumber);
  } else {
    dataList.dataNumber = false;
  }

  var symbol = confirm("Do you want symbols in your password?");
  console.log("symbol? "+ symbol);
  if (symbol) {
    alert("Your password will have symbols.")
    allCharacters = allCharacters.concat(dataList.dataSymbol);
  } else {
    dataList.dataSymbol = false
  }

  if (!lowercase && !uppercase && !number && !symbol) {
    alert("Please choose at least one character type.")
    characterTypes();
  }

  var newPassword = madePassword();
  return newPassword;
};

function madePassword() {
  var enter = "";
  for (var i = 0, n = allCharacters.length; i < dataList.length; i++) {
    var test = allCharacters[Math.floor(Math.random() * n)].toString();
    console.log("test: " + i + ": " + test);
    enter += test;
  }
  return enter;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 