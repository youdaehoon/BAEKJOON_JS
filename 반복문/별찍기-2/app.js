let input = +require("fs").readFileSync(__dirname + "/input.txt", {
  encoding: "utf-8",
});
let answer = "";
for (let i = 0; i < input; i++) {
  answer += " ".repeat(input - i-1) + "*".repeat(i + 1) + "\n";
}
console.log(answer);
