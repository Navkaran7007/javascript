let score = 33;

// console.log(typeof(score));

// // Converting To string
// let valueInstring = Number(score);
// console.log(typeof valueInstring);
// console.log(valueInstring)

/**
 * "33" =. 33
 * "33abc" => Nan
 * true = 1
 */

let isLoggerIn = '';

let typeCoversion = Boolean(isLoggerIn)
// console.log(typeCoversion)



/******************************** Operations ***************************************************/

let value = 3
 negValue = -value
 // console.log(negValue)

// console.log('1' + 3);
// console.log('1' + 3 + 3);

// console.log(1 + 3 + '3');

// console.log(true + true) // 2

// console.log(+ true) // 1
// console.log(true) // True



// ==
// === (Strict Operator)

// console.log('2' == 2);// Checks Datatype as well
// console.log('2' === 2);


// const array1 = {
//     age: 20,
//     weigth: 70
// }

// console.log(array1.born.year)

// let user = {};
//console.log(user.address?.city); 


/** ******************************************************** Stack Memory */
let channel = 'snippet';

let watch =  channel;
/** First created variable and then created another variable and assign first variable to it */
watch = 'hit';

// console.log(channel)

// console.log(watch)

/** So waht actually happens in a stack instead of changing the  the memory ,it creates a code of it in memory and use as reference */


/** *************************************************Heap************************* */

const user = {
    Id : userdotgoogle
};

userId = user;

userId.Id = Navdotgoogle;
console.log(userId);

