console.log('Js lesson 4')

const todolistId1 = "3243-343"
const todolistId2 = "343443-34355"

const todolists = [
    {
        id: todolistId1,
        title: "Todolist Name 1",
        filter: "all",
        tasks: [
            {id: 1, title: "HTML", isDone: false},
            {id: 2, title: "CSS", isDone: false},
            {id: 3, title: "React", isDone: false},
        ]
    },
    {
        id: todolistId2,
        title: "Todolist Name 2",
        filter: "all",
        tasks: [
            {id: 4, title: "HTML2", isDone: false},
            {id: 5, title: "CSS2", isDone: false},
            {id: 6, title: "React2", isDone: false},
        ]
    },
]

const tasks = {
    [todolistId1]: [
    {id: 4, title: "HTML2", isDone: false},
    {id: 5, title: "CSS2", isDone: false},
    {id: 6, title: "React2", isDone: false},
],
    [todolistId2]: [
        {id: 4, title: "HTML2", isDone: false},
        {id: 5, title: "CSS2", isDone: false},
        {id: 6, title: "React2", isDone: false},
    ],
}

console.log(tasks[todolists[0].id][1].title)


//reduce - сокращает массив
const nums = [23, 12, 6, 99, 1]
console.log(
   nums.reduce((acc, el)=> {
      return acc + el
   }, 0)
)

console.log(
   nums.reduce((acc, el)=> acc > el ? acc : el )
)



