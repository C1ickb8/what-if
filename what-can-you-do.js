const prompt = require('prompt-sync') ({sigint: true});

let age = Number(prompt("What is your age?: "))
console.log("You are " + age)

if (age < 16){
    console.log("You cant drive.")
}
if (age <= 17){
    console.log("You can drive but not vote.")
}
if (age <= 24){
    console.log("You can vote but not rent a car.")
} else if (age >= 25){
    console.log("You can pretty much do anything.")
}