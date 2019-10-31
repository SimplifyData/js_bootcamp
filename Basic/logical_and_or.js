
let temperature = 65;
let temp_2 = 110;
// Logical And Operator : &&
// Logical OR Operator : ||

if (temperature >= 60 && temperature <= 90 ){
    console.log('It is really nice outside')
}

if (temp_2 <= 32 || temp_2 >= 100) {
    console.log('Do not go outside')
}

// Challenge Question

//

let is_guest_one_vegan = true;
let is_guest_two_vegan = false;

// Are Both Vegan = Only offer vegan dishes
// Are least one vegan? = offer some vegan
// Else : offer anything on the menu.

if (is_guest_one_vegan === true && is_guest_two_vegan === true) {
    console.log("Here is the vegan menu.")
} else if ((is_guest_one_vegan === true && is_guest_two_vegan === false  ) ||
    (is_guest_one_vegan === false && is_guest_two_vegan === true)) {
    console.log(' Here is a menu with vegan, and everything else.')
} else {
    console.log(" Here is the full menu.")
}