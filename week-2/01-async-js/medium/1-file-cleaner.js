const fs = require("fs");

function read() {
  return new Promise((resolve, reject) => {
    fs.readFile("week-2/01-async-js/medium/test.txt", "utf-8", (err, data) => {
      if (err) throw err;
      resolve(data);
    });
  });
}

function cleaner(data) {
  data = data.replace(/\s+/g, " ");
  return data;
}

read()
  .then(cleaner)
  .then((clean_data) =>
    fs.writeFile("week-2/01-async-js/medium/test.txt", clean_data, (err) => {
      if (err) throw err;
    })
  );
