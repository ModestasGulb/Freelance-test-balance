// Find the month with the lowest inscome but not less or equal than 0

// Find the lowest income

var minIncomeNotZero = 0;

for (let i = 0; i < account.length; i++) {

    if (account[i].income <= 0) {
        continue;
    } else {
        if (i == 0) {
            minIncomeNotZero = account[i].income;
        } else if (minIncomeNotZero > account[i].income) {
            minIncomeNotZero = account[i].income;
        }
    }
}

// Find months with the lowest income

var minIncomeMonths = [];

for (let i = 0; i < account.length; i++) {
    if (minIncomeNotZero == account[i].income) {
        minIncomeMonths.push(month[i]);
    }
}

// Fill in information 

for (let i = 0; i < minIncomeMonths.length; i++) {
    document.getElementById("minIncome").innerHTML += (minIncomeMonths[i] + " ");
}

// Find the month with the lowest expense but not less or equal than 0

// Find the lowest expense

var minExpenseNotZero = 0;

for (let i = 0; i < account.length; i++) {

    if (account[i].expense <= 0) {
        continue;
    } else {
        if (i == 0) {
            minExpenseNotZero = account[i].expense;
        } else if (minIncomeNotZero > account[i].expense) {
            minExpenseNotZero = account[i].expense;
        }
    }

}

// Find months with the lowest expense

var minExpenseMonths = [];

for (let i = 0; i < account.length; i++) {
    if (minExpenseNotZero == account[i].expense) {
        minExpenseMonths.push(month[i]);
    }
}

// Fill in information 

for (let i = 0; i < minExpenseMonths.length; i++) {
    document.getElementById("minExpense").innerHTML += (minExpenseMonths[i] + " ");
}

// Find months with the highest income 
// Find the highest income

var maxIncome = 0;

for (let i = 0; i < account.length; i++) {

    if (account[i].income < 0) {
        continue;
    } else {
        if (account[i].income == null && i == 0) {
            maxIncome = 0;
        }
        else if (maxIncome < account[i].income) {
            maxIncome = account[i].income;
        }
    }

}

// Find months with the highest income

var maxIncomeMonths = [];

for (let i = 0; i < account.length; i++) {
    if (maxIncome == account[i].income) {
        maxIncomeMonths.push(month[i]);
    }
}

// Fill in information 

for (let i = 0; i < maxIncomeMonths.length; i++) {
    document.getElementById("maxIncome").innerHTML += (maxIncomeMonths[i] + " ");
}

// Find months with the highest expense 
// Find the highest expense

var maxExpense = 0;

for (let i = 0; i < account.length; i++) {

    if (account[i].expense < 0) {
        continue;
    } else {
        if (account[i].expense == null && i == 0) {
            maxExpense = 0;
        }
        else if (maxExpense < account[i].expense) {
            maxExpense = account[i].expense;
        }
    }

}

// Find months with the highest expense

var maxExpenseMonths = [];

for (let i = 0; i < account.length; i++) {
    if (maxExpense == account[i].expense) {
        maxExpenseMonths.push(month[i]);
    }
}

// Fill in information 

for (let i = 0; i < maxExpenseMonths.length; i++) {
    document.getElementById("maxExpense").innerHTML += (maxExpenseMonths[i] + " ");
}









