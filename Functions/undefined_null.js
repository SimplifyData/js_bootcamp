// unassigned variables
let name = 'Jen';

let name_1; // undefined

console.log(name);

console.log(name_1) // name_1 is undefined

// lets check if name is undefined

if (name_1 === undefined){
    console.log('Please Provide a Name.')
} else {
    console.log(name)
}

// undefined for function arguments

let square = function (num) {
    console.log(num)
}

let result = square(); // undefined

console.log(result); // undefined function return value

let age = 27;

age = undefined ;// it will print undefined

console.log(age);

// use null instead of null

age = null;

console.log(age); // prints null value
