import { readFile } from "fs/promises";

async function calcStairs() {
  let floor = 0;
  const file = await readFile("2015/ts/day-01/input.txt", {
    encoding: "utf-8",
  });
  const data = Buffer.from(file);

  data.forEach((val) => {
    if (String.fromCharCode(val) === "(") {
      floor++;
    } else if (String.fromCharCode(val) === ")") {
      floor--;
    }
  });
  return floor;
}

console.log(await calcStairs());
