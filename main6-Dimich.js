console.log(12)

let a = {
    name: '2323',
    age: 12
}

let state = {
    name: 'reef efefef efe',
    age: 1,
    school: {
        address: 'Minsk',
        director: {
            name: 'Andrey'
        }
    }
}

let b = {
    ...state,          //поверхностная копия объекта с помощью spred оператора
    age: 2,          //скопировали age и заменили его с 1 на 2
    school: {
        ...state.school,   //скопировали address
        director: { ...state.school.director }   //скопировали director, который находится глубже
}}



let arr = [1,2,3,4,5]
let brr = [0, ...arr, 7]   //поверхностная копия массива с помощью spred оператора и добавили в него 0 в начало и 7 в конце


let arr2 = [{name: 'D'}, {name: 'M'}]
let brr2 = [...arr2]
brr2[0].name = 'Alex'
console.log(arr2[0].name)