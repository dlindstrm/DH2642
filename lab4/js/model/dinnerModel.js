//DinnerModel Object constructor
var DinnerModel = function(BigOvenRestService) {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu

	this.date = new Date();
	this.guests = 1;
	this.dishes = [];
	this.observers = [];

	this.BigOvenRestService = BigOvenRestService;

	this.setDate = function(date) {
		this.date = date;
		this.notifyObservers({ error: false });
	}

	this.getDate = function() {
		return this.date;
	}

	this.getFormattedDate = function() {
		return this.date.toISOString().substring(0, 10);
	}

	this.setNumberOfGuests = function(num) {
		this.guests = num;
		this.notifyObservers({ error: false });
	}

	// should return 
	this.getNumberOfGuests = function() {
		return this.guests;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		return _.find(this.dishes, function(dish){ return dish.type == type; });
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return this.dishes;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var ingredients = [];
		for(i in this.dishes) {
			for(j in this.dishes[i].ingredients) {
				ingredients.push(this.dishes[i].ingredients[j]);
			}
		}
		return ingredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var ingredients = this.getAllIngredients();
		var price = 0;
		for(i in ingredients) {
			price += ingredients[i].price * this.guests;
		}
		return price;
	}

	this.getDishPrice = function(id) {
		var dish = this.getDish(id);
		var price = 0;
		for(var i=0;i<dish.ingredients.length;i++) {
			price = price + dish.ingredients[i].price * this.guests;
		}
		return price;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var _this = this; 
		this.removeDishFromMenu(id);
		this.dishes.push(this.getDish(id));
		this.notifyObservers({ error: false });
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		this.dishes = _.reject(this.dishes, function(obj){
			return obj.id == id 
		});
		this.notifyObservers({ error: false });
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type, filter) {
		if(filter == null) {
			filter = type;
		}
		var _this = this;
	  this.BigOvenRestService.search(type, filter, function(error, result) {
	  	if(error) {
	  		_this.notifyObservers(
	  			{
	  				error: true,
	  				type: type,
	  				filter: filter,
	  				errorMessage: error
	  			}
	  		);
	  		return;
	  	}

	  	_this.notifyObservers(
	  		{
	  			error: false,
	  			type: type,
	  			filter: filter,
	  			dishes: result
	  		}
	  	)
	  	return;
	  })
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
		var _this = this;
	  this.BigOvenRestService.get(id, function(error, result) {
	  	if(error) {
	  		_this.notifyObservers(
	  			{
	  				error: true,
	  				id: id,
	  				errorMessage: error
	  			}
	  		);
	  		return;
	  	}

	  	_this.notifyObservers(
	  		{
	  			error: false,
	  			id: id,
	  			dish: result
	  		}
	  	)
	  	return;
	  })
	}

	this.addObserver = function(observer) {
		this.observers.push(observer);
	}
	
	this.notifyObservers = function(obj) {
		for(var i = 0; i < this.observers.length; i++) {
			this.observers[i](this, obj);
		}
	}

}