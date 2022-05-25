console.log(24)

let age = 18
let age2 = age

let a = {
    name: 'it-kamasutra.com',
    protocol: 'https',
    maxStudentsCount: 10,
    isOnline: true,
    students: ['ivan', 'andrey', 'farid'],
    classroom: {
        teacher: {
            name: 'ororo',
            age: 18
        }
    }
}
let b = {...a}

b.classroom.teacher.age = 46
console.log(a.classroom.teacher.age)

a.name = "Atatat"
console.log(a.name === b.name)

b.students = [...a.students]
a.students[0]= 'Alex'
console.log(a.students[0])

b.classroom = {...a.classroom}
b.classroom.teacher = {...a.classroom.teacher}
b.classroom.teacher.name = {...a.classroom.teacher.name}
b.classroom.teacher.name = 'Alexander'
console.log(a === b)
console.log(a.students === b.students)
console.log(b.classroom.teacher.name)


