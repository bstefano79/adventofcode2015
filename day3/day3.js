const fs = require("fs");

const data = fs.readFileSync("day3.txt", "utf8");

let r = 0;
let c = 0;
let map = { "0#0": "" };
let house = 1;

for (let i = 0; i < data.length; i++) {
  switch (data[i]) {
    case "<":
      c--;
      break;
    case ">":
      c++;
      break;
    case "^":
      r--;
      break;
    case "v":
      r++;
      break;
  }
  let key = r + "#" + c;
  if (!(key in map)) {
    map[key] = "";
    house++;
  }
}
//console.log(map);
console.log(house);
