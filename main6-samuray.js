console.log(24)

let age = 18
let age2 = age

let a = {
    name: 'it-kamasutra.com',
    protocol: 'https',
    maxStudentsCount: 10,
    isOnline: true,
    students: ['ivan', 'andrey', 'farid'],
    classsroom: {
        teacher: {
            name: 'ororo',
            age: 18
        }
    }
}
let b = {...a}
b.classsroom.teacher.name = 'Alexander'
console.log(a === b)
console.log(a.students === b.students)

a.students[0]= 'Alex'
console.log(b.students[0])

b.classsroom.teacher.age = 46
console.log(a.classsroom.teacher.age)

a.name = "Atatat"
console.log(a.name === b.name)