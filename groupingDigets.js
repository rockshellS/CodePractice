// arr = [0,1,0,1]

// function miniMoves(arr) {
    
// let count = 0
// let i = 0
// while ( i < arr.length) {
//     if (arr[i] != i + 1){
//         while (arr[i] != i + 1) {
//             let postion = 0

//             postion = arr[arr[1] - 1]
//             arr[arr[i] - 1] = arr[i]
//             arr[i] = postion
//             count++
//             }
//         }
//         i++
//     }
//     return count

// }
// console.log(miniMoves(arr))

// arr = [0,1,0,1]
// function miniMoves(arr) {
//    let count = 0
// for (let i = 0; i < arr.length; i ++) {
    
//     const right = i + 1
//     console.log(arr[i])
//     if (arr[i] != right ) {
//         const rightIndex = arr.indexOf(right, i)
//         arr[rightIndex] = arr[i]
//         arr[i] = right
//         count++
//         }
//     }
//     return count
// }
// console.log(miniMoves(arr))


//bubble sort loops through a list and moves all the largest values to the end.  they work in ascwnding and descending order.
// Optimized bubble sorts stop executing after an iteration has finished if no swapping has occurred.

// arr = [1,0,1,0,0,0,0,1]

// function miniMoves(arr) {
//     let count = 0
//     for(let i = 0; i < arr.length; i++ ){
//         for(let x = 0; arr.length; x++ ) {
//             if(arr[x] > arr[x + 1]) {
                
//                 let temp = arr[x]
//                 arr[x] = arr[x + 1]
//                 arr[x + 1] = temp
//                 count++
//                 console.log(count)
//             }
//         }
//     }
//     return count
// }
// console.log(miniMoves(arr))



// arr = [1,1,1,1,0,1,0,1]

// function miniMoves(arr) {

// let count = 0
//     // this decides how many numbers to check
//     for(let i = 0; i < arr.length; i++) {
//         // this one does the actual checking
//         for(let x = 0; x < (arr.length - i - 1); x++) {
//             //compare numbers and only swap if if the second one is smaller
//             if(arr[x] > arr[x + 1]) {
//                 let first = arr[x] // store the first number
//                 let second = arr[x + 1] // store the second number
//                 // now swap them
//                 arr[x] = second
//                 arr[x + 1] = first
//                 count++
//             }
//         }
//     }
//     return count
// }
// console.log(miniMoves(arr))


// just swap if different not less than
//-----------------------------------------------------------------------------------------
// arr = [1,0,1,0,0,0,0,1]
// arr = [0,1,0,1]
// function miniMoves(arr) {

// let count = 0
//     // this decides how many numbers to check
//     for(let i = 0; i < arr.length; i++) {
//         // this one does the actual checking
//         for(let x = 0; x < (arr.length - i - 1); x++) {
//             //compare numbers and only swap if if the second one is larger
//             if(arr[x] < arr[x + 1]) {
                
//                 let first = arr[x] // store the first number
//                 let second = arr[x + 1] // store the second number
//                 // now swap them
//                 arr[x] = second
//                 arr[x + 1] = first
//                 count++
//             }
//         }
//     }
//     return count
// }
// console.log(miniMoves(arr))

//--------------------------------------------------------------------------------------------


// const arr = [1, 0, 1, 0, 0, 0, 0, 1];
arr = [0,1,0,1]
//numOf0 count the amount of zeros there are in the array
let numOf0 = 0, index0 = 0, numOf1 = 0, index1 = 0;
//loops through the size of the array to find their positions
for(let p = 0; p < arr.length; p++){
    //if the position of the elements inside of arr, are 0 is true, then....
    // console.log(arr[p])
    if(arr[p] == 0){
        //numOf0 holds all the 0's IN the array <-- 0 0 0 0 0
        //numOf0 + p is the index position the 0 elements are IN the arr <-- 1 3 4 5 6
        //index0 is the index position of JUST the 0's index0 = 0 0 0 0 0 <--- 0 1 2 3 4 
        //numOf0 + p - index0++ is the amount of times the 0's need to move  to the left
        numOf0 += p - index0++;
    } else {
        //numOf1 holds the remaining values, the 1's since theirs 3, and numOf1 is initialized to 0 currently <-- 0 0 0 
        //numOf1 + p is the position the 1 elements are IN the arr <-- 0 2 7
        //numOf1 - p - index1++ the amount of times the 1's need to move to the left
        // console.log(numOf1 + p - index1++)
        numOf1 += p - index1++;
    }
}
console.log(Math.min(numOf0, numOf1)) //Math.min returns the LOWEST-values number, therefor chooses the lowest number of steps.

















// arr = [1,0,1,0,0,0,0,1]

// function miniMoves(arr) {
//     let swap = true
//     let count = 0

//     do {
//         swap = false
//     for(let i = 0; i < arr.length; i++ ){
//         for(let x = 0; arr.length; x++ ) {
//             if(arr[x] > arr[x + 1]) {
                
//                 let temp = arr[x]
//                 arr[x] = arr[x + 1]
//                 arr[x + 1] = temp
//                 swap = true
//                 count++
//                 console.log(count)
//             }
//         }
//     }
//     }while (swap)
//     return arr
// }

// console.log(miniMoves(arr))


// arr = [1,1,1,1,0,1,0,1]

// function miniMoves(arr) {
//     let count1 = 0
//     let onesCount1 = 0

//     for( let i = 0; i < arr.length; i ++) {
//         if (arr[i] === 1) {
//             onesCount1++
//         }else{
//             count1 += onesCount1
//         }
//     }
 
//     let count2 = 0
//     let onesCount2 = 0

//     for (let x = 0; x < arr.length; x++ ) {
//         if (arr[x] === 1) {
//             onesCount2++
//         }else {
//             count2 += onesCount2
//         }
//     }
//     // return count1 < count2 ? "count1" : "count2"
//     return count2


     
// }
// console.log(miniMoves(arr))
    

// arr = [1,1,1,1,0,1,0,1]
// function minSwaps(arr) {

//     // keep track of zeroes for FIRST loop
//     let count_1 = 0;
//     let zeros_1 = 0;
//     // loop starting from back
//       for (let i = arr.length - 1; i >= 0; i--) {
//       if (arr[i] === 0) {
//         zeros_1 += 1;
//       } else {
//         count_1 += zeros_1;
//       }
//     }
      
//     // keep track of zeroes for SECOND loop
//     let count_2 = 0;
//     let zeros_2 = 0;
      
//     // start looping from front
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === 0) {
//         zeros_2 += 1;
//       } else {
//         count_2 += zeros_2;
//       }
//     }
//       // return which ever count is smaller
//     // return count_1 < count_2 ? 'count_1' : 'count_2'
//     return count_2
//    }
//    console.log(minSwaps(arr))