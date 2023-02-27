console.log(111)

const user = {
    'name': "Alex",
    'age': 21,
    'address': {
        'city': {
            'title': "Minsk"
        }
    }
}

console.log(user.address.city.title)
console.log(user['address']['city']['title'])
console.log(user['age'])