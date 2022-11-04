import 'dart:io';

void main(List<String> args) async {
  var file = File("2015/dart/day-02/input.txt");
  var data = await file.readAsLines();

  var paper = 0;
  var ribbon = 0;

  data.forEach((value) {
    final dim = value.split("x");

    final w = int.parse(dim[0]);
    final l = int.parse(dim[1]);
    final h = int.parse(dim[2]);

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

  print(paper);
  print(ribbon);
}
