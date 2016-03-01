//tollbarView Object constructor
var ToolbarView = function (container, model) {

	this.guests = container.find("#tool-guests");
	this.price = container.find("#tool-price");
	this.date = container.find("#tool-date");

	var _this = this;


	var populateView = function(model, args) {
		if(!args) {
			return;
		}
		if(args.data !== "dinner") {
			return;
		}

		_this.guests.html(model.guests);
		_this.price.html(model.getTotalMenuPrice());
		_this.date.html(model.getFormattedDate());
	}

	this.update = function(model, args) {
		populateView(model, args);
	}
	populateView(model, { data: "dinner" });
	model.addObserver(this.update);
}