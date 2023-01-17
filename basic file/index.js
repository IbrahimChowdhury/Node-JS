// how to import functions from other js file
// let s=require('./index2.js')

// this should be done when we export function one by one
// console.log(s.name())
// console.log(s.age())
// console.log(s.result())





// this should be done when we export function through module 

// console.log(s.getName())
// console.log(s.getAge())
// console.log(s.getResult())







/* Suppose we has hundred of functions in index2.js and we need only one function then what should we do


this should do when we need only one or two function from others js file 

let {function_name}=require('./file.js')

*/

let {getName}=require('./index2.js')
console.log(getName())
console.log()





