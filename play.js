
const connect = require("./client")

console.log("Connecting...");
connect();

// Setup User Interface
// So we can handle user input via stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = ("data", () => {
    if (key === '\u0003') {
      process.exit();
    }
  })

  return stdin;
}

