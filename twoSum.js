// function miniMoves(arr) {

//     let count = 0
//         // this decides how many numbers to check
//         for(let i = 0; i < arr.length; i++) {
//             // this one does the actual checking
//             for(let x = 0; x < (arr.length - i - 1); x++) {
//                 //compare numbers and only swap if if the second one is larger
//                 if(arr[x] < arr[x + 1]) {
                    
//                     let first = arr[x] // store the first number
//                     let second = arr[x + 1] // store the second number
//                     // now swap them
//                     arr[x] = second
//                     arr[x + 1] = first
//                     count++
//                 }
//             }
//         }
//         return count
//     }




nums = [2,7,11,15]
target = 9

function twoSum(nums, target) {

    for (let i = 0; i < nums.length; i++){
        for(let x = 0; x < (nums.length - i - 1); x++) {
            if(nums[x] + nums[x + 1] === target){
                console.log((nums[x] & nums[x + 1]))
            }
        }
    }
    // return nums[x] && nums[x + 1]
}
console.log(twoSum(nums, target))

// if the nums add up to target return nums index number 