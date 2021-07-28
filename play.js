
const myObject = require("./client");

myObject.connect;

console.log("Connecting ...");
// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function () {
    // your code here
    stdin.on("data", handleUserInput);
    console.log(data, "Move")
  };
  
 
  return stdin;

};
setupInput()


