//DinnerView Object constructor
var DishView = function (container, model) {
	this.id = null;
	this.model = model;
	this.selectButton = container.find("#select-button");
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.ingredientsList = container.find("#ingredientsList");
	this.instructions = container.find("#instructions");
	this.img = container.find(".dish-img");

	this.populateView = function(id) {
		this.id = id;
		this.ingredientsList.html('');
		this.instructions.html('');
		var dish = this.model.getDish(id);
		this.img.html($('<img></img>').attr('src', 'images/' + dish.image));

		for(var i=0;i< dish.ingredients.length;i++) {
			var li = $('<li></li>').addClass('item-content');
			var divMedia = $('<div></<div>').addClass('item-media');
			divMedia.append(dish.ingredients[i].quantity);
			divMedia.append(' ' + dish.ingredients[i].unit);
			var divInner = $('<div></div>').addClass('item-inner');
			var title = $('<div></div>').addClass('item-title').append(dish.ingredients[i].name);
			var price = $('<div></div>').addClass('item-after').append(dish.ingredients[i].price + ':-');
			divInner.append(title,price);
			li.append(divMedia,divInner);
			this.ingredientsList.append(li);
		}
		this.instructions.append(dish.description);
	}
}
