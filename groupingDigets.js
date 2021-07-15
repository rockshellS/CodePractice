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


arr = [1,0,1,0,0,0,0,1]

function miniMoves(arr) {
    count1 = 0
    dis = 0

    for( let i = 0; i < arr.length; i ++) {
        if (arr[i] === 1) {
            count1++
        }
        if (arr[i] === 0) {
            dis++
        }
    }

    }
}