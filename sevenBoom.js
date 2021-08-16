
// arr = [1, 2, 3, 4, 5, 6, 7]
arr = [8, 6, 33, 100]
// arr = [2, 55, 60, 97, 86]

function sevenBoom(arr) {
    combine = arr.join('')
    
    
    if (combine.includes(7)) {
        console.log("Boom!")
    }else {
        console.log("there is no 7 in the array")
    }
   
}

sevenBoom(arr)