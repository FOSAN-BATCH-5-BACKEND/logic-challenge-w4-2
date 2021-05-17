/*
INSTRUKSI
=========
Buatlah sebuah fungsi yang menyatakan jumlah dari tabel bilangan prima yang terdapat pada inputan angka,
misalnya input adalah 20, maka hasilnya adalah 8,
karena ada 8 bilangan prima ddi dalam input, yaitu 2,3,5,7,11,13,15,17,19

*/

function howMuch(input) {
  //kode di sini
  let isPrima;
  let bilanganPrima = [];
  for (let i = 2; i <= input; i++) {
    isPrima = 1;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) isPrima = 0;
    }
    if (isPrima == 1) bilanganPrima.push(i);
  }
  return bilanganPrima.length;
}

console.log(howMuch(20)); //8
console.log(howMuch(30)); //10
console.log(howMuch(100)); //25
console.log(howMuch(200)); //46
console.log(howMuch(1000)); //168
console.log(howMuch(-5)); //0
