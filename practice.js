// 1- reverse a string (without using the reverse method)


function revStr(str) {
    let newArr = []
    let arr = str.split("")

    for (let i = arr.length - 1; i >= 0; i --)
        newArr.push(arr[i])

        return newArr.join("")
}

console.log(revStr("rachelle"))


// function revStr(str) {
//     let newArr = new Array(str.length)

//     let arr = str.split("")

//     left = 0
//     right = arr.length - 1

//     while( left <= right ) {
//     newArr[left] = arr[right]
//     newArr[right] = arr[left]
//     left ++
//     right --
// }
//     return newArr.join("")
// }

// console.log(revStr("james"))


//find out (return true/false) if a given word is a palindrome.

// const isPalindrome = (str) => {
//      str = str.toLowerCase()

//     return str === str.split("").reverse().join("")
// }
// console.log("pop")

const str = "pops"
const isPalindrome = (str) => {
    str = str.toLowerCase();

    for(let i = 0; i < str.length; i += 1) {
        if (str[i] !== str[str.length - 1 - i]){
            return false
        }
    }
    return true
}
console.log(isPalindrome(str))


// given an integer array nums sorted in non-decreasing order, return an array of the squares of each number in non-decreasing order

// input : nums = [-7, -3, 2, 3, 11]
// Output: [4,9,9,49,121]

function sortArr(nums) {
    output = []
    for (let i = 0; i < nums.length; i ++) {
        output.push(nums[i] ** 2);
    }
    return output.sort((a,b) => a-b)// )(nlogn)
}


//OR


function sortArr2(nms) {
    return nums.map((e) => ** 2).sort((a,b) => a-b)
}
console.log(sortArr2([-7, -3, 2, 3, 11]))