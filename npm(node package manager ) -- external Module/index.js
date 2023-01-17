// npm = node package manager 
/*

how to use external module  in our project =>
1. in the terminal , write -- npm init (in one project we only initialize once ) then follow the instruction and there become a json file in our project

or,

just write in the terminal  (npm init -y)  to skip the instruction

3. after that what npm  we want to use just search in the npm website and then go to our terminal and write -- npm install file_name

4. after installing the external package we can see in package.json and in the dependency: file is installed and its version




*/



//here we use random-movie-names external package

let random_Movie_name = require('random-movie-names')

console.log(random_Movie_name())

















