function hours() {
    var YearlyPaychecks = 26;

    var inner = document.getElementById('inner').value;
    var outter = document.getElementById('outter');
    var hours;
    if (inner < 5) {
        hours = 5;
    }
    if (inner >= 5) {
        hours = 6;
    }
    if (inner >= 10) {
        hours = 7;
    }
    var PTO = hours * YearlyPaychecks;
    outter.innerHTML = PTO / 40;
    }
    

