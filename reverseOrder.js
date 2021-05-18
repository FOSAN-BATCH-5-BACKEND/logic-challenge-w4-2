/*
INSTRUKSI
=========
Buatlah fungsi untuk mendapatkan huruf2 unik dalam inputan, namun hasilnya tersusun terbalik
Contoh:
Input = "AAAABBBCCDAABBB"
Output = [ 'B', 'A', 'D', 'C', 'B', 'A' ]
*/

function reverseOrder(string){
 let penampungArray = [];

 for (let i = string.length -1; i>=0; i--) {
   //console.log(string[i]);
   if (string[i] == string[i -1]){
     continue;
  }else {
    penampungArray.push(string[i]);
  }
}
return penampungArray;
}
console.log(reverseOrder('AAAABBBCCDAABBB')) //[ 'B', 'A', 'D', 'C', 'B', 'A' ]
// console.log(reverseOrder('NNMMAAWWWWWWAAADDDDD')) //[ 'D', 'A', 'W', 'A', 'M', 'N' ]
// console.log(reverseOrder('ABCDEFFFFFFFFFFFFF')) //[ 'F', 'E', 'D', 'C', 'B', 'A' ]
