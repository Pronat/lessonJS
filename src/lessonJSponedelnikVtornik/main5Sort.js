console.log("Main5")


// Сортировка
const name = ["Onix", "Alex", "Fred", "alex", "aLex", "игорь", "Юрий"]
console.log(name.sort()===name) //true, работает мутабельно, возвращает ссылку на массив

const numbers = [44, 566, 22, 7, -2, 46456]
console.log(numbers.sort((a, b)=>   a - b)) // сортировка чисел по возрастанию
console.log(numbers.sort((a, b)=>   b - a )) // сортировка чисел по убыванию


const students = [
    {
        name: "Alex",
        age:12,
        isMarried: false,
        scores: 114
    },
     {
        name: "Bob",
        age:24,
        isMarried: true,
        scores: 87
    },
     {
        name: "Don",
        age:99,
        isMarried: true,
        scores: 200
    },
]
console.log(students.sort((a, b)=>a.name - b.name )) //сортировка массива


const nums = [23, 532, 66, 1 , 6, 56]
for (let j = 0; j < nums.length - 1 - j; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i+1]) {
            isSorted = false
            let temp = nums[i]
            nums[i] = nums[i+1]
            nums[i+1] = temp
        }
    }
    if(isSorted)break
}
console.log(nums)                       // самописный метод сортировки пузырьком