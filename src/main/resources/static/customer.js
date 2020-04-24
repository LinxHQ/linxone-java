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
                console.log(i);
                $("#tblCustomer").append(
                            '<tr>'
                                +'<td style="text-align: center">'+(i+1)+'</td>'
                                +'<th style="text-align: center">'+listCustomer[i].name+'</th>'
                                +'<td style="text-align: center">'+listCustomer[i].registration+'</td>'
                                +'<td style="text-align: center">'+listCustomer[i].type+'</td>'
                                +'<td style="text-align: center">'
                                    +'<a style="color: black" href="/user/customer/detail/'+listCustomer[i].id+'"><i class="fa fa-pencil" aria-hidden="true"></i></a>'
                                    +'<i class="fa fa-trash" aria-hidden="true" style="padding-left: 15px;"></i>'
                               +'</td style="text-align: center">'
                            +'</tr>'
                );
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Fail
        }
    });
};