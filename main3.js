//Обработчик (handler), слушатель (listener), подписчик (subscriber -> function)
//function({....}) -> объект, со сведениями о произошедшем событии
//e, event, ev -> объект со сведениями о произошедшем событии

const sm = document.getElementById('small')

const onClickHandler1 = () => alert("yo")
const onClickHandler2 = () => alert("hey")
const onClickHandler3 = (e) => console.dir(e)
const onClickHandler4 = (e) => console.dir(e.target)

sm.onclick = onClickHandler1  //set,назначаем на клик
sm.onclick = onClickHandler2  //set,назначаем на клик
sm.onclick = null  //set, теперь не реагирует на клик

const md = document.getElementById("medium")
const bg = document.getElementById("big")

sm.addEventListener("click", onClickHandler4, )  //это современный метод, можно повесить сразу 2 обработчика
md.addEventListener("click", onClickHandler4, )  //это современный метод, можно повесить сразу 2 обработчика
bg.addEventListener("click", onClickHandler4, )  //это современный метод, можно повесить сразу 2 обработчика
