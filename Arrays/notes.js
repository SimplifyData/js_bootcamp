const notes = ['Note 1', 'Note 2', 'Note 3']
console.log(notes.pop())

notes.push('My new note')

console.log(notes.shift())

notes.unshift('My First Note')

console.log(notes)

notes.splice(1,1, "This item added by Splice")

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)

console.log(notes)

console.log(notes[0])

// for loop

// Counting ...
for (let count = 0;count <= 2; count++) {
    console.log(`Count: ${count}`)
}

//Counting reverse
for (let count = 2;count >= 0; count--) {
    console.log(`Count: ${count}`)
}

//count notes

for (let count = 0; count < notes.length; count++) {
    console.log(`${count+1}. ${notes[count]}`)
}

//count notes in reverse

for (let count = notes.length -1 ; count >= 0; count--) {
    console.log(`${count+1}. ${notes[count]}`)
}


// finding index of objects in array

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

const  find_note = function (notes, note_title) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === note_title.toLowerCase()

    })

}

// search for words

const find_notes = function (notes, query) {
    return notes.filter(function (note, index) {
        const is_title_match = note.title.toLowerCase().includes(query.toLowerCase())
        const is_body_match = note.body.toLowerCase().includes(query.toLowerCase())

        return is_title_match || is_body_match
    })
    
}



console.log(find_notes(notes_1, "eating"))

//find title

const note = find_note(notes_1, 'Office modifications')
console.log(note)