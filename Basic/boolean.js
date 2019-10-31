// === equality operator
// !== not equal operator
// < less than operator
// > greater than operator
// <= less than equal to operator
// >= greater than equal to operator

let temperature = 31;

let is_freezing = temperature === 31;

let not_freezing = temperature !== 31;

console.log(is_freezing);

console.log(not_freezing);

let temp_less_than = temperature < 32;

let temp_greater_than = temperature > 32;

console.log(temp_less_than);

console.log(temp_greater_than);

// create age to your age
// calculate is child - if age 7 or under
// sernior if age 65 or older
// print child value
// print senior value

let age = 27;
let age_1 = 70;
let age_2 = 5;


let is_child = age <= 7;

let is_senior = age >= 65;

console.log(is_child);

console.log(is_senior);


// if statements () is where condition goes
// and {} where the code block goes

if (is_freezing) {
    console.log('It is freezing outside!')
}

if (temperature <= 32){
    console.log(('It is freezing!!'))
}

let temp_1 = 56;

if (temp_1 >= 32) {
    console.log(' it is not freezing, it may be warmer outside')
}

if (age_2 <= 7) {
    console.log(' Discount on cookies today!')
}

if (age_1 >= 65) {
    console.log(' You will get a Senior Discount!')
}