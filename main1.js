
//примитивы: string, number, boolean, undefined, null, NaN(not a number), Infinity(попытка деления
// на ноль) , Symbol, BigInt
//объекты: array, function, objects

// Отличия:
//    1. Более сложная структура
//    2. Имеют свойства и методы
//    3. Ссылочный тип данных
console.log(typeof null)   //выдаст object
console.log(typeof NaN)   //выдаст number
console.log(typeof Infinity)   //выдаст number

console.log(typeof (() => {}))   //выдаст function
console.log(typeof [])   //выдаст object
console.log(Array.isArray([]))   //выдаст true, вот так определяем, массив ли это

