const helpers = require("./helpers");

const total = helpers.sum(10, 100);
const diff = helpers.diff(100, 10);

console.log(`Total: ${total}`);
console.log(`Difference: ${diff}`);