console.log(22)

const names = ["Donald", "Fedor", "Bob", "Alex", "101", "Игорь"]
console.log(names.sort())
console.log([...names].sort())

const numbers = [1, 2, 33, 4, 5]
console.log(numbers.sort())
const compFn = (a, b) => {
    if(a > b) {
        return 999
    }
    return -100
}
console.log([...numbers].sort((a, b)=>b - a))  //сортируем числа, а не строки