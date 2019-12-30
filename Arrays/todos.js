const todos = ['Cat Food', "Orange Juice", "Maggi Noodles", "Coffee Beans", "Pasta"]
console.log(todos)
todos.splice(2,1)
todos.push('Maple Syrup')
todos.shift()

console.log(`You have ${todos.length} todos!`)
//console.log(todos)
// console.log(`Todo: ${todos[todos.length -2]}`)

todos.forEach(function (todo,index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})
console.log("You have the following items in you TODO List")
for (let count = 0; count < todos.length; count++) {
    console.log(`${count + 1}. ${todos[count]}`)
}

/** return todo that are incomplete **/

const todo_1 = [{
    text: "Cat Food",
    completed: true
}, {
    text: 'Clean Kitchen',
    completed: false
}, {
    text: 'Buy Food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const incomplete_todo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
};

console.log(incomplete_todo(todo_1))

/** sort todo **/

const sort_todos = function (todos) {
    todos.sort(function (a,b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
};

sort_todos(todo_1)

console.log(todo_1)

// Challenge

const account = {
    name:" Adam Yoyo",
    expenses: [],
    income: [],
    add_expenses: function (description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    add_income : function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    get_account_summary: function () {
        let total_expenses = 0
        this.expenses.forEach(function (expense) {
            total_expenses = total_expenses + expense.amount

        })

        let total_income = 0
        this.income.forEach(function (income) {
            total_income = total_income + income.amount
        })
        return `${this.name} has a balance of $${total_income - total_expenses}. $${total_income} in Income and $${total_expenses} in expenses`

    }
}
// add income array to account
// add income method >> description, amount
// tweak get account summary
// adadm yoyo has balance of $10. $100 in income and 90 in expenses
account.add_expenses("Rent",950)
account.add_expenses('Coffee', 5)
account.add_income("freelance", 2000)
console.log(account.get_account_summary())