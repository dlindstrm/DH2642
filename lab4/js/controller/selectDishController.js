//SelectDishController Object constructor
var SelectDishController = function (view, navView, model) {
	this.view = view;
	this.navView = navView;
  var _this = this;
  this.view.search.on("change", function() {
    var filter = $(this).val();
    _this.view.loadingScreen.css("display", "block");
    model.getAllDishes(_this.view.activeTab, filter);
  });

  /*this.view.container.find(".tab-link").on("click", function(e) {
    e.preventDefault();
    _this.view.container.find(".button-fill").removeClass("button-fill");
    $(this).addClass("button-fill");
    window.location.href = $(this).attr("href");
  })*/

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