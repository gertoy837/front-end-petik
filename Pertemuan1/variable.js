// var = hoisting (dijalankan sebelum dideklarasikan)
// console.log(nama);
var nama = "Ucup";

let age = 28;
const gender = "L";
// console.log(nama);

function name() {
    var nama = "Ucup";
    return nama;
}

console.log(name()); 
console.log(age);
console.log(gender);