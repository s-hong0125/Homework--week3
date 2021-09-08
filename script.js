// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");


// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIFKLMNOPQRSTUVWXYZ!@#$%^&*()";
  var passwordLength = 10;
  passwordText.value = password;

  for (var i =0; i<passwordLengh; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber,randomNumber+1);

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
