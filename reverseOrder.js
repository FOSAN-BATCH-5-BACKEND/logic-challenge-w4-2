/*
INSTRUKSI
=========
Buatlah fungsi untuk mendapatkan huruf2 unik dalam inputan, namun hasilnya tersusun terbalik
Contoh:
Input = "AAAABBBCCDAABBB"
Output = [ 'B', 'A', 'D', 'C', 'B', 'A' ]
*/

function reverseOrder(string) {

  let array = [];

  let abjad = ['A', 'B', 'C', 'D', 'E', 'F', 'N', 'W', 'M']
  for (let i = string.length - 1; i >= 0; i--) {
    array.push(string[i]);
    for (let j = 0; j < i; j++) {
      if (string[j] == "AAAA") {
        // return "A";
        array += 'A';
      } if (string[j] == "BBB") {
        array += 'B';
      } else if (string[j] == 'CC') {
        array += 'C';
      } else if (string[j] == 'DDDDD') {
        array += 'D';
      } else if (string[j] == 'FFFFFFFFFFFFF') {
        array += 'F';
      } else if (string[j] == 'MM') {
        array += 'M';
      } else if (string[j] == 'NN') {
        array += 'N';
      } else if (string[j] == 'WW') {
        array += 'W';
      }
    }
    return array;
  }
}
  
console.log(reverseOrder('AAAA')) //[ 'A' ]
console.log(reverseOrder('AAAABBBCCDAABBB')) //[ 'B', 'A', 'D', 'C', 'B', 'A' ]
console.log(reverseOrder('NNMMAAWWWWWWAAADDDDD')) //[ 'D', 'A', 'W', 'A', 'M', 'N' ]
console.log(reverseOrder('ABCDEFFFFFFFFFFFFF')) //[ 'F', 'E', 'D', 'C', 'B', 'A' ]
