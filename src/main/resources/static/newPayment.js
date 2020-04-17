var listCustomer = new Array();
var customer;
var listInvoice = new Array();
var paymentTotal = 0;

function searchClick(){
    $("#content").empty();
    var customerId = $("#selectCustomerView").val();
    var startDate = new Date($("#inputStartDate").val());
    var endDate = new Date($("#inputEndDate").val());
    if(customerId == -1){
        for(var i = 0; i < listCustomer.length; i++){
            //tao the div bao quanh moi customer
            $("#content").append(
                '<br/><br/><br/>'
                +'<div id="customer'+listCustomer[i].id+'"></div>'
            );
            showCustomer(listCustomer[i].id, startDate, endDate);
        }
    }
    else{
        $("#content").append(
            '<br/><br/><br/>'
            +'<div id="customer'+customerId+'"></div>'
        );
        showCustomer(customerId, startDate, endDate);
    }
}

function showCustomer(customerId, startDate, endDate){
    var customer;
    for(var i = 0; i < listCustomer.length; i++){
        if(listCustomer[i].id == customerId){
            customer = listCustomer[i];
        }
    }
    $("#customer"+customerId).append(
                    '<div class="row">'
                        +'<div class="col-md-4 offset-md-1" style="font-size: x-large; font-family: Arial; font-weight: bolder; color: black;" id="customerName">'
                        + customer.name
                    +'</div>'
                    +'<div class="col-md-7" style="font-family: Arial;">'
                        +'<div style="font-weight: bold; float: left;">Total: </div>'
                    +'<div style="float: left;" id="totalCustomer'+customerId+'"></div>'
                    +'<div style="font-weight: bold; float: left;">| Total Paid: </div>'
                    +'<div style="float: left;" id="totalPaidCustomer'+customerId+'"></div>'
                    +'<div style="font-weight: bold; float: left;">| Total Due: </div>'
                    +'<div style="float: left;" id="totalOutstandingCustomer'+customerId+'"></div>'
                    +'</div>'
                    +'</div>'
                    +'<br/>'
                    );
    // lay invoice tu customer
    $.ajax({
        type: 'get',
        url: '/api/invoice/getByIdCustomer/' + customerId,
        header: {
            "Content-Type": "application/json"
        },
        contentType: 'application/json',
        dataType: 'json',
        success: function (invoices) {
            var total = 0;
            var totalOutStanding = 0;
            var totalpaid = 0;
            for(var i  = 0; i < invoices.length; i++){
                total += invoices[i].totalAfterTax;
                totalOutStanding += invoices[i].totalOutstanding;
                totalpaid += invoices[i].totalPaid;
            }
            $('#totalCustomer'+customerId).append(""+total.toFixed(2));
            $('#totalOutstandingCustomer'+customerId).append(""+totalOutStanding.toFixed(2));
            $('#totalPaidCustomer'+customerId).append(""+totalpaid.toFixed(2));

            // lay payment tu invoice va startDate, endDate
            $.each(invoices, function(index, invoice) {
                    $.ajax({
                        type: 'get',
                        url: '/api/payment/getByIdInvoiceAndStartDateAndEndDate/'+invoice.id+'/'+startDate+"/"+endDate,
                        header: {
                            "Content-Type": "application/json"
                        },
                        contentType: 'application/json',
                        dataType: 'json',
                        success: function (payments){
                            if(payments.length > 0){
                                console.log(invoice.id);
                                $("#customer"+customerId).append(
                                    '<div class="row" style="font-family: Arial;">'
                                    +'<div style="font-weight: bold; float: left;" id="invoiceNo">Invoice-'+invoice.id+'</div>'
                                    +'<div style="padding-left: 30px; float: left;" id="invoiceTotal">Total:</div>'
                                    +'<div style="padding-left: 3px;">'+invoice.totalAfterTax+'</div>'
                                    +'</div>'
                                    +'<div class="row">'
                                    +'<table class="table table-bordered table-sm">'
                                    +'<thead style="background-color: rgb(57, 185, 57);">'
                                    +'<tr>'
                                    +'<th scope="col">Amount Paid</th>'
                                    +'<th scope="col">Method</th>'
                                    +'<th scope="col">Date</th>'
                                    +'<th scope="col">Notes</th>'
                                    +'</tr>'
                                    +'</thead>'
                                    +'<tbody id="tblPaymentInvoice'+invoice.id+'">'
                                    +'</tbody>'
                                    +'<tfoot>'
                                    +'<tr>'
                                    +'<td style="text-align: left; font-weight: bold; color: rgb(136, 194, 3);">Total Paid:</td>'
                                    +'<td style="text-align: left; border-left: hidden; color: rgb(136, 194, 3);">'+invoice.totalPaid.toFixed(2)+'</td>'
                                    +'<td style="border-left: hidden;"></td>'
                                    +'<td style="border-left: hidden;"></td>'
                                    +'</tr>'
                                    +'<tr>'
                                    +'<td style="text-align: left;font-weight: bold; color: rgb(136, 194, 3);">Total Balance:</td>'
                                    +'<td style="text-align: left; border-left: hidden; color: rgb(136, 194, 3);">0.00</td>'
                                    +'<td style="border-left: hidden;"></td>'
                                    +'<td style="border-left: hidden;"></td>'
                                    +'</tr>'
                                    +'</tfoot>'
                                    +'</table>'
                                    +'</div>'
                                    +'<br/>'
                                );

                                //show payments
                                for(var j = 0; j < payments.length; j++){
                                    var payment = payments[j];
                                    var idTblPaymentInvoice = '#tblPaymentInvoice'+invoice.id;
                                    $(idTblPaymentInvoice).append(
                                        '<tr>'
                                        +'<th style="text-align: right;">'+parseFloat(payment.amount, 10).toFixed(2)+'</th>'
                                        +'<td style="text-align: center;">'+payment.method+'</td>'
                                        +'<td style="text-align: center;">'+payment.date+'</td>'
                                        +'<td>'+payment.note+'</td>'
                                        +'</tr>'
                                    );
                                }
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            alert("fail");
                        }
                    })
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Fail
        }
    });
}

//Luu payment
function savePayment(){
    var totalPaymentItem = $("#inputTotalPaymentAmountItem").val();
    if(paymentTotal != totalPaymentItem){
        alert("false");
    }
    else{
        var listPayment = new Array();
        for(var i = 0; i < listInvoice.length; i++) {
            var idCheck = "chooseInvoice"+i;
            if(document.getElementById(idCheck).checked===true){
                var date = $("#inputPaymentDate").val();
                var method = $("#selectMethod").val();
                var idNote = "#inputNote"+i;
                var note = $(idNote).val();
                var idAmount = "#inputInvoiceAmount"+i;
                var amount = $(idAmount).val();
                var invoice = listInvoice[i];
                var payment = {
                    date : date,
                    method : method,
                    note : note,
                    amount : amount,
                    invoice : invoice
                };
                listPayment.push(payment);
            }
        };
        var listPaymentJson = JSON.stringify(listPayment);
        $.ajax({
            type: 'POST',
            url: '/api/payment/create/list',
            header : {
                "Content-Type" : "application/json"
            },
            contentType : 'application/json',
            data : listPaymentJson,
            dataType: 'json',
            success: function(newListPayment) {
                alert("Success");
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Fail
                alert("Fail");
            }
        });
    }
}

// change tong tien
function changeTotalPayment(){
    paymentTotal = $("#inputPaymentAmount").val();
}

// tra ve tong cac paymentItem
function totalPaymentAmountItem(){
    var total = 0;
    for(var i = 0; i < listInvoice.length; i++) {
        var idCheck = "chooseInvoice"+i;
        if(document.getElementById(idCheck).checked===true){
            total += parseFloat($("#inputInvoiceAmount" + i).val(), 10);
        }
    }
    return total;
}

// change tong cac payment item
function changePaymentAmount(){
    $("#inputTotalPaymentAmountItem").val(totalPaymentAmountItem().toFixed(2));
}

// thay doi trang thai checkbox
function changeCheckbox(i){
    var idCheck = "chooseInvoice"+i.toString() ;
    var idInputInvoiceAmount = "inputInvoiceAmount"+i.toString() ;
    if (document.getElementById(idCheck).checked===true){
        document.getElementById(idInputInvoiceAmount).disabled = false;
    }
    else{
        document.getElementById(idInputInvoiceAmount).disabled = true;
    }
    changePaymentAmount();
}
var totalDue;
function getListInvoice() {
    for (var i = 0; i < listInvoice.length; i++) {
        var idInvoice = "#invoice" + i;
        $(idInvoice).remove();
    }
    listInvoice.splice(0, listInvoice.length);
    var idCustomer = parseInt($("#selectCustomer").val(), 10);

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
            totalDue = 0;
            for (var i = 0; i < listInvoice.length; i++) {
                $("#tblInvoice").append(
                    '<tr id="invoice' + i + '">'
                    + '<td>'
                    + '<input type="checkbox" id = "chooseInvoice' + i + '" onchange="changeCheckbox(' + i + ');" value="">'
                    + '</td>'
                    + '<td style="text-align: center;">I-'+listInvoice[i].date+listInvoice[i].id+'</td>'
                    + '<td style="text-align: right;">' + listInvoice[i].totalOutstanding.toFixed(2) + '</td>'
                    + '<td>'
                    + '<input type="number" style="text-align: right" id="inputInvoiceAmount' + i + '" class="form-control" value="0.00" step="" required="required" title="" disabled onchange="changePaymentAmount('+i+');">'
                    + '</td>'
                    + '<td>'
                    + '<textarea name="" id="inputNote'+i+'" class="form-control" rows="3" required="required" style="height: 50px;"></textarea>'
                    + '</td>'
                    + '</tr>'
                );
                totalDue += listInvoice[i].totalOutstanding;
            };
            $("#totalDue").html(totalDue.toFixed(2));
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Fail
        }
    });
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
                $("#selectCustomerView").append('<option value="'+ listCustomer[i].id +'">'+ listCustomer[i].name +'</option>');
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Fail
        }
    });
};
