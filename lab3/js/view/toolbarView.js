//tollbarView Object constructor
var ToolbarView = function (container, model) {

	this.guests = container.find("#tool-guests");
	this.price = container.find("#tool-price");


	var populateView = function(model) {
		this.guests.html(model.guests);
		this.price.html(model.getTotalMenuPrice());
	}

	this.update = function(model, args) {
		populateView(model);
	}

	model.addObserver(this.update);
}