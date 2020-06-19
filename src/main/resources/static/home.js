var limit = 7;
var invoices = new Array();

window.onload = function(){
    $.ajax({
        type: 'get',
        url: '/api/invoice/get',
        header : {
            "Content-Type" : "application/json"
        },
        contentType : 'application/json',
        dataType: 'json',
        success: function(res) {
            invoices = res;
            render(0,limit-1);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Fail
        }
    });
};

function render(from, to){
    var nextStr;
    var prevStr;

    //set prev
    if(from==0){
        prevStr = 'render('+from+','+to+')';
    }
    else{
        prevStr = 'render('+(from-limit)+','+(from-1)+')';
    }
    //set next
    if(to < invoices.length-1){
        nextStr = 'render('+(to+1)+','+(to+limit)+')';
    }
    else{
        nextStr = 'render('+from+','+to+')';
    }

    $('#tblInvoice').empty();
    for(var i = from; i <= to; i++){
        if(invoices[i] != null){
            $('#tblInvoice').append(
                '<tr>'
                +'<td scope="row">'+invoices[i].date+'</td>'
                +'<th>'+invoices[i].customer.name+'</th>'
                +'<td style="color: green">'+invoices[i].totalPaid+'$</td>'
                +'<td style="color: #ffc107">'+invoices[i].totalOutstanding+'$</td>'
                +'<td><a href="/user/invoice/'+invoices[i].id+'">View detail</a></td>'
                +'</tr>'
            );
        }
    }

    var pageDes;
    if(to > invoices.length -1){
        pageDes = 'Displaying '+(from+1)+'-'+invoices.length+' of '+invoices.length+' results';
    }
    else{
        pageDes = 'Displaying '+(from+1)+'-'+(to+1)+' of '+invoices.length+' results';
    }
    $('#pagination').empty();
    $('#pagination').append(
        '<nav aria-label="Page navigation example">'
        +'<ul class="pagination">'
        +'<li class="page-item">'
        +'<i class="fa fa-backward" aria-hidden="true" onclick="'+prevStr+'"></i>'
        +'</li>'
        +'<li class="page-item ml-2">'
        +pageDes
        +'</li>'
        +'<li class="page-item ml-2">'
        +'<i class="fa fa-forward" aria-hidden="true" onclick="'+nextStr+'"></i>'
        +'</li>'
        +'</ul>'
        +'</nav>'
    );
}