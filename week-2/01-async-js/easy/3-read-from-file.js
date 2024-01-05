const fs = require("fs");

fs.readFile("week-2/01-async-js/a.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

for (let i = 0; i < 100000; i++) {
  console.log(i);
}
