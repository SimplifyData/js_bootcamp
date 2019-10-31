// Function - input (argument), code(), output (return value)
// a simple function


let greet_user = function () {
    console.log('Welcome User!')
};

greet_user();

// create a square function

let square = function (num) {
    //console.log(num * num )
    return num * num

};

let val_1 = square(3);
let val_2 = square(10);

console.log(val_1);
console.log(val_2);


// temp conversion function
// F to C
// 32 F = 0 C , 68 F = 20 C

 let convert_f_to_c = function (temperature) {
     return (temperature - 32) * (5/9)
 };

 freezing_temp = convert_f_to_c(32);
sixty_eight_temp =convert_f_to_c(68);
 console.log(freezing_temp);
 console.log(sixty_eight_temp);