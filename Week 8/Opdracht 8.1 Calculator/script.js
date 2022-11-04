function multiply() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal1 < 0 || getal1 == 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    } 
    else if (getal2 < 0 || getal2 == 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    }
    else {
        var antwoord = getal1 * getal2;
        document.getElementById("antwoord").innerHTML = "Het antwoord is:" + antwoord;
    }
}
function divide() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal1 < 0 || getal1 == 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    } 
    else if (getal2 < 0 || getal2 == 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    }
    else {
        var antwoord = getal1 / getal2;
        document.getElementById("antwoord").innerHTML = "Het antwoord is:" + antwoord;
    }
}

function add() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal1 < 0 || getal1 == 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    } 
    else if (getal2 < 0 || getal2 == 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    }
    else {
        var antwoord = +getal1 + +getal2;
        document.getElementById("antwoord").innerHTML = "Het antwoord is:" +  antwoord;
    }
}

function minus() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal1 < 0 || getal1 == 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    } 
    else if (getal2 < 0 || getal2 == 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    }
    else {
        var antwoord = getal1 - getal2;
        document.getElementById("antwoord").innerHTML = "Het antwoord is:" +  antwoord;
    }
}



