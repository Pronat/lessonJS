//1.Примитивы
//2.Объекты (object, array, function)
// - структура
// - методы и свойства
// -ссылочный тип данных

const a = {}   //new Object() #345 -> a  , это создание объекта через Литерал
const b = {}   //new Object() #555 -> b

console.log(a === b)  //false

const user = {
    name: "Bob",
    age: 23,
    isStudent: true,
    address: {
        city:"Bobruysk"
    },
    friends:[
        {name:"Alex"},
        {name:"John"},
    ]
}

let num = 10
let number = num
num = 33
console.log(num,number)

const superUser = user
// superUser.name = "Alex"
// console.log(user)

const anotherUser = {}
anotherUser.name = user.name
anotherUser.age = user.age

console.log(anotherUser)  //copy (clone) of object user
console.log(anotherUser === user)

const copyUser = {...user}  //spred operator, copy of Array user
console.log(copyUser === user)  //false
console.log(copyUser.name === user.name)   //true

const names = ["Bob", "Alex", "Nick"]
const copyNames = [...names]

console.log(copyUser.address === user.address)   //true
user.address.city = "Tbilisy"
console.log(copyUser.address.city)  // Tbilisi

const deepCopyUser = {...user, address: {...user.address}, friends: user.friends.map(f => ({...f}))
}

// 1.Делаем копию
// 2.Вносим изменения в копию
// 3.Используем копию с внесенными изменениями

// JSON.stringify -> литерал нашего объекта будет превращен в строку, а замем с помощью метода ->
// ->  JSON.parse позволит вернуть строку в литерал //некорректно работает с NaN и др. методы

// lodash -> cloneDeep   (lib)

//deepcopy (lib)
//https://www.npmjs.com/package/deepcopy       -> три метода копирования объектов
