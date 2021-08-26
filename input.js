// const { connect } = require("./play");
let connection;
let name;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  // console.log(data, )

  return stdin;


};
const handleUserInput = function (key) {

  if (key === '\u0003') {
    process.exit();
  }
  // connection.on("connect", () => {
  if (key === 'w') {

    connection.write("Move: up");

  }
  if (key === 'a') {
    connection.write("Move: left")
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  // })

}
// setupInput()
module.exports = {
  setupInput: setupInput,
  // handleUserInput : handleUserInput
};