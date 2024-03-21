const numbers = [3, -5, 8, 1, 2, 9, 7, -1, 6];
// filter, map, reduce
// mencari angka > 3

// filter
// const filterNumber = numbers.filter((number) => number > 3);
// console.log(filterNumber);

// map
// const mapNumber = numbers.map((number) => number * 2);
// console.log(mapNumber);

// reduce
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// accumulator = nilai hasil penjumlahan
// currentValue = nilai saat ini
console.log(sum);