// const net = require("net");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    port: 50542,
    host: "135.23.223.133",
   
  });
  conn.on("connect", ()=> {
    console.log("Successfully connected to game server")
  })
  conn.on("connect", ()=> {
    console.log("Say: 'Sup")
  })
    conn.on("connect", ()=> {
    
    setTimeout(function() {console.log("Name: KAD")}, 1000);
    // setTimeout(
    //   function(){
    //     console.log("Move: up")
    
    //   }, 2000);
     
    //   setTimeout(function() {console.log("Move: down")}, 4000);
      
    //   setTimeout(function() {console.log("Move: left")}, 6000);
   
    //   setTimeout(function() {console.log("Move: right")}, 8000);
  })

  

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    // code that does something when the connection is first established
  console.log(data)
  });
  

  return conn;
  
};
// connect();
module.exports = {
  connect : connect
};