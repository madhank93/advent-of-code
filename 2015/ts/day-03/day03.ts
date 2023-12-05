import { readFile } from "fs/promises";

async function partOneSolution() {
  const file = await readFile("2015/ts/day-03/input.txt", {
    encoding: "utf-8",
  });

  const visitedHouses = new Set<string>();

  let xPos: number = 0;
  let yPos: number = 0;

  visitedHouses.add(`${xPos}:${yPos}`);

  file.split("").forEach((val) => {
    if (val === "^") {
      yPos++;
      visitedHouses.add(`${xPos}:${yPos}`);
    } else if (val === "v") {
      yPos--;
      visitedHouses.add(`${xPos}:${yPos}`);
    } else if (val === "<") {
      xPos--;
      visitedHouses.add(`${xPos}:${yPos}`);
    } else if (val === ">") {
      xPos++;
      visitedHouses.add(`${xPos}:${yPos}`);
    }
  });

  // Part - 1 Solution
  console.log(visitedHouses.size);
}

await partOneSolution();

async function partTwoSolution() {
  const file = await readFile("2015/ts/day-03/input.txt", {
    encoding: "utf-8",
  });

  const visitedHouses = new Set<string>();

  let santaXPos: number = 0;
  let santaYPos: number = 0;
  let roboXPos: number = 0;
  let roboYPos: number = 0;

  visitedHouses.add(`${0}:${0}`);

  file.split("").forEach((val, index) => {
    let x: number, y: number;

    if (index % 2 === 0) {
      x = santaXPos;
      y = santaYPos;
    } else {
      x = roboXPos;
      y = roboYPos;
    }

    switch (val) {
      case "^":
        y++;
        break;
      case "v":
        y--;
        break;
      case ">":
        x++;
        break;
      case "<":
        x--;
        break;
    }

    if (index % 2 === 0) {
      santaXPos = x;
      santaYPos = y;
    } else {
      roboXPos = x;
      roboYPos = y;
    }

    visitedHouses.add(`${x}:${y}`);
  });

  // Part - 2 Solution
  console.log(visitedHouses.size);
}

await partTwoSolution();
