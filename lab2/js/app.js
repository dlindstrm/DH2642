$(function() {
	//We instantiate our model
	var model = new DinnerModel(1, "2016-01-01", 6);
  console.log(model.getNumberOfGuests());
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));

});