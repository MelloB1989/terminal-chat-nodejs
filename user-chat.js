var net = require("net");
var jsonStream = require("duplex-json-stream");
var username = process.argv[2];

var socket = jsonStream(net.connect(8080, "0.0.0.0"));

socket.on("data", data => {
  console.log(`${data.username} > ${data.message}`);
});

process.stdin.on("data", data => {
  socket.write({ username, message: data.toString().trim() });
});
