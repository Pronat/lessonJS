
console.log(45)

const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

const onClickHandler = (e) => {
    console.dir(e)
    if (e.altKey) alert("alt was pressed!")
}

const onClickHandlerPlus = (e) => {
    console.dir(e)
    if (e.altKey) alert("alt was pressed!")
}



// sm.onclick = onClickHandler
// sm.onclick = onClickHandlerPlus
//
// sm.onclick = (e) => {
//     onClickHandler(e)
//     onClickHandlerPlus(e)
// }

sm.addEventListener("click", onClickHandler)
sm.addEventListener("click", onClickHandlerPlus)  //не затирает onClickHandler
sm.removeEventListener("click", onClickHandler)  //удаляем, использовать эти способы вместо onclick