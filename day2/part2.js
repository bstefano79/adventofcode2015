const fs = require("fs");

const data = fs.readFileSync("day2.txt", "utf8");

const rows = data.split("\r\n");

let l = 0;

rows.forEach((row) => {
  dim = row.split("x");
  let iMax = dim.reduce(
    (a, b, i) => {
      if (Number(b) > Number(a.val)) {
        return { index: i, val: b, p: a.p * b };
      }
      return { index: a.index, val: a.val, p: a.p * b };
    },
    { index: 0, val: dim[0], p: 1 }
  );
  l += iMax.p;
  for (let i = 0; i < 3; i++) {
    if (i != iMax.index) {
      l += 2 * dim[i];
    }
  }
});
console.log(l);
