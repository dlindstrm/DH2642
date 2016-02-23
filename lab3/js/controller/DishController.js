//DishController Object constructor
var DishController = function (view, navView, model) {
  this.navView = navView;
  this.view = view;

  view.selectButton.click(function(e) {
    e.preventDefault();
    console.log("heeej");
    model.addDishToMenu(view.id);
    window.location.hash = "#create";
  });

  this.init = function(dishId) {
	$('#dishView').css('display', 'block');
    $('#toolbarView').css('display', 'block');
	this.view.populateView(dishId);
	this.navView.setTitle(model.getDish(dishId).name);
    this.navView.showBackButton("#selectDish/starters");
    this.navView.hideButtonRight();
  }
}


