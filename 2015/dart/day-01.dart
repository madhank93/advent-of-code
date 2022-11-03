import 'dart:io';

void main(List<String> args) async {
  var file = File("2015/dart/input.txt");
  var floor = 0;
  var res = await file.readAsBytes();

  res.forEach((element) => String.fromCharCode(element).contains("(")
      ? floor++
      : String.fromCharCode(element).contains(")")
          ? floor--
          : null);

  print(floor);
}
