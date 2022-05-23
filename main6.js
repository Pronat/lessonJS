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

const user = {
    name: "Bob",
        age: 23,
    friends: ["Alex", "Nick", "John"]
}

let copyUser = {...user}
console.log(user===copyUser)
console.log(user.friends===copyUser.friends)


