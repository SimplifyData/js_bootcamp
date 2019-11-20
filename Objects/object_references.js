let my_account = {
    name: 'Alex Man',
    expenses: 0,
    income: 0
};

// updating expenses using a function

let add_expenses =  function (account,amount_spent) {
    account.expenses = account.expenses + amount_spent
};

// updating income using a function

let add_income = function (account, new_income) {
    account.income = account.income + new_income
};

// getting account summary using a function

let account_summary = function (account) {
    return ` ${my_account.name} has a net balance of ${my_account.income - my_account.expenses}. 
    ${my_account.income} in income, and ${my_account.expenses} in expenses.`
};


 add_income(my_account,1000); // updating income
add_expenses(my_account, 156); // adding expenses
console.log(account_summary(my_account)) // acoount summary