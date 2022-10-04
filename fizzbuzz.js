const prompt = require('prompt-sync') ({sigint: true});

let num = Number(prompt("Enter your number here: "));
console.log("Your number is " + num);
console.log("Lets check to see if " + num , "is a Fizz, Buzz or FizzBuzz!")

//divisible by 3 -> write fizz
//divisible by 5 -> write buzz
//divisible by both -> write fizzbuzz

if(num % 15 === 0){
    console.log("You've chosen a FizzBuzz!")
} else if(num % 3 === 0 ){
    console.log("It looks like " + num , "is a Fizz")
} else if(num % 5 === 0){
    console.log("It looks like " + num , "is a Buzz")
}


