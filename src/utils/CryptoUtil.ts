// Include crypto-js library
// You can download it from https://cryptojs.gitbook.io/docs/
let CryptoJsUtil = require("crypto-js");

// Get the SALT from environment variable
const SALT = process.env.SALT || "defaultSalt";

//encryption function
export function encrypt(text: String) {
  const cipherText = CryptoJsUtil.AES.encrypt(text, SALT).toString();
  return cipherText;
}

//Decrypt function
export function decrypt(cipherText: String) {
  const bytes = CryptoJsUtil.AES.decrypt(cipherText, SALT).toString();
  const originalText = bytes.toString(CryptoJsUtil.enc.utf8);
  return bytes;
}
