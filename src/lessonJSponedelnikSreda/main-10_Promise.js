console.log('Promise')

const server = {
    getData() {
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(console.log('some data'))
                // rej(console.log('some err'))
            } , 2000)
        return promise
        })
    }
}

const pr = server.getData()
console.log('Promise', pr)

pr.then((data) => {
    console.log('data from server', data)
})
.catch((err) => {
    console.log('err from server', err)
})
.finally(() => {
    console.log('finally from server')
})