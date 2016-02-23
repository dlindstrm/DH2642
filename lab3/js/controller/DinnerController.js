//DinnerController Object constructor
var DinnerController = function (view, navView, model) {
  this.navView = navView;

  this.init = function(dinnerId) {
	$('#dinnerView').css('display', 'block');
	dinnerView.setModel(_.find(dinners, function(dinner){ return dinner.id == dinnerId; }));
    this.navView.hideButtonRight();
    this.navView.showBackButton('#');
  }
}


