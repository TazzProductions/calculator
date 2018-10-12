function PTOCaculator(){
    var yearWorked = document.getElementById("yearsWorked").value;
    var weeksWorked = document.getElementById("weeksWorked").value;
    var hoursUsed = document.getElementById("hoursUsed").value;
    var output = document.getElementById("output");
    var totalHours = 40;
    var totalDays = 8;
    var checsPerYear = 26;
    if (yearWorked < 5) {
        var PTOPerCheck = 5;
    }else if (yearsWorked < 10){
        var PTOPerCheck = 6;
    }else{
        var PTOPerCheck = 7;
    }
    var PTOLeft = (checsPerYear * PTOPerCheck) - hoursUsed;
    output.innerHTML = "You have " + PTOLeft + "hours left <br> you have " + PTOLeft / totalDays / totalHours +  " hours left ";
}