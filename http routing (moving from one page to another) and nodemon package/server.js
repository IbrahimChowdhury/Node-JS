let http=require('http')
let fs=require('fs')
let port=2000
let hostname='127.0.0.1'

let server=http.createServer((req,res)=>{
 if(req.url=='/')
 {
    fs.readFile('./index.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
 }
else if(req.url=='/about')
 {
    fs.readFile('./h/about.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
 }
else if(req.url=='/contact')
 {
    fs.readFile('./contact.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
 }



})
server.listen(port,hostname)