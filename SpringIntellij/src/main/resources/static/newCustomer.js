

function btnSaveClick(){
    var name = $("#inputName").val();
    var website = $("#inputWebsite").val();
    var registration = $("#inputRegistration").val();
    var type = $("#selectType").val();
    var line1 = $("#inputAddress1").val();
    var line2 = $("#inputAddress2").val();
    var city = $("#inputCity").val();
    var province = $("#inputProvince").val();
    var country = $("#selectCountry").val();
    var postalCode = $("#inputPostalCode").val();
    var firstName = $("#inputFirstName").val();
    var lastName = $("#inputLastName").val();
    var email = $("#inputEmail").val();
    var phone = $("#inputOfficePhone").val();
    var mobie = $("#inputMobie").val();

    if((name !== "")&&(line1 !== "")&&(firstName !== "")&&(lastName !== "")){
        var customer = {
            name : name,
            registration : registration,
            type : type
        }

        var customerJson = JSON.stringify(customer);
        $.ajax({
            type: 'POST',
            url: '/api/customer/create',
            header : {
                "Content-Type" : "application/json"
            },
            contentType : 'application/json',
            data : customerJson,
            dataType: 'json',
            success: function(newCustomer) {
                var address = {
                    line1 : line1,
                    line2 : line2,
                    city : city,
                    country : country,
                    province : province,
                    postalCode : postalCode,
                    websiteUrl : website,
                    customer : newCustomer
                }
                var addressJson = JSON.stringify(address);
                $.ajax({
                    type: 'POST',
                    url: '/api/address/create',
                    header : {
                        "Content-Type" : "application/json"
                    },
                    contentType : 'application/json',
                    data : addressJson,
                    dataType: 'json',
                    success: function(newAddress) {
                        var contact = {
                            customer : newCustomer,
                            firstName : firstName,
                            lastName : lastName,
                            officePhone : phone,
                            mobie : mobie,
                            email1 : email
                        }
                        var contactJson = JSON.stringify(contact);
                        $.ajax({
                            type: 'POST',
                            url: '/api/customerContact/create',
                            header : {
                                "Content-Type" : "application/json"
                            },
                            contentType : 'application/json',
                            data : contactJson,
                            dataType: 'json',
                            success: function(newContact) {
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

            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Fail
                alert("Fail");
            }
        });
    }
    else{
        alert("You must fill out the fields: Name, Address Line 1, FirstName, LastName.");
    }

}