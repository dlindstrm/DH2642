$(function() {
	//We instantiate our model
	var model = new DinnerModel(1, "2016-01-01", 6);
	model.addDishToMenu(3);
	model.addDishToMenu(1);
	model.addDishToMenu(101);
	
	//And create the needed controllers and views
	var dinnerView = new DinnerView($("#dinnerView"));

	dinnerView.populateView(model);

});