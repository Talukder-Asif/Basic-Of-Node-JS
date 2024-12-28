const fs = require("fs");

const readText = fs.readFileSync("./Text/Read.txt", "utf-8");

console.log(readText);

const writeText = fs.writeFileSync('./Text/Write.txt', readText + ' I am a Full Stack Developer')

const readNewText = fs.readFileSync("./Text/Write.txt", "utf-8");


console.log(readNewText)