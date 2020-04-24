var listProduct;
var listTax =  new Array();
var listItem = new Array();
var subTotal;
var invoiceCustomer = new Object();
var invoiceDate;
var invoiceDue;
var invoice = new Object();
var totalDiscount;
var totalTax;
var invoiceTotal;
var listPayment = new Array();
var totalPaid;
var outstanding;

function deletePaymentByNumber(number){
    var result = confirm("Are you want to delete this payment?");
    if (result) {
        var idPayment = "#payment" + number;
        $(idPayment).remove();
        change();
    }
};
var paymentLength = 1;
$("#btnAddPayment").click(function(){
    paymentLength ++;
    $("#tblPayment").append('<tr id="payment'+paymentLength+'">'
        +'<td><i class="fa fa-trash" aria-hidden="true" onclick="deletePaymentByNumber('+paymentLength+')"></i></td>'
        +'<td>R-20190000035</td>'
        +'<td><input type="date" name="" id="inputPaymentDate'+paymentLength+'" class="form-control" value="" required="required" title=""></td>'
        +'<td>'
        +'<select class="form-control" name="" id="selectPaymentMethod'+paymentLength+'">'
        +'<option>Master Card</option>'
        +'<option>Visa Card</option>'
        +'<option>Cash</option>'
        +'<option>Check</option>'
        +'<option>Other</option>'
        +'</select>'
        +'</td>'
        +'<td>'
        +'<input type="number" name="" id="inputPaymentAmount'+paymentLength+'" class="form-control" value="0" required="required" onchange="change();"/>'
        +'</td>'
        +'<td>'
        +'<textarea name="" id="inputPaymentNote'+paymentLength+'" class="form-control" rows="3" required="required" style="height: 50px;"></textarea>'
        +'</td>'
        +'</tr>');
});

function deleteDiscountByNumber(number){
    var result = confirm("Are you want to delete this discount?");
    if (result) {
        var discount = "#discount"+number;
        $(discount).remove();
        change();
    }
}

function deleteTaxByNumber(number){
    var result = confirm("Are you want to delete this tax?");
    if (result) {
        var tax = "#tax" + number;
        $(tax).remove();
        change();
    }
}

function saveInvoice(){

    // Create new invoice
    invoice = {
        customer : {
            id : invoiceCustomer.id
        },
        date : invoiceDate,
        // Create invoice total
        subtotal : subTotal,
        totalAfterDiscount : subTotal - totalDiscount,
        totalAfterTax : subTotal - totalDiscount + totalTax,
        totalPaid : totalPaid,
        totalOutstanding : outstanding
    }
    var invoiceJson = JSON.stringify(invoice);
    $.ajax({
        type: 'POST',
        url: '/api/invoice/create',
        header : {
            "Content-Type" : "application/json"
        },
        contentType : 'application/json',
        data : invoiceJson,
        dataType: 'json',
        success: function(newInvoice) {
            var idNewInvoice = newInvoice.id;
            // Create new list item
            for(var i = 1; i <= index; i++){
                var idItem = "item"+i;
                if(document.getElementById(idItem) != null){
                    var idProductStr = "#idProductItem"+i;
                    var idProduct = $(idProductStr).val();
                    var product;
                    for(var p = 0; p< listProduct.length; p++){
                        if(listProduct[p].id == idProduct){
                            product = listProduct[p];
                        }
                    }
                    var idInputItemUnitPrice = "#inputItemUnitPrice"+i;
                    var idInputItemQuantity = "#inputItemQuantity"+i;
                    var unitPrice = $(idInputItemUnitPrice).val() ;
                    var quantity = $(idInputItemQuantity).val() ;
                    var total = unitPrice * quantity;
                    var item = {
                        invoice : {
                            id : newInvoice.id
                        },
                        catalogProduct : product,
                        quantity : quantity,
                        value : unitPrice,
                        total : total
                    }
                    listItem.push(item);
                }
            }
            var listItemJson = JSON.stringify(listItem);
            $.ajax({
                type: 'POST',
                url: '/api/invoiceItem/create/list',
                header : {
                    "Content-Type" : "application/json"
                },
                contentType : 'application/json',
                data : listItemJson,
                dataType: 'json',
                success: function(newListItem) {
                    alert("Success");
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Fail
                    alert("Fail");
                }

            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Fail
            alert("Fail");
        }
    });
}

function change() {

    // Change Item
    subTotal = 0;
    for (var i = 1; i <= index; i++) {
        var idItem = "item" + i;
        if (document.getElementById(idItem) != null) {
            var idInputItemUnitPrice = "#inputItemUnitPrice" + i;
            var idInputItemQuantity = "#inputItemQuantity" + i;
            var unitPrice = $(idInputItemUnitPrice).val();
            var quantity = $(idInputItemQuantity).val();
            var totalOfItem = unitPrice * quantity;
            subTotal += totalOfItem;
            var idInputItemTotal = "inputItemTotal" + i;
            document.getElementById(idInputItemTotal).setAttribute("value", totalOfItem.toFixed(2));
        }
    }
    document.getElementById("inputSubTotal").setAttribute("value", subTotal.toFixed(2));

    // Change Discount
    totalDiscount = 0;
    for (var i = 1; i <= discountLength; i++) {
        var idDiscount = "discount" + i;
        if (document.getElementById(idDiscount) != null) {
            var idDiscountAmount = "#discountAmount"+i;
            totalDiscount += $(idDiscountAmount).val();
        }
    }

    // Change Tax
    totalTax = 0;
    for (var i = 1; i <= taxLength; i++) {
        var idTax = "tax" + i;
        if (document.getElementById(idTax) != null) {
            var idTaxSelect = "#taxSelect" + i;
            var id = $(idTaxSelect).val();
            var valueOfTax;
            for(var j = 0; j < listTax.length; j++){
                if(listTax[j].id == id){
                    valueOfTax = listTax[j].value;
                }
            }
            var value = (subTotal-totalDiscount)*valueOfTax;
            var idTaxValue = "taxValue" + i;
            document.getElementById(idTaxValue).setAttribute("value", value.toFixed(2));
            totalTax += value;
        }
    }

    // Change total
    total = subTotal - totalDiscount + totalTax;
    document.getElementById("total").setAttribute("value", total.toFixed(2));

    // Change payment
    var totalPayment = 0;
    for (var i = 1; i <= paymentLength; i++) {
        var idpayment = "payment" + i;
        if (document.getElementById(idpayment) != null) {
            var idInputAmount = "#inputPaymentAmount" + i;
            totalPayment += parseFloat($(idInputAmount).val());
        }
    }

    //Change Paid
    totalPaid = totalPayment;
    document.getElementById("inputPaid").setAttribute("value", totalPaid);
    //Change Outstanding
    outstanding = (total-totalPayment).toFixed(2);
    document.getElementById("inputOutstanding").setAttribute("value", outstanding);
}

function deleteItemByNumber(number){
    var result = confirm("Are you want to delete this item?");
    if (result) {
        var idItem = "#item" + number;
        $(idItem).remove();
        change();
    }
};

function insertProductById(idProduct, itemNumber){
    console.log(idProduct);
    var product;
    for(var i = 0; i< listProduct.length; i++){
        if(listProduct[i].id === idProduct){
            product = listProduct[i];
        }
    }
    document.getElementById("idProductItem"+itemNumber).setAttribute("value", product.id);
    document.getElementById("inputItemName"+itemNumber).setAttribute("value", product.name);
    document.getElementById("inputItemUnitPrice"+itemNumber).setAttribute("value", product.price);
    document.getElementById("inputItemTotal"+itemNumber).setAttribute("value", product.price);
    change();
}

window.onload = function(){
    $.ajax({
        type: 'get',
        url: '/api/catalogProduct/get',
        header : {
            "Content-Type" : "application/json"
        },
        contentType : 'application/json',
        dataType: 'json',
        success: function(products) {
            listProduct = products;
            for (var i = 0; i < products.length; i++){
                $("#listProduct1").append('<tr><td>'+products[i].name+'</td><td>'+products[i].price+'</td><td ><a href="#" onclick="insertProductById('+products[i].id+',1)" data-dismiss="modal">insert</a></td></tr>');
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
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Fail
        }
    });
};

function btnSaveCustomerClick(){
    var idCustomer = document.getElementById("customerIdSelect").value;
    $.ajax({
        type: 'get',
        url: '/api/customer/get/'+idCustomer,
        header : {
            "Content-Type" : "application/json"
        },
        contentType : 'application/json',
        dataType: 'json',
        success: function(customer) {
            invoiceCustomer = customer;
            $("#customerName").html(customer.name);

            $.ajax({
                type: 'get',
                url: '/api/address/getByIDCustomer/'+idCustomer,
                header : {
                    "Content-Type" : "application/json"
                },
                contentType : 'application/json',
                dataType: 'json',
                success: function(addresses) {
                    var address = addresses[0];
                    var htmlAddress = "ADDRESS: City: " + address.city + " Phone: " + address.phone1 + " Website: " + address.websiteUrl;
                    $("#customerAddress").html(htmlAddress);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Fail
                }
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Fail
        }
    });
}

function btnSaveDateClick(){
    var date = document.getElementById("inputDate").value;
    if(date == ""){
        date = "Enter date";
    }
    invoiceDate = date;
    $("#date").html(date);
}

function btnSaveTermClick(){
    var selectTerm = document.getElementById("selectTerm").value;
    switch (selectTerm)
    {
        case 0 : {
            invoiceDue = invoiceDate;
            break;
        }
        case 1 : {
            invoiceDue
            break;
        }
        case 2 : {

            break;
        }
        default : {

        }
    }
    invoiceDue = term;
    $("#date").html(date);
}

$('#customerModal').on('show.bs.modal', event => {
    var button = $(event.relatedTarget);
    var modal = $(this);
    // Use above variables to manipulate the DOM

});
$('#billingAddressModal').on('show.bs.modal', event => {
    var button = $(event.relatedTarget);
    var modal = $(this);
    // Use above variables to manipulate the DOM

});
$('#contactModal').on('show.bs.modal', event => {
    var button = $(event.relatedTarget);
    var modal = $(this);
    // Use above variables to manipulate the DOM

});
$('#subjectModal').on('show.bs.modal', event => {
    var button = $(event.relatedTarget);
    var modal = $(this);
    // Use above variables to manipulate the DOM

});
$('#itemModal').on('show.bs.modal', event => {
    var button = $(event.relatedTarget);
    var modal = $(this);
    // Use above variables to manipulate the DOM

});

var index = 1;

$("#btnAddItem").click(function(){
    index += 1;
    $("#tblItem").append(
        '<tr id="item'+index+'">'
        +'<td><input type="hidden" id="idProductItem'+index+'" value="0"/>'
        +'<i class="fa fa-trash pt-2" aria-hidden="true" style="float: left;" title="Delete item" onclick="deleteItemByNumber('+index+')"></i>'
        +'<div class="col-sm-8" style="float: left;">'
        +'<input type="text" name="" id="inputItemName'+index+'" class="form-control" value="" required="required" >'
        +'</div>'
        +'<a data-toggle="modal" data-target="#itemModal'+index+'">'
        +'<i class="fa fa-list pt-2" aria-hidden="true" title="Select from list"></i>'
        +'</a>'
        +'<div class="modal fade" id="itemModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">'
        +'<div class="modal-dialog" role="document">'
        +'<div class="modal-content">'
        +'<div class="modal-header">'
        +'<h5 class="modal-title">Item template</h5>'
        +'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
        +'<span aria-hidden="true">&times;</span>'
        +'</button>'
        +'</div>'
        +'<div class="modal-body">'
        +'<div class="container-fluid">'
        +'<div class="row">'
        +'<div class="form-group">'
        +'<input type="search" name="" id="input" class="form-control" value="" required="required" title="" style="float: left; border-radius: 20px; height: 90%;" placeholder="Search">'
        +'</div>'
        +'<br>'
        +'<table class="table table-striped" style="border: outset;" >'
        +'<thead>'
        +'<tr style="border-bottom: outset;">'
        +'<th scope="col">Item</th>'
        +'<th scope="col">Unit Price</th>'
        +'<th scope="col"></th>'
        +'</tr>'
        +'</thead>'
        +'<tbody id="listProduct'+index+'">'
        +'</tbody>'
        +'</table>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'</td>'
        +'<td><input type="number" name="" id="inputItemQuantity'+index+'" class="form-control" value="1" required="required" onchange="change();" ></td>'
        +'<td><input type="text" name="" id="inputItemUnitPrice'+index+'" class="form-control" value="0" required="required"  disabled></td>'
        +'<td><input type="text" name="" id="inputItemTotal'+index+'" class="form-control" value="0" required="required"  disabled></td>'
        +'</tr>'
    );
    var idListProduct = "#listProduct"+index;
    for (var i = 0; i < listProduct.length; i++){
        $(idListProduct).append('<tr><td>'+listProduct[i].name+'</td><td>'+listProduct[i].price+'</td><td ><a href="#" onclick="insertProductById('+listProduct[i].id+','+index+')" data-dismiss="modal">insert</a></td></tr>');
    }
});

var discountLength = 0;
$("#btnAddDiscount").click(function(){
    discountLength ++;
    $("#tblDiscount").append(
        '<tr id="discount'+discountLength+'">'
        +'<td>'
        +'<i class="fa fa-trash pt-2" aria-hidden="true" onclick="deleteDiscountByNumber('+discountLength+')"></i>'
        +'</td>'
        +'<td>'
        +'<input type="text" id="discountName'+discountLength+'" class="form-control" required="required" placeholder="Discount"/>'
        +'</td>'
        +'<td>'
        +'<input type="number" id="discountAmount'+discountLength+'" class="form-control" value="0" required="required" onchange="change()">'
        +'</td>'
        +'</tr>');
});

var taxLength = 0;
$("#btnAddTax").click(function(){
    taxLength++;
    $("#tblTax").append(
        '<tr id="tax'+taxLength+'">'
        +'<td>'
        +'<i class="fa fa-trash pt-2" aria-hidden="true" onclick="deleteTaxByNumber('+taxLength+')"></i>'
        +'</td>'
        +'<td style="width: 46%;">'
        +'<select id="taxSelect'+taxLength+'" class="form-control" required="required" onchange="change()">'
        +'<option value="0">--</option>'
        +'</select>'
        +'</td>'
        +'<td>'
        +'<input type="number" id="taxValue'+taxLength+'" class="form-control" value="0" required="required" disabled>'
        +'</td>'
        +'</tr>'
    );
    var idTax = "#taxSelect"+taxLength;
    for(var i = 0; i < listTax.length; i++){
        $(idTax).append(
            '<option value="'+listTax[i].id+'">'+listTax[i].name+'</option>'
        );
    }
});