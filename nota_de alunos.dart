import 'dart:io';

void main() {
  double? N1 = double.tryParse(stdin.readLineSync() ?? '');
  double? N2 = double.tryParse(stdin.readLineSync() ?? '');
  double? N3 = double.tryParse(stdin.readLineSync() ?? '');
  double? N4 = double.tryParse(stdin.readLineSync() ?? '');

  if (N1 != null && N2 != null && N3 != null && N4 != null) {
    double MA = (N1 + N2 + N3 + N4) / 4;
    print('Notas N1:$N1 N2:$N2 N3:$N3 N4:$N4 resultado media $MA');
  } else {
    print('Entrada invalida digite novamente');
  }
}
