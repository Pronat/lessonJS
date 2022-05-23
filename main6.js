console.log(22)

const sm = document.getElementById("small")
const onClickHandler = () => alert("YO!!!")

// sm.onclick = onClickHandler
// sm.onclick = null

sm.addEventListener('click', onClickHandler);
sm.removeEventListener('click', onClickHandler);
