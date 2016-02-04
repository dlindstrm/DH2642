$(function() {
	//We instantiate our model
  var dinners = [];
	var dinner1 = new DinnerModel(1, "2016-01-01", 6);
  dinners.push(dinner1);
	var dinner2 = new DinnerModel(2, "2016-01-02", 8);
  dinners.push(dinner2);
  var dinner3 = new DinnerModel(3, "2016-01-03", 12);
  dinners.push(dinner3);
	//And create the needed controllers and views
  var startView = new StartView($("#startView"), dinners);

	//var dinnerView = new DinnerView($("#dinnerView"));

});