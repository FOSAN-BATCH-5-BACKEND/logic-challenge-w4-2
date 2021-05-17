/*
INSTRUKSI
=========
Buatlah sebuah fungsi yang menyatakan jumlah dari tabel bilangan prima yang terdapat pada inputan angka,
misalnya input adalah 20, maka hasilnya adalah 8,
karena ada 8 bilangan prima ddi dalam input, yaitu 2,3,5,7,11,13,15,17,19

*/


/*  - mencari data jumlah bilangan prima
	- bilangan prima adalah bilangan > 1 dan hanya bisa dibagi dengan angka 1 atau bilangan itu sendiri
	- karena yang dicari adallah jumlah bilangan prima dari angka terdekat dari nilai input sampai yang terakhir dicek di angka 2
*/
function howMuch(input) {
	if (input <= 1) { //karena 1,0, minus bukan bilangan prima
		return 0;
	} else if (input == 2) { //karena 2 bilangan prima
		return 1;
	} else {
		let sum = 0;
		for (let i = 2; i <= input; i++) {
			// console.log(i);

			// if (input % i !== 0 || (input / 1) === input && input >= 2) {
			// 	continue;

			let bilanganPrima = true;
			for (var j = 2; j < i; j++) {
				if (i % j === 0 && i !== j) {
					bilanganPrima = false;
				}
			}
			if (bilanganPrima === true) {
				// console.log(i);
				sum += 1;
			}
		}
		return `${sum}`;
	}
}


console.log(howMuch(20)) //8
console.log(howMuch(30)) //10
console.log(howMuch(100)) //25
console.log(howMuch(200)) //46
console.log(howMuch(1000)) //168
console.log(howMuch(-5)) //0
// console.log(howMuch(2)) //1
