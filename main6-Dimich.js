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
        students:[{},{},{}],
        director: {
            name: 'Andrey'
        }
    }
}

let b = {
    ...state,          //поверхностная копия объекта с помощью spred оператора
    age: 2,          //скопировали age и заменили его значение с 1 на 2
    school: {
        ...state.school,   //скопировали address
        students: state.school.students.map(el=>({...el})),     // c помощью map закопировали  массив
        director: { ...state.school.director }   //скопировали director, который находится глубже
}}



let arr = [1,2,3,4,5]
let brr = [0, ...arr, 7]   //поверхностная копия массива с помощью spred оператора и добавили в него 0 в начало и 7 в конце


let arr2 = [{name: 'D'}, {name: 'M'}]
let brr2 = arr2.map(el=>({...el}))      //с помощью map копируем сложный массив с объектами внутри
// let brr2 = arr2.map(el => {
//     return {...el}                   //то же самое, но более длинная запись
// })


let arr3 = [{name: 'D', a:{name: 'Bob'}}, {name: 'M'}]
let brr3 = arr3.map(el=>({...el, a: {...el.a}}))
