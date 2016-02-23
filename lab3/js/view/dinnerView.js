//DinnerView Object constructor
var DinnerView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dinnerDate = container.find("#dinnerDate");
	this.totalPrice = container.find("#totalPrice");
	this.dishesList = container.find("#dishesList");
	this.model = model;


	this.populate = function(model) {
		this.numberOfGuests.html('');
		this.dinnerDate.html('');
		this.totalPrice.html('');
		this.dishesList.html('');
		this.numberOfGuests.html(this.model.getNumberOfGuests());
		this.dinnerDate.html(this.model.getFormattedDate())
		this.totalPrice.html(this.model.getTotalMenuPrice() + ":-");
		var dishes = this.model.getFullMenu();
		for(var i=0;i<dishes.length;i++) {
			var dish = dishes[i];
			var ingredients = "";
			for(var j=0;j< dish.ingredients.length;j++) {
				ingredients += "<span>" + dish.ingredients[j].quantity + " ";
				ingredients += dish.ingredients[j].unit + " ";
				ingredients += dish.ingredients[j].name + "</span><br/>";
			}

			this.dishesList.append('<div class="card demo-card-header-pic">'+
				'<div style="background-image:url(images/'+dishes[i].image+')" valign="bottom" class="card-header color-white no-border">'+
				dishes[i].name+'</div>'+
  				'<div class="card-content">'+
    			'<div class="card-content-inner">'+
      			'<p class="color-gray">'+ dishes[i].type + '</p>'+
      			'<p>'+ingredients+'</p></div></div>'+
				'<div class="card-footer">'+dishes[i].description + '</div></div>');



		}
	}
	var _this = this;
	this.update = function(model, args) {
		_this.populate(model);
	}
	model.addObserver(this.update);

}
 
