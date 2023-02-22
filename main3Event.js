// handler === listener === subscriber => function    //все эти значения - функция
// callback => handler, setTimeout/setInterval, param of array method  //это все callback

const sm = document.getElementById('small')
const handler1 = (e) => {
    console.log(e)
}
const handler2 = (e) => {
    console.log(e)
}
sm.onclick = handler1 //назначили обработчик, это устаревший метод
sm.onclick = handler2 //перезатерли handler1
sm.onclick = null   //обнулили значение

sm.addEventListener('click', handler1)
sm.addEventListener('click', handler2)  //это новый метод, handler1 не перезатерли, сработают поочереди
sm.removeEventListener('click', handler1)  //удалили handler1

// всплытие, более распространено (99 %). Событие произошло в самом внутреннем элементе, а потом начало подниматься наружу.
// погружение

