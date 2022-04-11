console.log(typeof "Yo!")  //"string"
console.log(typeof 25)  //"number"
console.log(typeof typeof 25)  //"string"

const yo = "yo!"
console.log(typeof yo)  //"string"
console.log(typeof NaN)  //"number" (но это отдельный тип данных в любом справочнике)
console.log(Number.isNaN(NaN)) //  //"true" (Not a Number)

// const Infinity = 10 / 0  // получаем Infinity
console.log(typeof Infinity) //"number" (Фича js)
console.log(Number.isFinite(Infinity)) //"false" (конечное ли число Infinity)

console.log(typeof null) //"object" (это ссылка на несуществующий объект)
console.log(typeof undefined) //"undefined"


console.log(typeof {}) //"object"
console.log(typeof []) //"object"
console.log(Array.isArray([])) //"true" метод проверки на массив
console.log(typeof (()=>{})) //"function" (функция по логике могла быть object, но является function

const bob = { // #345 это как некое место хранения, куда указывает ссылка bob
    name: "bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Ted", "John"]
}
// const ted = bob // это будет просто ссылка на то же место хранения (#345), что и ссылка bob. Если мы
// //поменяем значение массива в ted, то оно поменяется и в bob
//
// const red = {}   //литерал, самый простой способ создания объекта
// new Object()  //можно и так создавать объект
// ted.name = bob.name  //вот таким способом можно копировать один объект в другой, но это долго
// ted.age = bob.age
// ted.isMarried = bob.isMarried

// const ted = {...bob} //spred оператор (копия || clone) копируем значения массива bob в ted (но только поверхностные)
//
// console.log(ted === bob)  //"false" значит значения в разных ячейках, получилось скопировать
// console.log(ted.name === bob.name)  //"true" содержат одинаковые пары ключ-значение

// const donald = {...bob}
// donald.name = "Donald"
// console.log(donald === bob) // false
// console.log(donald)
//
// bob.friends.push("Ann")
// console.log(bob)
// console.log(donald)
//массив friends оказался одинаковым у bob и у donald потому, что мы использовали оператор spred, а он склонировал
//поверхностные элементы (примитивы), а массив передался по общей ссылке.

const donald = {...bob, friends: [...bob.friends]}  //глубокое копирование, в ручную создаем friends и копируем данные)

//можно использовать библиотеку cloneDeep с lodash.com

// копируем с помощью json parse, json stringifait если к нашему типу данных это подходит

