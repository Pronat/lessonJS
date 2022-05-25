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
    ...state,
    age: 2,                //скопировали age и заменили его с 1 на 2
    school: {...state.school}      //скопировали address
}
