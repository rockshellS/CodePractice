

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

const user = { 'firstName': 'Rachelle', 'lastName': 'Spicer'}
for (key in user) console.log(user[key])

// Rachelle
// Spicer

// it's looping through each key firstName and lastName and logging the value of each
