//tollbarView Object constructor
var ToolbarView = function (container, model) {

	this.guests = container.find("#tool-guests");
	this.price = container.find("#tool-price");
	this.date = container.find("#tool-date");

	var _this = this;


	var populateView = function(model) {
		_this.guests.html(model.guests);
		_this.price.html(model.getTotalMenuPrice());
		var date = model.getDate();
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		if(m<10){
			m = "0"+m;
		}
		var d = date. getDate();
		_this.date.html(y + '-' + m + '-' + d);
	}

	this.update = function(model, args) {
		populateView(model);
	}
	populateView(model);
	model.addObserver(this.update);
}