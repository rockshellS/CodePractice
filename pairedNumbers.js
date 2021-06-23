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
const arr = [1,1,13,4,4,5,5,5,5,6]

function mostPaired(arr){
	let nums = {}
    const pairs = []
	for(let x = 0; x < arr.length; x++) {
		let elem = arr[x]
		if (nums[elem]) {
			// elem already in nums
			nums[elem] += 1
		} else {
			// elem not in nums
			nums[elem] = 1
		}
	}
    return mostPaired()
}
console.log(mostPaired(arr))