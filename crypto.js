const cryptoJS = require("crypto-js");

var encrypted = cryptoJS.AES.encrypt("test22", "secret-key")

console.log(encrypted.toString());