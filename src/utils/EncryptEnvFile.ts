import { Console } from "console";

let CryptoJsUtil = require("crypto-js");
let fs = require("fs");
let path = require("path");

const SALT = process.env.SALT || "defaultSalt";
const currentdir = __dirname;
// Go one level above (back to src)
const srcdir = path.resolve(currentdir, "..");

// Change to config folder
const configdir = path.resolve(srcdir, "config");
const envFilePath = `${configdir}\\.env`;
if (process.env.NODE_ENV) {
  const envFilePath = `${configdir}\\.env.${process.env.NODE_ENV}`;
}
console.log(envFilePath);

export function encryptEnvFile() {
  // Read the .env file
  const envFileContet = fs.readFileSync(envFilePath, "utf8");
  const envLines = envFileContet.split("\n");

  //Encrypt values and update the array
  const encryptedLines = envLines.map((line) => {
    const [key, value] = line.split("=");

    if (value) {
      const encryptedValue = CryptoJsUtil.AES.encrypt(value, SALT).toString();
      return `${key}=${encryptedValue}`;
    }
    return line;
  });

  // Join the lines and write back to .env file
  const updatedEnvContent = encryptedLines.join("\n");
  fs.writeFileSync(envFilePath, updatedEnvContent, "utf8");
  console.log("Encryption complete. Updated .env file");
}

export function decryptEnvFile() {
  //Read the .env file
  const envFileContent = fs.readFileSync(envFilePath, "utf8");
  const envLines = envFileContent.split("\n");

  // Encrypt values and update the array
  const decryptedLines = envLines.map((line) => {
    const [key, value] = line.split("=");
    if (value) {
      const decryptedValue = CryptoJsUtil.AES.decrypt(value, SALT).toString(
        CryptoJsUtil.enc.utf8
      );
      return `${key}=${decryptedValue}`;
    }
    return line;
  });

  // join the file and write content
  const updatedEnvContent = decryptedLines.join("\n");
  fs.writeFileSync(envFilePath, updatedEnvContent, "utf8");
  console.log("Decryption Complete. Updated .env File");
}
