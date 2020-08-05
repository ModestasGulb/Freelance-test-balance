

// Sort data by month (asc)

var accountSorted = account.sort(function (a, b) {
    return a.month - b.month;
});

// Generate data table 
// Generate data row for each month

var tableContent = document.getElementsByClassName("table-content")[0];
var tableFooter = document.getElementsByClassName("table-footer")[0];
var ballanceVal = 0;

for (let i = 0; i < accountSorted.length; i++) {

    var createRow = document.createElement("div");
    var createCellRowNumber = document.createElement("div");
    var createCellMonth = document.createElement("div");
    var createCellIncome = document.createElement("div");
    var createCellExpense = document.createElement("div");
    var createCellBallance = document.createElement("div");

    // Create row

    createRow.classList.add("table-row");
    tableContent.appendChild(createRow);

    // Select last row 

    var tableRow = document.querySelector("div.table-row:last-child");

    // Create the row number cell

    createCellRowNumber.classList.add("cell", "row-number");
    tableRow.appendChild(createCellRowNumber);

    var tableCellRowNumber = tableRow.querySelector("div.row-number");
    var rowNumber = document.createTextNode(i + 1);

    tableCellRowNumber.appendChild(rowNumber);

    // Create the month cell

    createCellMonth.classList.add("cell", "month");
    tableRow.appendChild(createCellMonth);

    var tableCellMonth = tableRow.querySelector("div.month");
    var monthName = document.createTextNode(month[i]);

    tableCellMonth.appendChild(monthName);

    // Create the income cell 

    createCellIncome.classList.add("cell", "income");
    tableRow.appendChild(createCellIncome);

    var tableCellIncome = tableRow.querySelector("div.income");

    if (account[i].income == null) {
        var income = document.createTextNode(0);
    } else {
        var income = document.createTextNode(account[i].income);
    }

    tableCellIncome.appendChild(income);

    // Create the expense cell 

    createCellExpense.classList.add("cell", "expense");
    tableRow.appendChild(createCellExpense);

    var tableCellExpense = tableRow.querySelector("div.expense");

    if (account[i].expense == null) {
        var expense = document.createTextNode(0);
    } else {
        var expense = document.createTextNode(account[i].expense);
    }

    tableCellExpense.appendChild(expense);

    // Create the balance cell 

    createCellBallance.classList.add("cell", "ballance");
    tableRow.appendChild(createCellBallance);

    var tableCellBallance = tableRow.querySelector("div.ballance");

    if (account[i].income == null) {
        var incomeVal = 0;
    } else {
        var incomeVal = account[i].income;
    }

    if (account[i].expense == null) {
        var expenseVal = 0;
    } else {
        var expenseVal = account[i].expense;
    }

    var ballance = document.createTextNode(incomeVal - expenseVal);

    tableCellBallance.appendChild(ballance);
}

// Generate table footer values

// Append total income value

var totalIncome = 0;

for (let i = 0; i < account.length; i++) {

    if (account[i].income == null) {
        totalIncome += 0;
    } else {
        totalIncome += account[i].income;
    }
}

document.getElementById("total-income").innerHTML = totalIncome;

// Append total expense value 

var totalExpense = 0;

for (let i = 0; i < account.length; i++) {

    if (account[i].expense == null) {
        totalExpense += 0;
    } else {
        totalExpense += account[i].expense;
    }
}

document.getElementById("total-expense").innerHTML = totalExpense;

// Append final ballance value

document.getElementById("final-ballance").innerHTML = totalIncome - totalExpense;
