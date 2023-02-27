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

const names = {
    '1': "val",
    '2': "sd",
    '3': "asdg",
    '4': "grhtjtj",
}
names[12] ='EEEERR'
names['Привет мужик']= 'у меня все отлично'
console.log(names['Привет мужик'])