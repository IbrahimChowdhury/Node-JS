/* 

Why we use nodemon package in our server ?
=
when we create a server and host it and if we want to change something than we need to stop the server and again start the server . 

To avoid this kind of things we need to install nodemon package in our server so that the server can automatically update itself


*/




let http=require('http')
let fs=require('fs')
let hostname='127.0.0.1'
let port=2000

let server=http.createServer((req,res)=>{
   if(req.url=='/')
   {
    fs.readFile("./index.html","utf-8",(err,data)=>{
       
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        
    })
   }
  else  if(req.url=='/about')
   {
    fs.readFile("./about.html","utf-8",(err,data)=>{
        
       
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
       
    })
   }
  else  if(req.url=='/contact')
   {
    fs.readFile("./contact.html","utf-8",(err,data)=>{
       
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
       
    })
   }
})

server.listen(port,hostname,()=>{
    console.log(`your website is running on https://${hostname}:${port}`)
})



