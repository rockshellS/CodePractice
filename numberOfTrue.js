
arr = [true, false, false, true, false]

function countTrue(arr) {
   const result = arr.filter(arr => arr === true).length
   return result
}


countTrue(arr)