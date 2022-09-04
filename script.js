// Assignment Code Here
var dataList = {
  dataLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  dataUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  dataNumber: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  dataSymbol: ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"],
}
var enter = [];
var generateBtn = document.querySelector("#generate");
var allCharacters = [];

// Function to generate Password

function generatePassword() {

var result = prompt ("Please choose from 8 to 128 characters.");
var lowercase = confirm("Do you want lower cases in your password?");
var uppercase = confirm("Do you want upper cases in your password?");
var number = confirm("Do you want numbers in your password?");
var symbol = confirm("Do you want symbols in your password?");

if (lowercase) {
  allCharacters = allCharacters.concat(dataList.dataLowerCase);
}

if (uppercase) {
  allCharacters = allCharacters.concat(dataList.dataUpperCase);
}

if (number) {
  allCharacters = allCharacters.concat(dataList.dataNumber);
}

if (symbol) {
  allCharacters = allCharacters.concat(dataList.dataSymbol);
}
console.log ("check Characters " + allCharacters);

for (var i = 0, n = allCharacters.length; i < result; i++) {
    enter.push (allCharacters[Math.floor(Math.random() * n)]);                     
}

return enter.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 