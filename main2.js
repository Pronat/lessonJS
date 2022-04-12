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

const names = []

for (let i = 0; i < students.length; i++) {
    const result = students[i].name
    names[i] = result
}
console.log(names)

const sts = []
for (let i = 0; i < students.length; i++) {
    const  result = {...students[i], scores: students[i].scores + 10}
    sts[i] = result
}
console.log(sts)

const myMap = (arrayScr, mapFn) => {
    const arrayResult = []
    for (let i = 0; i < arrayScr.length; i++) {
        const result = mapFn(arrayScr[i])
            arrayResult[i] = result
    }
    return arrayResult
}
console.log(myMap(students, s => s.name))
console.log(myMap(students, s => {
    return {...s, scores: s.scores + 10}
} ))


console.log(students.map(s => s.name))
console.log(students.map(s => {
    return {...s, scores: s.scores + 10}
}))


const myFilter = (arrayScr, filterFn) => {
    const arrayResult = []
    for (let i = 0; i < arrayScr.length; i++) {
        if (filterFn(arrayScr[i]) === true) {
            arrayResult.push(arrayScr[i])
        }
    }
    return arrayResult
}
console.log(myFilter(students, s => s.scores < 100))
console.log(students.filter(s => s.scores < 100))


const myFind = (arrayScr, findFn) => {
    for (let i = 0; i < arrayScr.length; i++) {
        if (findFn(arrayScr[i])) {
            return arrayScr[i]
        }
    }
}
console.log(myFind(students, s => s.name === "Bob"))
console.log(students.find( s => s.name === "Bob"))