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