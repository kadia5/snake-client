
// const myObject = require("./client");
// const myObject2 = require("./input");
// // const myObject3 = require("./input");
// myObject.connect;
// myObject2.setupInput;
// myObject3.handleUserInput;
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
// setup interface to handle user input from stdin
connect();

setupInput();
module.exports = {
  connect : connect
};




