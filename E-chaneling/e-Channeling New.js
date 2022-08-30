

function error01() {
    var dName = document.forms["form001"]["doctorName"].value;
    var special = document.forms["form001"]["specialization"].value;

    if (dName == "") {
        alert("Please. Choose your docter.");
        return false;
    }

    if (special == "") {
        alert("Please. Choose Specialization.");
        return false;
    }
}

function mainSwitch() {
    var selection01 = document.getElementById("selection").value;

    switch (selection01) {
        case "1": {
            document.getElementById("form01").style.display = "block";
            document.getElementById("form02").style.display = "none";
            document.getElementById("form03").style.display = "none";
            document.getElementById("form04").style.display = "none";
            break;
        }
        case "2": {
            document.getElementById("form02").style.display = "block";
            document.getElementById("form01").style.display = "none";
            document.getElementById("form03").style.display = "none";
            document.getElementById("form04").style.display = "none";
            break;
        }
        case "3": {
            document.getElementById("form03").style.display = "block";
            document.getElementById("form01").style.display = "none";
            document.getElementById("form02").style.display = "none";
            document.getElementById("form04").style.display = "none";
            break;
        }
        case "4": {
            document.getElementById("form04").style.display = "block";
            document.getElementById("form01").style.display = "none";
            document.getElementById("form02").style.display = "none";
            document.getElementById("form03").style.display = "none";
            break;
        }
    }
}

function error02() {
    var prName = document.forms["form002"]["provinceName"].value;
    var rNum = document.getElementById("refNo").value;

    if (prName == "") {
        alert("Please. Choose your Province.");
        return false;
    }

    if (rNum == "") {
        alert("Please. Enter the Refer Number of your test report.");
        return false;
    }
}

function prSwitch01() {
    var selection02 = document.getElementById("prName01").value;

    switch (selection02) {
        case "14": {
            document.getElementById("np01").style.display = "block";
            document.getElementById("sp01").style.display = "none";
            document.getElementById("ep01").style.display = "none";
            document.getElementById("wp01").style.display = "none";
            document.getElementById("ncp01").style.display = "none";
            document.getElementById("cp01").style.display = "none";
            document.getElementById("sgp01").style.display = "none";
            document.getElementById("nwp01").style.display = "none";
            document.getElementById("up01").style.display = "none";
            break;
        }
        case "15": {
            document.getElementById("sp01").style.display = "block";
            document.getElementById("np01").style.display = "none";
            document.getElementById("ep01").style.display = "none";
            document.getElementById("wp01").style.display = "none";
            document.getElementById("ncp01").style.display = "none";
            document.getElementById("cp01").style.display = "none";
            document.getElementById("sgp01").style.display = "none";
            document.getElementById("nwp01").style.display = "none";
            document.getElementById("up01").style.display = "none";
            break;
        }
        case "16": {
            document.getElementById("ep01").style.display = "block";
            document.getElementById("sp01").style.display = "none";
            document.getElementById("np01").style.display = "none";
            document.getElementById("wp01").style.display = "none";
            document.getElementById("ncp01").style.display = "none";
            document.getElementById("cp01").style.display = "none";
            document.getElementById("sgp01").style.display = "none";
            document.getElementById("nwp01").style.display = "none";
            document.getElementById("up01").style.display = "none";
            break;
        }
        case "24": {
            document.getElementById("wp01").style.display = "block";
            document.getElementById("sp01").style.display = "none";
            document.getElementById("ep01").style.display = "none";
            document.getElementById("np01").style.display = "none";
            document.getElementById("ncp01").style.display = "none";
            document.getElementById("cp01").style.display = "none";
            document.getElementById("sgp01").style.display = "none";
            document.getElementById("nwp01").style.display = "none";
            document.getElementById("up01").style.display = "none";
            break;
        }
        case "25": {
            document.getElementById("ncp01").style.display = "block";
            document.getElementById("sp01").style.display = "none";
            document.getElementById("ep01").style.display = "none";
            document.getElementById("wp01").style.display = "none";
            document.getElementById("np01").style.display = "none";
            document.getElementById("cp01").style.display = "none";
            document.getElementById("sgp01").style.display = "none";
            document.getElementById("nwp01").style.display = "none";
            document.getElementById("up01").style.display = "none";
            break;
        }
        case "26": {
            document.getElementById("cp01").style.display = "block";
            document.getElementById("sp01").style.display = "none";
            document.getElementById("ep01").style.display = "none";
            document.getElementById("wp01").style.display = "none";
            document.getElementById("ncp01").style.display = "none";
            document.getElementById("np01").style.display = "none";
            document.getElementById("sgp01").style.display = "none";
            document.getElementById("nwp01").style.display = "none";
            document.getElementById("up01").style.display = "none";
            break;
        }
        case "30": {
            document.getElementById("sgp01").style.display = "block";
            document.getElementById("sp01").style.display = "none";
            document.getElementById("ep01").style.display = "none";
            document.getElementById("wp01").style.display = "none";
            document.getElementById("ncp01").style.display = "none";
            document.getElementById("cp01").style.display = "none";
            document.getElementById("np01").style.display = "none";
            document.getElementById("nwp01").style.display = "none";
            document.getElementById("up01").style.display = "none";
            break;
        }
        case "31": {
            document.getElementById("nwp01").style.display = "block";
            document.getElementById("sp01").style.display = "none";
            document.getElementById("ep01").style.display = "none";
            document.getElementById("wp01").style.display = "none";
            document.getElementById("ncp01").style.display = "none";
            document.getElementById("cp01").style.display = "none";
            document.getElementById("sgp01").style.display = "none";
            document.getElementById("np01").style.display = "none";
            document.getElementById("up01").style.display = "none";
            break;
        }
        case "32": {
            document.getElementById("up01").style.display = "block";
            document.getElementById("sp01").style.display = "none";
            document.getElementById("ep01").style.display = "none";
            document.getElementById("wp01").style.display = "none";
            document.getElementById("ncp01").style.display = "none";
            document.getElementById("cp01").style.display = "none";
            document.getElementById("sgp01").style.display = "none";
            document.getElementById("nwp01").style.display = "none";
            document.getElementById("np01").style.display = "none";
            break;
        }
    }
}

function error04() {
    var aTest = document.forms["form004"]["testType01"].value;
    var pName = document.forms["form004"]["provinceName"].value;
    var hName = document.forms["form004"]["appTime02"].value;

    if (aTest == "") {
        alert("Please. Choose your Test.");
        return false;
    }

    if (pName == "") {
        alert("Please. Choose your province.");
        return false;
    }

    if (hName == "") {
        alert("Please. Choose your appointment time.");
        return false;
    }
}

function prSwitch02() {
    var selection02 = document.getElementById("prName02").value;

    switch (selection02) {
        case "14": {
            document.getElementById("np02").style.display = "block";
            document.getElementById("sp02").style.display = "none";
            document.getElementById("ep02").style.display = "none";
            document.getElementById("wp02").style.display = "none";
            document.getElementById("ncp02").style.display = "none";
            document.getElementById("cp02").style.display = "none";
            document.getElementById("sgp02").style.display = "none";
            document.getElementById("nwp02").style.display = "none";
            document.getElementById("up02").style.display = "none";
            break;
        }
        case "15": {
            document.getElementById("sp02").style.display = "block";
            document.getElementById("np02").style.display = "none";
            document.getElementById("ep02").style.display = "none";
            document.getElementById("wp02").style.display = "none";
            document.getElementById("ncp02").style.display = "none";
            document.getElementById("cp02").style.display = "none";
            document.getElementById("sgp02").style.display = "none";
            document.getElementById("nwp02").style.display = "none";
            document.getElementById("up02").style.display = "none";
            break;
        }
        case "16": {
            document.getElementById("ep02").style.display = "block";
            document.getElementById("sp02").style.display = "none";
            document.getElementById("np02").style.display = "none";
            document.getElementById("wp02").style.display = "none";
            document.getElementById("ncp02").style.display = "none";
            document.getElementById("cp02").style.display = "none";
            document.getElementById("sgp02").style.display = "none";
            document.getElementById("nwp02").style.display = "none";
            document.getElementById("up02").style.display = "none";
            break;
        }
        case "24": {
            document.getElementById("wp02").style.display = "block";
            document.getElementById("sp02").style.display = "none";
            document.getElementById("ep02").style.display = "none";
            document.getElementById("np02").style.display = "none";
            document.getElementById("ncp02").style.display = "none";
            document.getElementById("cp02").style.display = "none";
            document.getElementById("sgp02").style.display = "none";
            document.getElementById("nwp02").style.display = "none";
            document.getElementById("up02").style.display = "none";
            break;
        }
        case "25": {
            document.getElementById("ncp02").style.display = "block";
            document.getElementById("sp02").style.display = "none";
            document.getElementById("ep02").style.display = "none";
            document.getElementById("wp02").style.display = "none";
            document.getElementById("np02").style.display = "none";
            document.getElementById("cp02").style.display = "none";
            document.getElementById("sgp02").style.display = "none";
            document.getElementById("nwp02").style.display = "none";
            document.getElementById("up02").style.display = "none";
            break;
        }
        case "26": {
            document.getElementById("cp02").style.display = "block";
            document.getElementById("sp02").style.display = "none";
            document.getElementById("ep02").style.display = "none";
            document.getElementById("wp02").style.display = "none";
            document.getElementById("ncp02").style.display = "none";
            document.getElementById("np02").style.display = "none";
            document.getElementById("sgp02").style.display = "none";
            document.getElementById("nwp02").style.display = "none";
            document.getElementById("up02").style.display = "none";
            break;
        }
        case "30": {
            document.getElementById("sgp02").style.display = "block";
            document.getElementById("sp02").style.display = "none";
            document.getElementById("ep02").style.display = "none";
            document.getElementById("wp02").style.display = "none";
            document.getElementById("ncp02").style.display = "none";
            document.getElementById("cp02").style.display = "none";
            document.getElementById("np02").style.display = "none";
            document.getElementById("nwp02").style.display = "none";
            document.getElementById("up02").style.display = "none";
            break;
        }
        case "31": {
            document.getElementById("nwp02").style.display = "block";
            document.getElementById("sp02").style.display = "none";
            document.getElementById("ep02").style.display = "none";
            document.getElementById("wp02").style.display = "none";
            document.getElementById("ncp02").style.display = "none";
            document.getElementById("cp02").style.display = "none";
            document.getElementById("sgp02").style.display = "none";
            document.getElementById("np02").style.display = "none";
            document.getElementById("up02").style.display = "none";
            break;
        }
        case "32": {
            document.getElementById("up02").style.display = "block";
            document.getElementById("sp02").style.display = "none";
            document.getElementById("ep02").style.display = "none";
            document.getElementById("wp02").style.display = "none";
            document.getElementById("ncp02").style.display = "none";
            document.getElementById("cp02").style.display = "none";
            document.getElementById("sgp02").style.display = "none";
            document.getElementById("nwp02").style.display = "none";
            document.getElementById("np02").style.display = "none";
            break;
        }
    }
}