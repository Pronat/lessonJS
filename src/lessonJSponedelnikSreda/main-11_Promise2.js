console.log('Promise2')

const server =  {
    getData() {
        return new Promise((res,rej)=> {
            setTimeout(()=>{
                res('data from server')
                rej('err from server')
            }, 1000)
        })
    }
}

server.getData().then((data)=> {
    console.log(data)
})