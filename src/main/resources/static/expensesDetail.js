var i;
var expenses;

function saveCategory(){
    expenses.categoryExpenses = $('#selectCategory').val();
    var expensesJson = JSON.stringify(expenses);
    $.ajax({
        type: 'POST',
        url: '/api/expenses/update',
        header: {
            "Content-Type": "application/json"
        },
        contentType: 'application/json',
        data: expensesJson,
        dataType: 'json',
        success: function (res) {
            window.location="/user/expenses/"+i;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Fail
            alert("Fail");
        }
    })
}

function saveDate(){
    expenses.date = $('#inputDate').val();
    var expensesJson = JSON.stringify(expenses);
    $.ajax({
        type: 'POST',
        url: '/api/expenses/update',
        header: {
            "Content-Type": "application/json"
        },
        contentType: 'application/json',
        data: expensesJson,
        dataType: 'json',
        success: function (res) {
            window.location="/user/expenses/"+i;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Fail
            alert("Fail");
        }
    })
}

function saveAmount(){
    expenses.amount = $('#inputAmount').val();
    var expensesJson = JSON.stringify(expenses);
    $.ajax({
        type: 'POST',
        url: '/api/expenses/update',
        header: {
            "Content-Type": "application/json"
        },
        contentType: 'application/json',
        data: expensesJson,
        dataType: 'json',
        success: function (res) {
            window.location="/user/expenses/"+i;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Fail
            alert("Fail");
        }
    })
}

function saveNote(){
    expenses.note = $('#inputNote').val();
    var expensesJson = JSON.stringify(expenses);
    $.ajax({
        type: 'POST',
        url: '/api/expenses/update',
        header: {
            "Content-Type": "application/json"
        },
        contentType: 'application/json',
        data: expensesJson,
        dataType: 'json',
        success: function (res) {
            window.location="/user/expenses/"+i;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Fail
            alert("Fail");
        }
    })
}

function saveRecurring(){
    expenses.recurring = $('#inputRecurring').val();
    var expensesJson = JSON.stringify(expenses);
    $.ajax({
        type: 'POST',
        url: '/api/expenses/update',
        header: {
            "Content-Type": "application/json"
        },
        contentType: 'application/json',
        data: expensesJson,
        dataType: 'json',
        success: function (res) {
            window.location="/user/expenses/"+i;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Fail
            alert("Fail");
        }
    })
}


window.onload = function(){
    i = $('#inputId').val();
    $.ajax({
        type: 'GET',
        url: '/api/expenses/'+i,
        header: {
            "Content-Type": "application/json"
        },
        contentType: 'application/json',
        dataType: 'json',
        success: function (res) {
            expenses = res;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Fail
            alert("Fail");
        }
    })
};
