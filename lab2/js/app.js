$(function() {
	//We instantiate our model
	var model = new DinnerModel(1, "2016-01-01", 6);
	
	//And create the needed controllers and views
	var dinnerView = new DinnerView($("#dinnerView"));

});