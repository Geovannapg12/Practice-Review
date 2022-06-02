//*NOTE- if the method is a mutator it will need to be logges twice.


var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
// //use method .push() to add 'soda at the end
// console.log(groceryList.push("soda"))
// console.log(groceryList)

// // // Write the code that will add "granola" to the end of array without altering the original array.
// // //In order to keep the array the same, I used concat that add arrays or strings without alreting the initial array

console.log(groceryList.concat("granola"))
console.log(groceryList)

// // console.log(groceryList.join(" "))
// // console.log(groceryList.push("granola"))
// //This approach did not work

// // Write the code that will return a subset of the array containing only "chips" and "dip".

// //Method .slice() will return a part of the array, the index used will return the values we want in the output
console.log(groceryList.slice(0, 2))


// // Write the code that will add "beans" to the "chips" and "dip" array.
// //create an new variable using the former output of grocery list
// //newVar is the output of groceryList with a subset of the array
// //use .push in the console.log to add beans to newVar
console.log(groceryList.slice(0, 2))
var newVar = groceryList.slice(0, 2)
console.log(newVar.push("beans"))
console.log(newVar)


// // Consider the variable:

var numbers = [2, 4, 6, 8, 10]
// // Write the code that will add the number 0 to the beginning of the array.
console.log(numbers.unshift(0))
console.log(numbers)


// // Write the code that will add the number 12 to the end of the array.
 console.log(numbers.push(12))
 console.log(numbers)


// Write the code that will remove the first number from the array.
console.log(numbers.shift(1))
console.log(numbers)


// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

newArray = [0]
console.log(newArray.concat(numbers))

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))

// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))

// Write the code that returns the number at the third index.
console.log(numSet[3])



// Consider the variable:

var characters = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the characters array together into a string.

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.

// Write the code that brings all the letters in the charsReversed array together into a string without separators.

// Create two arrays consisting of three first names of your cohort members in each.

// Write the code that sorts the names in alphabetical order.

// Write the code that sorts the names in reverse alphabetical order.

// Write the code that sorts all the names in alphabetical order in a single array.

// Consider the variables:

// var numbers = [42, 221, 71, 7, 18, 87]
// var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.

// Write the code that adds the values from odd indexes into the oddIndexes array.
