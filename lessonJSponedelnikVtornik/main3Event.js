// handler === listener === subscriber => function    //все эти значения - функция
// callback => handler, setTimeout/setInterval, param of array method  //это все callback

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')
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
e.target  //- место создания события
e.currentTarget  //- место нахождения события, используем его, т.к. может быть добавлен новый элемент, изменится вложенность
// и e.target не работает. Нас интересует взаимодействие именно с тем элементом, на который мы повесили currentTarget

e.stopPropagation() //- останавливает событие

e.preventDefault()  // прекратит действие ссылку на наш объект