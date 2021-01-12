// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for password
var lowercaseAlphabet = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var uppercaseAlphabet = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numbers = ["0", "1", "2", "3", "4","5","6","7","8","9",];
var specialCharacters = ["!", "@", "#", "$", "%","^","&","*","(",")","_","+","=","-","<",">","?","[","]","{","}","~",];

// Variables for password
var passwordLength;
var chooseLowercaseAlphabet;
var chooseUppercaseAlphabet;
var chooseNumbers;
var chooseSpecialCharacters;


 //Beginning function for password - determining length
function determinePasswordLength (){
  var passwordLength = prompt("How many characters do you want your password to have");

if (passwordLength < 8) {
  alert("Password must be at least 8 characters minimum");
  return;
}
else if (passwordLength > 128) {
  alert ("Password must be less then 128 characters maximum");
  return;
}
};

function determineLowercaseAlphabet (){
  LowercaseAlphabet = prompt("Would you like uppercase letters in yor password")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
