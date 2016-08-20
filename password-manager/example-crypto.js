var crypto = require('crypto-js');

var plainString = "This is the message";

var secretKey = "qwedsa123";

var encMessage = crypto.AES.encrypt(plainString,secretKey);

console.log("Decrypted Message: "+encMessage);

var byte = crypto.AES.decrypt(encMessage,secretKey);

var decryptedMsg = byte.toString(crypto.enc.Utf8);

console.log("Decrypted Message: "+decryptedMsg);

var person = {
    name: "dhananjay",
    age:30
};

var personString = JSON.stringify(person);

var encPerson = crypto.AES.encrypt(personString,secretKey);

console.log("Encrypted Details: "+encPerson);

var personByte = crypto.AES.decrypt(encPerson,secretKey);
    
var decPerson = personByte.toString(crypto.enc.Utf8);
var personObj = JSON.parse(decPerson);
console.log("Decrypted Details string: "+decPerson);
console.log(personObj);