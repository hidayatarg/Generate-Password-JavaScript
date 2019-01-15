function randomPassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function generate() {
    // Setting length from the Html any element
    //myform.row_password.value = randomPassword(myform.length.value);

    // Here you can set the password lenght manually
    myform.row_password.value = randomPassword(20);
   
}