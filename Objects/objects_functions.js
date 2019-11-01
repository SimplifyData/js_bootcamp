let my_book = {
    title: '1984',
    author: ' Tom Jerry',
    page_count: 326
};

let other_book = {
    title: 'A Peoples History',
    author: 'Alex Man',
    page_count: 456
};

let get_summary = function (book) {
    return {
        summary:`${book.title} by ${book.author}`,
        page_count_summary : `${book.title} is ${book.page_count} pages long.`
    }
};

let book_summary =  get_summary(my_book);

let other_book_summary  = get_summary(other_book);

console.log(book_summary.page_count_summary);

// Challenge question
// Create Function - that takes fahrenheit
// and returns object with all three temp F, C & K

let fahrenheit_temp = 54;

let convert_fahrenheit = function (temperature) {
    return {
        fahrenheit: `${temperature} Fahrenheit`,
        celsius: `${(temperature - 32) * (5 / 9)} Celsius`,
        kelvin: `${(temperature + 459.67) * 5 / 9} kelvin`
    }
};

console.log(convert_fahrenheit(fahrenheit_temp));
