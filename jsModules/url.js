const url = require("url");

const requrl = "http://localhost:3000/user?name=teja&age=20";

const parsedUrl = url.parse(requrl, true);

console.log(parsedUrl);

console.log(parsedUrl.query.name);
