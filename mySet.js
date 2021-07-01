const myArray = [1,2,3,4,5,6,6,6,3,2,1];
const mySet = new Set(myArray);

console.log(myArray)  //[1,2,3,4,5,6,6,6,3,2,1]
console.log(mySet)    //{1,2,3,4,5,6}

// return set back into an array

const uniqueArray = [ ...mySet ]

console.log(uniqueArray)  // [1,2,3,4,5,6]


// and to the set

mySet.add(10)

console.log(mySet) // {1,2,3,4,5,6,10}