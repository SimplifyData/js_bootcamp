// JS uses Lexical Scoping (Static Scoping)
// It all depends on the code blocks
// Global Scope & Local Scope
// Global Scope are define outside and are accessible by the entire script
// Local Scope : accessible inside the coding block

let var_one = 'var_one' // global scope

if (true) {
    console.log(var_one)
    let var_two = 'var_two'
}
// Can not Access since var_two is not defined outside
// var_two is a local scope
// console.log(var_two)