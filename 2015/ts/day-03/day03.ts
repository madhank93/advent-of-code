import { readFile } from "fs/promises";

async function partOneSolution() {
  const file = await readFile("2015/ts/day-03/input.txt", {
    encoding: "utf-8",
  });

  const visitedHouse = new Set<string>();

  let xPos: number = 0;
  let yPos: number = 0;

  visitedHouse.add(`${xPos}:${yPos}`);

  file.split("").forEach((val) => {
    if (val === "^") {
      yPos++;
      visitedHouse.add(`${xPos}:${yPos}`);
    } else if (val === "v") {
      yPos--;
      visitedHouse.add(`${xPos}:${yPos}`);
    } else if (val === "<") {
      xPos--;
      visitedHouse.add(`${xPos}:${yPos}`);
    } else if (val === ">") {
      xPos++;
      visitedHouse.add(`${xPos}:${yPos}`);
    }
  });

  // Part - 1 Solution
  console.log(visitedHouse.size);
}

await partOneSolution();
