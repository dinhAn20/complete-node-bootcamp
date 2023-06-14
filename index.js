const fs = require('fs');

const textIn =  fs.readFileSync("./txt/input.txt", "utf8");
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreate on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log('File written!')