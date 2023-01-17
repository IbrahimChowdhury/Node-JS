// how to create a server 



let http=require('http')
let hostname='127.0.0.1'
let port=2000


let server=http.createServer((req,res)=>{
        res.end("<h1>How are u? i am Fine</h1> ")
})

server.listen(port,hostname,()=>{
    console.log(`i am corrently in https://${hostname}:${port}`)
})
