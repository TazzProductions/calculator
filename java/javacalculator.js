// 
function calculate () {
  var money = parseInt($('#money_to_invest').val());
  var years = parseInt($('#years').val());
  var total = money * Math.pow(1.1, years);

	$('#years_text').text(years);
  $('#money_in_the_bank').text(Math.floor(total));
}