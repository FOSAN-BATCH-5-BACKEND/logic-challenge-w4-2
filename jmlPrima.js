/*
INSTRUKSI
=========
Buatlah sebuah fungsi yang menyatakan jumlah dari tabel bilangan prima yang terdapat pada inputan angka,
misalnya input adalah 20, maka hasilnya adalah 8,
karena ada 8 bilangan prima ddi dalam input, yaitu 2,3,5,7,11,13,15,17,19

*/

function howMuch(input) {
	let jmlArr = 0;
    for(let i = 1; i <= input; i++){
		let penampung = 0;
		for(let j = 1; j <= i; j++){
			if(i%j == 0){
				penampung += 1
			}
		}
		if (penampung == 2){
			jmlArr+=1
		}
    }
	return jmlArr
  }


console.log(howMuch(20)) //8
// console.log(howMuch(30)) //10
// console.log(howMuch(100)) //25
// console.log(howMuch(200)) //46
// console.log(howMuch(1000)) //168
// console.log(howMuch(-5)) //0
