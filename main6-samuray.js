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
console.log(a)
console.log(b)