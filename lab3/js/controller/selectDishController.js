//SelectDishController Object constructor
var SelectDishController = function (view, navView, model) {
	this.view = view;
	this.navView = navView;
  var _this = this;
  this.view.search.on("keydown", function() {
    var filter = $(this).val();
    var starters = model.getAllDishes("starter", filter);
    var mains = model.getAllDishes("main dish", filter);
    var desserts = model.getAllDishes("dessert", filter);
    _this.view.createTabs(starters, mains, desserts);
  });
  this.init = function(type){
  	$('#selectDishView').css('display', 'block');
    $('#toolbarView').css('display', 'block');
    this.view.showTab(type);
    this.navView.setTitle('Select dish');
    this.navView.buttonLeft.unbind("click");
    this.navView.showBackButton('#create');
    this.navView.hideButtonRight();
  }
}