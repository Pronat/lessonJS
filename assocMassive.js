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


const names = {
    '1': {id: 101, name: 'Alex'},
    '2': {id: 1, name: 'Bob'},
    '3': {id: 23, name: 'Cat'},
    '4': {id: 167, name: 'Volt'},
}
names[12] ='EEEERR'
names['Привет мужик']= 'у меня все отлично'

console.log(Object.values(names))