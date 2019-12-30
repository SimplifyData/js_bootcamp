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
