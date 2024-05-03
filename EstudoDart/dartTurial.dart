import 'dart:io';

void main() {
  stdout.writeln("qual seu nome: ?");
  String? name = stdin.readLineSync();
  print('Meu nome é $name');
}
