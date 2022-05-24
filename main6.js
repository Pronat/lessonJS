console.log(22)

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
        name: "Ann",
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

const user = {
    name: "Bob",
        age: 23,
    friends: ["Alex", "Nick", "John"]
}

let copyUser = {...user}
console.log(user===copyUser)
console.log(user.friends===copyUser.friends)

let deepCopyUser = {...user, friends: [...user.friends]}

let copyStudents = [...students]
console.log(copyStudents === students)
console.log(copyStudents[1] === students[1])

// let deepCopyStudents = students.map(s=>({...s}))
let deepCopyStudents = students.map(s=>{
    return{...s}
})

// const sortFn = (a, b) => {
//     switch (a.scores < b.scores) {
//         case true:
//             return 1
//         case false:
//             return -1
//         default:
//             return 0
//     }
// }

// let sortByName = students.sort(sortFn)
let sortByName = deepCopyStudents.sort((a,b)=>a.name>b.name ? 1 : -1)
console.log(sortByName)

let sortByScores = deepCopyStudents.sort((a, b)=>b.scores > a.scores ? 1 : -1)
console.log(sortByScores)

let bestStudents = deepCopyStudents.filter(f=>f.scores >= 100)
console.log(bestStudents)

let topStudents = deepCopyStudents.splice(0, 3, true, 32, 'erttev')  //начинает со старт, удаляет и добавляет
console.log(topStudents)
console.log(deepCopyStudents)

let newDeepCopyStudents = topStudents.concat(deepCopyStudents) //объеденяет массивы
console.log(newDeepCopyStudents)

let newDeepCopyStudents2 = [...topStudents, ...deepCopyStudents]  //копируем через spred оператор
console.log(newDeepCopyStudents2)

let notMarried = students.filter(st=>!st.isMarried)
console.log(notMarried)
console.log(students)

let studentsNames = students.map(st=>st.name)
studentsNames.join(', ')
console.log(studentsNames)

let trueStudent = students.map(st=>({...st, isStudent: true}))
console.log(trueStudent)

let studentMarriedNick = students.map(st=>st.name==="Nick" ? {...st, isMarried: true} : st)
console.log(studentMarriedNick)

let studentANN = students.find(st=>st.name==="Ann")
console.log(studentANN)

let BestStudent = students.reduce((acc, st) => acc > st.scores ? acc: st)  //если первое значение(аккумулятор больше  st, то идем дальше
console.log(BestStudent)