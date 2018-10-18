function invest() {
    event.preventDefault();
    var output = document.getElementById("total_intrest");
    var output2 = document.getElementById("account_total");
    var intial_investment = parseInt(document.getElementById("intrest_rate").value);
    var intrest_rate = parseInt(document.getElementById("time_invested").value);
    var time_invested = parseInt(document.getElementById("time_invested").value);
    var contributions = parseInt(document.getElementById("contributions").value);
    var investment_term = "";
    var selectReturn = document.querySelector('input[name="term"]:checked').value;
    if (selectReturn ==1) {
        investment_term = time_invested;
    } else if (selectReturn ==2){
        investment_term = time_invested / 12;
    }
    var total_contributions = investment_term * contributions;
    var total_intrest = (intrest_rate / 100) * (total_contributions + intial_investment);
    var account_total = total_intrest + total_contributions + intial_investment;
    output.innerHTML = total_intrest;
    output2.innerHTML = account_total;
}
