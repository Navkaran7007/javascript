/**
 * Number = 4
 * String = 'Nav'
 * Booleans = true/fales
 * null = standalone value (Its type is object )
 * undefined = 
 * symbol = unique
 * 
 * All types except Object define immutable values represented directly at the lowest level of the language. 
 * We refer to values of these types as primitive values.

All primitive types, except null, can be tested by the typeof operator. typeof null returns "object", 
so one has to use === null to test for null.
*/

let a = '3';
console.log( );


let x = 5;
x = 'hello';




/**
 * Most Important 
 * Optional Chaining
 * let user = {
  name: "Alice",
  address: {
    city: "Paris"
  }
};

console.log(user.address?.city); // Paris ✅
console.log(user.profile?.bio);  // undefined ✅ (no error)

This basically mean if we access for example an array withoutoptional Chaining and if we are accessing an array property that does not exits
 this will give an error
but with optional chaining (?.) we get undefined as outcome.
 */




// Primitive Datatypes
/**
 * string
 * Number
 * Boolean
 * Symbols
 * Null
 * Undefined
 * BigInt
 */

// Reference Type(Non-Primitive) Datatypes
//**
// Object, Arrays, Functions */

// ToFixed for float and toString to convert to string


const currency = 1000000;
console.log(currency.toLocaleString())