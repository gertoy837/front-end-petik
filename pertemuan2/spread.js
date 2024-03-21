/**
 * Spread syntax digunakan untuk memisahkan array atau object menjadi 1 item (single value)
 * notasinya adalah ... (titik tiga)
 */

const fruits = ["Apel", "Anggur"];
console.log(fruits);
// jika di console.log(...fruits); menggunakan titik tiga maka akan menjadi string

const newFruits = [...fruits, "Mangga", "Lemon"]; // jika tidak menggunakan titik tiga maka akan menjadi array di dalam array
console.log(newFruits);

const user = {
  name: "Budi Santoso",
  major: "Informatics",
};

const newUser = {
  ...user,
  age: 20,
};

console.log(newUser);
