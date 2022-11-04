import 'dart:io';

void main(List<String> args) async {
  var file = File("2015/dart/day-01/input.txt");
  var floor = 0;
  late int position;
  var hasReachedBasement = false;
  var res = await file.readAsBytes();

  res.asMap().forEach((index, element) {
    if (String.fromCharCode(element).contains("("))
      floor++;
    else if (String.fromCharCode(element).contains(")")) floor--;

    if (floor < 0 && !hasReachedBasement) {
      position = index;
      hasReachedBasement = true;
    }
  });

  print(floor);
  print(position);
}
