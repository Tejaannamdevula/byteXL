const path = require("path");

const filePath = "/home/teja/Documents/github/byteXL/jsModules/path.js";

console.log(path.parse(filePath));
console.log(path.dirname(filePath));

console.log(path.basename(filePath));

console.log(path.extname(filePath));
const newfilepath = path.join(__dirname, "hello");
console.log(newfilepath);
