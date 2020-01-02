console.log("This is from a different file");

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