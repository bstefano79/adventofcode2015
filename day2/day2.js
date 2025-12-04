const fs = require("fs");

const data = fs.readFileSync("day2.txt", "utf8");

const rows = data.split("\r\n");

let a = 0;

rows.forEach((row) => {
  dim = row.split("x");
  min = dim[0] * dim[1];
  a += 2 * min;
  let app = dim[1] * dim[2];
  a += 2 * app;
  if (app < min) min = app;
  app = dim[0] * dim[2];
  a += 2 * app;
  if (app < min) min = app;
  a += min;
});

console.log(a);
