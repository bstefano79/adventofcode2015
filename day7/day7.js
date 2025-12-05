function not16(n) {
  return 65535 - n;
}

function isNumber(str) {
  return /^\d+$/.test(str);
}

function getValue(v) {
  if (isNumber(v)) return Number(v);
  if (val[v] != undefined) return val[v];
  return null;
}

const fs = require("fs");

const data = fs.readFileSync("day7.txt", "utf8");

let rows = data.split("\r\n");

const val = {};
let index = [];
do {
  index = [];

  rows.forEach((row, i) => {
    inst = row.split(" ");
    if (inst.length == 3) {
      //console.log(inst[2] + " --> " + isNumber(inst[2]));
      const v = getValue(inst[0]);
      if (v != null) {
        val[inst[2]] = v;
      }
    } else if (inst.length == 4) {
      const v = getValue(inst[1]);
      if (v != null) {
        val[inst[3]] = not16(v);
        index.push(i);
      }
    } else {
      const v1 = getValue(inst[0]);
      const v2 = getValue(inst[2]);
      // console.log(v1 + " - " + v2);
      if (v1 != null && v2 != null) {
        if (inst[1] == "OR") {
          val[inst[4]] = v1 | v2;
          index.push(i);
        }
        if (inst[1] == "AND") {
          val[inst[4]] = v1 & v2;
          index.push(i);
        }
        if (inst[1] == "RSHIFT") {
          val[inst[4]] = v1 >> v2;
          index.push(i);
        }
        if (inst[1] == "LSHIFT") {
          val[inst[4]] = v1 << v2;
          index.push(i);
        }
      }
    }

    //console.log(inst.length);
  });

  if (index.length > 0) {
    rows = rows.filter((v, i) => {
      if (!index.includes(i)) return v;
    });
  }
} while (index.length > 0);

console.log(val.a);
