const { connect } = require("./play");
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
  // your code here
  if (key === '\u0003') {
  process.exit();
} 
conn.on("connect", ()=> {
if (key === '\87'){
  console.log("Move: up");
}
if (key === '\65'){
  console.log("Move: left");
}
if (key === '\83'){
  console.log("Move: down");
}
if (key === '\68'){
  console.log("Move: right");
}
})

}
// setupInput()
module.exports = {
  setupInput : setupInput,
  // handleUserInput : handleUserInput
};