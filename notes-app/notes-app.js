const notes_1 = [{
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

const notes = get_saved_notes()



const filters = {
    search_text:''
};

// localStorage.setItem('location', 'Seattle')

// console.log(localStorage.getItem('location'))

// localStorage.removeItem('location')

const  user = {
    name: 'Andrew',
    age: 27
}



const user_json = JSON.stringify(user)
console.log(user_json)

localStorage.setItem("user",user_json)

const user_json_output = localStorage.getItem('user')

const user_output = JSON.parse(user_json_output)

console.log(`${user_output.name} is ${user_output.age}`)

const render_notes = function(notes, filters){
    const filtered_notes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.search_text.toLowerCase())

    })
    document.querySelector('#notes').innerHTML = '<p> TEST </p>'

    filtered_notes.forEach(function (note) {

        const note_el = generate_note_dom(note)
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

    e.target.textContent = 'The Button was Clicked'
    notes.push({
        title:'',
        body:''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    render_notes(notes,filters)
})



//document.querySelector('#search_text').addEventListener('input', function (e) {
//    console.log(e.target.value)

//})

document.querySelector('#search_text').addEventListener('input', function (e) {
    filters.search_text  = e.target.value
    render_notes(notes,filters)

})

document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''

})

document.querySelector('#filter_by').addEventListener('change', function (e) {
    console.log(e.target.value)

})