// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource, _) {

  var date = new Date();
  var guests = 1;
  var dishes = [];

  this.setDate = function(d) {
    date = d;
  }

  this.getDate = function() {
    return date;
  }

  this.setNumberOfGuests = function(num) {
    guests = num;
  }

  // should return 
  this.getNumberOfGuests = function() {
    return guests;
  }

  //Returns the dish that is on the menu for selected type 
  this.getSelectedDish = function(type) {
    return _.find(dishes, function(dish){ return dish.Category == type; });
  }

  //Returns all the dishes on the menu.
  this.getFullMenu = function() {
    return dishes;
  }

  //Returns all ingredients for all the dishes on the menu.
  this.getAllIngredients = function() {
    var ingredients = [];
    for(i in dishes) {
      for(j in dishes[i].Ingredients) {
        ingredients.push(dishes[i].Ingredients[j]);
      }
    }
    return ingredients;
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {
    var ingredients = this.getAllIngredients();
    var price = 0;
    for(i in ingredients) {
      price += ingredients[i].Quantity * guests;
    }
    return price;
  }

  this.getDishPrice = function(id) {
    var dish = _.find(dishes, function(dish){ return dish.RecipeID == id; });
    var price = 0;
    for(var i=0;i<dish.Ingredients.length;i++) {
      price = price + dish.Ingredients[i].Quantity * guests;
    }
    return price;
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(id) {
    this.removeDishFromMenu(id);
    var _this = this;
    this.Dish.get({id:id}, function(data){
       dishes.push(data)
     },function(data){
      console.log("Could not add dish to dinner, possible wrong id");
     });
  }

  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
    dishes = _.reject(dishes, function(obj){
      return obj.RecipeID == id 
    });
  }

  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'r02x0R09O76JMCMc4nuM0PJXawUHpBUL'});
  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'r02x0R09O76JMCMc4nuM0PJXawUHpBUL'}); 


  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});