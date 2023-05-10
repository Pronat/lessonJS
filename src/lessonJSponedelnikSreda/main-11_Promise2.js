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