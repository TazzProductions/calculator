function invest() {
    event.preventDefault();
    var outputA = document.getElementById("total_intrest");
    var outputB = document.getElementById("account_total");
    var InitalInvestment = parseInt(document.getElementById("intrest_rate").value);
    var InvestmentRate = parseInt(document.getElementById("time_invested").value);
    var TimeInvested = parseInt(document.getElementById("time_invested").value);
    var additional = parseInt(document.getElementById("additional").value);
    var InvestmentTerm = "";
    var Return = document.querySelector('input[name="term"]:checked').value;
    if (Return ==1) {
        InvestmentTerm = TimeInvested;
    } else if (Return ==2){
        InvestmentTerm = TimeInvested / 12;
    }
    var total_additional = InvestmentTerm * additional;
    var total_intrest = (InvestmentRate / 100) * (total_additional + InitalInvestment);
    var account_total = total_intrest + total_additional + InitalInvestment;
    outputA.innerHTML = total_intrest;
    outputB.innerHTML = account_total;
}
