
const todos = [{
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
}];

const filters ={
    search_text: ''

}

const render_todos = function (todos, filters) {
    const filtered_todos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.search_text.toLowerCase())
    })

    //document.querySelector('#todos').innerHTML = '<p> TEST </p>'

    const incomplete_todos = filtered_todos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = '<p> TEST </p>'

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incomplete_todos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filtered_todos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

render_todos(todos,filters)



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
    render_todos(todos, filters)
})