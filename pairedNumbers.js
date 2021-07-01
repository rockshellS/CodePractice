/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

// function sockMerchant(n, ar) {
//     // Write your code here
 
// }


// const arr = [1,4,4,4,4,1,1,3,2,2,6,6,6,6,7]
// const n = 15
// const sortAndCount = (n, arr) => {
//     let pairs = 0;
//     // let numsSorted = arr.sort( (a,b) => a-b);
//     for (let i = 0; i < n - 1; i++ ) {
//         if (arr[i] === arr[i + 1]) {
//             pairs++;
//             i += 1;
//         }
        
//         }
//     return pairs
// }

// console.log(`Total: ${sortAndCount(n , arr)} pairs`)


const arr = [10,20,20,10,10,30,50,10,20]
const n = 9
const sockMerchant = (n, arr) => {
    let pairs = 0;
     let numsSorted = arr.sort( (a,b) => a-b);
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            pairs++;
            i += 1;
        }
    }
    return pairs
}

console.log(`Total: ${sockMerchant(n,arr)} pairs`)