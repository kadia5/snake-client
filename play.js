
const myObject = require("./client");

myObject.connect;

console.log("Connecting ...");
// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  // console.log(data, )

  return stdin;

};
const handleUserInput = function (key) {
  // your code here
if (key === '\u0003') {
  process.exit();
}
};
setupInput()


