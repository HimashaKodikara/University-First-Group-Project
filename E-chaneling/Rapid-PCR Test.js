
function fillError() {
    var paName = document.getElementById("pN01").value;
    var age = document.getElementById("age01").value;
    var dob = document.getElementById("dOB01").value;
    var mobileN = document.getElementById("mB01").value;
    var nation = document.getElementById("nation01").value;
    var email = document.getElementById("em01").value;
    var flightN = document.getElementById("fN01").value;
    var passN = document.getElementById("passN01").value;

    var errCount = 0;

    if (paName == "") {
        document.getElementById("error01").innerHTML = "Name must be filled";
        document.getElementById("pN01").style.border = "1px solid red";
        errCount++;
    } else {
        document.getElementById("error01").innerHTML = "";
        document.getElementById("pN01").style.border = "";
        errCount = errCount;
    }

    if (age == "") {
        document.getElementById("error02").innerHTML = "Age must be filled";
        document.getElementById("age01").style.border = "1px solid red";
        errCount++;
    } else {
        document.getElementById("error02").innerHTML = "";
        document.getElementById("age01").style.border = "";
        errCount = errCount;
    }

    if (dob == "") {
        document.getElementById("error03").innerHTML = "Date of Birth must be filled";
        document.getElementById("dOB01").style.border = "1px solid red";
        errCount++;
    } else {
        document.getElementById("error03").innerHTML = "";
        document.getElementById("dOB01").style.border = "";
        errCount = errCount;
    }

    if (mobileN == "") {
        document.getElementById("error04").innerHTML = "Mobile Number must be filled";
        document.getElementById("mB01").style.border = "1px solid red";
        errCount++;
    } else {
        document.getElementById("error04").innerHTML = "";
        document.getElementById("mB01").style.border = "";
        errCount = errCount;
    }

    if (nation == "") {
        document.getElementById("error05").innerHTML = "Nationality must be filled";
        document.getElementById("nation01").style.border = "1px solid red";
        errCount++;
    } else {
        document.getElementById("error05").innerHTML = "";
        document.getElementById("nation01").style.border = "";
        errCount = errCount;
    }

    if (email == "") {
        document.getElementById("error06").innerHTML = "E-mail must be filled";
        document.getElementById("em01").style.border = "1px solid red";
        errCount++;
    } else {
        document.getElementById("error06").innerHTML = "";
        document.getElementById("em01").style.border = "";
        errCount = errCount;
    }

    if (flightN == "") {
        document.getElementById("error07").innerHTML = "Flight Number must be filled";
        document.getElementById("fN01").style.border = "1px solid red";
        errCount++;
    } else {
        document.getElementById("error07").innerHTML = "";
        document.getElementById("fN01").style.border = "";
        errCount = errCount;
    }

    if (passN == "") {
        document.getElementById("error08").innerHTML = "Passport Number must be filled";
        document.getElementById("passN01").style.border = "1px solid red";
        errCount++;
    } else {
        document.getElementById("error08").innerHTML = "";
        document.getElementById("passN01").style.border = "";
        errCount = errCount;
    }

    if (errCount > 0) {
        return false;
    }

    else {
        return true;
    }
}