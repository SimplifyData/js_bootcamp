/**
const todos_1 = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]
**/


const todos = get_saved_todos()

const filters = {
    searchText: '',
    hide_completed: false
}


renderTodos(todos, filters)

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Add a new todo...')
})

// Listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new_todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    saved_todos(todos)
    renderTodos(todos,filters)
    e.target.elements.text.value = ''

})

document.querySelector("#hide_completed").addEventListener("change", function (e) {
    filters.hide_completed = e.target.checked
    renderTodos(todos,filters)
})
