// Initialised an empty list
let list = [];

// Declared a variable
let word = 'Navkaran';

// Separated and pushed each word into empty list 
for( i = 0; i< word.length;i++){
    list.push(word[i])
};

// Declared an empty string to store new string
let reversed = '';

// created a loop if length of list > 0 then tke the last word 'n', 'a', 'r' 
while (list.length > 0){
    reversed += list.pop()
}

// console.log(reversed)

let empty = ['N', 'A', 'V']

let revised = '';

revised += empty.pop()

// console.log(revised);
// console.log(revised)

let a= 5;
let b= '5';
console.log(a+b);
console.log(a -b);