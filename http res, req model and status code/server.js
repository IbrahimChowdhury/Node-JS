/*
http status code:
1.information response (100-199)
2.Successful response(200-299)
3.Redirects(300-399)
4.Client Errors(400-499)
5.Server Errors(500-599)

*/


let http=require('http')
let hostname='127.0.0.1'
let port=2000


let server=http.createServer((req,res)=>{

        res.writeHead(244,{'Content-Type':'text/html'})
        res.write("<h1>hellow everyone</h1>")
        res.write("<h1>how are u</h1>")
        res.write("<h1>I am fine and u</h1>")
        res.end()
})

server.listen(port,hostname,()=>{
    console.log(`i am corrently in https://${hostname}:${port}`)
})