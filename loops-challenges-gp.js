   // LOOPS
// //Create a for loop that logs each number from 1 - 20.
//    for ( let i = 0; i < 21; i++){
//     console.log(i)
// }

// // Create a for loop that logs every other number from 1 - 20.
// for (let i = 1; i < 21; i = i + 2){
//  console.log(i)
// }

// // Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// // Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc

// for (let i=0; i<21; i++) {
//     if (i % 2 === 0){
//         console.log(i)
//     } else if (i % 2 !== 0){
//         console.log("ODD")
//     }
// } 
// console.log(i)

const nums = [3, 57, -9, 20, 67]

// Create the code that will log the largest number from the array.

var largestNum = 0
for (let i=0; i<nums.length; i++){
    if(nums[i] > largestNum){
        largestNum = nums[i]
    }
}
console.log(largestNum)


// Create the code that will log the smallest number from the array.
 var smallNum = 0
 for (let i=0; i<nums.length; i++){
 if(nums[i] < smallNum){
     var smallerNum = nums[i]
 }
 }
 console.log(smallerNum)

//  Create the code that will log the remainder of each number when divided by 2.
// Expected output: 1, 1, -1, 0, 1

// for (let i=0; i< nums.length; i++){
//     if (nums % 2 !== 0){
//     console.log(i)
//     }
// }
// console.log(nums) did not work. ONLY ASKING FOR THE REMAINDER. NOT "IF" THERES A REMAINDER OF 0

for (let i=0; i<nums.length; i++){
    console.log(i % 2) 
}
console.log(nums)
//

const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
for (let i=0; i<myString.length; i++){
    console.log(myString.lastIndexOf("e"))
}

console.log(myString)