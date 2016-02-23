//SelectDishController Object constructor
var SelectDishController = function (view, navView, model) {
	this.view = view;
	this.navView = navView;

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