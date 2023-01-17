/*
fs = File System


fs module :
writeFile()  --  কোনো ফাইল থাকলে সেখানে নতুন লেখা যুক্ত করা অথবা নতুন ফাইল
                 ক্রিয়েট করে ওইখানে লেখা যুক্ত করা 

appendFile() -- লেখা overWrite না করে ওইখানে 

readFile()  -- txt ফাইল এ কি আছে সেটা বলে দেওয়া -- eikhane obossoi utf-8         ব্যাবহার করতে হবে


rename()   -- txt file rename kora

unlink()   -- file delete korar jnno

exists()   -- কোনো file আছে কিনা সেটা খুজে বের করা 


*/

/*

how to use fs module of node js====>>


//declare the fs module ==>

let s=require('fs')


//writeFile()==>

s.writeFile("fileName.txt","what u want to write",(err)=>{
        if(err)
        {
            console.log("show error if there is an error")
        }
        else{
            console.log("successfully inserted")
        }
})



//appendFile()==>

s.appendFile("fileName.txt","what u want to overwrite in the txt file ",(err)=>{
        if(err)
        {
            console.log("show error if there is an error")
        }
        else{
            console.log("successfully overWrited")
        }
})


//rename()==>

s.rename("fileName.txt","renamedFile.txt",(err)=>{
    if(err){
        console.log("if file is not renamed")
    }
     else {
        console.log("file renamed succesfully")
     }
})


//readFile()==>

s.readFile("fileName.txt","utf-8",(err,data)=>{
    if(err)
    {
        console.log("error is found")
    }
    else{
        console.log(data)
    }
})


exists()==>

s.exists("fileName.txt",(found)=>{
    if(found)
    {
        console.log("file is found")
    }
     else{
        console.log("file is not found")
     }
})


*/


let s=require('fs')
s.readFile("demo.txt","utf-8",(err,data)=>{
        if(err)
        {
            console.log("error is found")
        }
        else{
            console.log(data)
        }
})


