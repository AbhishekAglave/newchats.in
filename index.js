function msg() {

        var br = "%0A";
        var phone = document.getElementById("phone").value.replace(/\s/g, "");
        var msgcontent = document.getElementById("msgbox").value;
        var regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;

        if (phone.length == 0) {
                alert("Mobile number cannot be empty!");
        }
        else if (regex.test(phone)) {
                var link = "https://api.whatsapp.com/send/?phone=91" + phone.slice(-10) + "&text=" + msgcontent;
                window.open(link, "_blank");
        }
        else {
                alert("Invalid Mobile Number!");
        }

}