

var listCustomer;
function agingBtnSearchClick(){
    $("#tblAging").empty();
    var idCustomer = $("#agingSelectCustomer").val();
    var idTime = $("#agingSelectTime").val();
    if(idCustomer == -1){
        for(var i = 0; i < listCustomer.length; i++){
            renderAgingCustomer(listCustomer[i], idTime);
        }
    }
    else{
        var customer;
        for(var i = 0; i < listCustomer.length; i++){
            if(listCustomer[i].id == idCustomer){
                customer = listCustomer[i];
            }
        }
        renderAgingCustomer(customer, idTime);
    }

}

function renderAgingCustomer(customer, idTime){

    // lay invoice tu customer
    $.ajax({
        type: 'get',
        url: '/api/invoice/getByIdCustomerAndDue/' + customer.id + "/" + idTime,
        header: {
            "Content-Type": "application/json"
        },
        contentType: 'application/json',
        dataType: 'json',
        success: function (invoices) {
            if(invoices.length > 0){
                var today = new Date();
                var total1 = 0;
                var total2 = 0;
                var total3 = 0;
                var total4 = 0;
                var total5 = 0;
                for (var i = 0; i < invoices.length; i++) {
                    var invoiceDue = new Date(invoices[i].dueDate);
                    total5 += invoices[i].totalOutstanding;
                    var distance = (today.getTime() - invoiceDue.getTime()) / 86400000;
                    if (distance <= 30) {
                        $("#tblAging").append(
                            '<tr>'
                            + '<td style="text-align: left;">Inv-' + invoices[i].id + '</td>'
                            + '<td style="text-align: center;">' + invoices[i].date + '</td>'
                            + '<td style="text-align: right;">$' + invoices[i].totalOutstanding.toFixed(2) + '</td>'
                            + '<td style="text-align: right;">$0.00</td>'
                            + '<td style="text-align: right;">$0.00</td>'
                            + '<td style="text-align: right;">$0.00</td>'
                            + '<td style="text-align: right;">$' + invoices[i].totalOutstanding.toFixed(2) + '</td>'
                            + '</tr>'
                        );
                        total1 += invoices[i].totalOutstanding;
                    }
                    if (distance > 30 && distance <= 60) {
                        $("#tblAging").append(
                            '<tr>'
                            + '<td style="text-align: left;">Inv-' + invoices[i].id + '</td>'
                            + '<td style="text-align: center;">' + invoices[i].date + '</td>'
                            + '<td style="text-align: right;">$0.00</td>'
                            + '<td style="text-align: right;">$' + invoices[i].totalOutstanding.toFixed(2) + '</td>'
                            + '<td style="text-align: right;">$0.00</td>'
                            + '<td style="text-align: right;">$0.00</td>'
                            + '<td style="text-align: right;">$' + invoices[i].totalOutstanding.toFixed(2) + '</td>'
                            + '</tr>'
                        );
                        total2 += invoices[i].totalOutstanding;
                    }
                    if (distance > 60 && distance <= 90) {
                        $("#tblAging").append(
                            '<tr>'
                            + '<td style="text-align: left;">Inv-' + invoices[i].id + '</td>'
                            + '<td style="text-align: center;">' + invoices[i].date + '</td>'
                            + '<td style="text-align: right;">$0.00</td>'
                            + '<td style="text-align: right;">$0.00</td>'
                            + '<td style="text-align: right;">$' + invoices[i].totalOutstanding.toFixed(2) + '</td>'
                            + '<td style="text-align: right;">$0.00</td>'
                            + '<td style="text-align: right;">$' + invoices[i].totalOutstanding.toFixed(2) + '</td>'
                            + '</tr>'
                        );
                        total3 += invoices[i].totalOutstanding;
                    }
                    if (distance > 90) {
                        $("#tblAging").append(
                            '<tr>'
                            + '<td style="text-align: left;">Inv-' + invoices[i].id + '</td>'
                            + '<td style="text-align: center;">' + invoices[i].date + '</td>'
                            + '<td style="text-align: right;">$0.00</td>'
                            + '<td style="text-align: right;">$0.00</td>'
                            + '<td style="text-align: right;">$0.00</td>'
                            + '<td style="text-align: right;">$' + invoices[i].totalOutstanding.toFixed(2) + '</td>'
                            + '<td style="text-align: right;">$' + invoices[i].totalOutstanding.toFixed(2) + '</td>'
                            + '</tr>'
                        );
                        total4 += invoices[i].totalOutstanding;
                    }
                }
                $("#tblAging").append(
                    '<tr>'
                    + '<th colspan="2" style="text-align: center">' + customer.name + '</th>'
                    + '<td style="border-top: black solid 2px; text-align: right">$' + total1.toFixed(2) + '</td>'
                    + '<td style="border-top: black solid 2px; text-align: right">$' + total2.toFixed(2) + '</td>'
                    + '<td style="border-top: black solid 2px; text-align: right">$' + total3.toFixed(2) + '</td>'
                    + '<td style="border-top: black solid 2px; text-align: right">$' + total4.toFixed(2) + '</td>'
                    + '<td style="border-top: black solid 2px; text-align: right">$' + total5.toFixed(2) + '</td>'
                    + '</tr>'
                    +'<tr style="background-color: gray">'
                        +'<td colspan="7"></td>'
                    +'</tr>'
                );
            }
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
            for(var i = 0; i < customers.length; i++){
                $("#agingSelectCustomer").append('<option value="'+customers[i].id+'">'+customers[i].name+'</option>');
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Fail
        }
    });
};

