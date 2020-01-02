
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


//const paragraphs = document.querySelectorAll('p')

/**paragraphs.forEach(function (paragraph) {
    if (paragraph.textContent.includes('the')) {
        paragraph.remove()
    }

});


// How many todos left
// You have x TODOS left.
// Add a p for each todo above , use text value
const incomplete_todo = todos.filter(function (todo) {
    return !todo.completed

})

const summary = document.createElement('h2');
summary.textContent = `You have ${incomplete_todo.length} todos left`;
document.querySelector('body').appendChild(summary); **/

todos.forEach(function (todo) {
    const p = document.createElement('p')
    if (!todo.completed) {
        p.textContent = todo.text
        document.querySelector('body').appendChild(p)
    }})


//listen for new todo creation
document.querySelector('add_todo').addEventListener('click', function(e){
    console.log("Add a new todo..")
})

// listen for todo text change
document.querySelector('#new_todo').addEventListener('input', function (e) {
    console.log(e.target.value)

})

