const crypto = require("crypto");

function md5(text) {
  return crypto.createHash("md5").update(text, "utf8").digest("hex");
}
let i = 0;
let esci = false;
do {
  const app = md5("ckczppom" + i++);
  esci =
    app[0] == 0 && app[1] == 0 && app[2] == 0 && app[3] == 0 && app[4] == 0;
} while (!esci);

console.log(i - 1);
