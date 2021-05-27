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
    let arr = new Array(str.length)  // this will create an arrray of the length of the string. so if we did "james" the array would have 5 empty spaces
                                    // we do this because when we loop thu the name and build up we will build up from both ends. we have a pointer on both ends and meet in the middle
                                    // that way we only have to loop thru half way

    let charsArr = str.split("")  // this will split the string up into an array 

    // define the pointers
    let left = 0; // index 0
    let right = charsArr.length - 1; // points to the last index

    while(left <= right) {
        arr[left] = charsArr[right] // the very first item in new array is now going to be equal to the very last item in old array
        arr[right] = charsArr[left] // the very last item in new arry is now going to be equal to the very forst item in old array
        left ++ // then we can increment the lft by 1
        right -- // and decrement the right by 1 
}

    return arr.join("")


}

console.log(revStr2("james"))

//A higher-order component (HOC) is an advanced technique in React for reusing component logic. ... 
//  They are a pattern that emerges from React's compositional nature. Concretely, 
//   a higher-order component is a function that takes a component and returns a new component.



// CLOSURES 
// they control waht is and isn't in the scope in a particular function, 
//   along with which variables are shared between sibling functions in the same containing scope.
//  it has to do with scope. inside the function you would have to write another function to have access to a variable
// EXAMPLE

function Person(pName) {
    var name = pName

    this.getName = function() {
        return _name;
    };
}

// undefined

// var me = new Person("rachelle")
//      undefined

//me
//   Person {getName: function}

//me.getName()
//   "rachelle"