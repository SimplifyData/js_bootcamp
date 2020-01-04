
// existing notes from local storage
const get_saved_notes = function () {
    const note_json = localStorage.getItem('notes');

    if (note_json !== null) {
        return JSON.parse(note_json)
    } else {
        return []
    }
}


// Generate the DOM structure for a note
const generate_note_dom = function (note) {
    const note_el = document.createElement('div')
    const text_el = document.createElement('span')
    const button = document.createElement('button')

    button.textContent = 'x'

    note_el.appendChild(button)

    if (note.title.length > 0){
        text_el.textContent = note.title
    } else {
        text_el.textContent = "Unnamed Note"
    }
    note_el.appendChild(text_el)


    return note_el

}


// Render application notes
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