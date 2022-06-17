document.querySelector("form").addEventListener("submit", validateInfo);
document.querySelector("btn").addEventListener("click", otpBtn);

function otpBtn(event){
    
    var userName = document.querySelector("#name").value;
    var userCvv = document.querySelector("#cvv").value;
    var usercrdNmbr = document.querySelector("#crdNmbr").value;
    var date = document.querySelector("#date").value;
    if(userName != "" && usercrdNmbr != "" && userCvv != "" && date != ""){
        alert("Otp has been send to your registered mobile number");
    }
    else{
        alert("Name must be filled out");
    }
}
function validateInfo(event) {
    event.preventDefault();

    var userName = document.querySelector("#name").value;
    var userCvv = document.querySelector("#cvv").value;
    var usercrdNmbr = document.querySelector("#crdNmbr").value;
    var date = document.querySelector("#date").value;
    if (userName == "") {
        alert("Name must be filled out");
    }

    else if (usercrdNmbr == "") {
        alert("Card number must be filled out");
    }

    else if (userCvv == "") {
        alert("CVV must be filled out");
    }

    else if (date == "") {
        alert("Date must be filled out");
    }

    else if (userName != "" && usercrdNmbr != "" && userCvv != "" && date != "") {
        alert("Payment Successfull");
        window.location.href = "index.html";
       
    }
};