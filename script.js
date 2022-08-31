// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Returns a random integer (number) ranging from min to max 
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0 
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

  function getRandomItem(list) {
    return list[randomInt(list.length)]
  }

// Returns everything within the generatePassword function
function generatePassword() {

// Prompts the user to decide a password length 
  var userInput = prompt("How long would you like your password to be?")

  var passwordLength = parseInt(userInput)

  // Alerts user if length number is not valid within the conditon function
  if (isNaN(passwordLength)) {
    alert("That's not a number!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password Length must be between 8 and 128 characters")
    return
  }

  // Asks the user to confirm what character set(s) they would like their password to contain
  var userWantsNumbers = confirm("Do you want to use numbers in your password?")
  var userWantsSymbols = confirm("Do you want to use symbols in your password?")
  var userWantsLowerCase = confirm("Do you want to use lowercase letters in your password?")
  var userWantsUpperCase = confirm("Do you want to use uppercase letters in your password?")
  
  // Declares the variables and assigns the value of each character set
  var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "~", "`", ";", ":", "[", "{", "]", "}", "?", "/", ".", ",", "<", ">"]
  var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  // Pushes the value of the users input 
  var options = []

  if (userWantsNumbers) {
    options.push(numberOptions)
  }

  if (userWantsSymbols) {
    options.push(symbolOptions)
  }

  if (userWantsLowerCase) {
    options.push(lowerCaseOptions)
  }

  if (userWantsUpperCase) {
    options.push(upperCaseOptions)
  }

  // Pushes a set value is User doesn't choose any character sets. 
  if (options.length === 0) {
    options.push(lowerCaseList)
  }

  // Generates random password
  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(options)
    var randomCharacter = getRandomItem(randomList)
    generatedPassword += randomCharacter
  }
  return generatedPassword 
}



// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Adds "click" event to the generate button
generateBtn.addEventListener("click", writePassword);
