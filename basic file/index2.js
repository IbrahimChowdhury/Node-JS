let getName=()=>{
    return "Ibrahim Chowdhury"
}

let getAge=()=>{
    return 23
}

let getResult=()=>{
    return 3.43
}

// how to export function one by one
// exports.name=function_Name

// exports.name=getName
// exports.age=getAge
// exports.result=getResult



// how to exports all function through module

// module.exports={
//     function_name }



module.exports={
    getName,
    getAge,
    getResult
}




