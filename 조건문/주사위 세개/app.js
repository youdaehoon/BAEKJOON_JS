let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split(" ").map(Number);


function sol(input) {
  let count = 0;
  let num = 0;
  let temp = {};

  input.map((x) => {
    temp[x] = (temp[x] || 0) + 1;
  });

  count = Math.max(...Object.values(temp));
  max = Math.max(...Object.keys(temp));
  num = +Object.entries(temp).find((v) => v[1] == count)[0];
  console.log(temp,max,num)
  switch (count) {
    case 1:
      return console.log(max * 100);
    case 2:
      return console.log(1000 + num * 100);
    case 3:
      return console.log(10000 + num * 1000);
  }
}
sol(input);
