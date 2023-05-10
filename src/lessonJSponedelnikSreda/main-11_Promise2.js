console.log('Promise2')

const server =  {
    getData() {
        return new Promise((res,rej)=> {
            setTimeout(()=>{
                // res('data from server')
                rej('err from server')
            }, 1000)
        })
    }
}

server.getData()
    .then((data)=> {
    console.log(data)
})
.catch((err)=> {
    console.log(err)
})


fetch('https://google.com/query=js')
.then(()=>{
    return fetch('https://yahoo.com/query=js')          //если не сделать return, то все фетчи запустятся сразу, а так они запускаются только после выполнения предыдущего
})
.then(()=>{
    return fetch('https://duckduckgo.com/query=js')
})


const promise1 = fetch('https://google.com/query=js')
const promise2 = fetch('https://yahoo.com/query=js')
const promise3 = fetch('https://duckduckgo.com/query=js')

const promiseSuper = Promise.all([promise1, promise2, promise3])    //метод промисов, не закончится пока не зарезолвятся все промисы
promiseSuper.then((data)=>{
    console.log(data[0])
    console.log(data[1])
    console.log(data[2])
})

const promiseSuper2 = Promise.allSettled([promise1, promise2, promise3])  //этому методу ненужно зарезолвить все промисы, если есть ошибка, то оне передает ее в статусе
promiseSuper2.then((data)=>{
    console.log(data)
})

const promiseSuper3 = Promise.race([promise1, promise2, promise3])  //едает ее в статусе
promiseSuper3
    .then((data)=>{
    console.log(data)
})
    .catch((data)=> {
        console.log(data)
    })

