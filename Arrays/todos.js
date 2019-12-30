const todos = ['Cat Food', "Orange Juice", "Maggi Noodles", "Coffee Beans", "Pasta"]
console.log(todos)
todos.splice(2,1)
todos.push('Maple Syrup')
todos.shift()

console.log(`You have ${todos.length} todos!`)
//console.log(todos)
// console.log(`Todo: ${todos[todos.length -2]}`)

todos.forEach(function (todo,index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})
console.log("You have the following items in you TODO List")
for (let count = 0; count < todos.length; count++) {
    console.log(`${count + 1}. ${todos[count]}`)
}

