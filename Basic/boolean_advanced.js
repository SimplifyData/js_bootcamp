let is_account_locked = false;

let user_role = 'admin';

if (is_account_locked) {
    console.log(' Is account locked?')
}
else {
    console.log('Welcome!')
}

// new if else with admin

if (is_account_locked) {
    console.log(' Is account locked?')
}
else if (user_role === 'admin') {
        console.log('Welcome Admin!')
    }
else {
    console.log('Welcome!')
}

// It is freezing outside
// It is hot outside!
// Go for it. It is pretty nice.

let temperature = 72;

if (temperature <= 32) {
    console.log(' It is freezing outside!')
}
else if (temperature >= 100) {
    console.log('It is hot outside!')
}
else {
    console.log('It is nice outside!')
}