var amountTax = 1;
var listCustomer = new Array();
var customer;
var listInvoice = new Array();
var listTax = new Array();

function moreTaxClick() {
    amountTax ++;
    $('#listTax').append(
        '<div class="form-group row" id = "tax_'+amountTax+'">'
        +'<label for="colFormLabel" class="col-sm-2 col-form-label" style="text-align: right;">'
        +'<i class="fa fa-trash" aria-hidden="true" onclick="deleteTax('+amountTax+')"></i>'
        +'</label>'
        +'<div class="col-md-4">'
        +'<select name="" id="selectTax'+amountTax+'" class="form-control" required="required">'
        +'</select>'
        +'</div>'
        +'<div class="col-md-2">'
        +'<input type="text" class="form-control" value="" />'
        +'</div>'
        +'</div>'
    );
    for(var i = 0 ; i < listTax.length; i ++){
        $('#selectTax'+amountTax).append(
            '<option value="'+ listTax[i].id +'">'+ listTax[i].value +'</option>'
        )
    }
}

function deleteTax(i){
    var idTax = '#tax_'+i
    $(idTax).remove();
}

function changeCustomer() {
    var idInvoice = "#selectInvoice" ;
    $(idInvoice).empty();
    listInvoice.splice(0, listInvoice.length);
    var idCustomer = parseInt($("#selectCustomer").val(), 10);
    for(var i = 0; i < listCustomer.length; i++){
        if(listCustomer[i].id == idCustomer){
            customer = listCustomer[i];
        }
    }
    $.ajax({
        type: 'get',
        url: '/api/invoice/getByIdCustomer/' + idCustomer,
        header: {
            "Content-Type": "application/json"
        },
        contentType: 'application/json',
        dataType: 'json',
        success: function (invoices) {
            listInvoice = invoices;
            for (var i = 0; i < listInvoice.length; i++) {
                var no = 'I-'+ listInvoice[i].date.toString().replace("-","")+listInvoice[i].id;
                $("#selectInvoice").append(
                    '<option value="'+listInvoice[i].id+'">'+no+'</option>'
                );
            };
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Fail
        }
    });
}

function btnSaveClick(){

    //tax
    var taxes = new Array();
    for(var i = 1; i <= amountTax; i++){
        var idTax = 'tax_'+i;
        if(document.getElementById(idTax) != null){
            for(var j= 0; j < listTax.length; j++){
                if (listTax[j].id == ($('#selectTax'+i).val())){
                    taxes.push(listTax[j]);
                }
            }
        }
    }

    //invoice
    var invoice;
    var idInvoice = $('#selectInvoice').val();
    for(var i = 0; i < listInvoice.length; i++){
        if(listInvoice[i].id == idInvoice){
            invoice = listInvoice[i];
        }
    }

    var expenses = {
        customer : customer,
        no : $('#inputNo').val(),
        categoryExpenses : $('#selectCategory').val(),
        date : $('#inputDate').val(),
        amount : $('#inputAmount').val(),
        note : $('#inputNote').val(),
        invoice : invoice,
        taxes : taxes
    }

    var expensesJson = JSON.stringify(expenses);
    console.log(expensesJson);
    $.ajax({
        type: 'POST',
        url: '/api/expenses/create',
        header: {
            "Content-Type": "application/json"
        },
        contentType: 'application/json',
        data: expensesJson,
        dataType: 'json',
        success: function (res) {
            alert("success");
            window.location="/user/expenses";
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Fail
            alert("Fail");
        }
    })
}

window.onload = function(){
    $.ajax({
        type: 'get',
        url: '/api/customer/get',
        header : {
            "Content-Type" : "application/json"
        },
        contentType : 'application/json',
        dataType: 'json',
        success: function(customers) {
            listCustomer = customers;
            for (var i = 0; i < listCustomer.length; i++){
                $("#selectCustomer").append('<option value="'+ listCustomer[i].id +'">'+ listCustomer[i].name +'</option>');
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Fail
        }
    });

    $.ajax({
        type: 'get',
        url: '/api/tax/',
        header : {
            "Content-Type" : "application/json"
        },
        contentType : 'application/json',
        dataType: 'json',
        success: function(taxs) {
            listTax = taxs;
            for(var i = 0 ; i < listTax.length; i ++){
                $('#selectTax1').append(
                    '<option value="'+ listTax[i].id +'">'+ listTax[i].value +'</option>'
                )
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Fail
        }
    });
};
