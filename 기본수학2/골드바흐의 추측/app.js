let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = fs
  .readFileSync(file, { encoding: "utf-8" })
  .split("\n")
  .map(Number);
let len = input.shift();
let max = Math.ceil(Math.max(...input));
let arr = new Array(max + 1).fill(true);
arr[1] = false;

for (let i = 2; i <= max; i++) {
  if (arr[i]) {
    let m = 2;
    while (i * m <= max) {
      for (let j = i; j <= max; j += i) {
        arr[i * m] = false;
      }
      m++;
    }
  }
}
console.log(arr)

function sol(num){

}