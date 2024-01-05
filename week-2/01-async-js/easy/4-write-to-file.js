const { DiffieHellmanGroup } = require("crypto");
const fs = require("fs");

let data = "";

for (let i = 0; i < 1000; i++) {
  data = data + "data " + i.toString() + "\n";
}

fs.writeFile("week-2/01-async-js/a.txt", data, (err) => {
  if (err) throw err;
});
