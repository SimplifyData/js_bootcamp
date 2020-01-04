
// Fetch existing todos from localStorage

const get_saved_todos = function (){
    const todo_json = localStorage.getItem('todos')

    if (todo_json !== null) {
        return JSON.parse(todo_json)
    } else {
        return []
    }
};


// Saved todos to local storage
const saved_todos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}


// Rendered todos
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTodos = filteredTodos.filter(function (todo) {
        return !filters.hide_completed || !todo.completed

    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''


    document.querySelector('#todos').appendChild(generate_todo_dom(incompleteTodos))

    filteredTodos.forEach(function (todo) {

        document.querySelector('#todos').appendChild(generate_todo_dom(todo))
    })
}


// Get the DOM element for an individual note
const generate_todo_dom = function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    return p

}

// Summary DOM
const generate_summary_dom  = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}