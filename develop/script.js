// Identify DOM elements
var passwordText = document.querySelector("#password");
var passwordLength = document.querySelector("#password-length");
var passwordUppercase = document.querySelector('#password-uppercase');
var passwordLowercase = document.querySelector('#password-lowercase');
var passwordNumeric = document.querySelector('#password-numeric');
var passwordSpecialchar = document.querySelector('#password-specialchar');
var setOptions = document.querySelector('#set-password-options');
var generateBtn = document.querySelector("#generate-password-popup");
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");


// Determine Password Characteristics
 var randomChar = {
    uppercase: getUppercasecharacters,
    lowercase: getLowercasecharacters,
    numeric: getNumericvalue,
    specialchar: getSpecialcharacters
 }

// Event Listeners

generateBtn.addEventListener('click', toggleModal);
setOptions.addEventListener('click', () => {
    var length = +passwordLength.value;
    console.log (length);
    console.log (typeof length);

    var hasUppercase = passwordUppercase.checked;
    console.log('Has uppercase' + ' ' + hasUppercase);
    var hasLowercase = passwordLowercase.checked;
    console.log('Has lowercase' + ' ' + hasLowercase);
    var hasNumeric = passwordNumeric.checked;
    console.log('Has numeric' + ' ' + hasNumeric);
    var hasSpecialchar = passwordSpecialchar.checked;
    console.log('Has special characters' + ' ' + hasSpecialchar);

    passwordText.value = generatePassword(length, hasUppercase, hasLowercase, hasNumeric, hasSpecialchar);

});
closeButton.addEventListener("click", toggleModal);

// Password Generator Functions
function generatePassword (length, lowercase, uppercase, numeric, specialchar) {

// 1. Initialize password variable
// 2. Filter out unchecked types
// 3. Ensure at least one type is checked
// 4. Loop over specified length and call a generator function for each type
// 5. Add final password to passwordText variable to be displayed on webpage

let generatedPassword = '';

var optionsCount = uppercase + lowercase + numeric + specialchar;
console.log('optionsCount:', optionsCount);

var optionsArray =[{lowercase}, {uppercase}, {numeric}, {specialchar}].filter 
// use {} to set option to boolean (true / false)
    (
    item => Object.values(item) [0]
    );
console.log('optionsArray:', optionsArray);

if (optionsCount === 0) {
    return 'Please select at least one option to generate a password!';
}

for(let i = 0; i < length; i += optionsCount) {
    optionsArray.forEach (option => {
        var charName = Object.keys(option)[0];
        console.log('charName:', charName);

        generatedPassword += randomChar[charName]();
    });
}

console.log(generatedPassword);
var finalPassword = generatedPassword.slice(0, length);
return finalPassword;

}

// Math.floor to round down || Math.random to select random between range
// 26 because 26 letters in alphabet
// Uppercase function 
function getUppercasecharacters () {
    return String.fromCharCode (Math.floor(Math.random() * 26) + 65);
}
// console log check
console.log(getUppercasecharacters ());

// Lowercase function
function getLowercasecharacters () {
    return String.fromCharCode (Math.floor(Math.random() * 26) + 97);
}
// console log check
console.log(getLowercasecharacters ());


// 10 because 10 numeric options 0 - 9
// Numeric function
function getNumericvalue () {
    return String.fromCharCode (Math.floor(Math.random() * 10) + 48);
}
// console log check
console.log(getNumericvalue ());

// 10 because 10 numeric options 0 - 9
// Special Characters
function getSpecialcharacters () {
    var specialCharacters = '!@#$%^&*(),.-_=+<>{}[]\/';
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}
// console log check
console.log(getSpecialcharacters ());


// Pop up modal functions

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
  }
}

// Validation functions

