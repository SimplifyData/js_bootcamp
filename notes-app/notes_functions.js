
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
    const note_el = document.createElement('p')

    if (note.title.length > 0){
        note_el.textContent = note.title
    } else {
        note_el.textContent = "Unnamed Note"
    }

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