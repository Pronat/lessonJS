
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

// React - иммутабельная работа с данными, делаем копию данных а потом работаем с ней (как ниже не делать)
const a = [1,2,3,4]  // в а хранится ссылка на ячейку памяти
const b = a // b просто получило ссылку на массив выше
console.log(b===a) // true, т.к. у них ссылка на один и тот же массив
b.push(5) // если мы меняем b, то поменяется и a (т.к. у них ссылка на один и тот же объект)