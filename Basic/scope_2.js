// leaked global name = ' Jen', and did not use let

if (true) {
    name = 'Jen';
    console.log(name);
}

console.log(name);