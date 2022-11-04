import { readFile } from "fs/promises";

async function calcStairs() {
  let floor = 0;
  let hasReachedBasement = false;
  let position: number;
  const file = await readFile("2015/ts/day-01/input.txt", {
    encoding: "utf-8",
  });
  const data = Buffer.from(file);

  data.forEach((val, index) => {
    if (String.fromCharCode(val) === "(") {
      floor++;
    } else if (String.fromCharCode(val) === ")") {
      floor--;
    }

    if (floor < 0 && !hasReachedBasement) {
      position = index + 1;
      hasReachedBasement = true;
    }
  });
  console.log(floor);
  console.log(position);
}

await calcStairs();
