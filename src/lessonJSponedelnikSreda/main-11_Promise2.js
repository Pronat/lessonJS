console.log('Promise2')

const server =  {
    getData() {
        const pr = new Promise((res,rej)=> {
            setTimeout(()=>{
                res('data from server')
            }, 1000)
        })
    }
}