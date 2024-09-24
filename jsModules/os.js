const os = require("os");

console.log("platform is ", os.platform());

console.log("Total Memory is  ", os.totalmem());

console.log("Free Memory is  ", os.freemem());

console.log("No of cores are ", os.cpus().length);
