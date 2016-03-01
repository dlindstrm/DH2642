//DishController Object constructor
var DishController = function (view, navView, model) {
  this.navView = navView;
  this.view = view;

  view.selectButton.click(function(e) {
    e.preventDefault();
    model.addDishToMenu(view.id);
    window.location.hash = "#create";
  });

  this.init = function(dishId) {
    $('#dishView').css('display', 'block');
    $('#toolbarView').css('display', 'block');
  	this.view.getDish(dishId);
  }

  this.populate = function(model, args) {
    if(!_.has(args, "dish")) {
      return;
    }
    var dish = args.dish;
    this.navView.setTitle(dish.name);
    this.navView.showBackButton("#selectDish/appetizer");

    this.navView.setButtonRight("Select");
    this.navView.buttonRight.unbind("click");
    this.navView.buttonRight.click(function(e) {
      e.preventDefault();
      model.addDishToMenu(dish.id);
      window.location.hash = "#create";
    });
  }

  var _this = this;
  this.update = function(model, args) {
    _this.populate(model, args);
  }
  model.addObserver(this.update);
}


