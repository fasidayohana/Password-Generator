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

//Function determining password length
var generatePasswordButton = document.getElementById("generate");

function generatePassword() {

  var passwordLength
  prompt("How many characters would you like your password to be?");
  alert("Passowrd must be less the 8 characters but not exceed 128 characters");
  while(passwordLength <=7 || passwordLength >=129);
};

//Function determining password variables
function chooseVariables() {
var chooseLowercaseAlphabet = 
confirm("Would you like lower case letters in your password?");
confirm("Would you like upper case letters in your password?");
confirm("Would you like numbers in your password?");
confirm("Would you like special characters in your password?");
Array.push.apply(specialCharacters);
};

//Generate Function Password
var characters = "";
characters += (chooseLowercaseAlphabet? lowercaseAlphabet: "");
characters += (chooseUppercaseAlphabet? uppercaseAlphabet: "");
characters += (chooseNumbers? numbers: "");
characters += (chooseSpecialCharacters? specialCharacters: "");

function password(passwordLength, characters) {
document.getElementById("password").innerHTML = pwd;
};
