var expenses = new Array();
var limit = 6;

function btnSearchClick(){
    var category = ""+$('#selectCategory').val();
    var from = ""+$('#inputFrom').val();
    var to = ""+$('#inputTo').val();
    if(from.length == 0 || to.length == 0){
        alert("Fill from and to please!")
    }
    else {
        if (category == "-1"){
            $.ajax({
                type: 'get',
                url: '/api/expenses/search/from/'+from+'/to/'+to,
                header : {
                    "Content-Type" : "application/json"
                },
                contentType : 'application/json',
                dataType: 'json',
                success: function(res) {
                    expenses = res;
                    render(0,limit-1);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Fail
                    alert("Error");
                }
            });
        }
        else {
            $.ajax({
                type: 'get',
                url: '/api/expenses/search/category/'+category+'/from/'+from+'/to/'+to,
                header : {
                    "Content-Type" : "application/json"
                },
                contentType : 'application/json',
                dataType: 'json',
                success: function(res) {
                    expenses = res;
                    render(0,limit-1);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Fail
                    alert("Error");
                }
            });
        }
    }
}

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
    if(to < expenses.length-1){
        nextStr = 'render('+(to+1)+','+(to+limit)+')';
    }
    else{
        nextStr = 'render('+from+','+to+')';
    }

    $('#tblExpenses').empty();
    for(var i = from; i <= to; i++){
        if(expenses[i] != null){
            $('#tblExpenses').append(
                '<tr>'
                +'<td scope="row">'+expenses[i].date+'</td>'
                +'<td><a href = "/user/expenses/'+expenses[i].id+'">'+expenses[i].no+'</a></td>'
                +'<td>'+expenses[i].categoryExpenses+'</td>'
                +'<td>'+expenses[i].note+'</td>'
                +'<td>'+expenses[i].amount+' R</td>'
                +'<td><i class="fa fa-times-circle" aria-hidden="true" style="color: orangered;" onclick="deleteExpenses('+expenses[i].id+')"></i></td>'
                +'</tr>'
            );
        }
    }

    var pageDes;
    if(to > expenses.length -1){
        pageDes = 'Displaying '+(from+1)+'-'+expenses.length+' of '+expenses.length+' results';
    }
    else{
        pageDes = 'Displaying '+(from+1)+'-'+(to+1)+' of '+expenses.length+' results';
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

function deleteExpenses(i){
    if(confirm("Delete this expenses")){
        $.ajax({
            type: 'delete',
            url: '/api/expenses/delete/'+i,
            header : {
                "Content-Type" : "application/json"
            },
            contentType : 'application/json',
            dataType: 'json',
            success: function() {
                window.location="/user/expenses";
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Fail
            }
        });
    }
}

window.onload = function(){
    $.ajax({
        type: 'get',
        url: '/api/expenses/get',
        header : {
            "Content-Type" : "application/json"
        },
        contentType : 'application/json',
        dataType: 'json',
        success: function(res) {
            expenses = res;
            render(0,limit-1);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Fail
        }
    });
};
