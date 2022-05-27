// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

//Make a varible called -item- that logs "in budget"
// the outcome with vary dependending on the price.
// Create a conditional that will take the number and log whether we are in budget or not

var item = 99
 
if (item === 100 || item < 100){
    console.log("In budget")
} else if (item > 100){
  console.log("not on budget")
}
console.log(item)

//The variable will not take "in budget". The variable will take a number!


// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
//create a variable that is true or false called hungryRNot
// dependinng on what the variable states we will get an answer
//keep coding if it its false, eat food if it is true

var hungryRNot = "false" 

if (hungryRNot === true ){
  console.log("eat food")
} else if (hungryRNot !== false) {
  console.log("keep coding")
} 
console.log(hungryRNot)



// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

//Create a variable called trafficLight 
// Create a conditionals that takes the variable and logs "go" for gree light, "slow down" for yellow and "stop" for red.

var trafficLight = "red"
if (trafficLight === "green") {
  console.log("go")
} else if( trafficLight === "yellow") {
  console.log("slow down")
} else if(trafficLight === "red") {
  console.log("stop")
}
console.log(trafficLight)

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

//create two variables with two nums
// create a conditionals that will pick the largest num
// it will log the largest num or if they are the same it will log "the nums are the same"

var num1 = 33
var num2 = 55

if(num1 < num2){
  console.log(`${num2} is bigger`)
} else if (num1 === num2){
  console.log(`${num1} and ${num2} are the same`)
}

console.log(num1, num2)

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
// Create a variable that takes a number
//create a conditional that will decide if the number is "odd", "even" or "zero"
 var num3 = 79

 if (num3 % 2 === 0){
   console.log( `${num3} is even`)
 } else if (num3 % 2 !== 0){
   console.log (`${num3} is odd`)
 } else if (num3 === 0){
   console.log(`${num3} is zero`)
 }
 
// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
// Create a variable that takes a number
// Create a function that will log what grade it the variable of number is.
//100 = perfect score, <100 || 90 = A, 80 = B
var grade= 89
if (grade === 100) {
  console.log("perfect score")
} else if (grade > 90 || grade === 90){
  console.log('A')
} else if(grade > 80 || grade === 80 ){
  console.log("B")
} else if (grade > 70|| grade === 70) {
  console.log("C")
}

console.log(grade)

 // Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
 console.log(typeof true)
 //typeof returns the type of data entered!
 
