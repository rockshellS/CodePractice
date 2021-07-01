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
// const sockMerchant = (n, arr) => {
//     let pairs = 0;
//      let numsSorted = arr.sort( (a,b) => a-b);
//     for (let i = 0; i < n - 1; i++) {
//         if (arr[i] === arr[i + 1]) {
//             pairs++;
//             i += 1;
//         }
//     }
//     return pairs
// }

// console.log(`Total: ${sockMerchant(n,arr)} pairs`)



const sockMerchant = (n, arr) => {
    let pairs = 0;
    let socks = {}
    for(let i = 0; i < arr.length; i++){
       socks[arr[i]] = (socks[arr[i]] || 0) + 1
       if(socks[arr[i]] % 2 === 0) pairs++
    }
    return pairs
}
console.log(`Total: ${sockMerchant(n,arr)} pairs`)

// socks[arr[i]] = (socks[arr[i]] || 0) + 1
//so that’s creating a key for the value arr[i]; if it doesn’t exist,
// it sets it to 0, or if it does exist it sets it to the value it already has, and then increments by 1 either way


//  if(socks[arr[i]] % 2 === 0) pairs++
// so that’s the conditional saying that if there is an even number of socks, then it’s a pair and increment the variable pairs by one
//  a number % 2 ===0 just verifies that it’s even. in this case if we want to track just pairs, then each time a specific type of sock, 
// which we’re storing as the key, has an even value, then we will increment pairs by 1 since we know that we have a complete pair