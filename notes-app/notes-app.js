const notes = [{
    title: ' My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
},{
    title: 'Office modifications',
    body: 'Get a new seat'
}]

console.log("This is from a diffe");

const filters = {
    search_text:''
};

const render_notes = function(notes, filters){
    const filtered_notes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.search_text.toLowerCase())

    })
    document.querySelector('#notes').innerHTML = '<p> TEST </p>'

    filtered_notes.forEach(function (note) {
        const note_el = document.createElement('p')
        note_el.textContent = note.title
        document.querySelector('#notes').appendChild(note_el)

    })
}

render_notes(notes,filters)

//DOM - document object model
// Query and remove
const p = document.querySelector('p');
p.remove()

// Query all and remove
const ps = document.querySelectorAll('p');

ps.forEach(function (p){
    // p.remove()
    console.log(p.textContent)
})

console.log(p)

// add a new element
const new_paragraph = document.createElement('p');
new_paragraph.textContent = 'This is a new paragraph for JavaScript';
document.querySelector('body').appendChild(new_paragraph);

// query by button
document.querySelector('button').addEventListener('click', function (e){
    console.log(e)
    e.target.textContent = 'The Button was Clicked'
})

document.querySelectorAll('button')[1].addEventListener('click', function(e){
    e.target.textContent = "Second Button Clicked"
})



// query by button ID
document.querySelector('#create_note').addEventListener('click', function (e){
    console.log(e)
    e.target.textContent = 'The Button was Clicked'
})

document.querySelector('#remove_all').addEventListener('click', function(){
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()

    })
})

//document.querySelector('#search_text').addEventListener('input', function (e) {
//    console.log(e.target.value)

//})

document.querySelector('#search_text').addEventListener('input', function (e) {
    filters.search_text  = e.target.value
    render_notes(notes,filters)

})