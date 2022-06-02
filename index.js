function msg() {
        const phone = document.getElementById("phone").value.replace(/\s/g, "");
        const msgcontent = document.getElementById("msgbox").value;
        const regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;

        if (phone.length == 0) {
                alert("Mobile number cannot be empty!");
        }
        else if (regex.test(phone)) {
                const link = "https://api.whatsapp.com/send/?phone=91" + phone.slice(-10) + "&text=" + msgcontent;
                window.open(link, "_blank");
        }
        else {
                alert("Invalid Mobile Number!");
        }
}
document.querySelector('#form').addEventListener('submit', msg);


const countEl = document.getElementById("count");

countvisits();
function countvisits() {
  fetch("https://api.countapi.xyz/update/newchats.in/newchats.in/?amount=1")
  .then((res) => res.json())
  .then((res) => {
    countEl.textContent = res.value;
  });
}