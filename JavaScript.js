//Create a function that takes two strings as arguments 
//and return either true or false depending on whether the total number of characters 
//in the first string is equal to the total number of characters in the second string.

// def comp(str1, str2)
// 	str1.length == str2.length
// end


//Create a function that takes two numbers as arguments and return their sum.

const addition = (a,b) => {
    return a + b
}


//Create a function that takes two arrays and insert the second array in the middle of the first array.
function tuckIn(arr1, arr2) {
    return [arr1[0], ...arr2, arr1[1]]
  }

function tuckIn(arr1, arr2) {
	let l = arr1.length / 2
	return [arr1[l], ...arr2]
}

//Create a method in the Person class which returns how another person's age compares. 
//Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, 
//return a sentence in the following format:

// {other person name} is {older than / younger than / the same age as} me.

//Examples
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)
// p1.compareAge(p2) ➞ "Joel is older than me."

// p2.compareAge(p1) ➞ "Samuel is younger than me."

// p1.compareAge(p3) ➞ "Lily is the same age as me."

// ANSWER
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
		
	compareAge(other) {
		if(this.age === other.age) {
			return `${other.name} is the same age as me.`
		}
		if(this.age > other.age) {
			return `${other.name} is younger than me.`
		}
		return `${other.name} is older than me.`
	}
}




//You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart 
// (which means that evaluating the value > the other value will return true).

//Create a function that returns whether the first array is slightly superior to that of the second.

//Examples
//isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.

//isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

//isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true

//isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false

//isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false
//Notes
//Both arrays will be the same length.
//All values and their counterparts will always be of the same data type.
//If the two arrays are the same, return false.


//ANSWER

function isFirstSuperior(arr1, arr2) {
	return arr1 > arr2;
}







//Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

//Examples
//numberSquares(2) ➞ 5

//numberSquares(4) ➞ 30

//numberSquares(5) ➞ 55


function isFirstSuperior(arr1, arr2) {
	n = arr1.length
	for (i=0;i<n;i++) {
		if (arr1[i] > arr2[i]) {
			return true
		}
	}
	return false
}