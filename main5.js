console.log(22)

const names = ["Donald", "Fedor", "Bob", "Alex", "101", "Игорь"]
console.log(names.sort())
console.log([...names].sort())

const numbers = [1000, 2, 33, 4, 5]
// console.log(numbers.sort())
const compFn = (a, b) => {
    if(a > b) {
        return 999
    }
    return -100
}
console.log([...numbers].sort((a, b)=>b - a))  //сортируем числа, а не строки

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 105,
    },
]
console.log([...students].sort((a, b) => a.age - b.age))
console.log([...students].sort((a, b) => a.name < b.name ? -1 : 1))


for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i+1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]]
    }
}
console.log(numbers)