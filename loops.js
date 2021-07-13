

// for (let i = 0; i < 10; i++){
// console.log('Rachelle' + i );
// if (i === 3) break;
// }

//let i = 0 is where we are initalizing a counter. 
// i < 10   then in our condition we will say keep going until this condition is false 
// i++    in the last part we're incrementing the counter

// if (i === 3) break this will stop the loop at 3, 
//Rachelle0
//Rachelle1
//Rachelle2
//Rachelle3


//--------------------------------------------------------------------------------------------------------------------------------

// const names = ['jon', 'bob', 'mary', 'joe']

// for (let i = 0; i < names.length; i++ ) {
//     console.log(names)
// }
// we want to print each name in the array so we would do the index/counter names[i]
// jon
// bob
// mary
// joe

// is i just console.log(names) it would print out the array with the string of names 4 times
// [ 'jon', 'bob', 'mary', 'joe' ]
// [ 'jon', 'bob', 'mary', 'joe' ]
// [ 'jon', 'bob', 'mary', 'joe' ]
// [ 'jon', 'bob', 'mary', 'joe' ]


//--------------------------------------------------------------------------------------------------------------------------------

// forOf loop 

// const names = ['jon', 'bob', 'mary', 'joe']

// for(name of names) {
//     console.log(name)
// }

// this is taking each value and assiging it to this name variable (name of names).  
// you can name the first variable what every you want but then we have to include the name of the array
// this is a slower way of exicuting code.  works for a one liner



//--------------------------------------------------------------------------------------------------------------------------------

// forIn loop

// const user = { 'firstName': 'Rachelle', 'lastName': 'Spicer'}
// for (key in user) console.log(user[key])

// Rachelle
// Spicer

// it's looping through each key firstName and lastName and logging the value of each


// function fizzBuzz(n){

// for ( let i = 1; i < n; i++) {
//     if (i % 15 === 0){
//         console.log("FizzBuzz")
//     }
//     else if ((i % 3) === 0) {
//         console.log("Fizz")
//     }
//     else if ((i % 5) === 0 ){
//         console.log("Buzz")
//     }
//     else {
//         console.log(i)
//     }
// }

// }
// console.log(fizzBuzz(15))


// str = ['code', 'doce', 'ecod', 'framer', 'frame']

// function funWithAnagrams(str) {
//    for (let i = 0; i < str.length; i++){
//        for (let j = str.length - 1; j > i; j--){
//            let sortedA = str[i].split('').sort().join("")
//            console.log(sortedA)
//            let sortedB = str[j].split('').sort().join("")
//         //    console.log(sortedB)
//            if (sortedA === sortedB){
//                str.splice(j,1)
//            }
//        }
//    }
//    return str.sort()
// }
// console.log(funWithAnagrams(str))







// function funWithAnagrams(str){
//     str.sort()
// }
// console.log(funWithAnagrams(str))

// function getAllSubstrings(str) {
//     let i, j, result = [];
//     for (i = 0; i < str.length; i++){
//         for (j = i + 1; j < str.length + 1; j++) {
//             // result.push(str.slice(i,j))
//             if ()
//         }
//     }
//     return result
// }

// console.log(getAllSubstrings(str))










// function funWithAnagrams(str) {
//     for (item of str){
       
//     }
    

// }
// console.log(funWithAnagrams(str))


let text = ["Buzz", "WOW", "MOM", "zzuB"]
 function funWithAlgros(text) {
    let newArr = []
    let newArr2 = []
     for ( let words of text) {
         let orderedText = words.split('').sort().join("")
         newArr.push(orderedText)
        //  console.log(newArr)
        let unique = [...new Set(newArr)]
        console.log(unique)
     }
    //  return newArr.sort()
 }
   console.log(funWithAlgros(text))
