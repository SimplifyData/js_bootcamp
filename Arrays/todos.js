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

/** return todo that are incomplete **/

const todo_1 = [{
    text: "Cat Food",
    completed: true
}, {
    text: 'Clean Kitchen',
    completed: false
}, {
    text: 'Buy Food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const incomplete_todo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
};

console.log(incomplete_todo(todo_1))

/** sort todo **/

const sort_todos = function (todos) {
    todos.sort(function (a,b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
};

sort_todos(todo_1)

console.log(todo_1)