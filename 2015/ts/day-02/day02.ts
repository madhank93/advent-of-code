import { readFile } from "fs/promises";

async function calculate() {
  const file = await readFile("2015/ts/day-02/input.txt", {
    encoding: "utf-8",
  });

  let paper = 0;
  let ribbon = 0;

  file
    .trim()
    .split("\n")
    .forEach((val) => {
      const dim = val.split("x");

      const w = parseInt(dim[0]);
      const l = parseInt(dim[1]);
      const h = parseInt(dim[2]);

      paper += 2 * w * l + 2 * w * h + 2 * l * h;

      if (w * l < w * h && w * l < l * h) {
        paper += w * l;
      } else if (w * h < l * h) {
        paper += w * h;
      } else {
        paper += l * h;
      }

      ribbon += w * l * h;

      if (w + l < w + h && w + l < l + h) {
        ribbon += 2 * (w + l);
      } else if (w + h < l + h) {
        ribbon += 2 * (w + h);
      } else {
        ribbon += 2 * (l + h);
      }
    });

  console.log(paper);
  console.log(ribbon);
}

await calculate();
