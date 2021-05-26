// function revStr(str) {
//     let arr = [];
//     let charsArr = str.split('')

//     for( let i = charsArr.length - 1; i >= 0; i --)
//         arr.push(charsArr[i])
//     return arr.join("")
// }

// console.log(revStr("rachelle"))


// Pointers
function revStr2(str) {
    let arr = new Array(str.length)
    let charsArr = str.split("")

    let left = 0;
    let right = charsArr.length - 1;

    while(left <= right) {
        arr[left] = charsArr[right]
        arr[right] = charsArr[left]
        left ++
        right --
}

    return arr.join("")


}

console.log(revStr2("james"))