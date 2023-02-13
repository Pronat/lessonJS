let students = [
    {
        name: 'Bob',
        age: 21,
        isMarried: true,
        scores: 85,
    },
    {
        name: 'Alex',
        age: 24,
        isMarried: false,
        scores: 100,
    },
    {
        name: 'Gordon',
        age: 55,
        isMarried: false,
        scores: 12,
    },
    {
        name: 'Peter',
        age: 78,
        isMarried: true,
        scores: 10,
    },
]
const GetNames = (array) => {
    return (
        array.map((el) => el.name)
    )
}
const GetNames2 = (array) => {
    let array1 = []
    // let array1 = new Array()  //можно так создавать
    for (let i = 0; i < array.length; i++) {
        array1.push(array[i].name)
    }
    return array1
}

const addScores = (array) => {
    let copy = {...array}
    copy.scores = array.scores + 10
    return copy

     }
console.log(addScores(students))
