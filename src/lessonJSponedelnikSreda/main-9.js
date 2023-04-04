console.log('lesson9')

function foo1 () {  //function declaration, лексическое окружение определяет ее сразу (как и var)
}

foo2 = function () {  //function expression, лексическое окружение определяет ее только во время выполнения
}
const foo3 = () => {  //тоже function expression, это стрелочная функция
}