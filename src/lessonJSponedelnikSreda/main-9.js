function foo1 () {  //function declaration, лексическое окружение определяет ее сразу (как и var)
}

foo2 = function () {  //function expression, лексическое окружение определяет ее только во время выполнения
}
const foo3 = () => {  //тоже function expression, это стрелочная функция
}

let count = 0



function counter(name) {
    //создается глобальное лексическое окружение
    //создается локальное лексическое окружение для (a: func, name: 'Olia'), эта ссылка хранится все время, поэтому счетчик будет добавляться
    //создается локальное лексическое окружение для (a: func, name: 'Ivan'), эта ссылка хранится все время, но это другая ссылка, не связанная с 'Olia'
    const a = () => {
        console.log(name)
        console.log(++count)
    }
    return a
}

const count1 = counter('Olia')     // когда вызываем, запускается функция counter и мы сохраняем ссылку на лексическое окружение (a: func, name: 'Olia')
const count2 = counter('Ivan')      // когда вызываем, запускается функция counter и мы сохраняем ссылку на лексическое окружение (a: func, name: 'Ivan')
count1() // Olia 1
count1() // Olia 2
count1() // Olia 3
count2() // Ivan 1
count2() // Ivan 2
count2() // Ivan 3, результат такой потому, что это разные лексические окружения в counter, поэтому счетчик считает их отдельно и хранит их дальше в своей памяти



// Рекурсия
const pow = (x, n) => {
    if (n === 1) {
        return x
    }   else {
        return x * pow(x, n - 1)
    }
}


