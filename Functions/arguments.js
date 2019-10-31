// use multiple arguments

let add = function (a,b) {
    return a+b
};
console.log(add(3,2));

// providing default values for the arguments

let get_score_text = function (name = 'Player',score = 0) {
    return ('Name: '+ name + ', Score: ' + score)
};

console.log(get_score_text());
console.log(get_score_text('Ax', 77));

// challenge problem
// total, tip_percentage

let total_payment_for_food = function (total = 0, tip_percent = .15) {
    let tip = total * tip_percent
    return ('Total: ' + total + ', Tip: ' + tip)
};

console.log(total_payment_for_food(342,.15));

// using template strings
let name= 'AZ';

console.log(`my name is ${name}`); // injecting variable in a string by using
// template strings: `` which is right below ESC button

let tip_func = function (total = 0, tip_percent = .15) {
    return `A ${tip_percent * 100}% tip on ${total} is ${total * tip_percent}`
};

console.log(tip_func(100));