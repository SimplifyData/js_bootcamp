let name = ' Amsterdam Man ';

// string length
console.log(name.length);

// to upper case
console.log(name.toUpperCase());

// to lower case
console.log(name.toLowerCase());

// check if string contains a word
let password =  '123abcpassword';
console.log(password.includes('password'));

// remove white spaces both the sides
console.log(name.trim());

// Challenge problem

// isValidPassword
// length is more than 8 and it does not contain word password

let is_valid_password = function (passphrase) {
    return  passphrase.length > 8 && !passphrase.includes('password')
};

console.log(is_valid_password('1234gd'));
console.log(is_valid_password('432&kgdkgnslf'));
console.log(is_valid_password('458rfnf8f^kfjkpassword'));

