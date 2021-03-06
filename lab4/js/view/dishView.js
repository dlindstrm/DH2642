//DinnerView Object constructor
var DishView = function (container, model) {
	this.model = model;
	this.selectButton = container.find("#select-button");
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.ingredientsList = container.find("#ingredientsList");
	this.instructions = container.find("#instructions");
	this.img = container.find(".dish-img");
	this.loadingscreen = container.find("#loading-screen");
	this.content = container.find("#content");
	this.error = container.find("#error");

	this.populate = function(model, args) {
		if(!args) {
			return;
		}
		if(args.data !== "dish") {
			return;
		}

		this.loadingscreen.css("display", "none");
		
		if(args.error) {
			this.error.html(args.errorMessage);
			this.error.css("display", "block");
			this.content.css("display", "none");
			return;
		}
		
		this.error.css("display", "none");
		this.content.css("display", "block");
		
		this.ingredientsList.html('');
		this.instructions.html('');
		var dish = args.dish;
		this.img.html($('<img></img>').attr('src', dish.image));

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

	this.getDish = function(id) {
		this.model.getDish(id);
		this.loadingscreen.css("display", "block");
	}

	var _this = this;
  this.update = function(model, args) {
    _this.populate(model, args);
  }
  model.addObserver(this.update);
}
